n.d(t, {
    $3: () => _,
    Ay: () => O,
    G2: () => h,
    Gn: () => m,
    MU: () => I,
    QV: () => f,
    R1: () => p,
    mG: () => E,
    mv: () => S,
    tx: () => u,
});
var i = n(17928),
    a = n(351906),
    r = n(287809),
    s = n(652215),
    l = n(985018);
let o = (e) => `${e[0]}…`,
    d = { mode: "full", decoration: "never", identifiable: "auto" };
function c(e) {
    return !!(null != e && e.length > 0);
}
function _(e) {
    return c(e.global_name) ? e.global_name : c(e.globalName) ? e.globalName : c(e.username) ? e.username : "???";
}
function E(e) {
    if (null == e) return;
    let t = a.A.hidePersonalInformation,
        n = _(e);
    return t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = o(n)), n;
}
function u(e) {
    let t = (0, i.bG)([a.A], () => a.A.hidePersonalInformation);
    if (null == e) return;
    let n = _(e);
    return t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = o(n)), n;
}
function A(e) {
    if (null != e)
        if (c(e.globalName)) return e.globalName;
        else if (c(e.global_name)) return e.global_name;
        else return;
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { isMobile: n = !1, isVR: i = !1 } = t;
    switch (e) {
        case s.clD.ONLINE:
            if (i) return l.intl.string(l.t.SWnU0R);
            if (n) return l.intl.string(l.t["9hghLD"]);
            return l.intl.string(l.t.WbGtnH);
        case s.clD.OFFLINE:
            return l.intl.string(l.t.Vv0abJ);
        case s.clD.IDLE:
            return l.intl.string(l.t.qWbtVU);
        case s.clD.DND:
            return l.intl.string(l.t.jaNpQH);
        case s.clD.INVISIBLE:
            return l.intl.string(l.t.bg24HO);
        case s.clD.STREAMING:
            return l.intl.string(l.t.XKYej5);
        case s.clD.UNKNOWN:
        default:
            return null;
    }
}
function T(e, t) {
    let { maxDaysOld: n, minDaysOld: i = 0 } = t;
    if (null == e) return !1;
    let a = Date.now() - e.createdAt.getTime();
    return (null == n || !!(a <= 864e5 * n)) && !!(a >= 864e5 * i);
}
function h(e) {
    return !T(e, { minDaysOld: 0, maxDaysOld: 30 });
}
function S(e) {
    return T(e, { minDaysOld: 0, maxDaysOld: 7 });
}
function N(e, t, n) {
    if (null == e) return l.intl.string(l.t.sKdZ6U);
    if (!c(e.username)) return "???";
    let i = n;
    if (
        ("always" === t.identifiable ? (i = !1) : "never" === t.identifiable && (i = !0),
        "0" !== e.discriminator && e.discriminator !== s.h3J)
    )
        return "username" === t.mode || i ? e.username : `${e.username}#${e.discriminator}`;
    let a = i ? o(e.username) : e.username;
    return "never" !== t.decoration ? `@${a}` : a;
}
function f(e, t) {
    let n = { ...d, ...t },
        i = "auto" !== n.identifiable || a.A.hidePersonalInformation;
    return N(e, n, i);
}
function p(e) {
    return (0, i.bG)([r.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? r.default.getUser(e.getRecipientId()) : null;
    });
}
function m() {
    let e = r.default.getCurrentUser();
    return null != e && e.isStaff();
}
let O = {
    getName: E,
    useName: u,
    isNameConcealed: (e) => 2 === e.length && e.endsWith("…"),
    getUserTag: f,
    useUserTag: function (e, t) {
        return N(
            e,
            { ...d, ...t },
            (0, i.bG)([a.A], () => a.A.hidePersonalInformation),
        );
    },
    getUserIsStaff: m,
    getFormattedName: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e) return "???";
        let n = A(e),
            i = t ? f(e) : (e.username ?? "???");
        return n === i ? n : null != n ? `${n} (${i})` : i;
    },
    getGlobalName: A,
    humanizeStatus: I,
    useDirectMessageRecipient: p,
};
