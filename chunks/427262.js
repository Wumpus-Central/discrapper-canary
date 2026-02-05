"use strict";
n.d(t, {
    $3: () => p,
    Ay: () => N,
    G2: () => T,
    Gn: () => b,
    MU: () => A,
    QV: () => v,
    R1: () => C,
    mG: () => h,
    mv: () => y,
    tx: () => m,
});
var r = n(311907),
    i = n(351906),
    a = n(287809),
    s = n(652215),
    o = n(985018);
let l = 864e5,
    u = "???",
    c = (e) => `${e[0]}…`,
    d = (e) => `@${e}`,
    _ = { mode: "full", decoration: "never", identifiable: "auto", forcePomelo: !1 };
function f(e) {
    return !!(null != e && e.length > 0);
}
function p(e) {
    return f(e.global_name) ? e.global_name : f(e.globalName) ? e.globalName : f(e.username) ? e.username : u;
}
function h(e) {
    if (null == e) return;
    let t = i.A.hidePersonalInformation,
        n = p(e);
    return t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = c(n)), n;
}
function m(e) {
    let t = (0, r.bG)([i.A], () => i.A.hidePersonalInformation);
    if (null == e) return;
    let n = p(e);
    return t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = c(n)), n;
}
function g(e) {
    if (null != e)
        if (f(e.globalName)) return e.globalName;
        else if (f(e.global_name)) return e.global_name;
        else return;
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return u;
    let n = g(e),
        r = t ? v(e) : (e.username ?? u);
    return n === r ? n : null != n ? `${n} (${r})` : r;
}
function A(e) {
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
function I(e, t) {
    let { maxDaysOld: n, minDaysOld: r = 0 } = t;
    if (null == e) return !1;
    let i = Date.now() - e.createdAt.getTime(),
        a = null == n || i <= l * n,
        s = i >= l * r;
    return !!a && !!s;
}
function T(e) {
    return !I(e, { minDaysOld: 0, maxDaysOld: 30 });
}
function y(e) {
    return I(e, { minDaysOld: 0, maxDaysOld: 7 });
}
function S(e, t, n) {
    if (null == e) return o.intl.string(o.t.sKdZ6U);
    if (!f(e.username)) return u;
    let r = n;
    if (
        ("always" === t.identifiable ? (r = !1) : "never" === t.identifiable && (r = !0),
        "0" !== e.discriminator && e.discriminator !== s.h3J && !t.forcePomelo)
    )
        return "username" === t.mode || r ? e.username : `${e.username}#${e.discriminator}`;
    let i = r ? c(e.username) : e.username;
    return "never" !== t.decoration ? d(i) : i;
}
function v(e, t) {
    let n = { ..._, ...t },
        r = "auto" !== n.identifiable || i.A.hidePersonalInformation;
    return S(e, n, r);
}
function C(e) {
    return (0, r.bG)([a.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? a.default.getUser(e.getRecipientId()) : null;
    });
}
function b() {
    let e = a.default.getCurrentUser();
    return null != e && e.isStaff();
}
let N = {
    getName: h,
    useName: m,
    isNameConcealed: (e) => 2 === e.length && e.endsWith("…"),
    getUserTag: v,
    useUserTag: function (e, t) {
        return S(
            e,
            { ..._, ...t },
            (0, r.bG)([i.A], () => i.A.hidePersonalInformation),
        );
    },
    getUserIsStaff: b,
    getFormattedName: E,
    getGlobalName: g,
    humanizeStatus: A,
    useDirectMessageRecipient: C,
};
