let r;
n.d(t, { Z: () => x }), n(388685), n(704826), n(35282), n(642613), n(368063);
var i,
    a = n(442837),
    o = n(570140),
    s = n(353926),
    l = n(449908),
    c = n(657871),
    u = n(240458);
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
    m = 0.01,
    h = 10,
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
function v(e, t) {
    if (e.size <= t) return;
    let n = O(e);
    e.clear();
    for (let r = 0; r < t; r++) {
        let [t, i] = n[r];
        e.set(t, i);
    }
}
function S() {
    let e = 1000,
        t = 5000,
        n = 0.05;
    return E < 1000 || Math.random() < (1 - n) * Math.max(0, 1 - (E - e) / (t - e)) + n;
}
function I(e) {
    null == r && (r = l.t.createEstimate(_, m));
    let t = !1;
    for (let n of e)
        if (S())
            for (let e of y(n.content.toLowerCase())) {
                if (0 === e.length || e.length > f) continue;
                r.update(e);
                let n = r.query(e);
                g.set(e, n), n > E && (E = n), (t = !0);
            }
    v(g, p), t && D.emitChange();
}
function T() {
    let e = u.V.getCurrentConfig({ location: "WordFrequencyStore" }, { autoTrackExposure: !0 }).enabled,
        t = (0, c.kB)("WordFrequencyStore", { autoTrackExposure: !1 }).enabled;
    return e || t;
}
function A() {
    return (
        !!s.Z.hasLoadedExperiments &&
        u.V.getCurrentConfig({ location: "WordFrequencyStore" }, { autoTrackExposure: !1 }).resetDataIfUnused
    );
}
let C = () => {
    (r = void 0), g.clear(), (E = 0);
};
function N(e) {
    return T()
        ? (requestIdleCallback(() => {
              I(e);
          }),
          !1)
        : !!A() && g.size > 0 && (C(), !0);
}
let P = (e) => {
        let { messages: t } = e;
        return N(t);
    },
    R = (e) => {
        let { message: t } = e;
        return N([t]);
    };
class w extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(s.Z), null != e)) {
            var t;
            if (e.wordSketchData)
                try {
                    e.wordSketchData && (r = l.t.fromJSON(e.wordSketchData));
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
        return null != t && t > h;
    }
}
d(w, "displayName", "WordFrequencyStore"), d(w, "persistKey", "WordFrequencyStore");
let D = new w(o.Z, {
        LOAD_MESSAGES_SUCCESS: P,
        MESSAGE_CREATE: R,
        DEV_TOOLS_WORD_FREQUENCY_RESET: C,
    }),
    x = D;
