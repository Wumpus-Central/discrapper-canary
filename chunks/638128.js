"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(506774),
    a = n(73153),
    s = n(11057),
    o = n(454235);
let l = "SpellcheckStore",
    u = !0,
    c = new Set();
function d() {
    i.w.set(l, { enabled: u, learnedWords: c });
}
class _ extends r.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
        let e = i.w.get(l);
        null != e && ((u = e.enabled), (c = new Set(e.learnedWords)), (0, o.kv)(u), (0, o.d1)(c)), (0, s.I)(o.Av);
    }
    isEnabled() {
        return u;
    }
    hasLearnedWord(e) {
        return c.has(e.toLocaleLowerCase());
    }
}
let f = new _(a.h, {
    SPELLCHECK_TOGGLE() {
        (u = !u), (0, o.kv)(u), d();
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        c.add(t.toLocaleLowerCase()), (0, o.d1)(c), d();
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        c.delete(t.toLocaleLowerCase()), (0, o.d1)(c), d();
    },
});
