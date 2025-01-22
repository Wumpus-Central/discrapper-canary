let i, a;
r.r(n),
    r.d(n, {
        encryptAndStoreTokens: function () {
            return R;
        },
        getToken: function () {
            return T;
        },
        hideToken: function () {
            return A;
        },
        init: function () {
            return I;
        },
        removeToken: function () {
            return N;
        },
        setToken: function () {
            return S;
        },
        showToken: function () {
            return C;
        }
    });
var o = r(47120);
var s = r(724458);
var l = r(433517),
    u = r(231338);
let c = 'dQw4w9WgXcQ:';
function d(e) {
    return [...e].reduce((e, n) => {
        let [r, i] = n;
        return (e[r] = i), e;
    }, {});
}
let f = null,
    p = window.DiscordNative;
null != p && (f = p.safeStorage);
let h = !1,
    _ = {},
    m = {},
    g = !1,
    E = !1;
function v() {
    if (g) {
        l.K.remove(u.B1), l.K.remove(u.XM);
        return;
    }
    null != a ? l.K.set(u.B1, a) : l.K.remove(u.B1), l.K.set(u.XM, m);
}
function y(e) {
    return null == e || 0 === e.length
        ? {
              decryptedToken: null,
              wasEncrypted: !1
          }
        : (null == f ? void 0 : f.isEncryptionAvailable()) && e.startsWith(c)
          ? {
                decryptedToken: f.decryptString(e.substring(c.length)),
                wasEncrypted: !0
            }
          : {
                decryptedToken: e,
                wasEncrypted: !1
            };
}
function b(e) {
    return (null == f ? void 0 : f.isEncryptionAvailable()) && !e.startsWith(c) ? ''.concat(c).concat(f.encryptString(e)) : e;
}
function I() {
    if (E) return;
    (a = l.K.get(u.B1)), (m = l.K.get(u.XM) || {});
    let { decryptedToken: e, wasEncrypted: n } = y(a);
    (h = n),
        (i = e),
        (_ = d(
            Object.entries(m)
                .map((e) => {
                    let [n, r] = e,
                        { decryptedToken: i, wasEncrypted: a } = y(r);
                    return (h = a || h), [n, i];
                })
                .filter((e) => {
                    let [n, r] = e;
                    return null != r;
                })
        )),
        (E = !0);
}
function T(e) {
    return (I(), null != e) ? _[e] : i;
}
function S(e, n) {
    if (null == e) {
        N(n);
        return;
    }
    (i = e), null != n && (_[n] = e), h ? R() : ((a = i), (m = _), v());
}
function A() {
    if (!g) (g = !0), v();
}
function C() {
    if (!!g) (g = !1), v();
}
function N(e) {
    let n = i;
    return null != e && ((n = _[e]), delete _[e], delete m[e]), n === i && ((i = null), (a = null)), v(), null != n;
}
function R() {
    (null == f ? void 0 : f.isEncryptionAvailable())
        ? (null != i && (a = b(i)),
          (m = d(
              Object.entries(_).map((e) => {
                  let [n, r] = e;
                  return [n, b(r)];
              })
          )),
          (h = !0))
        : ((a = i), (m = _)),
        v();
}
