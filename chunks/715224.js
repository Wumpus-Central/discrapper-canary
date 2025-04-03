n.d(t, { W: () => h });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(890477),
    l = n(688465),
    o = n(35125),
    c = n(630388),
    d = n(434404),
    u = n(981631),
    m = n(388032),
    g = n(387136);
let p = 'NO_SYSTEM_CHANNEL';
function h(e) {
    var t;
    let { guild: n, canManageGuild: h, switchClassName: f } = e,
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
        x = i.useCallback(
            (e, t) => {
                let r = (0, c.mB)(n.systemChannelFlags, e, t);
                d.Z.updateGuild({ systemChannelFlags: r });
            },
            [n.systemChannelFlags]
        ),
        j = i.useCallback((e) => x(u.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e), [x]),
        N = i.useCallback((e) => x(u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [x]),
        _ = i.useCallback((e) => x(u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [x]),
        v = i.useCallback((e) => x(u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [x]),
        C = i.useCallback((e) => x(u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [x]),
        O = i.useCallback((e) => x(u.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [x]),
        y = i.useCallback((e) => x(u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [x]),
        I = null != (t = n.systemChannelId) ? t : p,
        E = (0, o.eI)(n),
        S = E || (0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        T = E || (0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.j7V, {
                className: f,
                onChange: j,
                value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
                hideBorder: !0,
                disabled: !h || I === p,
                children: m.NW.string(m.t['+f0bXV'])
            }),
            (0, r.jsx)(s.j7V, {
                className: f,
                onChange: v,
                value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                hideBorder: !0,
                disabled: !h || I === p,
                children: m.NW.string(m.t['72k7jY'])
            }),
            (0, r.jsx)(s.j7V, {
                className: f,
                onChange: N,
                value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                hideBorder: !0,
                disabled: !h || I === p,
                children: m.NW.string(m.t['2L8NCA'])
            }),
            (0, r.jsx)(s.j7V, {
                className: f,
                onChange: _,
                value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                hideBorder: !0,
                disabled: !h || I === p,
                children: m.NW.string(m.t['NvnW+f'])
            }),
            S &&
                (0, r.jsx)(s.j7V, {
                    className: f,
                    onChange: C,
                    value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !h || I === p,
                    children: m.NW.string(m.t['54n19f'])
                }),
            T &&
                (0, r.jsx)(s.j7V, {
                    className: f,
                    onChange: y,
                    value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
                    hideBorder: !0,
                    disabled: !h || I === p,
                    children: m.NW.string(m.t.IhF5d3)
                }),
            b &&
                (0, r.jsx)(s.j7V, {
                    className: f,
                    onChange: O,
                    value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                    hideBorder: !0,
                    disabled: !h || I === p,
                    children: (0, r.jsxs)('div', {
                        className: g.flexRow,
                        children: [m.NW.string(m.t['3yOX19']), (0, r.jsx)(l.Z, {})]
                    })
                })
        ]
    });
}
