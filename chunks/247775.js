"use strict";
let r, i;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: () => D,
        getAnalyticsToken: () => T,
        getToken: () => y,
        hideToken: () => b,
        init: () => I,
        removeAnalyticsToken: () => O,
        removeToken: () => R,
        setAnalyticsToken: () => S,
        setToken: () => v,
        showToken: () => N,
    });
var a = n(506774),
    s = n(818348);
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
    m = !1;
function g() {
    if (h) {
        a.w.remove(s.il), a.w.remove(s.zy);
        return;
    }
    null != i ? a.w.set(s.il, i) : a.w.remove(s.il), a.w.set(s.zy, p);
}
function E(e) {
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
    if (m) return;
    (i = a.w.get(s.il)), (p = a.w.get(s.zy) || {});
    let { decryptedToken: e, wasEncrypted: t } = E(i);
    (_ = t),
        (r = e),
        (f = u(
            Object.entries(p)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: r, wasEncrypted: i } = E(n);
                    return (_ = i || _), [t, r];
                })
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                }),
        )),
        (m = !0);
}
function T() {
    return y(l);
}
function y(e) {
    return (I(), null != e) ? f[e] : r;
}
function S(e) {
    null == e ? R(l) : C(e, l);
}
function v(e, t) {
    null == e ? R(t) : ((r = e), C(e, t));
}
function C(e, t) {
    null != t && (f[t] = e), _ ? D() : ((i = r), (p = f), g());
}
function b() {
    h || ((h = !0), g());
}
function N() {
    h && ((h = !1), g());
}
function R(e) {
    let t = r;
    return null != e && ((t = f[e]), delete f[e], delete p[e]), t === r && ((r = null), (i = null)), g(), null != t;
}
function O() {
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
        g();
}
