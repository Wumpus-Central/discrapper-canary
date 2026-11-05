var i = n(855986),
    r = n(351906),
    a = n(287809),
    s = n(652215),
    l = n(792996);
function o(e) {
    return `${e[0]}\u{2026}`;
}
let d = { mode: "full", decoration: "never", identifiable: "auto" };
function c(e) {
    return !!(null != e && e.length > 0);
}
function u(e) {
    return c(e.global_name) ? e.global_name : c(e.globalName) ? e.globalName : c(e.username) ? e.username : "???";
}
function _(e) {
    if (null == e) return;
    let t = r.A.hidePersonalInformation,
        n = u(e);
    return (t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = o(n)), n);
}
function E(e) {
    let t = (0, i.bG)([r.A], () => r.A.hidePersonalInformation);
    if (null == e) return;
    let n = u(e);
    return (t && n.toLocaleLowerCase() === e.username?.toLocaleLowerCase() && "0" === e.discriminator && (n = o(n)), n);
}
function A(e) {
    if (null != e)
        if (c(e.globalName)) return e.globalName;
        else if (c(e.global_name)) return e.global_name;
        else return;
}
function f(e) {
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
function h(e, t) {
    let { maxDaysOld: n, minDaysOld: i = 0 } = t;
    if (null == e) return !1;
    let r = Date.now() - e.createdAt.getTime();
    return (null == n || !!(r <= 864e5 * n)) && !!(r >= 864e5 * i);
}
function I(e, t, n) {
    if (null == e) return l.intl.string(l.t.sKdZ6U);
    if (!c(e.username)) return "???";
    let i = n;
    if (
        ("always" === t.identifiable ? (i = !1) : "never" === t.identifiable && (i = !0),
        "0" !== e.discriminator && "0000" !== e.discriminator)
    )
        return "username" === t.mode || i ? e.username : `${e.username}#${e.discriminator}`;
    let r = i ? o(e.username) : e.username;
    return "never" !== t.decoration ? `@${r}` : r;
}
function p(e, t) {
    let n = { ...d, ...t },
        i = "auto" !== n.identifiable || r.A.hidePersonalInformation;
    return I(e, n, i);
}
function m(e) {
    return (0, i.bG)([a.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? a.default.getUser(e.getRecipientId()) : null;
    });
}
function T() {
    let e = a.default.getCurrentUser();
    return null != e && e.isStaff();
}
n.d(
    t,
    {},
    {
        $3: u,
        Ay: {
            getName: _,
            useName: E,
            isNameConcealed: function (e) {
                return 2 === e.length && e.endsWith("\u2026");
            },
            getUserTag: p,
            useUserTag: function (e, t) {
                return I(
                    e,
                    { ...d, ...t },
                    (0, i.bG)([r.A], () => r.A.hidePersonalInformation),
                );
            },
            getUserIsStaff: T,
            getFormattedName: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return "???";
                let n = A(e),
                    i = t ? p(e) : (e.username ?? "???");
                return n === i ? n : null != n ? `${n} (${i})` : i;
            },
            getGlobalName: A,
            humanizeStatus: f,
            useDirectMessageRecipient: m,
        },
        G2: function (e) {
            return !h(e, { minDaysOld: 0, maxDaysOld: 30 });
        },
        Gn: T,
        MU: f,
        QV: p,
        R1: m,
        mG: _,
        mv: function (e) {
            return h(e, { minDaysOld: 0, maxDaysOld: 7 });
        },
        tx: E,
    },
);
