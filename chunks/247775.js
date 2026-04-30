let i, a;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: () => M,
        getAnalyticsToken: () => p,
        getToken: () => m,
        hideToken: () => g,
        init: () => f,
        removeAnalyticsToken: () => b,
        removeToken: () => D,
        setAnalyticsToken: () => O,
        setToken: () => C,
        showToken: () => L,
    });
var r = n(506774),
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
    _ = window.DiscordNative;
null != _ && (c = _.safeStorage);
let E = !1,
    u = {},
    A = {},
    I = !1,
    T = !1;
function h() {
    if (I) {
        r.w.remove(s.il), r.w.remove(s.zy);
        return;
    }
    null != a ? r.w.set(s.il, a) : r.w.remove(s.il), r.w.set(s.zy, A);
}
function S(e) {
    return null == e || 0 === e.length
        ? { decryptedToken: null, wasEncrypted: !1 }
        : c?.isEncryptionAvailable() && e.startsWith(l)
          ? { decryptedToken: c.decryptString(e.substring(l.length)), wasEncrypted: !0 }
          : { decryptedToken: e, wasEncrypted: !1 };
}
function N(e) {
    return c?.isEncryptionAvailable() && !e.startsWith(l) ? `${l}${c.encryptString(e)}` : e;
}
function f() {
    if (T) return;
    (a = r.w.get(s.il)), (A = r.w.get(s.zy) || {});
    let { decryptedToken: e, wasEncrypted: t } = S(a);
    (E = t),
        (i = e),
        (u = d(
            Object.entries(A)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: i, wasEncrypted: a } = S(n);
                    return (E = a || E), [t, i];
                })
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                }),
        )),
        (T = !0);
}
function p() {
    return m(o);
}
function m(e) {
    return (f(), null != e) ? u[e] : i;
}
function O(e) {
    null == e ? D(o) : R(e, o);
}
function C(e, t) {
    null == e ? D(t) : ((i = e), R(e, t));
}
function R(e, t) {
    null != t && (u[t] = e), E ? M() : ((a = i), (A = u), h());
}
function g() {
    I || ((I = !0), h());
}
function L() {
    I && ((I = !1), h());
}
function D(e) {
    let t = i;
    return null != e && ((t = u[e]), delete u[e], delete A[e]), t === i && ((i = null), (a = null)), h(), null != t;
}
function b() {
    return D(o);
}
function M() {
    c?.isEncryptionAvailable()
        ? (null != i && (a = N(i)),
          (A = d(
              Object.entries(u).map((e) => {
                  let [t, n] = e;
                  return [t, N(n)];
              }),
          )),
          (E = !0))
        : ((a = i), (A = u)),
        h();
}
