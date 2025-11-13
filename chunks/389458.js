n.d(t, { Z: () => D }), n(388685), n(704826), n(35282), n(642613), n(368063);
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
let u = 5,
    d = 250,
    f = 0.001,
    _ = 0.01,
    p = 10,
    h = o.t.createEstimate(f, _),
    m = new Map(),
    g = 0;
function E(e) {
    return e.replace(/[^\w\s]|\b\d+\b/g, "");
}
function b(e) {
    return E(e)
        .replace(
            /(https?:\/\/[^\s]+|ftp:\/\/[^\s]+|www\.[^\s]+|[^\s]*\.[a-z]{2,}\/[^\s]*|[^\s]*\.(?:com|org|net)[^\s]*|<a?:(\w+):(\d+)>|<@(?:!|&)?\d+>)/g,
            "",
        )
        .split(/\s+/);
}
function y(e) {
    return Array.from(e.entries()).sort((e, t) => t[1] - e[1]);
}
function O(e, t) {
    if (e.size <= t) return;
    let n = y(e);
    e.clear();
    for (let r = 0; r < t; r++) {
        let [t, i] = n[r];
        e.set(t, i);
    }
}
function v() {
    let e = 1000,
        t = 5000,
        n = 0.05;
    return g < 1000 || Math.random() < (1 - n) * Math.max(0, 1 - (g - e) / (t - e)) + n;
}
function I(e) {
    let t = !1;
    for (let n of e)
        if (v())
            for (let e of b(n.content.toLowerCase())) {
                if (0 === e.length || e.length > u) continue;
                h.update(e);
                let n = h.query(e);
                m.set(e, n), n > g && (g = n), (t = !0);
            }
    O(m, d), t && P.emitChange();
}
function T() {
    let e = l.V.getCurrentConfig({ location: "WordFrequencyStore" }, { autoTrackExposure: !0 }).enabled,
        t = (0, s.kB)("WordFrequencyStore", { autoTrackExposure: !1 }).enabled;
    return e || t;
}
function S(e) {
    return (
        !!T() &&
        (requestIdleCallback(() => {
            I(e);
        }),
        !1)
    );
}
let A = (e) => {
        let { messages: t } = e;
        return S(t);
    },
    C = (e) => {
        let { message: t } = e;
        return S([t]);
    },
    N = (e) => {
        (h = o.t.createEstimate(f, _)), m.clear(), (g = 0);
    };
class R extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t;
            if (e.wordSketchData)
                try {
                    e.wordSketchData && (h = o.t.fromJSON(e.wordSketchData));
                } catch (e) {
                    h = o.t.createEstimate(f, _);
                }
            m = new Map(null != (t = e.wordCounts) ? t : []);
        }
        let n = y(m);
        if (n.length > 0) {
            let [, e] = n[0];
            g = e;
        }
    }
    getState() {
        return {
            wordCounts: y(m),
            wordSketchData: h.toJSON(),
        };
    }
    getMaxWordCount() {
        return g;
    }
    getAllWordsSorted() {
        return y(m);
    }
    isFrequentlyUsedWord(e) {
        let t = m.get(e.toLowerCase());
        return null != t && t > p;
    }
}
c(R, "displayName", "WordFrequencyStore"), c(R, "persistKey", "WordFrequencyStore");
let P = new R(a.Z, {
        LOAD_MESSAGES_SUCCESS: A,
        MESSAGE_CREATE: C,
        DEV_TOOLS_WORD_FREQUENCY_RESET: N,
    }),
    D = P;
