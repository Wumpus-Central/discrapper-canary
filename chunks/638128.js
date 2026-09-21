n.d(t, { A: () => C });
var r = n(377941),
    l = n.n(r),
    u = n(17928),
    a = n(506774),
    i = n(228366),
    s = n(724066),
    c = n(900582);
let o = "SpellcheckStore",
    d = !0,
    f = new Set();
function h() {
    a.w.set(o, { enabled: d, learnedWords: f });
}
class p extends u.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
        let e = a.w.get(o);
        (null != e && ((d = e.enabled), (f = new Set(e.learnedWords)), (0, c.kv)(d), (0, c.d1)(f)), (0, s.I)(c.Av));
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
        for (let e of f) if (RegExp(`(?<![\\p{L}\\p{N}_])${l()(e)}(?![\\p{L}\\p{N}_])`, "u").test(t)) return e;
        return null;
    }
}
let C = new p(i.h, {
    SPELLCHECK_TOGGLE() {
        ((d = !d), (0, c.kv)(d), h());
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        (f.add(t.toLocaleLowerCase()), (0, c.d1)(f), h());
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        (f.delete(t.toLocaleLowerCase()), (0, c.d1)(f), h());
    },
});
