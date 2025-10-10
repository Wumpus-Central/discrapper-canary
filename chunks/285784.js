t.d(n, {
    Zs: () => d,
    b5: () => u,
}),
    t(388685),
    t(539854);
var i = t(951288),
    a = t(647438),
    r = t(846519),
    l = t(481060),
    o = t(493773),
    c = t(765305),
    s = t(388032);
function d(e) {
    let {
            isActive: n,
            isUserLurking: t,
            rsvped: i,
            canInvite: d,
            isChannelPublic: u = !0,
            entityType: _,
            onJoinClick: p,
            onRsvpClick: b,
            onStartClick: g,
            onInviteClick: h,
            onEndClick: m,
            onJoinGuildClick: f,
            isJoined: v = !1,
        } = e,
        x = void 0 !== p,
        C = (function (e) {
            let { onInviteClick: n, canInvite: t, isChannelPublic: i } = e,
                c = new r.V7(),
                [d, u] = a.useState(!1);
            return ((0, o.ZP)(() => () => {
                c.stop();
            }),
            null == n)
                ? null
                : t && i
                  ? {
                        variant: "secondary",
                        icon: l.aAc,
                        onClick: n,
                        text: s.intl.string(s.t.RDE0SU),
                        "aria-label": s.intl.string(s.t.Ej3B3d),
                    }
                  : {
                        variant: "secondary",
                        icon: d ? l.dz2 : l.xPt,
                        onClick: (e) => {
                            null != n && n(e), u(!0), c.start(1000, () => u(!1));
                        },
                        disabled: d,
                        text: d ? s.intl.string(s.t["t5VZ8/"]) : s.intl.string(s.t.RDE0SU),
                        "aria-label": s.intl.string(s.t.Ej3B3d),
                    };
        })({
            onInviteClick: h,
            canInvite: d,
            isChannelPublic: u,
        }),
        I = [];
    if (
        (null != C && I.push(C),
        n &&
            _ !== c.WX.EXTERNAL &&
            I.push({
                variant: "active",
                size: "sm",
                onClick: p,
                text: (function (e) {
                    let { isJoined: n, canJoin: t, isVoiceChannel: i } = e;
                    return t
                        ? n
                            ? s.intl.string(s.t.aW2YlJ)
                            : i
                              ? s.intl.string(s.t.nxUtoa)
                              : s.intl.string(s.t.ZYO5OD)
                        : s.intl.string(s.t.TVBCKS);
                })({
                    isJoined: v,
                    canJoin: x,
                    isVoiceChannel: _ === c.WX.VOICE,
                }),
                disabled: !x,
            }),
        t &&
            null != f &&
            I.push({
                variant: "active",
                size: "sm",
                text: s.intl.string(s.t["2BP08P"]),
                onClick: f,
            }),
        !t && !n && null != b)
    ) {
        let e = i && !t;
        I.push({
            variant: e ? "active" : "secondary",
            size: "sm",
            icon: e ? l.dz2 : l.Dkj,
            text: s.intl.string(s.t.DlcqlZ),
            onClick: b,
            disabled: t,
        });
    }
    return (
        n ||
            null == g ||
            I.push({
                variant: "primary",
                size: "sm",
                onClick: g,
                text: s.intl.string(s.t.I0v0Qk),
            }),
        n &&
            null != m &&
            I.push({
                variant: "secondary",
                size: "sm",
                onClick: m,
                text: s.intl.string(s.t.qaYzPD),
            }),
        I
    );
}
function u(e) {
    let { onClick: n } = e;
    return (0, i.jsx)(l.hU, {
        icon: l.xhG,
        variant: "secondary",
        "aria-label": s.intl.string(s.t.bt75u7),
        onClick: n,
    });
}
