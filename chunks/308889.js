"use strict";
n.d(t, { l: () => m });
var i = n(627968),
    s = n(64700),
    l = n(665260),
    r = n(397927),
    a = n(942075),
    o = n(997509),
    d = n(652215),
    c = n(985018);
let u = "NO_SYSTEM_CHANNEL";
function m(e) {
    let { guild: t, canManageGuild: n } = e,
        m = s.useCallback(
            (e, n) => {
                let i = (0, l.lA)(t.systemChannelFlags, e, n);
                o.A.updateGuild({ systemChannelFlags: i });
            },
            [t.systemChannelFlags],
        ),
        g = s.useCallback((e) => m(d.ogj.SUPPRESS_JOIN_NOTIFICATIONS, !e), [m]),
        x = s.useCallback((e) => m(d.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [m]),
        h = s.useCallback((e) => m(d.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [m]),
        _ = s.useCallback((e) => m(d.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [m]),
        p = s.useCallback((e) => m(d.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [m]),
        A = s.useCallback((e) => m(d.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [m]),
        f = t.systemChannelId ?? u,
        j = (0, a.g6)(t),
        N = j || (0, l.Lt)(t.systemChannelFlags, d.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        E = j || (0, l.Lt)(t.systemChannelFlags, d.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.dOG, {
                label: c.intl.string(c.t["+f0bXQ"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, d.ogj.SUPPRESS_JOIN_NOTIFICATIONS),
                onChange: g,
                disabled: !n || f === u,
            }),
            (0, i.jsx)(r.dOG, {
                label: c.intl.string(c.t["72k7jf"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, d.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                onChange: _,
                disabled: !n || f === u,
            }),
            (0, i.jsx)(r.dOG, {
                label: c.intl.string(c.t["2L8NCN"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, d.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                onChange: x,
                disabled: !n || f === u,
            }),
            (0, i.jsx)(r.dOG, {
                label: c.intl.string(c.t["NvnW+V"]),
                checked: !(0, l.Lt)(t.systemChannelFlags, d.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                onChange: h,
                disabled: !n || f === u,
            }),
            N &&
                (0, i.jsx)(r.dOG, {
                    label: c.intl.string(c.t["54n19R"]),
                    checked: !(0, l.Lt)(t.systemChannelFlags, d.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    onChange: p,
                    disabled: !n || f === u,
                }),
            E &&
                (0, i.jsx)(r.dOG, {
                    label: c.intl.string(c.t["IhF5d+"]),
                    checked: !(0, l.Lt)(
                        t.systemChannelFlags,
                        d.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
                    ),
                    onChange: A,
                    disabled: !n || f === u,
                }),
        ],
    });
}
