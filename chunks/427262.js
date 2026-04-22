"use strict";
n.d(t, {
    $3: () => c,
    Ay: () => y,
    G2: () => m,
    Gn: () => S,
    MU: () => h,
    QV: () => I,
    R1: () => T,
    mG: () => _,
    mv: () => g,
    tx: () => f,
});
var r = n(311907),
    i = n(351906),
    s = n(287809),
    a = n(652215),
    o = n(985018);
let l = (e) => `${e[0]}…`,
    u = { mode: "full", decoration: "never", identifiable: "auto" };
function d(e) {
    return !!(null != e && e.length > 0);
}
function c(e) {
    return d(e.global_name) ? e.global_name : d(e.globalName) ? e.globalName : d(e.username) ? e.username : "???";
}
function _(e) {
    if (null == e) return;
    let t = i.A.hidePersonalInformation,
        n = c(e);
    return t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = l(n)), n;
}
function f(e) {
    let t = (0, r.bG)([i.A], () => i.A.hidePersonalInformation);
    if (null == e) return;
    let n = c(e);
    return t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = l(n)), n;
}
function E(e) {
    if (null != e)
        if (d(e.globalName)) return e.globalName;
        else if (d(e.global_name)) return e.global_name;
        else return;
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { isMobile: n = !1, isVR: r = !1 } = t;
    switch (e) {
        case a.clD.ONLINE:
            if (r) return o.intl.string(o.t.SWnU0R);
            if (n) return o.intl.string(o.t["9hghLD"]);
            return o.intl.string(o.t.WbGtnH);
        case a.clD.OFFLINE:
            return o.intl.string(o.t.Vv0abJ);
        case a.clD.IDLE:
            return o.intl.string(o.t.qWbtVU);
        case a.clD.DND:
            return o.intl.string(o.t.jaNpQH);
        case a.clD.INVISIBLE:
            return o.intl.string(o.t.bg24HO);
        case a.clD.STREAMING:
            return o.intl.string(o.t.XKYej5);
        case a.clD.UNKNOWN:
        default:
            return null;
    }
}
function p(e, t) {
    let { maxDaysOld: n, minDaysOld: r = 0 } = t;
    if (null == e) return !1;
    let i = Date.now() - e.createdAt.getTime();
    return (null == n || !!(i <= 864e5 * n)) && !!(i >= 864e5 * r);
}
function m(e) {
    return !p(e, { minDaysOld: 0, maxDaysOld: 30 });
}
function g(e) {
    return p(e, { minDaysOld: 0, maxDaysOld: 7 });
}
function A(e, t, n) {
    if (null == e) return o.intl.string(o.t.sKdZ6U);
    if (!d(e.username)) return "???";
    let r = n;
    if (
        ("always" === t.identifiable ? (r = !1) : "never" === t.identifiable && (r = !0),
        "0" !== e.discriminator && e.discriminator !== a.h3J)
    )
        return "username" === t.mode || r ? e.username : `${e.username}#${e.discriminator}`;
    let i = r ? l(e.username) : e.username;
    return "never" !== t.decoration ? `@${i}` : i;
}
function I(e, t) {
    let n = { ...u, ...t },
        r = "auto" !== n.identifiable || i.A.hidePersonalInformation;
    return A(e, n, r);
}
function T(e) {
    return (0, r.bG)([s.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? s.default.getUser(e.getRecipientId()) : null;
    });
}
function S() {
    let e = s.default.getCurrentUser();
    return null != e && e.isStaff();
}
let y = {
    getName: _,
    useName: f,
    isNameConcealed: (e) => 2 === e.length && e.endsWith("…"),
    getUserTag: I,
    useUserTag: function (e, t) {
        return A(
            e,
            { ...u, ...t },
            (0, r.bG)([i.A], () => i.A.hidePersonalInformation),
        );
    },
    getUserIsStaff: S,
    getFormattedName: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e) return "???";
        let n = E(e),
            r = t ? I(e) : (e.username ?? "???");
        return n === r ? n : null != n ? `${n} (${r})` : r;
    },
    getGlobalName: E,
    humanizeStatus: h,
    useDirectMessageRecipient: T,
};
