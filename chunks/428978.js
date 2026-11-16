n(321073);
var l = n(477900),
    i = n(582128),
    r = n(451988),
    s = n(405433),
    a = n(933832),
    u = n(173936),
    c = n(782603),
    o = n(408278),
    d = n(365199),
    m = n(964486),
    h = n(625142),
    g = n(988794),
    v = n(792996);
n.d(
    e,
    {},
    {
        Zq: function (t) {
            let {
                    isActive: e,
                    isUserLurking: n,
                    rsvped: l,
                    canInvite: o,
                    isChannelPublic: d = !0,
                    entityType: f,
                    onJoinClick: p,
                    onRsvpClick: C,
                    onStartClick: y,
                    onInviteClick: E,
                    onEndClick: A,
                    onJoinGuildClick: _,
                    isJoined: k = !1,
                    channel: x,
                } = t,
                b = void 0 !== p,
                I = (function (t) {
                    let { onInviteClick: e, canInvite: n, isChannelPublic: l, channel: c } = t,
                        o = new r.Ep(),
                        [d, g] = i.useState(!1);
                    return ((0, m.Ay)(() => () => {
                        o.stop();
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
                                icon: d ? a.CheckmarkLargeIcon : u.LinkIcon,
                                onClick: function (t) {
                                    e?.(t, () => {
                                        (g(!0), o.start(1e3, () => g(!1)));
                                    });
                                },
                                disabled: d,
                                text: d ? v.intl.string(v.t.t5VZ88) : v.intl.string(v.t.WqhZss),
                                "aria-label": d ? v.intl.string(v.t.t5VZ88) : v.intl.string(v.t.WqhZss),
                            };
                })({ onInviteClick: E, canInvite: o, isChannelPublic: d, channel: x }),
                D = [];
            if (
                (null != I && D.push(I),
                e &&
                    f !== g.Ps.EXTERNAL &&
                    D.push({
                        variant: "active",
                        size: "sm",
                        onClick: p,
                        text: (function (t) {
                            let { isJoined: e, canJoin: n, isVoiceChannel: l } = t;
                            return n
                                ? e
                                    ? v.intl.string(v.t.aW2YlJ)
                                    : l
                                      ? v.intl.string(v.t.nxUtoQ)
                                      : v.intl.string(v.t.ZYO5OK)
                                : v.intl.string(v.t.TVBCKZ);
                        })({ isJoined: k, canJoin: b, isVoiceChannel: f === g.Ps.VOICE }),
                        disabled: !b,
                    }),
                n &&
                    null != _ &&
                    D.push({ variant: "active", size: "sm", text: v.intl.string(v.t["2BP08E"]), onClick: _ }),
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
                e ||
                    null == y ||
                    D.push({ variant: "primary", size: "sm", onClick: y, text: v.intl.string(v.t.I0v0Qv) }),
                e &&
                    null != A &&
                    D.push({ variant: "secondary", size: "sm", onClick: A, text: v.intl.string(v.t.qaYzPA) }),
                D
            );
        },
        jD: function (t) {
            let { onClick: e } = t;
            return (0, l.jsx)(o.K, {
                icon: d.MoreHorizontalIcon,
                variant: "secondary",
                "aria-label": v.intl.string(v.t.bt75uw),
                onClick: e,
            });
        },
    },
);
