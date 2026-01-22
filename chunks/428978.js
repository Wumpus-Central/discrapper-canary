n.d(t, {
    Zq: () => o,
    jD: () => f,
}),
    n(896048),
    n(321073);
var l = n(627968),
    a = n(64700),
    i = n(451988),
    c = n(397927),
    r = n(964486),
    s = n(625142),
    d = n(988794),
    u = n(985018);

function o(e) {
    let {
            isActive: t,
            isUserLurking: n,
            rsvped: l,
            canInvite: o,
            isChannelPublic: f = !0,
            entityType: b,
            onJoinClick: h,
            onRsvpClick: _,
            onStartClick: m,
            onInviteClick: x,
            onEndClick: v,
            onJoinGuildClick: g,
            isJoined: p = !1,
            channel: j,
        } = e,
        A = void 0 !== h,
        y = (function (e) {
            let { onInviteClick: t, canInvite: n, isChannelPublic: l, channel: d } = e,
                o = new i.Ep(),
                [f, b] = a.useState(!1);
            return ((0, r.Ay)(() => () => {
                o.stop();
            }),
            null == t)
                ? null
                : (0, s.y)(null != n && n, null != l && l, d)
                  ? {
                        variant: "secondary",
                        icon: c.liv,
                        onClick: t,
                        text: u.intl.string(u.t.RDE0Sc),
                        "aria-label": u.intl.string(u.t.Ej3B3Y),
                    }
                  : {
                        variant: "secondary",
                        icon: f ? c.A9s : c.qYV,
                        onClick: (e) => {
                            null != t && t(e), b(!0), o.start(1e3, () => b(!1));
                        },
                        disabled: f,
                        text: f ? u.intl.string(u.t.t5VZ88) : u.intl.string(u.t.WqhZss),
                        "aria-label": u.intl.string(u.t.WqhZss),
                    };
        })({
            onInviteClick: x,
            canInvite: o,
            isChannelPublic: f,
            channel: j,
        }),
        C = [];
    if (
        (null != y && C.push(y),
        t &&
            b !== d.Ps.EXTERNAL &&
            C.push({
                variant: "active",
                size: "sm",
                onClick: h,
                text: (function (e) {
                    let { isJoined: t, canJoin: n, isVoiceChannel: l } = e;
                    return n
                        ? t
                            ? u.intl.string(u.t.aW2YlJ)
                            : l
                              ? u.intl.string(u.t.nxUtoQ)
                              : u.intl.string(u.t.ZYO5OK)
                        : u.intl.string(u.t.TVBCKZ);
                })({
                    isJoined: p,
                    canJoin: A,
                    isVoiceChannel: b === d.Ps.VOICE,
                }),
                disabled: !A,
            }),
        n &&
            null != g &&
            C.push({
                variant: "active",
                size: "sm",
                text: u.intl.string(u.t["2BP08E"]),
                onClick: g,
            }),
        !n && !t && null != _)
    ) {
        let e = l && !n;
        C.push({
            variant: e ? "active" : "secondary",
            size: "sm",
            icon: e ? c.A9s : c.XFE,
            text: u.intl.string(u.t.DlcqlU),
            onClick: _,
            disabled: n,
        });
    }
    return (
        t ||
            null == m ||
            C.push({
                variant: "primary",
                size: "sm",
                onClick: m,
                text: u.intl.string(u.t.I0v0Qv),
            }),
        t &&
            null != v &&
            C.push({
                variant: "secondary",
                size: "sm",
                onClick: v,
                text: u.intl.string(u.t.qaYzPA),
            }),
        C
    );
}

function f(e) {
    let { onClick: t } = e;
    return (0, l.jsx)(c.K0, {
        icon: c.jNK,
        variant: "secondary",
        "aria-label": u.intl.string(u.t.bt75uw),
        onClick: t,
    });
}
