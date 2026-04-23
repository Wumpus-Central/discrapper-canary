"use strict";
let r, i;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: () => D,
        getAnalyticsToken: () => T,
        getToken: () => S,
        hideToken: () => C,
        init: () => I,
        removeAnalyticsToken: () => b,
        removeToken: () => R,
        setAnalyticsToken: () => y,
        setToken: () => N,
        showToken: () => O,
    });
var s = n(506774),
    a = n(818348);
let o = "dQw4w9WgXcQ:",
    l = "__analytics__";
function u(e) {
    return [...e].reduce((e, t) => {
        let [n, r] = t;
        return (e[n] = r), e;
    }, {});
}
let c = null,
    d = window.DiscordNative;
null != d && (c = d.safeStorage);
let _ = !1,
    f = {},
    p = {},
    h = !1,
    E = !1;
function m() {
    if (h) {
        s.w.remove(a.il), s.w.remove(a.zy);
        return;
    }
    null != i ? s.w.set(a.il, i) : s.w.remove(a.il), s.w.set(a.zy, p);
}
function g(e) {
    return null == e || 0 === e.length
        ? { decryptedToken: null, wasEncrypted: !1 }
        : c?.isEncryptionAvailable() && e.startsWith(o)
          ? { decryptedToken: c.decryptString(e.substring(o.length)), wasEncrypted: !0 }
          : { decryptedToken: e, wasEncrypted: !1 };
}
function A(e) {
    return c?.isEncryptionAvailable() && !e.startsWith(o) ? `${o}${c.encryptString(e)}` : e;
}
function I() {
    if (E) return;
    (i = s.w.get(a.il)), (p = s.w.get(a.zy) || {});
    let { decryptedToken: e, wasEncrypted: t } = g(i);
    (_ = t),
        (r = e),
        (f = u(
            Object.entries(p)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: r, wasEncrypted: i } = g(n);
                    return (_ = i || _), [t, r];
                })
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                }),
        )),
        (E = !0);
}
function T() {
    return S(l);
}
function S(e) {
    return (I(), null != e) ? f[e] : r;
}
function y(e) {
    null == e ? R(l) : v(e, l);
}
function N(e, t) {
    null == e ? R(t) : ((r = e), v(e, t));
}
function v(e, t) {
    null != t && (f[t] = e), _ ? D() : ((i = r), (p = f), m());
}
function C() {
    h || ((h = !0), m());
}
function O() {
    h && ((h = !1), m());
}
function R(e) {
    let t = r;
    return null != e && ((t = f[e]), delete f[e], delete p[e]), t === r && ((r = null), (i = null)), m(), null != t;
}
function b() {
    return R(l);
}
function D() {
    c?.isEncryptionAvailable()
        ? (null != r && (i = A(r)),
          (p = u(
              Object.entries(f).map((e) => {
                  let [t, n] = e;
                  return [t, A(n)];
              }),
          )),
          (_ = !0))
        : ((i = r), (p = f)),
        m();
}
