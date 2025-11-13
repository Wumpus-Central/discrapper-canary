t.d(n, {
    Zs: () => d,
    b5: () => _,
}),
    t(388685),
    t(539854);
var i = t(951288),
    l = t(647438),
    r = t(846519),
    a = t(481060),
    c = t(493773),
    s = t(118998),
    o = t(765305),
    u = t(388032);
function d(e) {
    let {
            isActive: n,
            isUserLurking: t,
            rsvped: i,
            canInvite: d,
            isChannelPublic: _ = !0,
            entityType: h,
            onJoinClick: g,
            onRsvpClick: v,
            onStartClick: f,
            onInviteClick: p,
            onEndClick: m,
            onJoinGuildClick: b,
            isJoined: x = !1,
            channel: C,
        } = e,
        E = void 0 !== g,
        Z = (function (e) {
            let { onInviteClick: n, canInvite: t, isChannelPublic: i, channel: o } = e,
                d = new r.V7(),
                [_, h] = l.useState(!1);
            return ((0, c.ZP)(() => () => {
                d.stop();
            }),
            null == n)
                ? null
                : (0, s.T)(null != t && t, null != i && i, o)
                  ? {
                        variant: "secondary",
                        icon: a.aAc,
                        onClick: n,
                        text: u.intl.string(u.t.RDE0Sc),
                        "aria-label": u.intl.string(u.t.Ej3B3Y),
                    }
                  : {
                        variant: "secondary",
                        icon: _ ? a.dz2 : a.xPt,
                        onClick: (e) => {
                            null != n && n(e), h(!0), d.start(1000, () => h(!1));
                        },
                        disabled: _,
                        text: _ ? u.intl.string(u.t.t5VZ88) : u.intl.string(u.t.WqhZss),
                        "aria-label": u.intl.string(u.t.WqhZss),
                    };
        })({
            onInviteClick: p,
            canInvite: d,
            isChannelPublic: _,
            channel: C,
        }),
        S = [];
    if (
        (null != Z && S.push(Z),
        n &&
            h !== o.WX.EXTERNAL &&
            S.push({
                variant: "active",
                size: "sm",
                onClick: g,
                text: (function (e) {
                    let { isJoined: n, canJoin: t, isVoiceChannel: i } = e;
                    return t
                        ? n
                            ? u.intl.string(u.t.aW2YlJ)
                            : i
                              ? u.intl.string(u.t.nxUtoQ)
                              : u.intl.string(u.t.ZYO5OK)
                        : u.intl.string(u.t.TVBCKZ);
                })({
                    isJoined: x,
                    canJoin: E,
                    isVoiceChannel: h === o.WX.VOICE,
                }),
                disabled: !E,
            }),
        t &&
            null != b &&
            S.push({
                variant: "active",
                size: "sm",
                text: u.intl.string(u.t["2BP08E"]),
                onClick: b,
            }),
        !t && !n && null != v)
    ) {
        let e = i && !t;
        S.push({
            variant: e ? "active" : "secondary",
            size: "sm",
            icon: e ? a.dz2 : a.Dkj,
            text: u.intl.string(u.t.DlcqlU),
            onClick: v,
            disabled: t,
        });
    }
    return (
        n ||
            null == f ||
            S.push({
                variant: "primary",
                size: "sm",
                onClick: f,
                text: u.intl.string(u.t.I0v0Qv),
            }),
        n &&
            null != m &&
            S.push({
                variant: "secondary",
                size: "sm",
                onClick: m,
                text: u.intl.string(u.t.qaYzPA),
            }),
        S
    );
}
function _(e) {
    let { onClick: n } = e;
    return (0, i.jsx)(a.hU, {
        icon: a.xhG,
        variant: "secondary",
        "aria-label": u.intl.string(u.t.bt75uw),
        onClick: n,
    });
}
