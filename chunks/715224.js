n.d(t, { W: () => h });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(890477),
    a = n(688465),
    o = n(35125),
    c = n(630388),
    u = n(434404),
    d = n(981631),
    m = n(388032),
    g = n(387136);
let p = 'NO_SYSTEM_CHANNEL';
function h(e) {
    var t;
    let { guild: n, canManageGuild: h, switchClassName: f } = e,
        { enableDeadchat: x } = s.Z.useExperiment(
            {
                guildId: n.id,
                location: 'guild_settings'
            },
            {
                disable: null == n,
                autoTrackExposure: !0
            }
        ),
        b = i.useCallback(
            (e, t) => {
                let r = (0, c.mB)(n.systemChannelFlags, e, t);
                u.Z.updateGuild({ systemChannelFlags: r });
            },
            [n.systemChannelFlags]
        ),
        j = i.useCallback((e) => b(d.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e), [b]),
        _ = i.useCallback((e) => b(d.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [b]),
        v = i.useCallback((e) => b(d.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [b]),
        O = i.useCallback((e) => b(d.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [b]),
        C = i.useCallback((e) => b(d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [b]),
        y = i.useCallback((e) => b(d.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [b]),
        N = i.useCallback((e) => b(d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [b]),
        I = null != (t = n.systemChannelId) ? t : p,
        E = (0, o.eI)(n),
        S = E || (0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        T = E || (0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.j7V, {
                className: f,
                onChange: j,
                value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
                hideBorder: !0,
                disabled: !h || I === p,
                children: m.intl.string(m.t['+f0bXV'])
            }),
            (0, r.jsx)(l.j7V, {
                className: f,
                onChange: O,
                value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                hideBorder: !0,
                disabled: !h || I === p,
                children: m.intl.string(m.t['72k7jY'])
            }),
            (0, r.jsx)(l.j7V, {
                className: f,
                onChange: _,
                value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                hideBorder: !0,
                disabled: !h || I === p,
                children: m.intl.string(m.t['2L8NCA'])
            }),
            (0, r.jsx)(l.j7V, {
                className: f,
                onChange: v,
                value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                hideBorder: !0,
                disabled: !h || I === p,
                children: m.intl.string(m.t['NvnW+f'])
            }),
            S &&
                (0, r.jsx)(l.j7V, {
                    className: f,
                    onChange: C,
                    value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !h || I === p,
                    children: m.intl.string(m.t['54n19f'])
                }),
            T &&
                (0, r.jsx)(l.j7V, {
                    className: f,
                    onChange: N,
                    value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
                    hideBorder: !0,
                    disabled: !h || I === p,
                    children: m.intl.string(m.t.IhF5d3)
                }),
            x &&
                (0, r.jsx)(l.j7V, {
                    className: f,
                    onChange: y,
                    value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                    hideBorder: !0,
                    disabled: !h || I === p,
                    children: (0, r.jsxs)('div', {
                        className: g.flexRow,
                        children: [m.intl.string(m.t['3yOX19']), (0, r.jsx)(a.Z, {})]
                    })
                })
        ]
    });
}
