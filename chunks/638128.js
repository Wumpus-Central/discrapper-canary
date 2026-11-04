var l = n(377941),
    r = n.n(l),
    i = n(855986),
    a = n(506774),
    u = n(73153),
    o = n(449275),
    s = n(334604);
let c = "SpellcheckStore",
    f = !0,
    p = new Set();
function d() {
    a.w.set(c, { enabled: f, learnedWords: p });
}
class h extends i.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
        let e = a.w.get(c);
        (null != e && ((f = e.enabled), (p = new Set(e.learnedWords)), (0, s.kv)(f), (0, s.d1)(p)), (0, o.I)(s.Av));
    }
    isEnabled() {
        return f;
    }
    hasLearnedWord(e) {
        return p.has(e.toLocaleLowerCase());
    }
    findLearnedWordIn(e) {
        if ("" === e || 0 === p.size) return null;
        let t = e.toLocaleLowerCase();
        for (let e of p) if (RegExp(`(?<![\\p{L}\\p{N}_])${r()(e)}(?![\\p{L}\\p{N}_])`, "u").test(t)) return e;
        return null;
    }
}
let m = new h(u.h, {
    SPELLCHECK_TOGGLE() {
        ((f = !f), (0, s.kv)(f), d());
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        (p.add(t.toLocaleLowerCase()), (0, s.d1)(p), d());
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        (p.delete(t.toLocaleLowerCase()), (0, s.d1)(p), d());
    },
});
n.d(t, {}, { A: m });
