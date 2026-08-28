n.d(t, { A: () => p });
var l = n(377941),
    r = n.n(l),
    i = n(17928),
    s = n(506774),
    a = n(228366),
    u = n(724066),
    o = n(900582);
let c = "SpellcheckStore",
    d = !0,
    f = new Set();
function h() {
    s.w.set(c, { enabled: d, learnedWords: f });
}
class m extends i.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
        let e = s.w.get(c);
        null != e && ((d = e.enabled), (f = new Set(e.learnedWords)), (0, o.kv)(d), (0, o.d1)(f)), (0, u.I)(o.Av);
    }
    isEnabled() {
        return d;
    }
    hasLearnedWord(e) {
        return f.has(e.toLocaleLowerCase());
    }
    findLearnedWordIn(e) {
        if ("" === e || 0 === f.size) return null;
        let t = e.toLocaleLowerCase();
        for (let e of f) if (RegExp(`(?<![\\p{L}\\p{N}_])${r()(e)}(?![\\p{L}\\p{N}_])`, "u").test(t)) return e;
        return null;
    }
}
let p = new m(a.h, {
    SPELLCHECK_TOGGLE() {
        (d = !d), (0, o.kv)(d), h();
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        f.add(t.toLocaleLowerCase()), (0, o.d1)(f), h();
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        f.delete(t.toLocaleLowerCase()), (0, o.d1)(f), h();
    },
});
