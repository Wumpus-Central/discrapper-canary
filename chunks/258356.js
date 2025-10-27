n.d(t, {
    X: () => m,
    Z: () => f,
}),
    n(953529);
var r = n(951288);
n(647438);
var i = n(755721),
    s = n(481060),
    l = n(565138),
    a = n(372769),
    o = n(742593),
    c = n(390072),
    u = n(411198),
    d = n(230224),
    h = n(388032),
    g = n(694527);
function p(e) {
    var t;
    let { guildScheduledEvent: n, channel: s, onAcceptInvite: l, isSubmitting: a } = e;
    return (0, r.jsxs)("div", {
        className: g.guildEventCard,
        children: [
            (0, r.jsx)(o.ZP, {
                name: n.name,
                description: null != (t = n.description) ? t : void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: g.__invalid_channelDescription,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n,
            }),
            null != s &&
                (0, r.jsx)("div", {
                    className: g.channelInfo,
                    children: (0, r.jsx)(c.Z, {
                        guildScheduledEvent: n,
                        channel: s,
                    }),
                }),
            (0, r.jsx)(i.zx, {
                className: g.acceptButton,
                color: i.zx.Colors.GREEN,
                onClick: l,
                submitting: a,
                children: h.intl.string(h.t.riu2R5),
            }),
        ],
    });
}
function m(e) {
    var t;
    let { invite: n } = e,
        i = null != n.guild ? (0, u.Qs)(n.guild) : null;
    if (null == i) return null;
    let o = null != (t = i.description) ? t : "";
    return (0, r.jsxs)("div", {
        className: g.guildInfoCard,
        children: [
            (0, r.jsx)(s.Heading, {
                className: g.presentedBy,
                variant: "text-sm/medium",
                children: h.intl.string(h.t.Eabu1z),
            }),
            (0, r.jsxs)("div", {
                className: g.guildContainer,
                children: [
                    (0, r.jsx)(l.Z, {
                        guild: i,
                        active: !0,
                        size: l.Z.Sizes.MEDIUM,
                    }),
                    (0, r.jsxs)("div", {
                        className: g.guildDetailsContanier,
                        children: [
                            (0, r.jsxs)(s.Text, {
                                className: g.guildName,
                                color: "header-primary",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    i.name,
                                    (0, r.jsx)(a.Z, {
                                        guild: i,
                                        className: g.guildBadge,
                                        tooltipPosition: "left",
                                    }),
                                ],
                            }),
                            (0, r.jsx)(d.V6, {
                                invite: n,
                                textClassName: g.guildInfoMemberCountText,
                                className: g.guildInfoMemberCount,
                            }),
                        ],
                    }),
                ],
            }),
            o.length > 0 &&
                (0, r.jsx)("details", {
                    className: g.guildDescriptionContainer,
                    children: (0, r.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: o,
                    }),
                }),
        ],
    });
}
function f(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: s } = e,
        { guild_scheduled_event: l } = t;
    return null != l
        ? (0, r.jsx)(p, {
              guildScheduledEvent: l,
              channel: n,
              isSubmitting: i,
              onAcceptInvite: s,
          })
        : null;
}
