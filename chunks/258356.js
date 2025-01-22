n.d(t, {
    X: function () {
        return f;
    },
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(565138),
    l = n(372769),
    o = n(742593),
    a = n(390072),
    c = n(601964),
    d = n(230224),
    u = n(388032),
    h = n(161669);
function g(e) {
    var t;
    let { guildScheduledEvent: n, channel: s, onAcceptInvite: l, isSubmitting: c } = e;
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
            null != s &&
                (0, i.jsx)('div', {
                    className: h.channelInfo,
                    children: (0, i.jsx)(a.Z, {
                        guildScheduledEvent: n,
                        channel: s
                    })
                }),
            (0, i.jsx)(r.Button, {
                className: h.acceptButton,
                color: r.Button.Colors.GREEN,
                onClick: l,
                submitting: c,
                children: u.intl.string(u.t.riu2R0)
            })
        ]
    });
}
function f(e) {
    var t;
    let { invite: n } = e,
        o = null != n.guild ? new c.ZP(n.guild) : null;
    if (null == o) return null;
    let a = null !== (t = o.description) && void 0 !== t ? t : '';
    return (0, i.jsxs)('div', {
        className: h.guildInfoCard,
        children: [
            (0, i.jsx)(r.Heading, {
                className: h.presentedBy,
                variant: 'text-sm/medium',
                children: u.intl.string(u.t.Eabu19)
            }),
            (0, i.jsxs)('div', {
                className: h.guildContainer,
                children: [
                    (0, i.jsx)(s.Z, {
                        guild: o,
                        active: !0,
                        size: s.Z.Sizes.MEDIUM
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
                                    (0, i.jsx)(l.Z, {
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
            a.length > 0 &&
                (0, i.jsx)('details', {
                    className: h.guildDescriptionContainer,
                    children: (0, i.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: a
                    })
                })
        ]
    });
}
function m(e) {
    let { invite: t, channel: n, isSubmitting: r, onAcceptInvite: s } = e,
        { guild_scheduled_event: l } = t;
    return null != l
        ? (0, i.jsx)(g, {
              guildScheduledEvent: l,
              channel: n,
              isSubmitting: r,
              onAcceptInvite: s
          })
        : null;
}
