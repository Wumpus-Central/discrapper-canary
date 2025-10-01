n.d(t, { Z: () => R }), n(388685), n(704826), n(35282), n(642613), n(368063);
var r,
    i = n(442837),
    a = n(570140),
    o = n(449908),
    s = n(657871);
function l(e, t, n) {
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
let c = 250,
    u = 0.001,
    d = 0.01,
    f = 10,
    _ = o.t.createEstimate(u, d),
    p = new Map(),
    h = 0;
function m(e) {
    return e.replace(/[^\w\s]|\b\d+\b/g, "");
}
function g(e) {
    return m(e)
        .replace(
            /(https?:\/\/[^\s]+|ftp:\/\/[^\s]+|www\.[^\s]+|[^\s]*\.[a-z]{2,}\/[^\s]*|[^\s]*\.(?:com|org|net)[^\s]*|<a?:(\w+):(\d+)>|<@(?:!|&)?\d+>)/g,
            "",
        )
        .split(/\s+/);
}
function E(e) {
    return Array.from(e.entries()).sort((e, t) => t[1] - e[1]);
}
function b(e, t) {
    if (e.size <= t) return;
    let n = E(e);
    e.clear();
    for (let r = 0; r < t; r++) {
        let [t, i] = n[r];
        e.set(t, i);
    }
}
function y() {
    let e = 1000,
        t = 5000,
        n = 0.05;
    return h < 1000 || Math.random() < (1 - n) * Math.max(0, 1 - (h - e) / (t - e)) + n;
}
function O(e) {
    let t = !1;
    for (let n of e)
        if (y())
            for (let e of g(n.content.toLowerCase())) {
                if (0 === e.length || e.length > 5) continue;
                _.update(e);
                let n = _.query(e);
                p.set(e, n), n > h && (h = n), (t = !0);
            }
    b(p, c), t && N.emitChange();
}
function v() {
    return (0, s.kB)("WordFrequencyStore", { autoTrackExposure: !1 }).enabled;
}
function I(e) {
    return (
        !!v() &&
        (requestIdleCallback(() => {
            O(e);
        }),
        !1)
    );
}
let T = (e) => {
        let { messages: t } = e;
        return I(t);
    },
    S = (e) => {
        let { message: t } = e;
        return I([t]);
    },
    A = (e) => {
        (_ = o.t.createEstimate(u, d)), p.clear(), (h = 0);
    };
class C extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t;
            if (e.wordSketchData)
                try {
                    e.wordSketchData && (_ = o.t.fromJSON(e.wordSketchData));
                } catch (e) {
                    _ = o.t.createEstimate(u, d);
                }
            p = new Map(null != (t = e.wordCounts) ? t : []);
        }
        let n = E(p);
        if (n.length > 0) {
            let [, e] = n[0];
            h = e;
        }
    }
    getState() {
        return {
            wordCounts: E(p),
            wordSketchData: _.toJSON(),
        };
    }
    getAllWordsSorted() {
        return E(p);
    }
    isFrequentlyUsedWord(e) {
        let t = p.get(e.toLowerCase());
        return null != t && t > f;
    }
}
l(C, "displayName", "WordFrequencyStore"), l(C, "persistKey", "WordFrequencyStore");
let N = new C(a.Z, {
        LOAD_MESSAGES_SUCCESS: T,
        MESSAGE_CREATE: S,
        DEV_TOOLS_WORD_FREQUENCY_RESET: A,
    }),
    R = N;
