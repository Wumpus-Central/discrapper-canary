n.d(e, { Zq: () => o, jD: () => h }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(451988),
    s = n(397927),
    a = n(964486),
    u = n(625142),
    c = n(988794),
    d = n(985018);
function o(t) {
    let {
            isActive: e,
            isUserLurking: n,
            rsvped: l,
            canInvite: o,
            isChannelPublic: h = !0,
            entityType: m,
            onJoinClick: g,
            onRsvpClick: x,
            onStartClick: v,
            onInviteClick: f,
            onEndClick: p,
            onJoinGuildClick: A,
            isJoined: j = !1,
            channel: y,
        } = t,
        E = void 0 !== g,
        _ = (function (t) {
            let { onInviteClick: e, canInvite: n, isChannelPublic: l, channel: c } = t,
                o = new r.Ep(),
                [h, m] = i.useState(!1);
            return ((0, a.Ay)(() => () => {
                o.stop();
            }),
            null == e)
                ? null
                : (0, u.y)(n ?? !1, l ?? !1, c)
                  ? {
                        variant: "secondary",
                        icon: s.liv,
                        onClick: e,
                        text: d.intl.string(d.t.RDE0Sc),
                        "aria-label": d.intl.string(d.t.Ej3B3Y),
                    }
                  : {
                        variant: "secondary",
                        icon: h ? s.A9s : s.qYV,
                        onClick: (t) => {
                            null != e && e(t), m(!0), o.start(1e3, () => m(!1));
                        },
                        disabled: h,
                        text: h ? d.intl.string(d.t.t5VZ88) : d.intl.string(d.t.WqhZss),
                        "aria-label": d.intl.string(d.t.WqhZss),
                    };
        })({ onInviteClick: f, canInvite: o, isChannelPublic: h, channel: y }),
        C = [];
    if (
        (null != _ && C.push(_),
        e &&
            m !== c.Ps.EXTERNAL &&
            C.push({
                variant: "active",
                size: "sm",
                onClick: g,
                text: (function (t) {
                    let { isJoined: e, canJoin: n, isVoiceChannel: l } = t;
                    return n
                        ? e
                            ? d.intl.string(d.t.aW2YlJ)
                            : l
                              ? d.intl.string(d.t.nxUtoQ)
                              : d.intl.string(d.t.ZYO5OK)
                        : d.intl.string(d.t.TVBCKZ);
                })({ isJoined: j, canJoin: E, isVoiceChannel: m === c.Ps.VOICE }),
                disabled: !E,
            }),
        n && null != A && C.push({ variant: "active", size: "sm", text: d.intl.string(d.t["2BP08E"]), onClick: A }),
        !n && !e && null != x)
    ) {
        let t = l && !n;
        C.push({
            variant: t ? "active" : "secondary",
            size: "sm",
            icon: t ? s.A9s : s.XFE,
            text: d.intl.string(d.t.DlcqlU),
            onClick: x,
            disabled: n,
        });
    }
    return (
        e || null == v || C.push({ variant: "primary", size: "sm", onClick: v, text: d.intl.string(d.t.I0v0Qv) }),
        e && null != p && C.push({ variant: "secondary", size: "sm", onClick: p, text: d.intl.string(d.t.qaYzPA) }),
        C
    );
}
function h(t) {
    let { onClick: e } = t;
    return (0, l.jsx)(s.K0, { icon: s.jNK, variant: "secondary", "aria-label": d.intl.string(d.t.bt75uw), onClick: e });
}
