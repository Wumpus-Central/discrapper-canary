l.d(t, { A: () => E });
var n = l(17928),
    r = l(506774),
    a = l(228366),
    s = l(724066),
    i = l(454235);
let c = "SpellcheckStore",
    o = !0,
    d = new Set();
function u() {
    r.w.set(c, { enabled: o, learnedWords: d });
}
class L extends n.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
        let e = r.w.get(c);
        null != e && ((o = e.enabled), (d = new Set(e.learnedWords)), (0, i.kv)(o), (0, i.d1)(d)), (0, s.I)(i.Av);
    }
    isEnabled() {
        return o;
    }
    hasLearnedWord(e) {
        return d.has(e.toLocaleLowerCase());
    }
}
let E = new L(a.h, {
    SPELLCHECK_TOGGLE() {
        (o = !o), (0, i.kv)(o), u();
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        d.add(t.toLocaleLowerCase()), (0, i.d1)(d), u();
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        d.delete(t.toLocaleLowerCase()), (0, i.d1)(d), u();
    },
});
