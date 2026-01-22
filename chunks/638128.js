n.d(t, {
    A: () => h,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(11057),
    l = n(454235);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = "SpellcheckStore",
    d = !0,
    f = new Set();

function p() {
    a.w.set(u, {
        enabled: d,
        learnedWords: f,
    });
}
class _ extends (r = i.Ay.Store) {
    initialize() {
        let e = a.w.get(u);
        null != e && ((d = e.enabled), (f = new Set(e.learnedWords)), (0, l.kv)(d), (0, l.d1)(f)), (0, o.I)(l.Av);
    }
    isEnabled() {
        return d;
    }
    hasLearnedWord(e) {
        return f.has(e.toLocaleLowerCase());
    }
}
c(_, "displayName", "SpellcheckStore");
let h = new _(s.h, {
    SPELLCHECK_TOGGLE() {
        (d = !d), (0, l.kv)(d), p();
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        f.add(t.toLocaleLowerCase()), (0, l.d1)(f), p();
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        f.delete(t.toLocaleLowerCase()), (0, l.d1)(f), p();
    },
});
