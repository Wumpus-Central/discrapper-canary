n.d(t, {
    X: () => m,
    Z: () => g
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(565138),
    a = n(372769),
    o = n(742593),
    s = n(390072),
    c = n(601964),
    d = n(230224),
    u = n(388032),
    h = n(413581);
function _(e) {
    var t;
    let { guildScheduledEvent: n, channel: l, onAcceptInvite: a, isSubmitting: c } = e;
    return (0, i.jsxs)('div', {
        className: h.guildEventCard,
        children: [
            (0, i.jsx)(o.ZP, {
                name: n.name,
                description: null !== (t = n.description) && void 0 !== t ? t : void 0,
                headerVariant: 'heading-md/medium',
                descriptionClassName: h.__invalid_channelDescription,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n
            }),
            null != l &&
                (0, i.jsx)('div', {
                    className: h.channelInfo,
                    children: (0, i.jsx)(s.Z, {
                        guildScheduledEvent: n,
                        channel: l
                    })
                }),
            (0, i.jsx)(r.zxk, {
                className: h.acceptButton,
                color: r.zxk.Colors.GREEN,
                onClick: a,
                submitting: c,
                children: u.intl.string(u.t.riu2R0)
            })
        ]
    });
}
function m(e) {
    var t;
    let { invite: n } = e,
        o = null != n.guild ? new c.ZP(n.guild) : null;
    if (null == o) return null;
    let s = null !== (t = o.description) && void 0 !== t ? t : '';
    return (0, i.jsxs)('div', {
        className: h.guildInfoCard,
        children: [
            (0, i.jsx)(r.X6q, {
                className: h.presentedBy,
                variant: 'text-sm/medium',
                children: u.intl.string(u.t.Eabu19)
            }),
            (0, i.jsxs)('div', {
                className: h.guildContainer,
                children: [
                    (0, i.jsx)(l.Z, {
                        guild: o,
                        active: !0,
                        size: l.Z.Sizes.MEDIUM
                    }),
                    (0, i.jsxs)('div', {
                        className: h.guildDetailsContanier,
                        children: [
                            (0, i.jsxs)(r.Text, {
                                className: h.guildName,
                                color: 'header-primary',
                                variant: 'text-sm/medium',
                                tag: 'span',
                                children: [
                                    o.name,
                                    (0, i.jsx)(a.Z, {
                                        guild: o,
                                        className: h.guildBadge,
                                        tooltipPosition: 'left'
                                    })
                                ]
                            }),
                            (0, i.jsx)(d.V6, {
                                invite: n,
                                textClassName: h.guildInfoMemberCountText,
                                className: h.guildInfoMemberCount
                            })
                        ]
                    })
                ]
            }),
            s.length > 0 &&
                (0, i.jsx)('details', {
                    className: h.guildDescriptionContainer,
                    children: (0, i.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: s
                    })
                })
        ]
    });
}
function g(e) {
    let { invite: t, channel: n, isSubmitting: r, onAcceptInvite: l } = e,
        { guild_scheduled_event: a } = t;
    return null != a
        ? (0, i.jsx)(_, {
              guildScheduledEvent: a,
              channel: n,
              isSubmitting: r,
              onAcceptInvite: l
          })
        : null;
}
