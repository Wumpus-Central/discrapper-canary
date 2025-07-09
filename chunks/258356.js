(n.d(t, {
    X: () => m,
    Z: () => f
}),
    n(953529));
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    s = n(565138),
    a = n(372769),
    o = n(742593),
    c = n(390072),
    u = n(411198),
    d = n(230224),
    h = n(388032),
    p = n(807048);
function g(e) {
    var t;
    let { guildScheduledEvent: n, channel: l, onAcceptInvite: s, isSubmitting: a } = e;
    return (0, r.jsxs)('div', {
        className: p.guildEventCard,
        children: [
            (0, r.jsx)(o.ZP, {
                name: n.name,
                description: null != (t = n.description) ? t : void 0,
                headerVariant: 'heading-md/medium',
                descriptionClassName: p.__invalid_channelDescription,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n
            }),
            null != l &&
                (0, r.jsx)('div', {
                    className: p.channelInfo,
                    children: (0, r.jsx)(c.Z, {
                        guildScheduledEvent: n,
                        channel: l
                    })
                }),
            (0, r.jsx)(i.zx, {
                className: p.acceptButton,
                color: i.zx.Colors.GREEN,
                onClick: s,
                submitting: a,
                children: h.intl.string(h.t.riu2R0)
            })
        ]
    });
}
function m(e) {
    var t;
    let { invite: n } = e,
        i = null != n.guild ? (0, u.Qs)(n.guild) : null;
    if (null == i) return null;
    let o = null != (t = i.description) ? t : '';
    return (0, r.jsxs)('div', {
        className: p.guildInfoCard,
        children: [
            (0, r.jsx)(l.X6q, {
                className: p.presentedBy,
                variant: 'text-sm/medium',
                children: h.intl.string(h.t.Eabu19)
            }),
            (0, r.jsxs)('div', {
                className: p.guildContainer,
                children: [
                    (0, r.jsx)(s.Z, {
                        guild: i,
                        active: !0,
                        size: s.Z.Sizes.MEDIUM
                    }),
                    (0, r.jsxs)('div', {
                        className: p.guildDetailsContanier,
                        children: [
                            (0, r.jsxs)(l.Text, {
                                className: p.guildName,
                                color: 'header-primary',
                                variant: 'text-sm/medium',
                                tag: 'span',
                                children: [
                                    i.name,
                                    (0, r.jsx)(a.Z, {
                                        guild: i,
                                        className: p.guildBadge,
                                        tooltipPosition: 'left'
                                    })
                                ]
                            }),
                            (0, r.jsx)(d.V6, {
                                invite: n,
                                textClassName: p.guildInfoMemberCountText,
                                className: p.guildInfoMemberCount
                            })
                        ]
                    })
                ]
            }),
            o.length > 0 &&
                (0, r.jsx)('details', {
                    className: p.guildDescriptionContainer,
                    children: (0, r.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: o
                    })
                })
        ]
    });
}
function f(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, r.jsx)(g, {
              guildScheduledEvent: s,
              channel: n,
              isSubmitting: i,
              onAcceptInvite: l
          })
        : null;
}
