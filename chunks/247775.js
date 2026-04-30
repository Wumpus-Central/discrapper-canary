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
        removeToken: () => R,
        setAnalyticsToken: () => N,
        setToken: () => y,
        showToken: () => O,
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
    f = {},
    h = {},
    p = !1,
    E = !1;
function m() {
    if (p) {
        s.w.remove(a.il), s.w.remove(a.zy);
        return;
    }
    null != r ? s.w.set(a.il, r) : s.w.remove(a.il), s.w.set(a.zy, h);
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
    (r = s.w.get(a.il)), (h = s.w.get(a.zy) || {});
    let { decryptedToken: e, wasEncrypted: t } = g(r);
    (_ = t),
        (i = e),
        (f = u(
            Object.entries(h)
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
    return (I(), null != e) ? f[e] : i;
}
function N(e) {
    null == e ? R(l) : C(e, l);
}
function y(e, t) {
    null == e ? R(t) : ((i = e), C(e, t));
}
function C(e, t) {
    null != t && (f[t] = e), _ ? D() : ((r = i), (h = f), m());
}
function v() {
    p || ((p = !0), m());
}
function O() {
    p && ((p = !1), m());
}
function R(e) {
    let t = i;
    return null != e && ((t = f[e]), delete f[e], delete h[e]), t === i && ((i = null), (r = null)), m(), null != t;
}
function b() {
    return R(l);
}
function D() {
    c?.isEncryptionAvailable()
        ? (null != i && (r = A(i)),
          (h = u(
              Object.entries(f).map((e) => {
                  let [t, n] = e;
                  return [t, A(n)];
              }),
          )),
          (_ = !0))
        : ((r = i), (h = f)),
        m();
}
