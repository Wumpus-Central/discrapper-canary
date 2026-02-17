"use strict";
n.d(t, { l: () => m });
var i = n(627968),
    s = n(64700),
    l = n(665260),
    r = n(397927),
    a = n(149305),
    o = n(942075),
    d = n(997509),
    c = n(652215),
    u = n(985018);
let g = "NO_SYSTEM_CHANNEL";
function m(e) {
    let { guild: t, canManageGuild: n } = e,
        { enableDeadchat: m } = a.c.useExperiment(
            { guildId: t.id, location: "guild_settings" },
            { disable: null == t, autoTrackExposure: !0 },
        ),
        x = s.useCallback(
            (e, n) => {
                let i = (0, l.lA)(t.systemChannelFlags, e, n);
                d.A.updateGuild({ systemChannelFlags: i });
            },
            [t.systemChannelFlags],
        ),
        h = s.useCallback((e) => x(c.ogj.SUPPRESS_JOIN_NOTIFICATIONS, !e), [x]),
        _ = s.useCallback((e) => x(c.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [x]),
        A = s.useCallback((e) => x(c.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [x]),
        p = s.useCallback((e) => x(c.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [x]),
        f = s.useCallback((e) => x(c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [x]),
        j = s.useCallback((e) => x(c.ogj.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [x]),
        N = s.useCallback((e) => x(c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [x]),
        E = t.systemChannelId ?? g,
        b = (0, o.g6)(t),
        T = b || (0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        C = b || (0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.dOG, {
                label: u.intl.string(u.t["+f0bXQ"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_JOIN_NOTIFICATIONS),
                onChange: h,
                disabled: !n || E === g,
            }),
            (0, i.jsx)(r.dOG, {
                label: u.intl.string(u.t["72k7jf"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                onChange: p,
                disabled: !n || E === g,
            }),
            (0, i.jsx)(r.dOG, {
                label: u.intl.string(u.t["2L8NCN"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                onChange: _,
                disabled: !n || E === g,
            }),
            (0, i.jsx)(r.dOG, {
                label: u.intl.string(u.t["NvnW+V"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                onChange: A,
                disabled: !n || E === g,
            }),
            T &&
                (0, i.jsx)(r.dOG, {
                    label: u.intl.string(u.t["54n19R"]),
                    checked: !(0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    onChange: f,
                    disabled: !n || E === g,
                }),
            C &&
                (0, i.jsx)(r.dOG, {
                    label: u.intl.string(u.t["IhF5d+"]),
                    checked: !(0, l.Lt)(
                        t.systemChannelFlags,
                        c.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
                    ),
                    onChange: N,
                    disabled: !n || E === g,
                }),
            m &&
                (0, i.jsx)(r.dOG, {
                    label: u.intl.string(u.t["3yOX1/"]),
                    badge: "beta",
                    checked: !(0, l.Lt)(t.systemChannelFlags, c.ogj.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                    onChange: j,
                    disabled: !n || E === g,
                }),
        ],
    });
}
