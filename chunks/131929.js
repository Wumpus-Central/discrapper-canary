"use strict";
n.d(t, { A: () => A, s: () => g });
var i = n(627968);
n(64700);
var s = n(821609),
    r = n(534514),
    l = n(834730),
    a = n(263063),
    o = n(714991),
    c = n(557582),
    d = n(167630),
    u = n(860689),
    _ = n(949155),
    h = n(985018),
    m = n(367048);
function p(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: r, isSubmitting: l } = e;
    return (0, i.jsxs)("div", {
        className: m.s4,
        children: [
            (0, i.jsx)(c.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: m.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, i.jsx)("div", {
                    className: m.yW,
                    children: (0, i.jsx)(d.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, i.jsx)("div", {
                className: m.xG,
                children: (0, i.jsx)(s.$, {
                    variant: "active",
                    size: "md",
                    text: h.intl.string(h.t.riu2R5),
                    onClick: r,
                    loading: l,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function g(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, u.DY)(t.guild) : null;
    if (null == n) return null;
    let s = n.description ?? "";
    return (0, i.jsxs)("div", {
        className: m.kQ,
        children: [
            (0, i.jsx)(r.D, { className: m.s7, variant: "text-sm/medium", children: h.intl.string(h.t.Eabu1z) }),
            (0, i.jsxs)("div", {
                className: m.bo,
                children: [
                    (0, i.jsx)(a.Ay, { guild: n, active: !0, size: a.Ay.Sizes.MEDIUM }),
                    (0, i.jsxs)("div", {
                        className: m.bW,
                        children: [
                            (0, i.jsxs)(l.E, {
                                className: m.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, i.jsx)(o.A, { guild: n, className: m.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, i.jsx)(_.IK, { invite: t, textClassName: m.kS, className: m.pe }),
                        ],
                    }),
                ],
            }),
            s.length > 0 &&
                (0, i.jsx)("details", {
                    className: m.x_,
                    children: (0, i.jsx)(l.E, { color: "text-default", variant: "text-sm/normal", children: s }),
                }),
        ],
    });
}
function A(e) {
    let { invite: t, channel: n, isSubmitting: s, onAcceptInvite: r } = e,
        { guild_scheduled_event: l } = t;
    return null != l ? (0, i.jsx)(p, { guildScheduledEvent: l, channel: n, isSubmitting: s, onAcceptInvite: r }) : null;
}
