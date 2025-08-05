n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(884338),
    u = n(688641),
    h = n(596449),
    p = n(459502),
    f = n(856691),
    g = n(357156),
    m = n(546247),
    b = n(496675),
    _ = n(146085),
    y = n(979339),
    j = n(643632),
    O = n(388032),
    x = n(941188);
function v(e) {
    let { onClick: t, className: n } = e,
        i = c.S6n;
    return (0, r.jsx)(u.Z, {
        iconContainerClassName: a()({ [x.continueIconContainer]: !1 }),
        icon: (0, r.jsx)(i, {
            size: 'custom',
            color: 'currentColor',
            className: x.continueIcon,
            height: 20,
            width: 20
        }),
        color: o.Z.unsafe_rawColors.PRIMARY_700.css,
        title: O.intl.string(O.t.jMLfp6),
        description: O.intl.string(O.t['Vd/rER']),
        onClick: t,
        className: n
    });
}
function C(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: i } = (0, y.Z)(t.id);
    return (0, r.jsxs)('div', {
        className: x.audienceSummary,
        children: [
            (0, r.jsx)(d.ZP, {
                className: x.summaryItem,
                guildId: t.guild_id,
                users: i,
                size: d.u8.SIZE_16
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: (function (e) {
                    if (0 === e.length) return '';
                    if (1 === e.length) return O.intl.formatToPlainString(O.t['5ULgaW'], { first: e[0].userNick });
                    if (2 === e.length)
                        return O.intl.formatToPlainString(O.t.BHK0Oj, {
                            first: e[0].userNick,
                            second: e[1].userNick
                        });
                    let t = e.length - 2;
                    return O.intl.formatToPlainString(O.t.T3MT4u, {
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
        l = (0, s.e7)([b.Z], () => b.Z.can(_.yP, t), [t]),
        o = t.guild_id,
        { canCreateGuildEvent: d } = (0, g.XJ)(t),
        u = (0, j.Z)(t.id),
        y = i.useRef(null);
    return (0, r.jsxs)('div', {
        className: x.container,
        ref: y,
        children: [
            (0, r.jsx)(m.Z, { eventTargetRef: y }),
            (0, r.jsxs)('div', {
                className: x.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: x.headerContainer,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                className: x.__invalid_title,
                                variant: 'heading-xxl/normal',
                                children: O.intl.string(O.t.QGnDLi)
                            }),
                            (0, r.jsx)(c.Text, {
                                tag: 'div',
                                className: x.subtitle,
                                variant: 'heading-lg/normal',
                                children: O.intl.string(O.t.djfK39)
                            })
                        ]
                    }),
                    u ? null : (0, r.jsx)(p.Z, { channelId: t.id }),
                    l
                        ? (0, r.jsx)(f.Z, {
                              className: x.eventPrompt,
                              channel: t
                          })
                        : null,
                    d
                        ? (0, r.jsx)(h.Z, {
                              className: x.eventPrompt,
                              guildId: o
                          })
                        : null,
                    l
                        ? (0, r.jsx)(v, {
                              className: a()({ [x.eventPrompt]: !0 }),
                              onClick: n
                          })
                        : null,
                    (0, r.jsx)(C, { channel: t })
                ]
            })
        ]
    });
}
