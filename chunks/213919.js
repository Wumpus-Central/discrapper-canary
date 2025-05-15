let r, i;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: () => R,
        getAnalyticsToken: () => O,
        getToken: () => v,
        hideToken: () => A,
        init: () => y,
        removeAnalyticsToken: () => P,
        removeToken: () => C,
        setAnalyticsToken: () => I,
        setToken: () => S,
        showToken: () => N
    }),
    n(388685);
var o = n(433517),
    a = n(231338);
let s = 'dQw4w9WgXcQ:',
    l = '__analytics__';
function c(e) {
    return [...e].reduce((e, t) => {
        let [n, r] = t;
        return (e[n] = r), e;
    }, {});
}
let u = null,
    d = window.DiscordNative;
null != d && (u = d.safeStorage);
let f = !1,
    _ = {},
    p = {},
    h = !1,
    m = !1;
function g() {
    if (h) {
        o.K.remove(a.B1), o.K.remove(a.XM);
        return;
    }
    null != i ? o.K.set(a.B1, i) : o.K.remove(a.B1), o.K.set(a.XM, p);
}
function E(e) {
    return null == e || 0 === e.length
        ? {
              decryptedToken: null,
              wasEncrypted: !1
          }
        : (null == u ? void 0 : u.isEncryptionAvailable()) && e.startsWith(s)
          ? {
                decryptedToken: u.decryptString(e.substring(s.length)),
                wasEncrypted: !0
            }
          : {
                decryptedToken: e,
                wasEncrypted: !1
            };
}
function b(e) {
    return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(s) ? ''.concat(s).concat(u.encryptString(e)) : e;
}
function y() {
    if (m) return;
    (i = o.K.get(a.B1)), (p = o.K.get(a.XM) || {});
    let { decryptedToken: e, wasEncrypted: t } = E(i);
    (f = t),
        (r = e),
        (_ = c(
            Object.entries(p)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: r, wasEncrypted: i } = E(n);
                    return (f = i || f), [t, r];
                })
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                })
        )),
        (m = !0);
}
function O() {
    return v(l);
}
function v(e) {
    return (y(), null != e) ? _[e] : r;
}
function I(e) {
    if (null == e) return void C(l);
    T(e, l);
}
function S(e, t) {
    if (null == e) return void C(t);
    (r = e), T(e, t);
}
function T(e, t) {
    null != t && (_[t] = e), f ? R() : ((i = r), (p = _), g());
}
function A() {
    h || ((h = !0), g());
}
function N() {
    h && ((h = !1), g());
}
function C(e) {
    let t = r;
    return null != e && ((t = _[e]), delete _[e], delete p[e]), t === r && ((r = null), (i = null)), g(), null != t;
}
function P() {
    return C(l);
}
function R() {
    (null == u ? void 0 : u.isEncryptionAvailable())
        ? (null != r && (i = b(r)),
          (p = c(
              Object.entries(_).map((e) => {
                  let [t, n] = e;
                  return [t, b(n)];
              })
          )),
          (f = !0))
        : ((i = r), (p = _)),
        g();
}
