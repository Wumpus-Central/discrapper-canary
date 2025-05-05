n.d(t, { Z: () => P });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(884338),
    d = n(540059),
    p = n(688641),
    h = n(596449),
    f = n(459502),
    m = n(856691),
    g = n(357156),
    b = n(546247),
    _ = n(496675),
    y = n(146085),
    C = n(979339),
    x = n(643632),
    v = n(939863),
    j = n(388032),
    O = n(941188);
function E(e) {
    let { onClick: t, className: n } = e,
        i = (0, d.Q3)('StartStageChannelCallView'),
        l = i ? c.S6n : c.ewx;
    return (0, r.jsx)(p.Z, {
        iconContainerClassName: o()({ [O.continueIconContainer]: !i }),
        icon: (0, r.jsx)(l, {
            size: 'custom',
            color: 'currentColor',
            className: O.continueIcon,
            height: 20,
            width: 20
        }),
        color: s.Z.unsafe_rawColors.PRIMARY_700.css,
        title: j.intl.string(j.t.jMLfp6),
        description: j.intl.string(j.t['Vd/rER']),
        onClick: t,
        className: n
    });
}
function I(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: i } = (0, C.Z)(t.id);
    return (0, r.jsxs)('div', {
        className: O.audienceSummary,
        children: [
            (0, r.jsx)(u.Z, {
                className: O.summaryItem,
                guildId: t.guild_id,
                users: i,
                size: u.u.SIZE_16
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: (function (e) {
                    if (0 === e.length) return '';
                    if (1 === e.length) return j.intl.formatToPlainString(j.t['5ULgaW'], { first: e[0].userNick });
                    if (2 === e.length)
                        return j.intl.formatToPlainString(j.t.BHK0Oj, {
                            first: e[0].userNick,
                            second: e[1].userNick
                        });
                    let t = e.length - 2;
                    return j.intl.formatToPlainString(j.t.T3MT4u, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t
                    });
                })(n)
            })
        ]
    });
}
function P(e) {
    let { channel: t, onContinueClick: n } = e,
        l = (0, a.e7)([_.Z], () => _.Z.can(y.yP, t), [t]),
        s = (0, d.Q3)('StartStageChannelCallView'),
        u = t.guild_id,
        { canCreateGuildEvent: p } = (0, g.XJ)(t),
        P = (0, x.Z)(t.id),
        { usersInSummary: S } = (0, C.Z)(t.id),
        Z = (0, c._q$)('StartStageChannelCallView'),
        N = i.useRef(null);
    return (0, r.jsxs)('div', {
        className: o()(O.container, { [O.withRive]: Z }),
        ref: N,
        children: [
            s && (0, r.jsx)(b.Z, { eventTargetRef: N }),
            (0, r.jsxs)('div', {
                className: O.content,
                children: [
                    s
                        ? null
                        : (0, r.jsx)(v.Z, {
                              children: (0, r.jsx)('div', {
                                  className: O.iconBackground,
                                  children: (0, r.jsx)(c.ewx, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 40,
                                      height: 40,
                                      className: O.icon
                                  })
                              })
                          }),
                    (0, r.jsxs)('div', {
                        className: O.headerContainer,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                className: O.__invalid_title,
                                variant: s ? 'heading-xxl/normal' : 'heading-xl/semibold',
                                children: j.intl.string(j.t.QGnDLi)
                            }),
                            (0, r.jsx)(c.Text, {
                                tag: 'div',
                                className: O.subtitle,
                                variant: s ? 'heading-lg/normal' : 'text-sm/normal',
                                children: j.intl.string(j.t.djfK39)
                            })
                        ]
                    }),
                    P ? null : (0, r.jsx)(f.Z, { channelId: t.id }),
                    l
                        ? (0, r.jsx)(m.Z, {
                              className: O.eventPrompt,
                              channel: t
                          })
                        : null,
                    p
                        ? (0, r.jsx)(h.Z, {
                              className: O.eventPrompt,
                              guildId: u
                          })
                        : null,
                    (l || S.length > 0) && !s && (0, r.jsx)('hr', { className: O.separator }),
                    l
                        ? (0, r.jsx)(E, {
                              className: o()({ [O.eventPrompt]: s }),
                              onClick: n
                          })
                        : null,
                    (0, r.jsx)(I, { channel: t })
                ]
            })
        ]
    });
}
