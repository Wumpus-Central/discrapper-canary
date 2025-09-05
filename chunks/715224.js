n.d(t, { W: () => h });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(890477),
    s = n(649179),
    o = n(688465),
    c = n(35125),
    d = n(630388),
    u = n(434404),
    m = n(981631),
    g = n(388032),
    p = n(752830);
let f = "NO_SYSTEM_CHANNEL";
function h(e) {
    var t;
    let { guild: n, canManageGuild: h, switchClassName: b } = e,
        { enableDeadchat: x } = a.Z.useExperiment(
            {
                guildId: n.id,
                location: "guild_settings",
            },
            {
                disable: null == n,
                autoTrackExposure: !0,
            },
        ),
        { enabled: j } = s.Z.useExperiment(
            {
                guildId: n.id,
                location: "guild_settings",
            },
            {
                disable: null == n,
                autoTrackExposure: !1,
            },
        ),
        _ = i.useCallback(
            (e, t) => {
                let r = (0, d.mB)(n.systemChannelFlags, e, t);
                u.Z.updateGuild({ systemChannelFlags: r });
            },
            [n.systemChannelFlags],
        ),
        v = i.useCallback((e) => _(m.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e), [_]),
        O = i.useCallback((e) => _(m.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [_]),
        y = i.useCallback((e) => _(m.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS, !e), [_]),
        C = i.useCallback((e) => _(m.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [_]),
        N = i.useCallback((e) => _(m.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [_]),
        E = i.useCallback((e) => _(m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [_]),
        I = i.useCallback((e) => _(m.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [_]),
        S = i.useCallback((e) => _(m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [_]),
        T = null != (t = n.systemChannelId) ? t : f,
        P = (0, c.eI)(n),
        w = P || (0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        R = P || (0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.j7V, {
                className: b,
                onChange: v,
                value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
                hideBorder: !0,
                disabled: !h || T === f,
                children: g.intl.string(g.t["+f0bXV"]),
            }),
            (0, r.jsx)(l.j7V, {
                className: b,
                onChange: N,
                value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                hideBorder: !0,
                disabled: !h || T === f,
                children: g.intl.string(g.t["72k7jY"]),
            }),
            (0, r.jsx)(l.j7V, {
                className: b,
                onChange: O,
                value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                hideBorder: !0,
                disabled: !h || T === f,
                children: g.intl.string(g.t["2L8NCA"]),
            }),
            (0, r.jsx)(l.j7V, {
                className: b,
                onChange: C,
                value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                hideBorder: !0,
                disabled: !h || T === f,
                children: g.intl.string(g.t["NvnW+f"]),
            }),
            j &&
                (0, r.jsx)(l.j7V, {
                    className: b,
                    onChange: y,
                    value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !h || T === f,
                    children: g.intl.string(g.t.CLCoc3),
                }),
            w &&
                (0, r.jsx)(l.j7V, {
                    className: b,
                    onChange: E,
                    value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !h || T === f,
                    children: g.intl.string(g.t["54n19f"]),
                }),
            R &&
                (0, r.jsx)(l.j7V, {
                    className: b,
                    onChange: S,
                    value: !(0, d.yE)(
                        n.systemChannelFlags,
                        m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
                    ),
                    hideBorder: !0,
                    disabled: !h || T === f,
                    children: g.intl.string(g.t.IhF5d3),
                }),
            x &&
                (0, r.jsx)(l.j7V, {
                    className: b,
                    onChange: I,
                    value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                    hideBorder: !0,
                    disabled: !h || T === f,
                    children: (0, r.jsxs)("div", {
                        className: p.flexRow,
                        children: [g.intl.string(g.t["3yOX19"]), (0, r.jsx)(o.Z, {})],
                    }),
                }),
        ],
    });
}
