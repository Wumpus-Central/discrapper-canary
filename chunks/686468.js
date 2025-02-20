n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(692547),
    s = n(481060),
    c = n(884338),
    u = n(540059),
    d = n(688641),
    p = n(596449),
    h = n(459502),
    f = n(856691),
    m = n(357156),
    g = n(546247),
    b = n(496675),
    _ = n(146085),
    C = n(979339),
    v = n(643632),
    y = n(939863),
    x = n(388032),
    j = n(792462);
function O(e) {
    let { onClick: t, className: n } = e;
    return (0, r.jsx)(d.Z, {
        iconContainerClassName: j.continueIconContainer,
        icon: (0, r.jsx)(s.ewx, {
            size: 'custom',
            color: 'currentColor',
            className: j.continueIcon,
            height: 20,
            width: 20
        }),
        color: a.Z.unsafe_rawColors.PRIMARY_700.css,
        title: x.NW.string(x.t.jMLfp6),
        description: x.NW.string(x.t['Vd/rER']),
        onClick: t,
        className: n
    });
}
function N(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: i } = (0, C.Z)(t.id);
    return (0, r.jsxs)('div', {
        className: j.audienceSummary,
        children: [
            (0, r.jsx)(c.Z, {
                className: j.summaryItem,
                guildId: t.guild_id,
                users: i,
                size: c.u.SIZE_16
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: (function (e) {
                    if (0 === e.length) return '';
                    if (1 === e.length) return x.NW.formatToPlainString(x.t['5ULgaW'], { first: e[0].userNick });
                    if (2 === e.length)
                        return x.NW.formatToPlainString(x.t.BHK0Oj, {
                            first: e[0].userNick,
                            second: e[1].userNick
                        });
                    let t = e.length - 2;
                    return x.NW.formatToPlainString(x.t.T3MT4u, {
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
        i = (0, o.e7)([b.Z], () => b.Z.can(_.yP, t), [t]),
        a = (0, u.Q3)('StartStageChannelCallView'),
        c = t.guild_id,
        { canCreateGuildEvent: d } = (0, m.XJ)(t),
        E = (0, v.Z)(t.id),
        { usersInSummary: P } = (0, C.Z)(t.id);
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            a && (0, r.jsx)(g.Z, {}),
            (0, r.jsxs)('div', {
                className: j.content,
                children: [
                    a
                        ? null
                        : (0, r.jsx)(y.Z, {
                              children: (0, r.jsx)('div', {
                                  className: j.iconBackground,
                                  children: (0, r.jsx)(s.ewx, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 40,
                                      height: 40,
                                      className: j.icon
                                  })
                              })
                          }),
                    (0, r.jsxs)('div', {
                        className: j.headerContainer,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                className: j.__invalid_title,
                                variant: a ? 'heading-xxl/normal' : 'heading-xl/semibold',
                                children: x.NW.string(x.t.QGnDLi)
                            }),
                            (0, r.jsx)(s.Text, {
                                tag: 'div',
                                className: j.subtitle,
                                variant: a ? 'heading-lg/normal' : 'text-sm/normal',
                                children: x.NW.string(x.t.djfK39)
                            })
                        ]
                    }),
                    E ? null : (0, r.jsx)(h.Z, { channelId: t.id }),
                    i
                        ? (0, r.jsx)(f.Z, {
                              className: j.eventPrompt,
                              channel: t
                          })
                        : null,
                    d
                        ? (0, r.jsx)(p.Z, {
                              className: j.eventPrompt,
                              guildId: c
                          })
                        : null,
                    (i || P.length > 0) && !a && (0, r.jsx)('hr', { className: j.separator }),
                    i
                        ? (0, r.jsx)(O, {
                              className: l()({ [j.eventPrompt]: a }),
                              onClick: n
                          })
                        : null,
                    (0, r.jsx)(N, { channel: t })
                ]
            })
        ]
    });
}
