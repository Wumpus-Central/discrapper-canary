n.d(t, { Z: () => T });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(692547),
    o = n(481060),
    c = n(884338),
    d = n(540059),
    u = n(688641),
    h = n(596449),
    p = n(459502),
    m = n(856691),
    f = n(357156),
    g = n(546247),
    _ = n(496675),
    C = n(146085),
    x = n(979339),
    v = n(643632),
    E = n(939863),
    I = n(388032),
    b = n(807753);
function Z(e) {
    let { onClick: t, className: n } = e;
    return (0, i.jsx)(u.Z, {
        iconContainerClassName: b.continueIconContainer,
        icon: (0, i.jsx)(o.ewx, {
            size: 'custom',
            color: 'currentColor',
            className: b.continueIcon,
            height: 20,
            width: 20
        }),
        color: s.Z.unsafe_rawColors.PRIMARY_700.css,
        title: I.intl.string(I.t.jMLfp6),
        description: I.intl.string(I.t['Vd/rER']),
        onClick: t,
        className: n
    });
}
function N(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: l } = (0, x.Z)(t.id);
    return (0, i.jsxs)('div', {
        className: b.audienceSummary,
        children: [
            (0, i.jsx)(c.Z, {
                className: b.summaryItem,
                guildId: t.guild_id,
                users: l,
                size: c.u.SIZE_16
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: (function (e) {
                    if (0 === e.length) return '';
                    if (1 === e.length) return I.intl.formatToPlainString(I.t['5ULgaW'], { first: e[0].userNick });
                    if (2 === e.length)
                        return I.intl.formatToPlainString(I.t.BHK0Oj, {
                            first: e[0].userNick,
                            second: e[1].userNick
                        });
                    let t = e.length - 2;
                    return I.intl.formatToPlainString(I.t.T3MT4u, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t
                    });
                })(n)
            })
        ]
    });
}
function T(e) {
    let { channel: t, onContinueClick: n } = e,
        l = (0, r.e7)([_.Z], () => _.Z.can(C.yP, t), [t]),
        s = (0, d.Q3)('StartStageChannelCallView'),
        c = t.guild_id,
        { canCreateGuildEvent: u } = (0, f.XJ)(t),
        T = (0, v.Z)(t.id),
        { usersInSummary: S } = (0, x.Z)(t.id);
    return (0, i.jsxs)('div', {
        className: b.container,
        children: [
            (0, i.jsxs)('div', {
                className: b.content,
                children: [
                    s
                        ? null
                        : (0, i.jsx)(E.Z, {
                              children: (0, i.jsx)('div', {
                                  className: b.iconBackground,
                                  children: (0, i.jsx)(o.ewx, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 40,
                                      height: 40,
                                      className: b.icon
                                  })
                              })
                          }),
                    (0, i.jsxs)('div', {
                        className: b.headerContainer,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                className: b.__invalid_title,
                                variant: s ? 'heading-xxl/normal' : 'heading-xl/semibold',
                                children: I.intl.string(I.t.QGnDLi)
                            }),
                            (0, i.jsx)(o.Text, {
                                tag: 'div',
                                className: b.subtitle,
                                variant: s ? 'heading-lg/normal' : 'text-sm/normal',
                                children: I.intl.string(I.t.djfK39)
                            })
                        ]
                    }),
                    T ? null : (0, i.jsx)(p.Z, { channelId: t.id }),
                    l
                        ? (0, i.jsx)(m.Z, {
                              className: b.eventPrompt,
                              channel: t
                          })
                        : null,
                    u
                        ? (0, i.jsx)(h.Z, {
                              className: b.eventPrompt,
                              guildId: c
                          })
                        : null,
                    (l || S.length > 0) && !s && (0, i.jsx)('hr', { className: b.separator }),
                    l
                        ? (0, i.jsx)(Z, {
                              className: a()({ [b.eventPrompt]: s }),
                              onClick: n
                          })
                        : null,
                    (0, i.jsx)(N, { channel: t })
                ]
            }),
            s && (0, i.jsx)(g.Z, {})
        ]
    });
}
