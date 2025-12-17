n.d(t, { W: () => m });
var r = n(54381),
    i = n(473749),
    l = n(95015),
    a = n(481060),
    s = n(890477),
    o = n(649179),
    c = n(35125),
    d = n(434404),
    u = n(981631),
    g = n(388032);
let f = "NO_SYSTEM_CHANNEL";
function m(e) {
    var t;
    let { guild: n, canManageGuild: m } = e,
        { enableDeadchat: b } = s.Z.useExperiment(
            {
                guildId: n.id,
                location: "guild_settings",
            },
            {
                disable: null == n,
                autoTrackExposure: !0,
            },
        ),
        { enabled: p } = o.Z.useExperiment(
            {
                guildId: n.id,
                location: "guild_settings",
            },
            {
                disable: null == n,
                autoTrackExposure: !1,
            },
        ),
        h = i.useCallback(
            (e, t) => {
                let r = (0, l.mB)(n.systemChannelFlags, e, t);
                d.Z.updateGuild({ systemChannelFlags: r });
            },
            [n.systemChannelFlags],
        ),
        x = i.useCallback((e) => h(u.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e), [h]),
        j = i.useCallback((e) => h(u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [h]),
        v = i.useCallback((e) => h(u.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS, !e), [h]),
        O = i.useCallback((e) => h(u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [h]),
        C = i.useCallback((e) => h(u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [h]),
        y = i.useCallback((e) => h(u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [h]),
        N = i.useCallback((e) => h(u.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [h]),
        E = i.useCallback((e) => h(u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [h]),
        I = null != (t = n.systemChannelId) ? t : f,
        S = (0, c.eI)(n),
        _ = S || (0, l.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        T = S || (0, l.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.rsf, {
                label: g.intl.string(g.t["+f0bXQ"]),
                checked: !(0, l.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
                onChange: x,
                disabled: !m || I === f,
            }),
            (0, r.jsx)(a.rsf, {
                label: g.intl.string(g.t["72k7jf"]),
                checked: !(0, l.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                onChange: C,
                disabled: !m || I === f,
            }),
            (0, r.jsx)(a.rsf, {
                label: g.intl.string(g.t["2L8NCN"]),
                checked: !(0, l.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                onChange: j,
                disabled: !m || I === f,
            }),
            (0, r.jsx)(a.rsf, {
                label: g.intl.string(g.t["NvnW+V"]),
                checked: !(0, l.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                onChange: O,
                disabled: !m || I === f,
            }),
            p &&
                (0, r.jsx)(a.rsf, {
                    label: g.intl.string(g.t["CLCoc+"]),
                    checked: !(0, l.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS),
                    onChange: v,
                    disabled: !m || I === f,
                }),
            _ &&
                (0, r.jsx)(a.rsf, {
                    label: g.intl.string(g.t["54n19R"]),
                    checked: !(0, l.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    onChange: y,
                    disabled: !m || I === f,
                }),
            T &&
                (0, r.jsx)(a.rsf, {
                    label: g.intl.string(g.t["IhF5d+"]),
                    checked: !(0, l.yE)(
                        n.systemChannelFlags,
                        u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
                    ),
                    onChange: E,
                    disabled: !m || I === f,
                }),
            b &&
                (0, r.jsx)(a.rsf, {
                    label: g.intl.string(g.t["3yOX1/"]),
                    badge: "beta",
                    checked: !(0, l.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                    onChange: N,
                    disabled: !m || I === f,
                }),
        ],
    });
}
