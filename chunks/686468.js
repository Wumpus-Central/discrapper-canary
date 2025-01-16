n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(692547),
    a = n(481060),
    s = n(884338),
    o = n(688641),
    c = n(596449),
    d = n(459502),
    u = n(856691),
    h = n(357156),
    p = n(496675),
    m = n(146085),
    f = n(979339),
    g = n(643632),
    C = n(939863),
    x = n(388032),
    v = n(922775);
function _(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(o.Z, {
        iconContainerClassName: v.continueIconContainer,
        icon: (0, i.jsx)(a.StageIcon, {
            size: 'custom',
            color: 'currentColor',
            className: v.continueIcon,
            height: 20,
            width: 20
        }),
        color: r.Z.unsafe_rawColors.PRIMARY_700.css,
        title: x.intl.string(x.t.jMLfp6),
        description: x.intl.string(x.t['Vd/rER']),
        onClick: t
    });
}
function I(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: l } = (0, f.Z)(t.id);
    return (0, i.jsxs)('div', {
        className: v.audienceSummary,
        children: [
            (0, i.jsx)(s.Z, {
                className: v.summaryItem,
                guildId: t.guild_id,
                users: l,
                size: s.u.SIZE_16
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: (function (e) {
                    if (0 === e.length) return '';
                    if (1 === e.length) return x.intl.formatToPlainString(x.t['5ULgaW'], { first: e[0].userNick });
                    if (2 === e.length)
                        return x.intl.formatToPlainString(x.t.BHK0Oj, {
                            first: e[0].userNick,
                            second: e[1].userNick
                        });
                    let t = e.length - 2;
                    return x.intl.formatToPlainString(x.t.T3MT4u, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t
                    });
                })(n)
            })
        ]
    });
}
function E(e) {
    let { channel: t, onContinueClick: n } = e,
        r = (0, l.e7)([p.Z], () => p.Z.can(m.yP, t), [t]),
        s = t.guild_id,
        { canCreateGuildEvent: o } = (0, h.XJ)(t),
        E = (0, g.Z)(t.id),
        { usersInSummary: b } = (0, f.Z)(t.id);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(C.Z, {
                children: (0, i.jsx)('div', {
                    className: v.iconBackground,
                    children: (0, i.jsx)(a.StageIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40,
                        className: v.icon
                    })
                })
            }),
            (0, i.jsxs)('div', {
                className: v.headerContainer,
                children: [
                    (0, i.jsx)(a.Heading, {
                        className: v.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: x.intl.string(x.t.QGnDLi)
                    }),
                    (0, i.jsx)(a.Text, {
                        className: v.subtitle,
                        variant: 'text-sm/normal',
                        children: x.intl.string(x.t.djfK39)
                    })
                ]
            }),
            E ? null : (0, i.jsx)(d.Z, { channelId: t.id }),
            r
                ? (0, i.jsx)(u.Z, {
                      className: v.eventPrompt,
                      channel: t
                  })
                : null,
            o
                ? (0, i.jsx)(c.Z, {
                      className: v.eventPrompt,
                      guildId: s
                  })
                : null,
            (r || b.length > 0) && (0, i.jsx)('hr', { className: v.separator }),
            r ? (0, i.jsx)(_, { onClick: n }) : null,
            (0, i.jsx)(I, { channel: t })
        ]
    });
}
