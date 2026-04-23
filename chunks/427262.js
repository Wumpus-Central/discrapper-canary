n.d(t, {
    $3: () => d,
    Ay: () => p,
    G2: () => S,
    Gn: () => C,
    MU: () => A,
    QV: () => R,
    R1: () => f,
    mG: () => c,
    mv: () => N,
    tx: () => u,
});
var i = n(17928),
    r = n(351906),
    a = n(287809),
    s = n(652215),
    _ = n(985018);
let l = (e) => `${e[0]}…`,
    o = { mode: "full", decoration: "never", identifiable: "auto" };
function E(e) {
    return !!(null != e && e.length > 0);
}
function d(e) {
    return E(e.global_name) ? e.global_name : E(e.globalName) ? e.globalName : E(e.username) ? e.username : "???";
}
function c(e) {
    if (null == e) return;
    let t = r.A.hidePersonalInformation,
        n = d(e);
    return t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = l(n)), n;
}
function u(e) {
    let t = (0, i.bG)([r.A], () => r.A.hidePersonalInformation);
    if (null == e) return;
    let n = d(e);
    return t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = l(n)), n;
}
function I(e) {
    if (null != e)
        if (E(e.globalName)) return e.globalName;
        else if (E(e.global_name)) return e.global_name;
        else return;
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { isMobile: n = !1, isVR: i = !1 } = t;
    switch (e) {
        case s.clD.ONLINE:
            if (i) return _.intl.string(_.t.SWnU0R);
            if (n) return _.intl.string(_.t["9hghLD"]);
            return _.intl.string(_.t.WbGtnH);
        case s.clD.OFFLINE:
            return _.intl.string(_.t.Vv0abJ);
        case s.clD.IDLE:
            return _.intl.string(_.t.qWbtVU);
        case s.clD.DND:
            return _.intl.string(_.t.jaNpQH);
        case s.clD.INVISIBLE:
            return _.intl.string(_.t.bg24HO);
        case s.clD.STREAMING:
            return _.intl.string(_.t.XKYej5);
        case s.clD.UNKNOWN:
        default:
            return null;
    }
}
function T(e, t) {
    let { maxDaysOld: n, minDaysOld: i = 0 } = t;
    if (null == e) return !1;
    let r = Date.now() - e.createdAt.getTime();
    return (null == n || !!(r <= 864e5 * n)) && !!(r >= 864e5 * i);
}
function S(e) {
    return !T(e, { minDaysOld: 0, maxDaysOld: 30 });
}
function N(e) {
    return T(e, { minDaysOld: 0, maxDaysOld: 7 });
}
function O(e, t, n) {
    if (null == e) return _.intl.string(_.t.sKdZ6U);
    if (!E(e.username)) return "???";
    let i = n;
    if (
        ("always" === t.identifiable ? (i = !1) : "never" === t.identifiable && (i = !0),
        "0" !== e.discriminator && e.discriminator !== s.h3J)
    )
        return "username" === t.mode || i ? e.username : `${e.username}#${e.discriminator}`;
    let r = i ? l(e.username) : e.username;
    return "never" !== t.decoration ? `@${r}` : r;
}
function R(e, t) {
    let n = { ...o, ...t },
        i = "auto" !== n.identifiable || r.A.hidePersonalInformation;
    return O(e, n, i);
}
function f(e) {
    return (0, i.bG)([a.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? a.default.getUser(e.getRecipientId()) : null;
    });
}
function C() {
    let e = a.default.getCurrentUser();
    return null != e && e.isStaff();
}
let p = {
    getName: c,
    useName: u,
    isNameConcealed: (e) => 2 === e.length && e.endsWith("…"),
    getUserTag: R,
    useUserTag: function (e, t) {
        return O(
            e,
            { ...o, ...t },
            (0, i.bG)([r.A], () => r.A.hidePersonalInformation),
        );
    },
    getUserIsStaff: C,
    getFormattedName: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e) return "???";
        let n = I(e),
            i = t ? R(e) : (e.username ?? "???");
        return n === i ? n : null != n ? `${n} (${i})` : i;
    },
    getGlobalName: I,
    humanizeStatus: A,
    useDirectMessageRecipient: f,
};
