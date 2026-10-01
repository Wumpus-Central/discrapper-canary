n.d(t, { A: () => m });
var l = n(377941),
    r = n.n(l),
    i = n(17928),
    a = n(506774),
    u = n(73153),
    o = n(724066),
    s = n(900582);
let c = "SpellcheckStore",
    f = !0,
    d = new Set();
function p() {
    a.w.set(c, { enabled: f, learnedWords: d });
}
class h extends i.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
        let e = a.w.get(c);
        (null != e && ((f = e.enabled), (d = new Set(e.learnedWords)), (0, s.kv)(f), (0, s.d1)(d)), (0, o.I)(s.Av));
    }
    isEnabled() {
        return f;
    }
    hasLearnedWord(e) {
        return d.has(e.toLocaleLowerCase());
    }
    findLearnedWordIn(e) {
        if ("" === e || 0 === d.size) return null;
        let t = e.toLocaleLowerCase();
        for (let e of d) if (RegExp(`(?<![\\p{L}\\p{N}_])${r()(e)}(?![\\p{L}\\p{N}_])`, "u").test(t)) return e;
        return null;
    }
}
let m = new h(u.h, {
    SPELLCHECK_TOGGLE() {
        ((f = !f), (0, s.kv)(f), p());
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        (d.add(t.toLocaleLowerCase()), (0, s.d1)(d), p());
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        (d.delete(t.toLocaleLowerCase()), (0, s.d1)(d), p());
    },
});
