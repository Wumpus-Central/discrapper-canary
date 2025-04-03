let r, i;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: () => T,
        getToken: () => y,
        hideToken: () => O,
        init: () => b,
        removeToken: () => S,
        setToken: () => v,
        showToken: () => I
    }),
    n(47120);
var o = n(433517),
    a = n(231338);
let s = 'dQw4w9WgXcQ:';
function l(e) {
    return [...e].reduce((e, t) => {
        let [n, r] = t;
        return (e[n] = r), e;
    }, {});
}
let c = null,
    u = window.DiscordNative;
null != u && (c = u.safeStorage);
let d = !1,
    f = {},
    _ = {},
    p = !1,
    h = !1;
function m() {
    if (p) {
        o.K.remove(a.B1), o.K.remove(a.XM);
        return;
    }
    null != i ? o.K.set(a.B1, i) : o.K.remove(a.B1), o.K.set(a.XM, _);
}
function g(e) {
    return null == e || 0 === e.length
        ? {
              decryptedToken: null,
              wasEncrypted: !1
          }
        : (null == c ? void 0 : c.isEncryptionAvailable()) && e.startsWith(s)
          ? {
                decryptedToken: c.decryptString(e.substring(s.length)),
                wasEncrypted: !0
            }
          : {
                decryptedToken: e,
                wasEncrypted: !1
            };
}
function E(e) {
    return (null == c ? void 0 : c.isEncryptionAvailable()) && !e.startsWith(s) ? ''.concat(s).concat(c.encryptString(e)) : e;
}
function b() {
    if (h) return;
    (i = o.K.get(a.B1)), (_ = o.K.get(a.XM) || {});
    let { decryptedToken: e, wasEncrypted: t } = g(i);
    (d = t),
        (r = e),
        (f = l(
            Object.entries(_)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: r, wasEncrypted: i } = g(n);
                    return (d = i || d), [t, r];
                })
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                })
        )),
        (h = !0);
}
function y(e) {
    return (b(), null != e) ? f[e] : r;
}
function v(e, t) {
    if (null == e) return void S(t);
    (r = e), null != t && (f[t] = e), d ? T() : ((i = r), (_ = f), m());
}
function O() {
    p || ((p = !0), m());
}
function I() {
    p && ((p = !1), m());
}
function S(e) {
    let t = r;
    return null != e && ((t = f[e]), delete f[e], delete _[e]), t === r && ((r = null), (i = null)), m(), null != t;
}
function T() {
    (null == c ? void 0 : c.isEncryptionAvailable())
        ? (null != r && (i = E(r)),
          (_ = l(
              Object.entries(f).map((e) => {
                  let [t, n] = e;
                  return [t, E(n)];
              })
          )),
          (d = !0))
        : ((i = r), (_ = f)),
        m();
}
