"use strict";
n.d(t, { A: () => f });
var i = n(17928),
    r = n(506774),
    s = n(228366),
    a = n(724066),
    o = n(916260);
let l = "SpellcheckStore",
    u = !0,
    c = new Set();
function d() {
    r.w.set(l, { enabled: u, learnedWords: c });
}
class _ extends i.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
        let e = r.w.get(l);
        null != e && ((u = e.enabled), (c = new Set(e.learnedWords)), (0, o.kv)(u), (0, o.d1)(c)), (0, a.I)(o.Av);
    }
    isEnabled() {
        return u;
    }
    hasLearnedWord(e) {
        return c.has(e.toLocaleLowerCase());
    }
}
let f = new _(s.h, {
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
