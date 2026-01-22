let r, i;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: () => w,
        getAnalyticsToken: () => O,
        getToken: () => A,
        hideToken: () => T,
        init: () => y,
        removeAnalyticsToken: () => R,
        removeToken: () => N,
        setAnalyticsToken: () => v,
        setToken: () => S,
        showToken: () => C,
    }),
    n(896048);
var a = n(506774),
    s = n(818348);
let o = "dQw4w9WgXcQ:",
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
    h = !1,
    m = !1;
function g() {
    if (h) {
        a.w.remove(s.il), a.w.remove(s.zy);
        return;
    }
    null != i ? a.w.set(s.il, i) : a.w.remove(s.il), a.w.set(s.zy, _);
}
function E(e) {
    return null == e || 0 === e.length
        ? {
              decryptedToken: null,
              wasEncrypted: !1,
          }
        : (null == u ? void 0 : u.isEncryptionAvailable()) && e.startsWith(o)
          ? {
                decryptedToken: u.decryptString(e.substring(o.length)),
                wasEncrypted: !0,
            }
          : {
                decryptedToken: e,
                wasEncrypted: !1,
            };
}
function b(e) {
    return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(o)
        ? "".concat(o).concat(u.encryptString(e))
        : e;
}
function y() {
    if (m) return;
    (i = a.w.get(s.il)), (_ = a.w.get(s.zy) || {});
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
        (m = !0);
}
function O() {
    return A(l);
}
function A(e) {
    return (y(), null != e) ? p[e] : r;
}
function v(e) {
    null == e ? N(l) : I(e, l);
}
function S(e, t) {
    null == e ? N(t) : ((r = e), I(e, t));
}
function I(e, t) {
    null != t && (p[t] = e), f ? w() : ((i = r), (_ = p), g());
}
function T() {
    h || ((h = !0), g());
}
function C() {
    h && ((h = !1), g());
}
function N(e) {
    let t = r;
    return null != e && ((t = p[e]), delete p[e], delete _[e]), t === r && ((r = null), (i = null)), g(), null != t;
}
function R() {
    return N(l);
}
function w() {
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
