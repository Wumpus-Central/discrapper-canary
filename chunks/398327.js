n.d(t, { Z: () => h }), n(47120);
var i,
    r = n(442837),
    a = n(433517),
    s = n(570140),
    o = n(241601),
    l = n(601993);
function u(e, t, n) {
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
let c = 'SpellcheckStore',
    d = !0,
    f = new Set();
function _() {
    a.K.set(c, {
        enabled: d,
        learnedWords: f
    });
}
class p extends (i = r.ZP.Store) {
    initialize() {
        let e = a.K.get(c);
        null != e && ((d = e.enabled), (f = new Set(e.learnedWords)), (0, l.gL)(d), (0, l.fG)(f)), (0, o.Ql)(l._2);
    }
    isEnabled() {
        return d;
    }
    hasLearnedWord(e) {
        return f.has(e.toLocaleLowerCase());
    }
}
u(p, 'displayName', 'SpellcheckStore');
let h = new p(s.Z, {
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
