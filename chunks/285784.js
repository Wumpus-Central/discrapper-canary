t.d(n, {
    Zs: () => u,
    b5: () => b,
}),
    t(388685),
    t(539854);
var a = t(54381),
    i = t(473749),
    r = t(846519),
    l = t(481060),
    o = t(493773),
    c = t(118998),
    d = t(765305),
    s = t(388032);
function u(e) {
    let {
            isActive: n,
            isUserLurking: t,
            rsvped: a,
            canInvite: u,
            isChannelPublic: b = !0,
            entityType: f,
            onJoinClick: h,
            onRsvpClick: p,
            onStartClick: m,
            onInviteClick: g,
            onEndClick: v,
            onJoinGuildClick: x,
            isJoined: _ = !1,
            channel: C,
        } = e,
        j = void 0 !== h,
        k = (function (e) {
            let { onInviteClick: n, canInvite: t, isChannelPublic: a, channel: d } = e,
                u = new r.V7(),
                [b, f] = i.useState(!1);
            return ((0, o.ZP)(() => () => {
                u.stop();
            }),
            null == n)
                ? null
                : (0, c.T)(null != t && t, null != a && a, d)
                  ? {
                        variant: "secondary",
                        icon: l.aAc,
                        onClick: n,
                        text: s.intl.string(s.t.RDE0Sc),
                        "aria-label": s.intl.string(s.t.Ej3B3Y),
                    }
                  : {
                        variant: "secondary",
                        icon: b ? l.dz2 : l.xPt,
                        onClick: (e) => {
                            null != n && n(e), f(!0), u.start(1000, () => f(!1));
                        },
                        disabled: b,
                        text: b ? s.intl.string(s.t.t5VZ88) : s.intl.string(s.t.WqhZss),
                        "aria-label": s.intl.string(s.t.WqhZss),
                    };
        })({
            onInviteClick: g,
            canInvite: u,
            isChannelPublic: b,
            channel: C,
        }),
        I = [];
    if (
        (null != k && I.push(k),
        n &&
            f !== d.WX.EXTERNAL &&
            I.push({
                variant: "active",
                size: "sm",
                onClick: h,
                text: (function (e) {
                    let { isJoined: n, canJoin: t, isVoiceChannel: a } = e;
                    return t
                        ? n
                            ? s.intl.string(s.t.aW2YlJ)
                            : a
                              ? s.intl.string(s.t.nxUtoQ)
                              : s.intl.string(s.t.ZYO5OK)
                        : s.intl.string(s.t.TVBCKZ);
                })({
                    isJoined: _,
                    canJoin: j,
                    isVoiceChannel: f === d.WX.VOICE,
                }),
                disabled: !j,
            }),
        t &&
            null != x &&
            I.push({
                variant: "active",
                size: "sm",
                text: s.intl.string(s.t["2BP08E"]),
                onClick: x,
            }),
        !t && !n && null != p)
    ) {
        let e = a && !t;
        I.push({
            variant: e ? "active" : "secondary",
            size: "sm",
            icon: e ? l.dz2 : l.Dkj,
            text: s.intl.string(s.t.DlcqlU),
            onClick: p,
            disabled: t,
        });
    }
    return (
        n ||
            null == m ||
            I.push({
                variant: "primary",
                size: "sm",
                onClick: m,
                text: s.intl.string(s.t.I0v0Qv),
            }),
        n &&
            null != v &&
            I.push({
                variant: "secondary",
                size: "sm",
                onClick: v,
                text: s.intl.string(s.t.qaYzPA),
            }),
        I
    );
}
function b(e) {
    let { onClick: n } = e;
    return (0, a.jsx)(l.hU, {
        icon: l.xhG,
        variant: "secondary",
        "aria-label": s.intl.string(s.t.bt75uw),
        onClick: n,
    });
}
