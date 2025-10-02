n.d(t, { W: () => p });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    s = n(890477),
    a = n(649179),
    o = n(35125),
    c = n(630388),
    d = n(434404),
    u = n(981631),
    m = n(388032);
let g = "NO_SYSTEM_CHANNEL";
function p(e) {
    var t;
    let { guild: n, canManageGuild: p } = e,
        { enableDeadchat: f } = s.Z.useExperiment(
            {
                guildId: n.id,
                location: "guild_settings",
            },
            {
                disable: null == n,
                autoTrackExposure: !0,
            },
        ),
        { enabled: h } = a.Z.useExperiment(
            {
                guildId: n.id,
                location: "guild_settings",
            },
            {
                disable: null == n,
                autoTrackExposure: !1,
            },
        ),
        b = i.useCallback(
            (e, t) => {
                let r = (0, c.mB)(n.systemChannelFlags, e, t);
                d.Z.updateGuild({ systemChannelFlags: r });
            },
            [n.systemChannelFlags],
        ),
        x = i.useCallback((e) => b(u.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e), [b]),
        j = i.useCallback((e) => b(u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [b]),
        v = i.useCallback((e) => b(u.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS, !e), [b]),
        _ = i.useCallback((e) => b(u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [b]),
        O = i.useCallback((e) => b(u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [b]),
        y = i.useCallback((e) => b(u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [b]),
        C = i.useCallback((e) => b(u.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [b]),
        N = i.useCallback((e) => b(u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [b]),
        E = null != (t = n.systemChannelId) ? t : g,
        I = (0, o.eI)(n),
        S = I || (0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        T = I || (0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.rsf, {
                label: m.intl.string(m.t["+f0bXV"]),
                checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
                onChange: x,
                disabled: !p || E === g,
            }),
            (0, r.jsx)(l.rsf, {
                label: m.intl.string(m.t["72k7jY"]),
                checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                onChange: O,
                disabled: !p || E === g,
            }),
            (0, r.jsx)(l.rsf, {
                label: m.intl.string(m.t["2L8NCA"]),
                checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                onChange: j,
                disabled: !p || E === g,
            }),
            (0, r.jsx)(l.rsf, {
                label: m.intl.string(m.t["NvnW+f"]),
                checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                onChange: _,
                disabled: !p || E === g,
            }),
            h &&
                (0, r.jsx)(l.rsf, {
                    label: m.intl.string(m.t.CLCoc3),
                    checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS),
                    onChange: v,
                    disabled: !p || E === g,
                }),
            S &&
                (0, r.jsx)(l.rsf, {
                    label: m.intl.string(m.t["54n19f"]),
                    checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    onChange: y,
                    disabled: !p || E === g,
                }),
            T &&
                (0, r.jsx)(l.rsf, {
                    label: m.intl.string(m.t.IhF5d3),
                    checked: !(0, c.yE)(
                        n.systemChannelFlags,
                        u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
                    ),
                    onChange: N,
                    disabled: !p || E === g,
                }),
            f &&
                (0, r.jsx)(l.rsf, {
                    label: m.intl.string(m.t["3yOX19"]),
                    badge: "beta",
                    checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                    onChange: C,
                    disabled: !p || E === g,
                }),
        ],
    });
}
