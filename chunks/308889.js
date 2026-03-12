"use strict";
n.d(t, { l: () => g });
var i = n(627968),
    s = n(64700),
    l = n(665260),
    r = n(397927),
    a = n(942075),
    o = n(164696),
    d = n(997509),
    c = n(652215),
    u = n(985018);
let m = "NO_SYSTEM_CHANNEL";
function g(e) {
    let { guild: t, canManageGuild: n } = e,
        g = s.useCallback(
            (e, n) => {
                let i = (0, l.lA)(t.systemChannelFlags, e, n);
                d.A.updateGuild({ systemChannelFlags: i });
            },
            [t.systemChannelFlags],
        ),
        x = s.useCallback((e) => g(c.ogj.SUPPRESS_JOIN_NOTIFICATIONS, !e), [g]),
        h = s.useCallback((e) => g(c.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [g]),
        _ = s.useCallback((e) => g(c.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [g]),
        p = s.useCallback((e) => g(c.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [g]),
        A = s.useCallback((e) => g(c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [g]),
        f = s.useCallback((e) => g(c.ogj.SUPPRESS_VOICE_SESSION_NOTIFICATIONS, !e), [g]),
        j = s.useCallback((e) => g(c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [g]),
        N = t.systemChannelId ?? m,
        E = (0, a.g6)(t),
        b = E || (0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        T = E || (0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        C =
            (0, o.Zb)(t.id, "guild_settings") ||
            (0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_VOICE_SESSION_NOTIFICATIONS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.dOG, {
                label: u.intl.string(u.t["+f0bXQ"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_JOIN_NOTIFICATIONS),
                onChange: x,
                disabled: !n || N === m,
            }),
            (0, i.jsx)(r.dOG, {
                label: u.intl.string(u.t["72k7jf"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                onChange: p,
                disabled: !n || N === m,
            }),
            (0, i.jsx)(r.dOG, {
                label: u.intl.string(u.t["2L8NCN"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                onChange: h,
                disabled: !n || N === m,
            }),
            (0, i.jsx)(r.dOG, {
                label: u.intl.string(u.t["NvnW+V"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                onChange: _,
                disabled: !n || N === m,
            }),
            b &&
                (0, i.jsx)(r.dOG, {
                    label: u.intl.string(u.t["54n19R"]),
                    checked: !(0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    onChange: A,
                    disabled: !n || N === m,
                }),
            T &&
                (0, i.jsx)(r.dOG, {
                    label: u.intl.string(u.t["IhF5d+"]),
                    checked: !(0, l.Lt)(
                        t.systemChannelFlags,
                        c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
                    ),
                    onChange: j,
                    disabled: !n || N === m,
                }),
            C &&
                (0, i.jsx)(r.dOG, {
                    label: u.intl.string(u.t.IMtHBW),
                    checked: !(0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_VOICE_SESSION_NOTIFICATIONS),
                    onChange: f,
                    disabled: !n || N === m,
                }),
        ],
    });
}
