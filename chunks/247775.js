"use strict";
let i, r;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: () => D,
        getAnalyticsToken: () => T,
        getToken: () => S,
        hideToken: () => v,
        init: () => I,
        removeAnalyticsToken: () => b,
        removeToken: () => O,
        setAnalyticsToken: () => y,
        setToken: () => C,
        showToken: () => R,
    });
var s = n(506774),
    a = n(818348);
let o = "dQw4w9WgXcQ:",
    l = "__analytics__";
function u(e) {
    return [...e].reduce((e, t) => {
        let [n, i] = t;
        return (e[n] = i), e;
    }, {});
}
let c = null,
    d = window.DiscordNative;
null != d && (c = d.safeStorage);
let _ = !1,
    h = {},
    f = {},
    p = !1,
    E = !1;
function m() {
    if (p) {
        s.w.remove(a.il), s.w.remove(a.zy);
        return;
    }
    null != r ? s.w.set(a.il, r) : s.w.remove(a.il), s.w.set(a.zy, f);
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
    (r = s.w.get(a.il)), (f = s.w.get(a.zy) || {});
    let { decryptedToken: e, wasEncrypted: t } = g(r);
    (_ = t),
        (i = e),
        (h = u(
            Object.entries(f)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: i, wasEncrypted: r } = g(n);
                    return (_ = r || _), [t, i];
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
    return (I(), null != e) ? h[e] : i;
}
function y(e) {
    null == e ? O(l) : N(e, l);
}
function C(e, t) {
    null == e ? O(t) : ((i = e), N(e, t));
}
function N(e, t) {
    null != t && (h[t] = e), _ ? D() : ((r = i), (f = h), m());
}
function v() {
    p || ((p = !0), m());
}
function R() {
    p && ((p = !1), m());
}
function O(e) {
    let t = i;
    return null != e && ((t = h[e]), delete h[e], delete f[e]), t === i && ((i = null), (r = null)), m(), null != t;
}
function b() {
    return O(l);
}
function D() {
    c?.isEncryptionAvailable()
        ? (null != i && (r = A(i)),
          (f = u(
              Object.entries(h).map((e) => {
                  let [t, n] = e;
                  return [t, A(n)];
              }),
          )),
          (_ = !0))
        : ((r = i), (f = h)),
        m();
}
