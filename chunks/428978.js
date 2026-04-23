n.d(e, { Zq: () => x, jD: () => f }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(451988),
    s = n(405433),
    a = n(933832),
    u = n(173936),
    c = n(782603),
    d = n(408278),
    o = n(365199),
    h = n(964486),
    g = n(625142),
    m = n(988794),
    v = n(985018);
function x(t) {
    let {
            isActive: e,
            isUserLurking: n,
            rsvped: l,
            canInvite: d,
            isChannelPublic: o = !0,
            entityType: x,
            onJoinClick: f,
            onRsvpClick: p,
            onStartClick: A,
            onInviteClick: j,
            onEndClick: E,
            onJoinGuildClick: y,
            isJoined: _ = !1,
            channel: C,
        } = t,
        T = void 0 !== f,
        k = (function (t) {
            let { onInviteClick: e, canInvite: n, isChannelPublic: l, channel: c } = t,
                d = new r.Ep(),
                [o, m] = i.useState(!1);
            return ((0, h.Ay)(() => () => {
                d.stop();
            }),
            null == e)
                ? null
                : (0, g.y)(n ?? !1, l ?? !1, c)
                  ? {
                        variant: "secondary",
                        icon: s.l,
                        onClick: e,
                        text: v.intl.string(v.t.RDE0Sc),
                        "aria-label": v.intl.string(v.t.Ej3B3Y),
                    }
                  : {
                        variant: "secondary",
                        icon: o ? a.A : u.q,
                        onClick: (t) => {
                            null != e && e(t), m(!0), d.start(1e3, () => m(!1));
                        },
                        disabled: o,
                        text: o ? v.intl.string(v.t.t5VZ88) : v.intl.string(v.t.WqhZss),
                        "aria-label": v.intl.string(v.t.WqhZss),
                    };
        })({ onInviteClick: j, canInvite: d, isChannelPublic: o, channel: C }),
        D = [];
    if (
        (null != k && D.push(k),
        e &&
            x !== m.Ps.EXTERNAL &&
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
                })({ isJoined: _, canJoin: T, isVoiceChannel: x === m.Ps.VOICE }),
                disabled: !T,
            }),
        n && null != y && D.push({ variant: "active", size: "sm", text: v.intl.string(v.t["2BP08E"]), onClick: y }),
        !n && !e && null != p)
    ) {
        let t = l && !n;
        D.push({
            variant: t ? "active" : "secondary",
            size: "sm",
            icon: t ? a.A : c.X,
            text: v.intl.string(v.t.DlcqlU),
            onClick: p,
            disabled: n,
            "aria-pressed": t,
        });
    }
    return (
        e || null == A || D.push({ variant: "primary", size: "sm", onClick: A, text: v.intl.string(v.t.I0v0Qv) }),
        e && null != E && D.push({ variant: "secondary", size: "sm", onClick: E, text: v.intl.string(v.t.qaYzPA) }),
        D
    );
}
function f(t) {
    let { onClick: e } = t;
    return (0, l.jsx)(d.K, { icon: o.j, variant: "secondary", "aria-label": v.intl.string(v.t.bt75uw), onClick: e });
}
