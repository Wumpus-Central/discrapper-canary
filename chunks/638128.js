"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(506774),
    s = n(228366),
    a = n(724066),
    o = n(454235);
let l = "SpellcheckStore",
    d = !0,
    _ = new Set();
function u() {
    r.w.set(l, { enabled: d, learnedWords: _ });
}
class c extends i.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
        let e = r.w.get(l);
        null != e && ((d = e.enabled), (_ = new Set(e.learnedWords)), (0, o.kv)(d), (0, o.d1)(_)), (0, a.I)(o.Av);
    }
    isEnabled() {
        return d;
    }
    hasLearnedWord(e) {
        return _.has(e.toLocaleLowerCase());
    }
}
let E = new c(s.h, {
    SPELLCHECK_TOGGLE() {
        (d = !d), (0, o.kv)(d), u();
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        _.add(t.toLocaleLowerCase()), (0, o.d1)(_), u();
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        _.delete(t.toLocaleLowerCase()), (0, o.d1)(_), u();
    },
});
