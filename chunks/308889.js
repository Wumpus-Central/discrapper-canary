n.d(t, {
    l: () => b,
});
var r = n(627968),
    i = n(64700),
    l = n(665260),
    s = n(397927),
    a = n(149305),
    c = n(349327),
    o = n(942075),
    d = n(997509),
    u = n(652215),
    f = n(985018);
let g = "NO_SYSTEM_CHANNEL";

function b(e) {
    var t;
    let { guild: n, canManageGuild: b } = e,
        { enableDeadchat: m } = a.c.useExperiment(
            {
                guildId: n.id,
                location: "guild_settings",
            },
            {
                disable: null == n,
                autoTrackExposure: !0,
            },
        ),
        { enabled: p } = c.A.useExperiment(
            {
                guildId: n.id,
                location: "guild_settings",
            },
            {
                disable: null == n,
                autoTrackExposure: !1,
            },
        ),
        x = i.useCallback(
            (e, t) => {
                let r = (0, l.lA)(n.systemChannelFlags, e, t);
                d.A.updateGuild({
                    systemChannelFlags: r,
                });
            },
            [n.systemChannelFlags],
        ),
        h = i.useCallback((e) => x(u.ogj.SUPPRESS_JOIN_NOTIFICATIONS, !e), [x]),
        j = i.useCallback((e) => x(u.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [x]),
        O = i.useCallback((e) => x(u.ogj.SUPPRESS_UGC_ADDED_NOTIFICATIONS, !e), [x]),
        y = i.useCallback((e) => x(u.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [x]),
        v = i.useCallback((e) => x(u.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [x]),
        A = i.useCallback((e) => x(u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [x]),
        E = i.useCallback((e) => x(u.ogj.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [x]),
        N = i.useCallback((e) => x(u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [x]),
        _ = null != (t = n.systemChannelId) ? t : g,
        S = (0, o.g6)(n),
        T = S || (0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        I = S || (0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.dOG, {
                label: f.intl.string(f.t["+f0bXQ"]),
                checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_JOIN_NOTIFICATIONS),
                onChange: h,
                disabled: !b || _ === g,
            }),
            (0, r.jsx)(s.dOG, {
                label: f.intl.string(f.t["72k7jf"]),
                checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                onChange: v,
                disabled: !b || _ === g,
            }),
            (0, r.jsx)(s.dOG, {
                label: f.intl.string(f.t["2L8NCN"]),
                checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                onChange: j,
                disabled: !b || _ === g,
            }),
            (0, r.jsx)(s.dOG, {
                label: f.intl.string(f.t["NvnW+V"]),
                checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                onChange: y,
                disabled: !b || _ === g,
            }),
            p &&
                (0, r.jsx)(s.dOG, {
                    label: f.intl.string(f.t["CLCoc+"]),
                    checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_UGC_ADDED_NOTIFICATIONS),
                    onChange: O,
                    disabled: !b || _ === g,
                }),
            T &&
                (0, r.jsx)(s.dOG, {
                    label: f.intl.string(f.t["54n19R"]),
                    checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    onChange: A,
                    disabled: !b || _ === g,
                }),
            I &&
                (0, r.jsx)(s.dOG, {
                    label: f.intl.string(f.t["IhF5d+"]),
                    checked: !(0, l.Lt)(
                        n.systemChannelFlags,
                        u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
                    ),
                    onChange: N,
                    disabled: !b || _ === g,
                }),
            m &&
                (0, r.jsx)(s.dOG, {
                    label: f.intl.string(f.t["3yOX1/"]),
                    badge: "beta",
                    checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                    onChange: E,
                    disabled: !b || _ === g,
                }),
        ],
    });
}
