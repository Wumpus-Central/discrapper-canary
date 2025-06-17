n.d(t, {
    X: () => p,
    Z: () => m
}),
    n(953529);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(565138),
    o = n(372769),
    a = n(742593),
    s = n(390072),
    c = n(601964),
    u = n(230224),
    d = n(388032),
    h = n(807048);
function g(e) {
    var t;
    let { guildScheduledEvent: n, channel: l, onAcceptInvite: o, isSubmitting: c } = e;
    return (0, r.jsxs)('div', {
        className: h.guildEventCard,
        children: [
            (0, r.jsx)(a.ZP, {
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
                onClick: o,
                submitting: c,
                children: d.intl.string(d.t.riu2R0)
            })
        ]
    });
}
function p(e) {
    var t;
    let { invite: n } = e,
        a = null != n.guild ? new c.ZP(n.guild) : null;
    if (null == a) return null;
    let s = null != (t = a.description) ? t : '';
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
                        guild: a,
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
                                    a.name,
                                    (0, r.jsx)(o.Z, {
                                        guild: a,
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
function m(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: o } = t;
    return null != o
        ? (0, r.jsx)(g, {
              guildScheduledEvent: o,
              channel: n,
              isSubmitting: i,
              onAcceptInvite: l
          })
        : null;
}
