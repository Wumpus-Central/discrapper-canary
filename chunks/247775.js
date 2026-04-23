let i, r;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: () => U,
        getAnalyticsToken: () => f,
        getToken: () => C,
        hideToken: () => D,
        init: () => R,
        removeAnalyticsToken: () => b,
        removeToken: () => g,
        setAnalyticsToken: () => p,
        setToken: () => m,
        showToken: () => h,
    });
var a = n(506774),
    s = n(818348);
let _ = "dQw4w9WgXcQ:",
    l = "__analytics__";
function o(e) {
    return [...e].reduce((e, t) => {
        let [n, i] = t;
        return (e[n] = i), e;
    }, {});
}
let E = null,
    d = window.DiscordNative;
null != d && (E = d.safeStorage);
let c = !1,
    u = {},
    I = {},
    A = !1,
    T = !1;
function S() {
    if (A) {
        a.w.remove(s.il), a.w.remove(s.zy);
        return;
    }
    null != r ? a.w.set(s.il, r) : a.w.remove(s.il), a.w.set(s.zy, I);
}
function N(e) {
    return null == e || 0 === e.length
        ? { decryptedToken: null, wasEncrypted: !1 }
        : E?.isEncryptionAvailable() && e.startsWith(_)
          ? { decryptedToken: E.decryptString(e.substring(_.length)), wasEncrypted: !0 }
          : { decryptedToken: e, wasEncrypted: !1 };
}
function O(e) {
    return E?.isEncryptionAvailable() && !e.startsWith(_) ? `${_}${E.encryptString(e)}` : e;
}
function R() {
    if (T) return;
    (r = a.w.get(s.il)), (I = a.w.get(s.zy) || {});
    let { decryptedToken: e, wasEncrypted: t } = N(r);
    (c = t),
        (i = e),
        (u = o(
            Object.entries(I)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: i, wasEncrypted: r } = N(n);
                    return (c = r || c), [t, i];
                })
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                }),
        )),
        (T = !0);
}
function f() {
    return C(l);
}
function C(e) {
    return (R(), null != e) ? u[e] : i;
}
function p(e) {
    null == e ? g(l) : L(e, l);
}
function m(e, t) {
    null == e ? g(t) : ((i = e), L(e, t));
}
function L(e, t) {
    null != t && (u[t] = e), c ? U() : ((r = i), (I = u), S());
}
function D() {
    A || ((A = !0), S());
}
function h() {
    A && ((A = !1), S());
}
function g(e) {
    let t = i;
    return null != e && ((t = u[e]), delete u[e], delete I[e]), t === i && ((i = null), (r = null)), S(), null != t;
}
function b() {
    return g(l);
}
function U() {
    E?.isEncryptionAvailable()
        ? (null != i && (r = O(i)),
          (I = o(
              Object.entries(u).map((e) => {
                  let [t, n] = e;
                  return [t, O(n)];
              }),
          )),
          (c = !0))
        : ((r = i), (I = u)),
        S();
}
