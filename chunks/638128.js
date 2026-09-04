n.d(t, { A: () => p });
var l = n(377941),
    r = n.n(l),
    i = n(17928),
    a = n(506774),
    s = n(228366),
    o = n(724066),
    u = n(900582);
let c = "SpellcheckStore",
    d = !0,
    f = new Set();
function h() {
    a.w.set(c, { enabled: d, learnedWords: f });
}
class m extends i.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
        let e = a.w.get(c);
        null != e && ((d = e.enabled), (f = new Set(e.learnedWords)), (0, u.kv)(d), (0, u.d1)(f)), (0, o.I)(u.Av);
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
let p = new m(s.h, {
    SPELLCHECK_TOGGLE() {
        (d = !d), (0, u.kv)(d), h();
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        f.add(t.toLocaleLowerCase()), (0, u.d1)(f), h();
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        f.delete(t.toLocaleLowerCase()), (0, u.d1)(f), h();
    },
});
