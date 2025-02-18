n.d(t, { W: () => x });
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(890477),
    a = n(688465),
    o = n(35125),
    c = n(630388),
    d = n(434404),
    u = n(981631),
    m = n(388032),
    h = n(915156);
let g = 'NO_SYSTEM_CHANNEL';
function x(e) {
    var t;
    let { guild: n, canManageGuild: x, switchClassName: p } = e,
        { enableDeadchat: _ } = s.Z.useExperiment(
            {
                guildId: n.id,
                location: 'guild_settings'
            },
            {
                disable: null == n,
                autoTrackExposure: !0
            }
        ),
        C = r.useCallback(
            (e, t) => {
                let i = (0, c.mB)(n.systemChannelFlags, e, t);
                d.Z.updateGuild({ systemChannelFlags: i });
            },
            [n.systemChannelFlags]
        ),
        f = r.useCallback((e) => C(u.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e), [C]),
        v = r.useCallback((e) => C(u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [C]),
        N = r.useCallback((e) => C(u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [C]),
        j = r.useCallback((e) => C(u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [C]),
        I = r.useCallback((e) => C(u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [C]),
        E = r.useCallback((e) => C(u.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [C]),
        b = r.useCallback((e) => C(u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [C]),
        T = null !== (t = n.systemChannelId) && void 0 !== t ? t : g,
        S = (0, o.eI)(n),
        R = S || (0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        Z = S || (0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.j7V, {
                className: p,
                onChange: f,
                value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
                hideBorder: !0,
                disabled: !x || T === g,
                children: m.intl.string(m.t['+f0bXV'])
            }),
            (0, i.jsx)(l.j7V, {
                className: p,
                onChange: j,
                value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                hideBorder: !0,
                disabled: !x || T === g,
                children: m.intl.string(m.t['72k7jY'])
            }),
            (0, i.jsx)(l.j7V, {
                className: p,
                onChange: v,
                value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                hideBorder: !0,
                disabled: !x || T === g,
                children: m.intl.string(m.t['2L8NCA'])
            }),
            (0, i.jsx)(l.j7V, {
                className: p,
                onChange: N,
                value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                hideBorder: !0,
                disabled: !x || T === g,
                children: m.intl.string(m.t['NvnW+f'])
            }),
            R &&
                (0, i.jsx)(l.j7V, {
                    className: p,
                    onChange: I,
                    value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !x || T === g,
                    children: m.intl.string(m.t['54n19f'])
                }),
            Z &&
                (0, i.jsx)(l.j7V, {
                    className: p,
                    onChange: b,
                    value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
                    hideBorder: !0,
                    disabled: !x || T === g,
                    children: m.intl.string(m.t.IhF5d3)
                }),
            _ &&
                (0, i.jsx)(l.j7V, {
                    className: p,
                    onChange: E,
                    value: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                    hideBorder: !0,
                    disabled: !x || T === g,
                    children: (0, i.jsxs)('div', {
                        className: h.flexRow,
                        children: [m.intl.string(m.t['3yOX19']), (0, i.jsx)(a.Z, {})]
                    })
                })
        ]
    });
}
