var i,
    a = r(47120);
var o = r(442837),
    s = r(433517),
    l = r(570140),
    u = r(241601),
    c = r(601993);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = 'SpellcheckStore',
    p = !0,
    h = new Set();
function _() {
    s.K.set(f, {
        enabled: p,
        learnedWords: h
    });
}
class m extends (i = o.ZP.Store) {
    initialize() {
        let e = s.K.get(f);
        null != e && ((p = e.enabled), (h = new Set(e.learnedWords)), (0, c.gL)(p), (0, c.fG)(h)), (0, u.Ql)(c._2);
    }
    isEnabled() {
        return p;
    }
    hasLearnedWord(e) {
        return h.has(e.toLocaleLowerCase());
    }
}
d(m, 'displayName', 'SpellcheckStore'),
    (n.Z = new m(l.Z, {
        SPELLCHECK_TOGGLE() {
            (p = !p), (0, c.gL)(p), _();
        },
        SPELLCHECK_LEARN_WORD(e) {
            let { word: n } = e;
            h.add(n.toLocaleLowerCase()), (0, c.fG)(h), _();
        },
        SPELLCHECK_UNLEARN_WORD(e) {
            let { word: n } = e;
            h.delete(n.toLocaleLowerCase()), (0, c.fG)(h), _();
        }
    }));
