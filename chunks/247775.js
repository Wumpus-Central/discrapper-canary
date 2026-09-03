let i, r;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: () => v,
        getAnalyticsToken: () => g,
        getToken: () => S,
        hideToken: () => R,
        init: () => m,
        removeAnalyticsToken: () => D,
        removeToken: () => y,
        setAnalyticsToken: () => N,
        setToken: () => C,
        showToken: () => L,
    });
var a = n(506774),
    s = n(818348);
let l = "dQw4w9WgXcQ:",
    o = "__analytics__";
function d(e) {
    return [...e].reduce((e, t) => {
        let [n, i] = t;
        return (e[n] = i), e;
    }, {});
}
let c = null,
    u = window.DiscordNative;
null != u && (c = u.safeStorage);
let _ = !1,
    E = {},
    A = {},
    h = !1,
    I = !1;
function f() {
    if (h) {
        a.w.remove(s.il), a.w.remove(s.zy);
        return;
    }
    null != r ? a.w.set(s.il, r) : a.w.remove(s.il), a.w.set(s.zy, A);
}
function p(e) {
    return null == e || 0 === e.length
        ? { decryptedToken: null, wasEncrypted: !1 }
        : c?.isEncryptionAvailable() && e.startsWith(l)
          ? { decryptedToken: c.decryptString(e.substring(l.length)), wasEncrypted: !0 }
          : { decryptedToken: e, wasEncrypted: !1 };
}
function T(e) {
    return c?.isEncryptionAvailable() && !e.startsWith(l) ? `${l}${c.encryptString(e)}` : e;
}
function m() {
    if (I) return;
    (r = a.w.get(s.il)), (A = a.w.get(s.zy) || {});
    let { decryptedToken: e, wasEncrypted: t } = p(r);
    (_ = t),
        (i = e),
        (E = d(
            Object.entries(A)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: i, wasEncrypted: r } = p(n);
                    return (_ = r || _), [t, i];
                })
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                }),
        )),
        (I = !0);
}
function g() {
    return S(o);
}
function S(e) {
    return (m(), null != e) ? E[e] : i;
}
function N(e) {
    null == e ? y(o) : O(e, o);
}
function C(e, t) {
    null == e ? y(t) : ((i = e), O(e, t));
}
function O(e, t) {
    null != t && (E[t] = e), _ ? v() : ((r = i), (A = E), f());
}
function R() {
    h || ((h = !0), f());
}
function L() {
    h && ((h = !1), f());
}
function y(e) {
    let t = i;
    return null != e && ((t = E[e]), delete E[e], delete A[e]), t === i && ((i = null), (r = null)), f(), null != t;
}
function D() {
    return y(o);
}
function v() {
    c?.isEncryptionAvailable()
        ? (null != i && (r = T(i)),
          (A = d(
              Object.entries(E).map((e) => {
                  let [t, n] = e;
                  return [t, T(n)];
              }),
          )),
          (_ = !0))
        : ((r = i), (A = E)),
        f();
}
