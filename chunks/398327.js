n.d(t, { Z: () => h }), n(47120);
var r,
    i = n(442837),
    o = n(433517),
    a = n(570140),
    s = n(241601),
    l = n(601993);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = 'SpellcheckStore',
    d = !0,
    f = new Set();
function _() {
    o.K.set(u, {
        enabled: d,
        learnedWords: f
    });
}
class p extends (r = i.ZP.Store) {
    initialize() {
        let e = o.K.get(u);
        null != e && ((d = e.enabled), (f = new Set(e.learnedWords)), (0, l.gL)(d), (0, l.fG)(f)), (0, s.Ql)(l._2);
    }
    isEnabled() {
        return d;
    }
    hasLearnedWord(e) {
        return f.has(e.toLocaleLowerCase());
    }
}
c(p, 'displayName', 'SpellcheckStore');
let h = new p(a.Z, {
    SPELLCHECK_TOGGLE() {
        (d = !d), (0, l.gL)(d), _();
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        f.add(t.toLocaleLowerCase()), (0, l.fG)(f), _();
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        f.delete(t.toLocaleLowerCase()), (0, l.fG)(f), _();
    }
});
