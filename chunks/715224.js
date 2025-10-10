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
    g = n(388032);
let m = "NO_SYSTEM_CHANNEL";
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
        x = i.useCallback(
            (e, t) => {
                let r = (0, c.mB)(n.systemChannelFlags, e, t);
                d.Z.updateGuild({ systemChannelFlags: r });
            },
            [n.systemChannelFlags],
        ),
        b = i.useCallback((e) => x(u.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e), [x]),
        j = i.useCallback((e) => x(u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [x]),
        _ = i.useCallback((e) => x(u.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS, !e), [x]),
        v = i.useCallback((e) => x(u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [x]),
        C = i.useCallback((e) => x(u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [x]),
        O = i.useCallback((e) => x(u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [x]),
        y = i.useCallback((e) => x(u.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [x]),
        N = i.useCallback((e) => x(u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [x]),
        E = null != (t = n.systemChannelId) ? t : m,
        I = (0, o.eI)(n),
        S = I || (0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        T = I || (0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.rsf, {
                label: g.intl.string(g.t["+f0bXV"]),
                checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
                onChange: b,
                disabled: !p || E === m,
            }),
            (0, r.jsx)(l.rsf, {
                label: g.intl.string(g.t["72k7jY"]),
                checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                onChange: C,
                disabled: !p || E === m,
            }),
            (0, r.jsx)(l.rsf, {
                label: g.intl.string(g.t["2L8NCA"]),
                checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                onChange: j,
                disabled: !p || E === m,
            }),
            (0, r.jsx)(l.rsf, {
                label: g.intl.string(g.t["NvnW+f"]),
                checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                onChange: v,
                disabled: !p || E === m,
            }),
            h &&
                (0, r.jsx)(l.rsf, {
                    label: g.intl.string(g.t.CLCoc3),
                    checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS),
                    onChange: _,
                    disabled: !p || E === m,
                }),
            S &&
                (0, r.jsx)(l.rsf, {
                    label: g.intl.string(g.t["54n19f"]),
                    checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    onChange: O,
                    disabled: !p || E === m,
                }),
            T &&
                (0, r.jsx)(l.rsf, {
                    label: g.intl.string(g.t.IhF5d3),
                    checked: !(0, c.yE)(
                        n.systemChannelFlags,
                        u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
                    ),
                    onChange: N,
                    disabled: !p || E === m,
                }),
            f &&
                (0, r.jsx)(l.rsf, {
                    label: g.intl.string(g.t["3yOX19"]),
                    badge: "beta",
                    checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                    onChange: y,
                    disabled: !p || E === m,
                }),
        ],
    });
}
