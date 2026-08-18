"use strict";
n.d(t, { A: () => p });
var l = n(377941),
    i = n.n(l),
    s = n(17928),
    r = n(506774),
    a = n(228366),
    o = n(724066),
    u = n(900582);
let c = "SpellcheckStore",
    d = !0,
    h = new Set();
function m() {
    r.w.set(c, { enabled: d, learnedWords: h });
}
class f extends s.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
        let e = r.w.get(c);
        null != e && ((d = e.enabled), (h = new Set(e.learnedWords)), (0, u.kv)(d), (0, u.d1)(h)), (0, o.I)(u.Av);
    }
    isEnabled() {
        return d;
    }
    hasLearnedWord(e) {
        return h.has(e.toLocaleLowerCase());
    }
    findLearnedWordIn(e) {
        if ("" === e || 0 === h.size) return null;
        let t = e.toLocaleLowerCase();
        for (let e of h) if (RegExp(`(?<![\\p{L}\\p{N}_])${i()(e)}(?![\\p{L}\\p{N}_])`, "u").test(t)) return e;
        return null;
    }
}
let p = new f(a.h, {
    SPELLCHECK_TOGGLE() {
        (d = !d), (0, u.kv)(d), m();
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        h.add(t.toLocaleLowerCase()), (0, u.d1)(h), m();
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        h.delete(t.toLocaleLowerCase()), (0, u.d1)(h), m();
    },
});
