"use strict";
let r;
n.d(t, { A: () => L });
var i = n(311907),
    a = n(73153),
    s = n(49463),
    o = n(215619),
    l = n(968011),
    u = n(369487);
let c = 5,
    d = 250,
    _ = 0.001,
    f = 0.01,
    p = 10,
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
function A(e) {
    return Array.from(e.entries()).sort((e, t) => t[1] - e[1]);
}
function I(e, t) {
    if (e.size <= t) return;
    let n = A(e);
    e.clear();
    for (let r = 0; r < t; r++) {
        let [t, i] = n[r];
        e.set(t, i);
    }
}
function T() {
    let e = 1e3,
        t = 5e3,
        n = 0.05;
    return m < 1e3 || Math.random() < (1 - n) * Math.max(0, 1 - (m - e) / (t - e)) + n;
}
function y(e) {
    null == r && (r = o.M.createEstimate(_, f));
    let t = !1;
    for (let n of e)
        if (T())
            for (let e of E(n.content.toLowerCase())) {
                if (0 === e.length || e.length > c) continue;
                r.update(e);
                let n = r.query(e);
                h.set(e, n), n > m && (m = n), (t = !0);
            }
    I(h, d), t && D.emitChange();
}
function S() {
    let e = u.R.getCurrentConfig({ location: "WordFrequencyStore" }, { autoTrackExposure: !0 }).enabled,
        t = (0, l.sA)("WordFrequencyStore", { autoTrackExposure: !1 }).enabled;
    return e || t;
}
function v() {
    return (
        !!s.A.hasLoadedExperiments &&
        u.R.getCurrentConfig({ location: "WordFrequencyStore" }, { autoTrackExposure: !1 }).resetDataIfUnused
    );
}
let C = () => {
    (r = void 0), h.clear(), (m = 0);
};
function b(e) {
    return S()
        ? (requestIdleCallback(() => {
              y(e);
          }),
          !1)
        : !!v() && h.size > 0 && (C(), !0);
}
let N = (e) => {
        let { messages: t } = e;
        return b(t);
    },
    R = (e) => {
        let { message: t } = e;
        return b([t]);
    };
class O extends i.Ay.PersistedStore {
    static displayName = "WordFrequencyStore";
    static persistKey = "WordFrequencyStore";
    initialize(e) {
        if ((this.waitFor(s.A), null != e)) {
            if (e.wordSketchData)
                try {
                    e.wordSketchData && (r = o.M.fromJSON(e.wordSketchData));
                } catch (e) {
                    r = void 0;
                }
            h = new Map(e.wordCounts ?? []);
        }
        let t = A(h);
        if (t.length > 0) {
            let [e, n] = t[0];
            m = n;
        }
    }
    getState() {
        return { wordCounts: A(h), wordSketchData: r?.toJSON() };
    }
    getMaxWordCount() {
        return m;
    }
    getAllWordsSorted() {
        return A(h);
    }
    isFrequentlyUsedWord(e) {
        let t = h.get(e.toLowerCase());
        return null != t && t > p;
    }
}
let D = new O(a.h, { LOAD_MESSAGES_SUCCESS: N, MESSAGE_CREATE: R, DEV_TOOLS_WORD_FREQUENCY_RESET: C }),
    L = D;
