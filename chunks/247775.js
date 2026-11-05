let i, r;
n.r(t);
var a = n(506774);
n(818348);
let s = "dQw4w9WgXcQ:",
    l = "__analytics__";
function o(e) {
    return [...e].reduce((e, t) => {
        let [n, i] = t;
        return ((e[n] = i), e);
    }, {});
}
let d = null,
    c = window.DiscordNative;
null != c && (d = c.safeStorage);
let u = !1,
    _ = {},
    E = {},
    A = !1,
    f = !1;
function h() {
    if (A) {
        (a.w.remove("token"), a.w.remove("tokens"));
        return;
    }
    (null != r ? a.w.set("token", r) : a.w.remove("token"), a.w.set("tokens", E));
}
function I(e) {
    return null == e || 0 === e.length
        ? { decryptedToken: null, wasEncrypted: !1 }
        : d?.isEncryptionAvailable() && e.startsWith(s)
          ? { decryptedToken: d.decryptString(e.substring(s.length)), wasEncrypted: !0 }
          : { decryptedToken: e, wasEncrypted: !1 };
}
function p(e) {
    return d?.isEncryptionAvailable() && !e.startsWith(s) ? `${s}${d.encryptString(e)}` : e;
}
function m() {
    if (f) return;
    ((r = a.w.get("token")), (E = a.w.get("tokens") || {}));
    let { decryptedToken: e, wasEncrypted: t } = I(r);
    ((u = t),
        (i = e),
        (_ = o(
            Object.entries(E)
                .map((e) => {
                    let [t, n] = e,
                        { decryptedToken: i, wasEncrypted: r } = I(n);
                    return ((u = r || u), [t, i]);
                })
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                }),
        )),
        (f = !0));
}
function T() {
    f || m();
}
function g(e) {
    return (m(), null != e) ? _[e] : i;
}
function S(e, t) {
    (null != t && (_[t] = e), u ? C() : ((r = i), (E = _), h()));
}
function N(e) {
    T();
    let t = i;
    return (
        null != e && ((t = _[e]), delete _[e], delete E[e]),
        null != t && t === i && ((i = null), (r = null)),
        h(),
        null != t
    );
}
function C() {
    (T(),
        d?.isEncryptionAvailable()
            ? (null != i && (r = p(i)),
              (E = o(
                  Object.entries(_).map((e) => {
                      let [t, n] = e;
                      return [t, p(n)];
                  }),
              )),
              (u = !0))
            : ((r = i), (E = _)),
        h());
}
n.d(
    t,
    {},
    {
        encryptAndStoreTokens: C,
        getAnalyticsToken: function () {
            return g(l);
        },
        getToken: g,
        hideToken: function () {
            A || (T(), (A = !0), h());
        },
        init: m,
        removeAnalyticsToken: function () {
            return N(l);
        },
        removeToken: N,
        setAnalyticsToken: function (e) {
            null == e ? N(l) : (T(), S(e, l));
        },
        setToken: function (e, t) {
            null == e ? N(t) : (T(), (i = e), S(e, t));
        },
        showToken: function () {
            A && (T(), (A = !1), h());
        },
    },
);
