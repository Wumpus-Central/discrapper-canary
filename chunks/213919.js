let r, i;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: () => R,
        getAnalyticsToken: () => O,
        getToken: () => v,
        hideToken: () => A,
        init: () => y,
        removeAnalyticsToken: () => P,
        removeToken: () => N,
        setAnalyticsToken: () => S,
        setToken: () => I,
        showToken: () => C,
    }),
    n(388685);
var a = n(433517),
    o = n(231338);
let s = "dQw4w9WgXcQ:",
    l = "__analytics__";
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
    p = {},
    _ = {},
    m = !1,
    h = !1;
function g() {
    if (m) {
        a.K.remove(o.B1), a.K.remove(o.XM);
        return;
    }
    null != i ? a.K.set(o.B1, i) : a.K.remove(o.B1), a.K.set(o.XM, _);
}
function E(e) {
    return null == e || 0 === e.length
        ? {
              decryptedToken: null,
              wasEncrypted: !1,
          }
        : (null == u ? void 0 : u.isEncryptionAvailable()) && e.startsWith(s)
          ? {
                decryptedToken: u.decryptString(e.substring(s.length)),
                wasEncrypted: !0,
            }
          : {
                decryptedToken: e,
                wasEncrypted: !1,
            };
}
function b(e) {
    return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(s)
        ? "".concat(s).concat(u.encryptString(e))
        : e;
}
function y() {
    if (h) return;
    (i = a.K.get(o.B1)), (_ = a.K.get(o.XM) || {});
    let { decryptedToken: e, wasEncrypted: t } = E(i);
    (f = t),
        (r = e),
        (p = c(
            Object.entries(_)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: r, wasEncrypted: i } = E(n);
                    return (f = i || f), [t, r];
                })
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                }),
        )),
        (h = !0);
}
function O() {
    return v(l);
}
function v(e) {
    return (y(), null != e) ? p[e] : r;
}
function S(e) {
    if (null == e) return void N(l);
    T(e, l);
}
function I(e, t) {
    if (null == e) return void N(t);
    (r = e), T(e, t);
}
function T(e, t) {
    null != t && (p[t] = e), f ? R() : ((i = r), (_ = p), g());
}
function A() {
    m || ((m = !0), g());
}
function C() {
    m && ((m = !1), g());
}
function N(e) {
    let t = r;
    return null != e && ((t = p[e]), delete p[e], delete _[e]), t === r && ((r = null), (i = null)), g(), null != t;
}
function P() {
    return N(l);
}
function R() {
    (null == u ? void 0 : u.isEncryptionAvailable())
        ? (null != r && (i = b(r)),
          (_ = c(
              Object.entries(p).map((e) => {
                  let [t, n] = e;
                  return [t, b(n)];
              }),
          )),
          (f = !0))
        : ((i = r), (_ = p)),
        g();
}
