t.d(n, {
    Zs: () => u,
    b5: () => _,
}),
    t(388685),
    t(539854);
var i = t(951288),
    r = t(647438),
    a = t(846519),
    l = t(481060),
    o = t(493773),
    c = t(118998),
    s = t(765305),
    d = t(388032);
function u(e) {
    let {
            isActive: n,
            isUserLurking: t,
            rsvped: i,
            canInvite: u,
            isChannelPublic: _ = !0,
            entityType: p,
            onJoinClick: f,
            onRsvpClick: m,
            onStartClick: v,
            onInviteClick: g,
            onEndClick: h,
            onJoinGuildClick: b,
            isJoined: x = !1,
            channel: C,
        } = e,
        I = void 0 !== f,
        j = (function (e) {
            let { onInviteClick: n, canInvite: t, isChannelPublic: i, channel: s } = e,
                u = new a.V7(),
                [_, p] = r.useState(!1);
            return ((0, o.ZP)(() => () => {
                u.stop();
            }),
            null == n)
                ? null
                : (0, c.T)(null != t && t, null != i && i, s)
                  ? {
                        variant: "secondary",
                        icon: l.aAc,
                        onClick: n,
                        text: d.intl.string(d.t.RDE0Sc),
                        "aria-label": d.intl.string(d.t.Ej3B3Y),
                    }
                  : {
                        variant: "secondary",
                        icon: _ ? l.dz2 : l.xPt,
                        onClick: (e) => {
                            null != n && n(e), p(!0), u.start(1000, () => p(!1));
                        },
                        disabled: _,
                        text: _ ? d.intl.string(d.t.t5VZ88) : d.intl.string(d.t.WqhZss),
                        "aria-label": d.intl.string(d.t.WqhZss),
                    };
        })({
            onInviteClick: g,
            canInvite: u,
            isChannelPublic: _,
            channel: C,
        }),
        k = [];
    if (
        (null != j && k.push(j),
        n &&
            p !== s.WX.EXTERNAL &&
            k.push({
                variant: "active",
                size: "sm",
                onClick: f,
                text: (function (e) {
                    let { isJoined: n, canJoin: t, isVoiceChannel: i } = e;
                    return t
                        ? n
                            ? d.intl.string(d.t.aW2YlJ)
                            : i
                              ? d.intl.string(d.t.nxUtoQ)
                              : d.intl.string(d.t.ZYO5OK)
                        : d.intl.string(d.t.TVBCKZ);
                })({
                    isJoined: x,
                    canJoin: I,
                    isVoiceChannel: p === s.WX.VOICE,
                }),
                disabled: !I,
            }),
        t &&
            null != b &&
            k.push({
                variant: "active",
                size: "sm",
                text: d.intl.string(d.t["2BP08E"]),
                onClick: b,
            }),
        !t && !n && null != m)
    ) {
        let e = i && !t;
        k.push({
            variant: e ? "active" : "secondary",
            size: "sm",
            icon: e ? l.dz2 : l.Dkj,
            text: d.intl.string(d.t.DlcqlU),
            onClick: m,
            disabled: t,
        });
    }
    return (
        n ||
            null == v ||
            k.push({
                variant: "primary",
                size: "sm",
                onClick: v,
                text: d.intl.string(d.t.I0v0Qv),
            }),
        n &&
            null != h &&
            k.push({
                variant: "secondary",
                size: "sm",
                onClick: h,
                text: d.intl.string(d.t.qaYzPA),
            }),
        k
    );
}
function _(e) {
    let { onClick: n } = e;
    return (0, i.jsx)(l.hU, {
        icon: l.xhG,
        variant: "secondary",
        "aria-label": d.intl.string(d.t.bt75uw),
        onClick: n,
    });
}
