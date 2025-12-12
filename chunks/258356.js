n.d(t, {
    X: () => m,
    Z: () => p,
}),
    n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    s = n(565138),
    l = n(372769),
    a = n(742593),
    o = n(390072),
    c = n(411198),
    u = n(230224),
    d = n(388032),
    h = n(694527);
function g(e) {
    var t;
    let { guildScheduledEvent: n, channel: s, onAcceptInvite: l, isSubmitting: c } = e;
    return (0, r.jsxs)("div", {
        className: h.guildEventCard,
        children: [
            (0, r.jsx)(a.ZP, {
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
                    className: h.channelInfo,
                    children: (0, r.jsx)(o.Z, {
                        guildScheduledEvent: n,
                        channel: s,
                    }),
                }),
            (0, r.jsx)("div", {
                className: h.acceptButton,
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
function m(e) {
    var t;
    let { invite: n } = e,
        a = null != n.guild ? (0, c.Qs)(n.guild) : null;
    if (null == a) return null;
    let o = null != (t = a.description) ? t : "";
    return (0, r.jsxs)("div", {
        className: h.guildInfoCard,
        children: [
            (0, r.jsx)(i.Heading, {
                className: h.presentedBy,
                variant: "text-sm/medium",
                children: d.intl.string(d.t.Eabu1z),
            }),
            (0, r.jsxs)("div", {
                className: h.guildContainer,
                children: [
                    (0, r.jsx)(s.Z, {
                        guild: a,
                        active: !0,
                        size: s.Z.Sizes.MEDIUM,
                    }),
                    (0, r.jsxs)("div", {
                        className: h.guildDetailsContanier,
                        children: [
                            (0, r.jsxs)(i.Text, {
                                className: h.guildName,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    a.name,
                                    (0, r.jsx)(l.Z, {
                                        guild: a,
                                        className: h.guildBadge,
                                        tooltipPosition: "left",
                                    }),
                                ],
                            }),
                            (0, r.jsx)(u.V6, {
                                invite: n,
                                textClassName: h.guildInfoMemberCountText,
                                className: h.guildInfoMemberCount,
                            }),
                        ],
                    }),
                ],
            }),
            o.length > 0 &&
                (0, r.jsx)("details", {
                    className: h.guildDescriptionContainer,
                    children: (0, r.jsx)(i.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: o,
                    }),
                }),
        ],
    });
}
function p(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: s } = e,
        { guild_scheduled_event: l } = t;
    return null != l
        ? (0, r.jsx)(g, {
              guildScheduledEvent: l,
              channel: n,
              isSubmitting: i,
              onAcceptInvite: s,
          })
        : null;
}
