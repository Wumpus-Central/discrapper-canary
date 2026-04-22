n.d(t, { l: () => g });
var i = n(627968),
    l = n(64700),
    s = n(665260),
    r = n(243721),
    a = n(942075),
    o = n(164696),
    d = n(997509),
    c = n(652215),
    u = n(985018);
let m = "NO_SYSTEM_CHANNEL";
function g(e) {
    let { guild: t, canManageGuild: n } = e,
        g = l.useCallback(
            (e, n) => {
                let i = (0, s.lA)(t.systemChannelFlags, e, n);
                d.A.updateGuild({ systemChannelFlags: i });
            },
            [t.systemChannelFlags],
        ),
        h = l.useCallback((e) => g(c.ogj.SUPPRESS_JOIN_NOTIFICATIONS, !e), [g]),
        x = l.useCallback((e) => g(c.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [g]),
        _ = l.useCallback((e) => g(c.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [g]),
        p = l.useCallback((e) => g(c.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [g]),
        A = l.useCallback((e) => g(c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [g]),
        E = l.useCallback((e) => g(c.ogj.SUPPRESS_VOICE_SESSION_NOTIFICATIONS, !e), [g]),
        f = l.useCallback((e) => g(c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [g]),
        j = t.systemChannelId ?? m,
        N = (0, a.g6)(t),
        I = N || (0, s.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        C = N || (0, s.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        b =
            (0, o.Zb)(t.id, "guild_settings") ||
            (0, s.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_VOICE_SESSION_NOTIFICATIONS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.d, {
                label: u.intl.string(u.t["+f0bXQ"]),
                checked: !(0, s.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_JOIN_NOTIFICATIONS),
                onChange: h,
                disabled: !n || j === m,
            }),
            (0, i.jsx)(r.d, {
                label: u.intl.string(u.t["72k7jf"]),
                checked: !(0, s.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                onChange: p,
                disabled: !n || j === m,
            }),
            (0, i.jsx)(r.d, {
                label: u.intl.string(u.t["2L8NCN"]),
                checked: !(0, s.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                onChange: x,
                disabled: !n || j === m,
            }),
            (0, i.jsx)(r.d, {
                label: u.intl.string(u.t["NvnW+V"]),
                checked: !(0, s.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                onChange: _,
                disabled: !n || j === m,
            }),
            I &&
                (0, i.jsx)(r.d, {
                    label: u.intl.string(u.t["54n19R"]),
                    checked: !(0, s.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    onChange: A,
                    disabled: !n || j === m,
                }),
            C &&
                (0, i.jsx)(r.d, {
                    label: u.intl.string(u.t["IhF5d+"]),
                    checked: !(0, s.Lt)(
                        t.systemChannelFlags,
                        c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
                    ),
                    onChange: f,
                    disabled: !n || j === m,
                }),
            b &&
                (0, i.jsx)(r.d, {
                    label: u.intl.string(u.t.IMtHBW),
                    checked: !(0, s.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_VOICE_SESSION_NOTIFICATIONS),
                    onChange: E,
                    disabled: !n || j === m,
                }),
        ],
    });
}
