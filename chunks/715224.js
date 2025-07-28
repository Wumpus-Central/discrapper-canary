n.d(t, { W: () => f });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(890477),
    s = n(649179),
    o = n(688465),
    c = n(35125),
    d = n(630388),
    u = n(434404),
    m = n(981631),
    g = n(388032),
    p = n(387136);
let h = 'NO_SYSTEM_CHANNEL';
function f(e) {
    var t;
    let { guild: n, canManageGuild: f, switchClassName: x } = e,
        { enableDeadchat: b } = a.Z.useExperiment(
            {
                guildId: n.id,
                location: 'guild_settings'
            },
            {
                disable: null == n,
                autoTrackExposure: !0
            }
        ),
        { enabled: j } = s.Z.useExperiment(
            {
                guildId: n.id,
                location: 'guild_settings'
            },
            {
                disable: null == n,
                autoTrackExposure: !1
            }
        ),
        v = i.useCallback(
            (e, t) => {
                let r = (0, d.mB)(n.systemChannelFlags, e, t);
                u.Z.updateGuild({ systemChannelFlags: r });
            },
            [n.systemChannelFlags]
        ),
        _ = i.useCallback((e) => v(m.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e), [v]),
        O = i.useCallback((e) => v(m.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [v]),
        y = i.useCallback((e) => v(m.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS, !e), [v]),
        C = i.useCallback((e) => v(m.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [v]),
        N = i.useCallback((e) => v(m.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [v]),
        I = i.useCallback((e) => v(m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [v]),
        E = i.useCallback((e) => v(m.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [v]),
        S = i.useCallback((e) => v(m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [v]),
        T = null != (t = n.systemChannelId) ? t : h,
        P = (0, c.eI)(n),
        w = P || (0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        R = P || (0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.j7V, {
                className: x,
                onChange: _,
                value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
                hideBorder: !0,
                disabled: !f || T === h,
                children: g.intl.string(g.t['+f0bXV'])
            }),
            (0, r.jsx)(l.j7V, {
                className: x,
                onChange: N,
                value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                hideBorder: !0,
                disabled: !f || T === h,
                children: g.intl.string(g.t['72k7jY'])
            }),
            (0, r.jsx)(l.j7V, {
                className: x,
                onChange: O,
                value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                hideBorder: !0,
                disabled: !f || T === h,
                children: g.intl.string(g.t['2L8NCA'])
            }),
            (0, r.jsx)(l.j7V, {
                className: x,
                onChange: C,
                value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                hideBorder: !0,
                disabled: !f || T === h,
                children: g.intl.string(g.t['NvnW+f'])
            }),
            j &&
                (0, r.jsx)(l.j7V, {
                    className: x,
                    onChange: y,
                    value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !f || T === h,
                    children: g.intl.string(g.t.CLCoc3)
                }),
            w &&
                (0, r.jsx)(l.j7V, {
                    className: x,
                    onChange: I,
                    value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !f || T === h,
                    children: g.intl.string(g.t['54n19f'])
                }),
            R &&
                (0, r.jsx)(l.j7V, {
                    className: x,
                    onChange: S,
                    value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
                    hideBorder: !0,
                    disabled: !f || T === h,
                    children: g.intl.string(g.t.IhF5d3)
                }),
            b &&
                (0, r.jsx)(l.j7V, {
                    className: x,
                    onChange: E,
                    value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                    hideBorder: !0,
                    disabled: !f || T === h,
                    children: (0, r.jsxs)('div', {
                        className: p.flexRow,
                        children: [g.intl.string(g.t['3yOX19']), (0, r.jsx)(o.Z, {})]
                    })
                })
        ]
    });
}
