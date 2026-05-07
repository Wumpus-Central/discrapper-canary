"use strict";
n.d(t, {
    $3: () => d,
    Ay: () => N,
    G2: () => m,
    Gn: () => S,
    MU: () => p,
    QV: () => I,
    R1: () => T,
    mG: () => _,
    mv: () => g,
    tx: () => f,
});
var i = n(17928),
    r = n(351906),
    s = n(287809),
    a = n(652215),
    o = n(375708);
let l = (e) => `${e[0]}\u{2026}`,
    u = { mode: "full", decoration: "never", identifiable: "auto" };
function c(e) {
    return !!(null != e && e.length > 0);
}
function d(e) {
    return c(e.global_name) ? e.global_name : c(e.globalName) ? e.globalName : c(e.username) ? e.username : "???";
}
function _(e) {
    if (null == e) return;
    let t = r.A.hidePersonalInformation,
        n = d(e);
    return t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = l(n)), n;
}
function f(e) {
    let t = (0, i.bG)([r.A], () => r.A.hidePersonalInformation);
    if (null == e) return;
    let n = d(e);
    return t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = l(n)), n;
}
function h(e) {
    if (null != e)
        if (c(e.globalName)) return e.globalName;
        else if (c(e.global_name)) return e.global_name;
        else return;
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { isMobile: n = !1, isVR: i = !1 } = t;
    switch (e) {
        case a.clD.ONLINE:
            if (i) return o.intl.string(o.t.SWnU0R);
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
function E(e, t) {
    let { maxDaysOld: n, minDaysOld: i = 0 } = t;
    if (null == e) return !1;
    let r = Date.now() - e.createdAt.getTime();
    return (null == n || !!(r <= 864e5 * n)) && !!(r >= 864e5 * i);
}
function m(e) {
    return !E(e, { minDaysOld: 0, maxDaysOld: 30 });
}
function g(e) {
    return E(e, { minDaysOld: 0, maxDaysOld: 7 });
}
function A(e, t, n) {
    if (null == e) return o.intl.string(o.t.sKdZ6U);
    if (!c(e.username)) return "???";
    let i = n;
    if (
        ("always" === t.identifiable ? (i = !1) : "never" === t.identifiable && (i = !0),
        "0" !== e.discriminator && e.discriminator !== a.h3J)
    )
        return "username" === t.mode || i ? e.username : `${e.username}#${e.discriminator}`;
    let r = i ? l(e.username) : e.username;
    return "never" !== t.decoration ? `@${r}` : r;
}
function I(e, t) {
    let n = { ...u, ...t },
        i = "auto" !== n.identifiable || r.A.hidePersonalInformation;
    return A(e, n, i);
}
function T(e) {
    return (0, i.bG)([s.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? s.default.getUser(e.getRecipientId()) : null;
    });
}
function S() {
    let e = s.default.getCurrentUser();
    return null != e && e.isStaff();
}
let N = {
    getName: _,
    useName: f,
    isNameConcealed: (e) => 2 === e.length && e.endsWith("\u2026"),
    getUserTag: I,
    useUserTag: function (e, t) {
        return A(
            e,
            { ...u, ...t },
            (0, i.bG)([r.A], () => r.A.hidePersonalInformation),
        );
    },
    getUserIsStaff: S,
    getFormattedName: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e) return "???";
        let n = h(e),
            i = t ? I(e) : (e.username ?? "???");
        return n === i ? n : null != n ? `${n} (${i})` : i;
    },
    getGlobalName: h,
    humanizeStatus: p,
    useDirectMessageRecipient: T,
};
