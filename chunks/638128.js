"use strict";
n.d(t, { A: () => m });
var l = n(17928),
    i = n(506774),
    s = n(228366),
    a = n(724066),
    r = n(454235);
let o = "SpellcheckStore",
    c = !0,
    u = new Set();
function d() {
    i.w.set(o, { enabled: c, learnedWords: u });
}
class h extends l.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
        let e = i.w.get(o);
        null != e && ((c = e.enabled), (u = new Set(e.learnedWords)), (0, r.kv)(c), (0, r.d1)(u)), (0, a.I)(r.Av);
    }
    isEnabled() {
        return c;
    }
    hasLearnedWord(e) {
        return u.has(e.toLocaleLowerCase());
    }
}
let m = new h(s.h, {
    SPELLCHECK_TOGGLE() {
        (c = !c), (0, r.kv)(c), d();
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        u.add(t.toLocaleLowerCase()), (0, r.d1)(u), d();
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        u.delete(t.toLocaleLowerCase()), (0, r.d1)(u), d();
    },
});
