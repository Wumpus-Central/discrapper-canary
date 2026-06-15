l.d(t, { A: () => w });
var r = l(418781),
    a = l.n(r),
    n = l(17928),
    o = l(506774),
    s = l(228366),
    d = l(724066),
    L = l(916260);
let i = "SpellcheckStore",
    c = !0,
    p = new Set();
function u() {
    o.w.set(i, { enabled: c, learnedWords: p });
}
class C extends n.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
        let e = o.w.get(i);
        null != e && ((c = e.enabled), (p = new Set(e.learnedWords)), (0, L.kv)(c), (0, L.d1)(p)), (0, d.I)(L.Av);
    }
    isEnabled() {
        return c;
    }
    hasLearnedWord(e) {
        return p.has(e.toLocaleLowerCase());
    }
    findLearnedWordIn(e) {
        if ("" === e || 0 === p.size) return null;
        let t = e.toLocaleLowerCase();
        for (let e of p) if (RegExp(`(?<![\\p{L}\\p{N}_])${a()(e)}(?![\\p{L}\\p{N}_])`, "u").test(t)) return e;
        return null;
    }
}
let w = new C(s.h, {
    SPELLCHECK_TOGGLE() {
        (c = !c), (0, L.kv)(c), u();
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        p.add(t.toLocaleLowerCase()), (0, L.d1)(p), u();
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        p.delete(t.toLocaleLowerCase()), (0, L.d1)(p), u();
    },
});
