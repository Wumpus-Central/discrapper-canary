n.d(t, {
    Zs: () => u,
    b5: () => d,
}),
    n(388685),
    n(539854);
var i = n(951288),
    l = n(647438),
    r = n(846519),
    a = n(481060),
    c = n(493773),
    o = n(765305),
    s = n(388032);
function u(e) {
    let {
            isActive: t,
            isUserLurking: n,
            rsvped: i,
            canInvite: u,
            isChannelPublic: d = !0,
            entityType: _,
            onJoinClick: g,
            onRsvpClick: h,
            onStartClick: p,
            onInviteClick: v,
            onEndClick: f,
            onJoinGuildClick: b,
            isJoined: m = !1,
        } = e,
        x = void 0 !== g,
        C = (function (e) {
            let { onInviteClick: t, canInvite: n, isChannelPublic: i } = e,
                o = new r.V7(),
                [u, d] = l.useState(!1);
            return ((0, c.ZP)(() => () => {
                o.stop();
            }),
            null == t)
                ? null
                : n && i
                  ? {
                        variant: "secondary",
                        icon: a.aAc,
                        onClick: t,
                        text: s.intl.string(s.t.RDE0SU),
                        "aria-label": s.intl.string(s.t.Ej3B3d),
                    }
                  : {
                        variant: "secondary",
                        icon: u ? a.dz2 : a.xPt,
                        onClick: (e) => {
                            null != t && t(e), d(!0), o.start(1000, () => d(!1));
                        },
                        disabled: u,
                        text: u ? s.intl.string(s.t["t5VZ8/"]) : s.intl.string(s.t.RDE0SU),
                        "aria-label": s.intl.string(s.t.Ej3B3d),
                    };
        })({
            onInviteClick: v,
            canInvite: u,
            isChannelPublic: d,
        }),
        j = [];
    if (
        (null != C && j.push(C),
        t &&
            _ !== o.WX.EXTERNAL &&
            j.push({
                variant: "active",
                size: "sm",
                onClick: g,
                text: (function (e) {
                    let { isJoined: t, canJoin: n, isVoiceChannel: i } = e;
                    return n
                        ? t
                            ? s.intl.string(s.t.aW2YlJ)
                            : i
                              ? s.intl.string(s.t.nxUtoa)
                              : s.intl.string(s.t.ZYO5OD)
                        : s.intl.string(s.t.TVBCKS);
                })({
                    isJoined: m,
                    canJoin: x,
                    isVoiceChannel: _ === o.WX.VOICE,
                }),
                disabled: !x,
            }),
        n &&
            null != b &&
            j.push({
                variant: "active",
                size: "sm",
                text: s.intl.string(s.t["2BP08P"]),
                onClick: b,
            }),
        !n && !t && null != h)
    ) {
        let e = i && !n;
        j.push({
            variant: e ? "active" : "secondary",
            size: "sm",
            icon: e ? a.dz2 : a.Dkj,
            text: s.intl.string(s.t.DlcqlZ),
            onClick: h,
            disabled: n,
        });
    }
    return (
        t ||
            null == p ||
            j.push({
                variant: "primary",
                size: "sm",
                onClick: p,
                text: s.intl.string(s.t.I0v0Qk),
            }),
        t &&
            null != f &&
            j.push({
                variant: "secondary",
                size: "sm",
                onClick: f,
                text: s.intl.string(s.t.qaYzPD),
            }),
        j
    );
}
function d(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(a.hU, {
        icon: a.xhG,
        variant: "secondary",
        "aria-label": s.intl.string(s.t.bt75u7),
        onClick: t,
    });
}
