(n.d(t, { Z: () => h }), n(388685));
var r,
    i = n(442837),
    a = n(433517),
    o = n(570140),
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
    _ = new Set();
function f() {
    a.K.set(u, {
        enabled: d,
        learnedWords: _
    });
}
class p extends (r = i.ZP.Store) {
    initialize() {
        let e = a.K.get(u);
        (null != e && ((d = e.enabled), (_ = new Set(e.learnedWords)), (0, l.gL)(d), (0, l.fG)(_)), (0, s.Ql)(l._2));
    }
    isEnabled() {
        return d;
    }
    hasLearnedWord(e) {
        return _.has(e.toLocaleLowerCase());
    }
}
c(p, 'displayName', 'SpellcheckStore');
let h = new p(o.Z, {
    SPELLCHECK_TOGGLE() {
        ((d = !d), (0, l.gL)(d), f());
    },
    SPELLCHECK_LEARN_WORD(e) {
        let { word: t } = e;
        (_.add(t.toLocaleLowerCase()), (0, l.fG)(_), f());
    },
    SPELLCHECK_UNLEARN_WORD(e) {
        let { word: t } = e;
        (_.delete(t.toLocaleLowerCase()), (0, l.fG)(_), f());
    }
});
