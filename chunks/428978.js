n.d(e, { Zq: () => p, jD: () => f }), n(321073);
var l = n(477900),
    i = n(582128),
    r = n(451988),
    s = n(405433),
    a = n(933832),
    u = n(173936),
    c = n(782603),
    d = n(408278),
    o = n(365199),
    m = n(964486),
    h = n(625142),
    g = n(988794),
    v = n(375708);
function p(t) {
    let {
            isActive: e,
            isUserLurking: n,
            rsvped: l,
            canInvite: d,
            isChannelPublic: o = !0,
            entityType: p,
            onJoinClick: f,
            onRsvpClick: C,
            onStartClick: E,
            onInviteClick: y,
            onEndClick: A,
            onJoinGuildClick: _,
            isJoined: x = !1,
            channel: k,
        } = t,
        I = void 0 !== f,
        b = (function (t) {
            let { onInviteClick: e, canInvite: n, isChannelPublic: l, channel: c } = t,
                d = new r.Ep(),
                [o, g] = i.useState(!1);
            return ((0, m.Ay)(() => () => {
                d.stop();
            }),
            null == e)
                ? null
                : (0, h.y)(n ?? !1, l ?? !1, c)
                  ? {
                        variant: "secondary",
                        icon: s.ShareIcon,
                        onClick: e,
                        text: v.intl.string(v.t.RDE0Sc),
                        "aria-label": v.intl.string(v.t.Ej3B3Y),
                    }
                  : {
                        variant: "secondary",
                        icon: o ? a.CheckmarkLargeIcon : u.LinkIcon,
                        onClick: function (t) {
                            e?.(t, () => {
                                g(!0), d.start(1e3, () => g(!1));
                            });
                        },
                        disabled: o,
                        text: o ? v.intl.string(v.t.t5VZ88) : v.intl.string(v.t.WqhZss),
                        "aria-label": o ? v.intl.string(v.t.t5VZ88) : v.intl.string(v.t.WqhZss),
                    };
        })({ onInviteClick: y, canInvite: d, isChannelPublic: o, channel: k }),
        D = [];
    if (
        (null != b && D.push(b),
        e &&
            p !== g.Ps.EXTERNAL &&
            D.push({
                variant: "active",
                size: "sm",
                onClick: f,
                text: (function (t) {
                    let { isJoined: e, canJoin: n, isVoiceChannel: l } = t;
                    return n
                        ? e
                            ? v.intl.string(v.t.aW2YlJ)
                            : l
                              ? v.intl.string(v.t.nxUtoQ)
                              : v.intl.string(v.t.ZYO5OK)
                        : v.intl.string(v.t.TVBCKZ);
                })({ isJoined: x, canJoin: I, isVoiceChannel: p === g.Ps.VOICE }),
                disabled: !I,
            }),
        n && null != _ && D.push({ variant: "active", size: "sm", text: v.intl.string(v.t["2BP08E"]), onClick: _ }),
        !n && !e && null != C)
    ) {
        let t = l && !n;
        D.push({
            variant: t ? "active" : "secondary",
            size: "sm",
            icon: t ? a.CheckmarkLargeIcon : c.BellIcon,
            text: v.intl.string(v.t.DlcqlU),
            onClick: C,
            disabled: n,
            "aria-pressed": t,
        });
    }
    return (
        e || null == E || D.push({ variant: "primary", size: "sm", onClick: E, text: v.intl.string(v.t.I0v0Qv) }),
        e && null != A && D.push({ variant: "secondary", size: "sm", onClick: A, text: v.intl.string(v.t.qaYzPA) }),
        D
    );
}
function f(t) {
    let { onClick: e } = t;
    return (0, l.jsx)(d.K, {
        icon: o.MoreHorizontalIcon,
        variant: "secondary",
        "aria-label": v.intl.string(v.t.bt75uw),
        onClick: e,
    });
}
