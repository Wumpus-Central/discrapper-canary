"use strict";
n.d(t, { A: () => g, s: () => p });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(263063),
    l = n(714991),
    a = n(557582),
    o = n(167630),
    d = n(860689),
    c = n(949155),
    u = n(985018),
    h = n(948295);
function _(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: r, isSubmitting: l } = e;
    return (0, i.jsxs)("div", {
        className: h.s4,
        children: [
            (0, i.jsx)(a.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: h.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, i.jsx)("div", {
                    className: h.yW,
                    children: (0, i.jsx)(o.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, i.jsx)("div", {
                className: h.xG,
                children: (0, i.jsx)(s.Button, {
                    variant: "active",
                    size: "md",
                    text: u.intl.string(u.t.riu2R5),
                    onClick: r,
                    loading: l,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function p(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, d.DY)(t.guild) : null;
    if (null == n) return null;
    let a = n.description ?? "";
    return (0, i.jsxs)("div", {
        className: h.kQ,
        children: [
            (0, i.jsx)(s.Heading, { className: h.s7, variant: "text-sm/medium", children: u.intl.string(u.t.Eabu1z) }),
            (0, i.jsxs)("div", {
                className: h.bo,
                children: [
                    (0, i.jsx)(r.Ay, { guild: n, active: !0, size: r.Ay.Sizes.MEDIUM }),
                    (0, i.jsxs)("div", {
                        className: h.bW,
                        children: [
                            (0, i.jsxs)(s.Text, {
                                className: h.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, i.jsx)(l.A, { guild: n, className: h.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, i.jsx)(c.IK, { invite: t, textClassName: h.kS, className: h.pe }),
                        ],
                    }),
                ],
            }),
            a.length > 0 &&
                (0, i.jsx)("details", {
                    className: h.x_,
                    children: (0, i.jsx)(s.Text, { color: "text-default", variant: "text-sm/normal", children: a }),
                }),
        ],
    });
}
function g(e) {
    let { invite: t, channel: n, isSubmitting: s, onAcceptInvite: r } = e,
        { guild_scheduled_event: l } = t;
    return null != l ? (0, i.jsx)(_, { guildScheduledEvent: l, channel: n, isSubmitting: s, onAcceptInvite: r }) : null;
}
