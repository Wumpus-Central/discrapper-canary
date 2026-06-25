n.d(e, { Zq: () => p, jD: () => f }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(451988),
    r = n(405433),
    a = n(933832),
    u = n(173936),
    c = n(782603),
    d = n(408278),
    o = n(365199),
    m = n(964486),
    g = n(625142),
    h = n(988794),
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
            onRsvpClick: A,
            onStartClick: E,
            onInviteClick: y,
            onEndClick: C,
            onJoinGuildClick: _,
            isJoined: x = !1,
            channel: b,
        } = t,
        j = void 0 !== f,
        k = (function (t) {
            let { onInviteClick: e, canInvite: n, isChannelPublic: l, channel: c } = t,
                d = new s.Ep(),
                [o, h] = i.useState(!1);
            return ((0, m.Ay)(() => () => {
                d.stop();
            }),
            null == e)
                ? null
                : (0, g.y)(n ?? !1, l ?? !1, c)
                  ? {
                        variant: "secondary",
                        icon: r.l,
                        onClick: e,
                        text: v.intl.string(v.t.RDE0Sc),
                        "aria-label": v.intl.string(v.t.Ej3B3Y),
                    }
                  : {
                        variant: "secondary",
                        icon: o ? a.A : u.q,
                        onClick: (t) => {
                            e?.(t, () => {
                                h(!0), d.start(1e3, () => h(!1));
                            });
                        },
                        disabled: o,
                        text: o ? v.intl.string(v.t.t5VZ88) : v.intl.string(v.t.WqhZss),
                        "aria-label": o ? v.intl.string(v.t.t5VZ88) : v.intl.string(v.t.WqhZss),
                    };
        })({ onInviteClick: y, canInvite: d, isChannelPublic: o, channel: b }),
        D = [];
    if (
        (null != k && D.push(k),
        e &&
            p !== h.Ps.EXTERNAL &&
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
                })({ isJoined: x, canJoin: j, isVoiceChannel: p === h.Ps.VOICE }),
                disabled: !j,
            }),
        n && null != _ && D.push({ variant: "active", size: "sm", text: v.intl.string(v.t["2BP08E"]), onClick: _ }),
        !n && !e && null != A)
    ) {
        let t = l && !n;
        D.push({
            variant: t ? "active" : "secondary",
            size: "sm",
            icon: t ? a.A : c.X,
            text: v.intl.string(v.t.DlcqlU),
            onClick: A,
            disabled: n,
            "aria-pressed": t,
        });
    }
    return (
        e || null == E || D.push({ variant: "primary", size: "sm", onClick: E, text: v.intl.string(v.t.I0v0Qv) }),
        e && null != C && D.push({ variant: "secondary", size: "sm", onClick: C, text: v.intl.string(v.t.qaYzPA) }),
        D
    );
}
function f(t) {
    let { onClick: e } = t;
    return (0, l.jsx)(d.K, { icon: o.j, variant: "secondary", "aria-label": v.intl.string(v.t.bt75uw), onClick: e });
}
