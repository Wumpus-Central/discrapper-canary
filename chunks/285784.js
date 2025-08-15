n.d(e, {
    Ns: () => o,
    Zs: () => d,
    b5: () => h,
}),
    n(388685),
    n(539854);
var l = n(951288),
    i = n(647438),
    r = n(846519),
    s = n(481060),
    a = n(493773),
    u = n(765305),
    c = n(388032);
function o(t) {
    let { onInviteClick: e, canInvite: n, isChannelPublic: l } = t,
        u = new r.V7(),
        [o, d] = i.useState(!1);
    return ((0, a.ZP)(() => () => {
        u.stop();
    }),
    null == e)
        ? null
        : n && l
          ? {
                variant: "secondary",
                icon: s.aAc,
                onClick: e,
                text: c.intl.string(c.t.RDE0SU),
                "aria-label": c.intl.string(c.t.Ej3B3d),
            }
          : {
                variant: "secondary",
                icon: o ? s.dz2 : s.xPt,
                onClick: (t) => {
                    null != e && e(t), d(!0), u.start(1000, () => d(!1));
                },
                disabled: o,
                text: o ? c.intl.string(c.t["t5VZ8/"]) : c.intl.string(c.t.RDE0SU),
                "aria-label": c.intl.string(c.t.Ej3B3d),
            };
}
function d(t) {
    let {
            isActive: e,
            isUserLurking: n,
            rsvped: l,
            canInvite: i,
            isChannelPublic: r = !0,
            entityType: a,
            onJoinClick: d,
            onRsvpClick: h,
            onStartClick: g,
            onInviteClick: m,
            onEndClick: p,
            onJoinGuildClick: v,
            isJoined: f = !1,
        } = t,
        b = void 0 !== d,
        j = o({
            onInviteClick: m,
            canInvite: i,
            isChannelPublic: r,
        }),
        x = [];
    if (
        (null != j && x.push(j),
        e &&
            a !== u.WX.EXTERNAL &&
            x.push({
                variant: "active",
                size: "sm",
                onClick: d,
                text: (function (t) {
                    let { isJoined: e, canJoin: n, isVoiceChannel: l } = t;
                    return n
                        ? e
                            ? c.intl.string(c.t.aW2YlJ)
                            : l
                              ? c.intl.string(c.t.nxUtoa)
                              : c.intl.string(c.t.ZYO5OD)
                        : c.intl.string(c.t.TVBCKS);
                })({
                    isJoined: f,
                    canJoin: b,
                    isVoiceChannel: a === u.WX.VOICE,
                }),
                disabled: !b,
            }),
        n &&
            null != v &&
            x.push({
                variant: "active",
                size: "sm",
                text: c.intl.string(c.t["2BP08P"]),
                onClick: v,
            }),
        !n && !e && null != h)
    ) {
        let t = l && !n;
        x.push({
            variant: t ? "active" : "secondary",
            size: "sm",
            icon: t ? s.dz2 : s.Dkj,
            text: c.intl.string(c.t.DlcqlZ),
            onClick: h,
            disabled: n,
        });
    }
    return (
        e ||
            null == g ||
            x.push({
                variant: "primary",
                size: "sm",
                onClick: g,
                text: c.intl.string(c.t.I0v0Qk),
            }),
        e &&
            null != p &&
            x.push({
                variant: "secondary",
                size: "sm",
                onClick: p,
                text: c.intl.string(c.t.qaYzPD),
            }),
        x
    );
}
function h(t) {
    let { onClick: e } = t;
    return (0, l.jsx)(s.hU, {
        icon: s.xhG,
        variant: "secondary",
        "aria-label": c.intl.string(c.t.bt75u7),
        onClick: e,
    });
}
