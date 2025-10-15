n.d(t, { Z: () => P }), n(388685), n(704826), n(35282), n(642613), n(368063);
var r,
    i = n(442837),
    a = n(570140),
    o = n(449908),
    s = n(657871),
    l = n(240458);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = 250,
    d = 0.001,
    f = 0.01,
    _ = 10,
    p = o.t.createEstimate(d, f),
    h = new Map(),
    m = 0;
function g(e) {
    return e.replace(/[^\w\s]|\b\d+\b/g, "");
}
function E(e) {
    return g(e)
        .replace(
            /(https?:\/\/[^\s]+|ftp:\/\/[^\s]+|www\.[^\s]+|[^\s]*\.[a-z]{2,}\/[^\s]*|[^\s]*\.(?:com|org|net)[^\s]*|<a?:(\w+):(\d+)>|<@(?:!|&)?\d+>)/g,
            "",
        )
        .split(/\s+/);
}
function b(e) {
    return Array.from(e.entries()).sort((e, t) => t[1] - e[1]);
}
function y(e, t) {
    if (e.size <= t) return;
    let n = b(e);
    e.clear();
    for (let r = 0; r < t; r++) {
        let [t, i] = n[r];
        e.set(t, i);
    }
}
function O() {
    let e = 1000,
        t = 5000,
        n = 0.05;
    return m < 1000 || Math.random() < (1 - n) * Math.max(0, 1 - (m - e) / (t - e)) + n;
}
function v(e) {
    let t = !1;
    for (let n of e)
        if (O())
            for (let e of E(n.content.toLowerCase())) {
                if (0 === e.length || e.length > 5) continue;
                p.update(e);
                let n = p.query(e);
                h.set(e, n), n > m && (m = n), (t = !0);
            }
    y(h, u), t && R.emitChange();
}
function I() {
    let e = l.V.getCurrentConfig({ location: "WordFrequencyStore" }, { autoTrackExposure: !1 }).enabled,
        t = (0, s.kB)("WordFrequencyStore", { autoTrackExposure: !1 }).enabled;
    return e || t;
}
function T(e) {
    return (
        !!I() &&
        (requestIdleCallback(() => {
            v(e);
        }),
        !1)
    );
}
let S = (e) => {
        let { messages: t } = e;
        return T(t);
    },
    A = (e) => {
        let { message: t } = e;
        return T([t]);
    },
    C = (e) => {
        (p = o.t.createEstimate(d, f)), h.clear(), (m = 0);
    };
class N extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t;
            if (e.wordSketchData)
                try {
                    e.wordSketchData && (p = o.t.fromJSON(e.wordSketchData));
                } catch (e) {
                    p = o.t.createEstimate(d, f);
                }
            h = new Map(null != (t = e.wordCounts) ? t : []);
        }
        let n = b(h);
        if (n.length > 0) {
            let [, e] = n[0];
            m = e;
        }
    }
    getState() {
        return {
            wordCounts: b(h),
            wordSketchData: p.toJSON(),
        };
    }
    getMaxWordCount() {
        return m;
    }
    getAllWordsSorted() {
        return b(h);
    }
    isFrequentlyUsedWord(e) {
        let t = h.get(e.toLowerCase());
        return null != t && t > _;
    }
}
c(N, "displayName", "WordFrequencyStore"), c(N, "persistKey", "WordFrequencyStore");
let R = new N(a.Z, {
        LOAD_MESSAGES_SUCCESS: S,
        MESSAGE_CREATE: A,
        DEV_TOOLS_WORD_FREQUENCY_RESET: C,
    }),
    P = R;
