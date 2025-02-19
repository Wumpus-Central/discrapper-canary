let r, i;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: () => T,
        getToken: () => b,
        hideToken: () => O,
        init: () => v,
        removeToken: () => I,
        setToken: () => y,
        showToken: () => S
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
    p = {},
    _ = !1,
    h = !1;
function m() {
    if (_) {
        o.K.remove(a.B1), o.K.remove(a.XM);
        return;
    }
    null != i ? o.K.set(a.B1, i) : o.K.remove(a.B1), o.K.set(a.XM, p);
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
function v() {
    if (h) return;
    (i = o.K.get(a.B1)), (p = o.K.get(a.XM) || {});
    let { decryptedToken: e, wasEncrypted: t } = g(i);
    (d = t),
        (r = e),
        (f = l(
            Object.entries(p)
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
function b(e) {
    return (v(), null != e) ? f[e] : r;
}
function y(e, t) {
    if (null == e) {
        I(t);
        return;
    }
    (r = e), null != t && (f[t] = e), d ? T() : ((i = r), (p = f), m());
}
function O() {
    !_ && ((_ = !0), m());
}
function S() {
    _ && ((_ = !1), m());
}
function I(e) {
    let t = r;
    return null != e && ((t = f[e]), delete f[e], delete p[e]), t === r && ((r = null), (i = null)), m(), null != t;
}
function T() {
    (null == c ? void 0 : c.isEncryptionAvailable())
        ? (null != r && (i = E(r)),
          (p = l(
              Object.entries(f).map((e) => {
                  let [t, n] = e;
                  return [t, E(n)];
              })
          )),
          (d = !0))
        : ((i = r), (p = f)),
        m();
}
