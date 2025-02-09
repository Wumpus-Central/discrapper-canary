let i, r;
n.r(t),
    n.d(t, {
        encryptAndStoreTokens: () => A,
        getToken: () => y,
        hideToken: () => T,
        init: () => v,
        removeToken: () => S,
        setToken: () => I,
        showToken: () => b
    }),
    n(47120),
    n(724458);
var a = n(433517),
    s = n(231338);
let o = 'dQw4w9WgXcQ:';
function l(e) {
    return [...e].reduce((e, t) => {
        let [n, i] = t;
        return (e[n] = i), e;
    }, {});
}
let u = null,
    c = window.DiscordNative;
null != c && (u = c.safeStorage);
let d = !1,
    f = {},
    _ = {},
    p = !1,
    h = !1;
function m() {
    if (p) {
        a.K.remove(s.B1), a.K.remove(s.XM);
        return;
    }
    null != r ? a.K.set(s.B1, r) : a.K.remove(s.B1), a.K.set(s.XM, _);
}
function g(e) {
    return null == e || 0 === e.length
        ? {
              decryptedToken: null,
              wasEncrypted: !1
          }
        : (null == u ? void 0 : u.isEncryptionAvailable()) && e.startsWith(o)
          ? {
                decryptedToken: u.decryptString(e.substring(o.length)),
                wasEncrypted: !0
            }
          : {
                decryptedToken: e,
                wasEncrypted: !1
            };
}
function E(e) {
    return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(o) ? ''.concat(o).concat(u.encryptString(e)) : e;
}
function v() {
    if (h) return;
    (r = a.K.get(s.B1)), (_ = a.K.get(s.XM) || {});
    let { decryptedToken: e, wasEncrypted: t } = g(r);
    (d = t),
        (i = e),
        (f = l(
            Object.entries(_)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: i, wasEncrypted: r } = g(n);
                    return (d = r || d), [t, i];
                })
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                })
        )),
        (h = !0);
}
function y(e) {
    return (v(), null != e) ? f[e] : i;
}
function I(e, t) {
    if (null == e) {
        S(t);
        return;
    }
    (i = e), null != t && (f[t] = e), d ? A() : ((r = i), (_ = f), m());
}
function T() {
    !p && ((p = !0), m());
}
function b() {
    p && ((p = !1), m());
}
function S(e) {
    let t = i;
    return null != e && ((t = f[e]), delete f[e], delete _[e]), t === i && ((i = null), (r = null)), m(), null != t;
}
function A() {
    (null == u ? void 0 : u.isEncryptionAvailable())
        ? (null != i && (r = E(i)),
          (_ = l(
              Object.entries(f).map((e) => {
                  let [t, n] = e;
                  return [t, E(n)];
              })
          )),
          (d = !0))
        : ((r = i), (_ = f)),
        m();
}
