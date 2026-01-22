let r;
n.d(t, { A: () => x }), n(896048), n(747238), n(812715), n(638769);
var i,
    a = n(311907),
    s = n(73153),
    o = n(49463),
    l = n(215619),
    c = n(968011),
    u = n(369487);
function d(e, t, n) {
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
let f = 5,
    p = 250,
    _ = 0.001,
    h = 0.01,
    m = 10,
    g = new Map(),
    E = 0;
function b(e) {
    return e.replace(/[^\w\s]|\b\d+\b/g, "");
}
function y(e) {
    return b(e)
        .replace(
            /(https?:\/\/[^\s]+|ftp:\/\/[^\s]+|www\.[^\s]+|[^\s]*\.[a-z]{2,}\/[^\s]*|[^\s]*\.(?:com|org|net)[^\s]*|<a?:(\w+):(\d+)>|<@(?:!|&)?\d+>)/g,
            "",
        )
        .split(/\s+/);
}
function O(e) {
    return Array.from(e.entries()).sort((e, t) => t[1] - e[1]);
}
function A(e, t) {
    if (e.size <= t) return;
    let n = O(e);
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
    return E < 1000 || Math.random() < (1 - n) * Math.max(0, 1 - (E - e) / (t - e)) + n;
}
function S(e) {
    null == r && (r = l.M.createEstimate(_, h));
    let t = !1;
    for (let n of e)
        if (v())
            for (let e of y(n.content.toLowerCase())) {
                if (0 === e.length || e.length > f) continue;
                r.update(e);
                let n = r.query(e);
                g.set(e, n), n > E && (E = n), (t = !0);
            }
    A(g, p), t && D.emitChange();
}
function I() {
    let e = u.R.getCurrentConfig({ location: "WordFrequencyStore" }, { autoTrackExposure: !0 }).enabled,
        t = (0, c.sA)("WordFrequencyStore", { autoTrackExposure: !1 }).enabled;
    return e || t;
}
function T() {
    return (
        !!o.A.hasLoadedExperiments &&
        u.R.getCurrentConfig({ location: "WordFrequencyStore" }, { autoTrackExposure: !1 }).resetDataIfUnused
    );
}
let C = () => {
    (r = void 0), g.clear(), (E = 0);
};
function N(e) {
    return I()
        ? (requestIdleCallback(() => {
              S(e);
          }),
          !1)
        : !!T() && g.size > 0 && (C(), !0);
}
let R = (e) => {
        let { messages: t } = e;
        return N(t);
    },
    w = (e) => {
        let { message: t } = e;
        return N([t]);
    };
class P extends (i = a.Ay.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(o.A), null != e)) {
            var t;
            if (e.wordSketchData)
                try {
                    e.wordSketchData && (r = l.M.fromJSON(e.wordSketchData));
                } catch (e) {
                    r = void 0;
                }
            g = new Map(null != (t = e.wordCounts) ? t : []);
        }
        let n = O(g);
        if (n.length > 0) {
            let [e, t] = n[0];
            E = t;
        }
    }
    getState() {
        return {
            wordCounts: O(g),
            wordSketchData: null == r ? void 0 : r.toJSON(),
        };
    }
    getMaxWordCount() {
        return E;
    }
    getAllWordsSorted() {
        return O(g);
    }
    isFrequentlyUsedWord(e) {
        let t = g.get(e.toLowerCase());
        return null != t && t > m;
    }
}
d(P, "displayName", "WordFrequencyStore"), d(P, "persistKey", "WordFrequencyStore");
let D = new P(s.h, {
        LOAD_MESSAGES_SUCCESS: R,
        MESSAGE_CREATE: w,
        DEV_TOOLS_WORD_FREQUENCY_RESET: C,
    }),
    x = D;
