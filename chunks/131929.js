n.d(t, {
    A: () => g,
    s: () => p,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(263063),
    l = n(714991),
    a = n(557582),
    o = n(167630),
    c = n(860689),
    u = n(949155),
    d = n(985018),
    h = n(979533);
function f(e) {
    var t;
    let { guildScheduledEvent: n, channel: s, onAcceptInvite: l, isSubmitting: c } = e;
    return (0, r.jsxs)("div", {
        className: h.s4,
        children: [
            (0, r.jsx)(a.Ay, {
                name: n.name,
                description: null != (t = n.description) ? t : void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: h.__invalid_channelDescription,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n,
            }),
            null != s &&
                (0, r.jsx)("div", {
                    className: h.yW,
                    children: (0, r.jsx)(o.A, {
                        guildScheduledEvent: n,
                        channel: s,
                    }),
                }),
            (0, r.jsx)("div", {
                className: h.xG,
                children: (0, r.jsx)(i.Button, {
                    variant: "active",
                    size: "md",
                    text: d.intl.string(d.t.riu2R5),
                    onClick: l,
                    loading: c,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function p(e) {
    var t;
    let { invite: n } = e,
        a = null != n.guild ? (0, c.DY)(n.guild) : null;
    if (null == a) return null;
    let o = null != (t = a.description) ? t : "";
    return (0, r.jsxs)("div", {
        className: h.kQ,
        children: [
            (0, r.jsx)(i.Heading, {
                className: h.s7,
                variant: "text-sm/medium",
                children: d.intl.string(d.t.Eabu1z),
            }),
            (0, r.jsxs)("div", {
                className: h.bo,
                children: [
                    (0, r.jsx)(s.A, {
                        guild: a,
                        active: !0,
                        size: s.A.Sizes.MEDIUM,
                    }),
                    (0, r.jsxs)("div", {
                        className: h.bW,
                        children: [
                            (0, r.jsxs)(i.Text, {
                                className: h.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    a.name,
                                    (0, r.jsx)(l.A, {
                                        guild: a,
                                        className: h.n2,
                                        tooltipPosition: "left",
                                    }),
                                ],
                            }),
                            (0, r.jsx)(u.IK, {
                                invite: n,
                                textClassName: h.kS,
                                className: h.pe,
                            }),
                        ],
                    }),
                ],
            }),
            o.length > 0 &&
                (0, r.jsx)("details", {
                    className: h.x_,
                    children: (0, r.jsx)(i.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: o,
                    }),
                }),
        ],
    });
}
function g(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: s } = e,
        { guild_scheduled_event: l } = t;
    return null != l
        ? (0, r.jsx)(f, {
              guildScheduledEvent: l,
              channel: n,
              isSubmitting: i,
              onAcceptInvite: s,
          })
        : null;
}
