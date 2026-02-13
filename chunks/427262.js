"use strict";
n.d(t, {
    $3: () => h,
    Ay: () => R,
    G2: () => y,
    Gn: () => N,
    MU: () => I,
    QV: () => C,
    R1: () => b,
    mG: () => p,
    mv: () => S,
    tx: () => g,
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
    _ = { mode: "full", decoration: "never", identifiable: "auto" };
function f(e) {
    return !!(null != e && e.length > 0);
}
function h(e) {
    return f(e.global_name) ? e.global_name : f(e.globalName) ? e.globalName : f(e.username) ? e.username : u;
}
function p(e) {
    if (null == e) return;
    let t = i.A.hidePersonalInformation,
        n = h(e);
    return t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = c(n)), n;
}
function g(e) {
    let t = (0, r.bG)([i.A], () => i.A.hidePersonalInformation);
    if (null == e) return;
    let n = h(e);
    return t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = c(n)), n;
}
function E(e) {
    if (null != e)
        if (f(e.globalName)) return e.globalName;
        else if (f(e.global_name)) return e.global_name;
        else return;
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return u;
    let n = E(e),
        r = t ? C(e) : (e.username ?? u);
    return n === r ? n : null != n ? `${n} (${r})` : r;
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { isMobile: n = !1, isVR: r = !1 } = t;
    switch (e) {
        case s.clD.ONLINE:
            if (r) return o.intl.string(o.t.SWnU0R);
            if (n) return o.intl.string(o.t["9hghLD"]);
            return o.intl.string(o.t.WbGtnH);
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
function T(e, t) {
    let { maxDaysOld: n, minDaysOld: r = 0 } = t;
    if (null == e) return !1;
    let i = Date.now() - e.createdAt.getTime(),
        a = null == n || i <= l * n,
        s = i >= l * r;
    return !!a && !!s;
}
function y(e) {
    return !T(e, { minDaysOld: 0, maxDaysOld: 30 });
}
function S(e) {
    return T(e, { minDaysOld: 0, maxDaysOld: 7 });
}
function v(e, t, n) {
    if (null == e) return o.intl.string(o.t.sKdZ6U);
    if (!f(e.username)) return u;
    let r = n;
    if (
        ("always" === t.identifiable ? (r = !1) : "never" === t.identifiable && (r = !0),
        "0" !== e.discriminator && e.discriminator !== s.h3J)
    )
        return "username" === t.mode || r ? e.username : `${e.username}#${e.discriminator}`;
    let i = r ? c(e.username) : e.username;
    return "never" !== t.decoration ? d(i) : i;
}
function C(e, t) {
    let n = { ..._, ...t },
        r = "auto" !== n.identifiable || i.A.hidePersonalInformation;
    return v(e, n, r);
}
function b(e) {
    return (0, r.bG)([a.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? a.default.getUser(e.getRecipientId()) : null;
    });
}
function N() {
    let e = a.default.getCurrentUser();
    return null != e && e.isStaff();
}
let R = {
    getName: p,
    useName: g,
    isNameConcealed: (e) => 2 === e.length && e.endsWith("…"),
    getUserTag: C,
    useUserTag: function (e, t) {
        return v(
            e,
            { ..._, ...t },
            (0, r.bG)([i.A], () => i.A.hidePersonalInformation),
        );
    },
    getUserIsStaff: N,
    getFormattedName: A,
    getGlobalName: E,
    humanizeStatus: I,
    useDirectMessageRecipient: b,
};
