"use strict";
n.d(t, { l: () => x });
var i = n(627968),
    s = n(64700),
    l = n(665260),
    r = n(397927),
    a = n(149305),
    o = n(349327),
    d = n(942075),
    c = n(997509),
    u = n(652215),
    m = n(985018);
let g = "NO_SYSTEM_CHANNEL";
function x(e) {
    let { guild: t, canManageGuild: n } = e,
        { enableDeadchat: x } = a.c.useExperiment(
            { guildId: t.id, location: "guild_settings" },
            { disable: null == t, autoTrackExposure: !0 },
        ),
        { enabled: h } = o.A.useExperiment(
            { guildId: t.id, location: "guild_settings" },
            { disable: null == t, autoTrackExposure: !1 },
        ),
        _ = s.useCallback(
            (e, n) => {
                let i = (0, l.lA)(t.systemChannelFlags, e, n);
                c.A.updateGuild({ systemChannelFlags: i });
            },
            [t.systemChannelFlags],
        ),
        A = s.useCallback((e) => _(u.ogj.SUPPRESS_JOIN_NOTIFICATIONS, !e), [_]),
        p = s.useCallback((e) => _(u.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [_]),
        f = s.useCallback((e) => _(u.ogj.SUPPRESS_UGC_ADDED_NOTIFICATIONS, !e), [_]),
        j = s.useCallback((e) => _(u.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [_]),
        N = s.useCallback((e) => _(u.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [_]),
        E = s.useCallback((e) => _(u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [_]),
        b = s.useCallback((e) => _(u.ogj.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [_]),
        T = s.useCallback((e) => _(u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [_]),
        C = t.systemChannelId ?? g,
        I = (0, d.g6)(t),
        v = I || (0, l.Lt)(t.systemChannelFlags, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        S = I || (0, l.Lt)(t.systemChannelFlags, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.dOG, {
                label: m.intl.string(m.t["+f0bXQ"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, u.ogj.SUPPRESS_JOIN_NOTIFICATIONS),
                onChange: A,
                disabled: !n || C === g,
            }),
            (0, i.jsx)(r.dOG, {
                label: m.intl.string(m.t["72k7jf"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, u.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                onChange: N,
                disabled: !n || C === g,
            }),
            (0, i.jsx)(r.dOG, {
                label: m.intl.string(m.t["2L8NCN"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, u.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                onChange: p,
                disabled: !n || C === g,
            }),
            (0, i.jsx)(r.dOG, {
                label: m.intl.string(m.t["NvnW+V"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, u.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                onChange: j,
                disabled: !n || C === g,
            }),
            h &&
                (0, i.jsx)(r.dOG, {
                    label: m.intl.string(m.t["CLCoc+"]),
                    checked: !(0, l.Lt)(t.systemChannelFlags, u.ogj.SUPPRESS_UGC_ADDED_NOTIFICATIONS),
                    onChange: f,
                    disabled: !n || C === g,
                }),
            v &&
                (0, i.jsx)(r.dOG, {
                    label: m.intl.string(m.t["54n19R"]),
                    checked: !(0, l.Lt)(t.systemChannelFlags, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    onChange: E,
                    disabled: !n || C === g,
                }),
            S &&
                (0, i.jsx)(r.dOG, {
                    label: m.intl.string(m.t["IhF5d+"]),
                    checked: !(0, l.Lt)(
                        t.systemChannelFlags,
                        u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
                    ),
                    onChange: T,
                    disabled: !n || C === g,
                }),
            x &&
                (0, i.jsx)(r.dOG, {
                    label: m.intl.string(m.t["3yOX1/"]),
                    badge: "beta",
                    checked: !(0, l.Lt)(t.systemChannelFlags, u.ogj.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                    onChange: b,
                    disabled: !n || C === g,
                }),
        ],
    });
}
