n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(884338),
    d = n(688641),
    p = n(596449),
    h = n(459502),
    f = n(856691),
    m = n(357156),
    g = n(546247),
    b = n(496675),
    _ = n(146085),
    y = n(979339),
    C = n(643632),
    x = n(388032),
    v = n(941188);
function j(e) {
    let { onClick: t, className: n } = e,
        i = c.S6n;
    return (0, r.jsx)(d.Z, {
        iconContainerClassName: o()({ [v.continueIconContainer]: !1 }),
        icon: (0, r.jsx)(i, {
            size: 'custom',
            color: 'currentColor',
            className: v.continueIcon,
            height: 20,
            width: 20
        }),
        color: s.Z.unsafe_rawColors.PRIMARY_700.css,
        title: x.intl.string(x.t.jMLfp6),
        description: x.intl.string(x.t['Vd/rER']),
        onClick: t,
        className: n
    });
}
function O(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: i } = (0, y.Z)(t.id);
    return (0, r.jsxs)('div', {
        className: v.audienceSummary,
        children: [
            (0, r.jsx)(u.Z, {
                className: v.summaryItem,
                guildId: t.guild_id,
                users: i,
                size: u.u.SIZE_16
            }),
            (0, r.jsx)(c.Text, {
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
        l = (0, a.e7)([b.Z], () => b.Z.can(_.yP, t), [t]),
        s = t.guild_id,
        { canCreateGuildEvent: u } = (0, m.XJ)(t),
        d = (0, C.Z)(t.id),
        y = i.useRef(null);
    return (0, r.jsxs)('div', {
        className: v.container,
        ref: y,
        children: [
            (0, r.jsx)(g.Z, { eventTargetRef: y }),
            (0, r.jsxs)('div', {
                className: v.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: v.headerContainer,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                className: v.__invalid_title,
                                variant: 'heading-xxl/normal',
                                children: x.intl.string(x.t.QGnDLi)
                            }),
                            (0, r.jsx)(c.Text, {
                                tag: 'div',
                                className: v.subtitle,
                                variant: 'heading-lg/normal',
                                children: x.intl.string(x.t.djfK39)
                            })
                        ]
                    }),
                    d ? null : (0, r.jsx)(h.Z, { channelId: t.id }),
                    l
                        ? (0, r.jsx)(f.Z, {
                              className: v.eventPrompt,
                              channel: t
                          })
                        : null,
                    u
                        ? (0, r.jsx)(p.Z, {
                              className: v.eventPrompt,
                              guildId: s
                          })
                        : null,
                    l
                        ? (0, r.jsx)(j, {
                              className: o()({ [v.eventPrompt]: !0 }),
                              onClick: n
                          })
                        : null,
                    (0, r.jsx)(O, { channel: t })
                ]
            })
        ]
    });
}
