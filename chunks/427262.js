n.d(t, {
    $3: () => m,
    Ay: () => R,
    G2: () => v,
    Gn: () => N,
    MU: () => O,
    QV: () => T,
    R1: () => C,
    mG: () => g,
    mv: () => S,
    tx: () => E,
}),
    n(65821);
var r = n(311907),
    i = n(351906),
    a = n(287809),
    s = n(652215),
    o = n(985018);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = 86400000,
    d = "???",
    f = (e) => "".concat(e[0], "\u2026"),
    p = (e) => "@".concat(e),
    _ = {
        mode: "full",
        decoration: "never",
        identifiable: "auto",
        forcePomelo: !1,
    };
function h(e) {
    return !!(null != e && e.length > 0);
}
function m(e) {
    return h(e.global_name) ? e.global_name : h(e.globalName) ? e.globalName : h(e.username) ? e.username : d;
}
function g(e) {
    var t;
    if (null == e) return;
    let n = i.A.hidePersonalInformation,
        r = m(e);
    return (
        n &&
            r.toLocaleLowerCase() === (null == (t = e.username) ? void 0 : t.toLocaleLowerCase()) &&
            "0" === e.discriminator &&
            (r = f(r)),
        r
    );
}
function E(e) {
    var t;
    let n = (0, r.bG)([i.A], () => i.A.hidePersonalInformation);
    if (null == e) return;
    let a = m(e);
    return (
        n &&
            a.toLocaleLowerCase() === (null == (t = e.username) ? void 0 : t.toLocaleLowerCase()) &&
            "0" === e.discriminator &&
            (a = f(a)),
        a
    );
}
function b(e) {
    if (null != e)
        if (h(e.globalName)) return e.globalName;
        else if (h(e.global_name)) return e.global_name;
        else return;
}
function y(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return d;
    let r = b(e),
        i = n ? T(e) : null != (t = e.username) ? t : d;
    return r === i ? r : null != r ? "".concat(r, " (").concat(i, ")") : i;
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case s.clD.ONLINE:
            return t ? o.intl.string(o.t["9hghLD"]) : o.intl.string(o.t.WbGtnH);
        case s.clD.OFFLINE:
            return o.intl.string(o.t.Vv0abJ);
        case s.clD.IDLE:
            return o.intl.string(o.t.qWbtVU);
        case s.clD.DND:
            return o.intl.string(o.t.jaNpQH);
        case s.clD.INVISIBLE:
            return o.intl.string(o.t.bg24HO);
        case s.clD.STREAMING:
            return o.intl.string(o.t.XKYej5);
        case s.clD.UNKNOWN:
        default:
            return null;
    }
}
function A(e, t) {
    let { maxDaysOld: n, minDaysOld: r = 0 } = t;
    if (null == e) return !1;
    let i = Date.now() - e.createdAt.getTime(),
        a = null == n || i <= u * n,
        s = i >= u * r;
    return !!a && !!s;
}
function v(e) {
    return !A(e, {
        minDaysOld: 0,
        maxDaysOld: 30,
    });
}
function S(e) {
    return A(e, {
        minDaysOld: 0,
        maxDaysOld: 7,
    });
}
function I(e, t, n) {
    if (null == e) return o.intl.string(o.t.sKdZ6U);
    if (!h(e.username)) return d;
    let r = n;
    if (
        ("always" === t.identifiable ? (r = !1) : "never" === t.identifiable && (r = !0),
        "0" !== e.discriminator && e.discriminator !== s.h3J && !t.forcePomelo)
    )
        return "username" === t.mode || r ? e.username : "".concat(e.username, "#").concat(e.discriminator);
    let i = r ? f(e.username) : e.username;
    return "never" !== t.decoration ? p(i) : i;
}
function T(e, t) {
    let n = c({}, _, t),
        r = "auto" !== n.identifiable || i.A.hidePersonalInformation;
    return I(e, n, r);
}
function C(e) {
    return (0, r.bG)([a.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? a.default.getUser(e.getRecipientId()) : null;
    });
}
function N() {
    let e = a.default.getCurrentUser();
    return null != e && e.isStaff();
}
let R = {
    getName: g,
    useName: E,
    isNameConcealed: (e) => 2 === e.length && e.endsWith("\u2026"),
    getUserTag: T,
    useUserTag: function (e, t) {
        return I(
            e,
            c({}, _, t),
            (0, r.bG)([i.A], () => i.A.hidePersonalInformation),
        );
    },
    getUserIsStaff: N,
    getFormattedName: y,
    getGlobalName: b,
    humanizeStatus: O,
    useDirectMessageRecipient: C,
};
