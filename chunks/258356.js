n.d(t, {
    X: () => m,
    Z: () => g
}),
    n(953529);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(565138),
    a = n(372769),
    o = n(742593),
    s = n(390072),
    c = n(601964),
    u = n(230224),
    d = n(388032),
    h = n(807048);
function p(e) {
    var t;
    let { guildScheduledEvent: n, channel: l, onAcceptInvite: a, isSubmitting: c } = e;
    return (0, r.jsxs)('div', {
        className: h.guildEventCard,
        children: [
            (0, r.jsx)(o.ZP, {
                name: n.name,
                description: null != (t = n.description) ? t : void 0,
                headerVariant: 'heading-md/medium',
                descriptionClassName: h.__invalid_channelDescription,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n
            }),
            null != l &&
                (0, r.jsx)('div', {
                    className: h.channelInfo,
                    children: (0, r.jsx)(s.Z, {
                        guildScheduledEvent: n,
                        channel: l
                    })
                }),
            (0, r.jsx)(i.zxk, {
                className: h.acceptButton,
                color: i.zxk.Colors.GREEN,
                onClick: a,
                submitting: c,
                children: d.intl.string(d.t.riu2R0)
            })
        ]
    });
}
function m(e) {
    var t;
    let { invite: n } = e,
        o = null != n.guild ? new c.ZP(n.guild) : null;
    if (null == o) return null;
    let s = null != (t = o.description) ? t : '';
    return (0, r.jsxs)('div', {
        className: h.guildInfoCard,
        children: [
            (0, r.jsx)(i.X6q, {
                className: h.presentedBy,
                variant: 'text-sm/medium',
                children: d.intl.string(d.t.Eabu19)
            }),
            (0, r.jsxs)('div', {
                className: h.guildContainer,
                children: [
                    (0, r.jsx)(l.Z, {
                        guild: o,
                        active: !0,
                        size: l.Z.Sizes.MEDIUM
                    }),
                    (0, r.jsxs)('div', {
                        className: h.guildDetailsContanier,
                        children: [
                            (0, r.jsxs)(i.Text, {
                                className: h.guildName,
                                color: 'header-primary',
                                variant: 'text-sm/medium',
                                tag: 'span',
                                children: [
                                    o.name,
                                    (0, r.jsx)(a.Z, {
                                        guild: o,
                                        className: h.guildBadge,
                                        tooltipPosition: 'left'
                                    })
                                ]
                            }),
                            (0, r.jsx)(u.V6, {
                                invite: n,
                                textClassName: h.guildInfoMemberCountText,
                                className: h.guildInfoMemberCount
                            })
                        ]
                    })
                ]
            }),
            s.length > 0 &&
                (0, r.jsx)('details', {
                    className: h.guildDescriptionContainer,
                    children: (0, r.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: s
                    })
                })
        ]
    });
}
function g(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: a } = t;
    return null != a
        ? (0, r.jsx)(p, {
              guildScheduledEvent: a,
              channel: n,
              isSubmitting: i,
              onAcceptInvite: l
          })
        : null;
}
