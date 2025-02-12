n.d(t, {
    HZ: () => j,
    Rf: () => p,
    ZP: () => S
});
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(442837),
    s = n(481060),
    u = n(540059),
    c = n(271383),
    o = n(51144),
    d = n(894017),
    m = n(79874),
    x = n(315416),
    h = n(236373),
    v = n(854698),
    g = n(391174),
    N = n(95291),
    f = n(390966),
    E = n(388032),
    T = n(275065);
function j(e) {
    let { className: t, creator: n, guildId: r, isNew: u, isHub: g = !1, guildEvent: N, eventPreview: j, recurrenceId: p } = e,
        S = (0, x.Z)(r, N.id, p),
        Z = null != N ? N : j,
        b = (0, a.e7)([c.ZP], () => c.ZP.getNick(r, null == n ? void 0 : n.id), [r, n]);
    p = null == Z || null != p ? p : (0, v.DK)(Z);
    let { startTime: I } = (0, m.ZP)(null != N ? N : j, p),
        w = (0, d.Z)(p, N.id),
        P = (null == Z ? void 0 : Z.scheduled_start_time) != null ? (0, v.lh)(w, I, new Date(Z.scheduled_start_time)) : null;
    if (null == Z) return null;
    let { entity_type: _, status: C, recurrence_rule: L } = Z;
    return (0, l.jsxs)('div', {
        className: i()(T.statusContainer, t),
        children: [
            (0, l.jsx)(f.z, {
                startTime: I.toISOString(),
                status: null != P ? P : C,
                eventType: _,
                isNew: u,
                recurrenceRule: (0, h.KV)(L),
                guildEventId: N.id,
                recurrenceId: p
            }),
            (0, l.jsx)('div', { className: T.spacer }),
            !g &&
                null != n &&
                (0, l.jsx)(s.ua7, {
                    text: E.intl.formatToPlainString(E.t['+3iypa'], { username: null != b ? b : o.ZP.getName(n) }),
                    children: (e) =>
                        (0, l.jsx)(s.qEK, {
                            ...e,
                            src: n.getAvatarURL(r, 20),
                            size: s.EFr.SIZE_20,
                            'aria-label': null != b ? b : n.username,
                            className: T.creator
                        })
                }),
            (0, l.jsx)(s.ua7, {
                text: E.intl.formatToPlainString(E.t['+DLsDw'], { count: S }),
                children: (e) =>
                    (0, l.jsxs)('div', {
                        className: T.rsvpCount,
                        ...e,
                        children: [
                            (0, l.jsx)(s.BFJ, {
                                size: 'xxs',
                                color: 'currentColor',
                                className: T.rsvpIcon
                            }),
                            (0, l.jsx)(s.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: S
                            })
                        ]
                    })
            })
        ]
    });
}
function p(e) {
    let { headerVariant: t = 'heading-lg/medium', descriptionClassName: n, name: r, description: a, truncate: u, guildId: c, imageSource: o } = e;
    return (0, l.jsxs)('div', {
        className: i()({ [T.withThumbnail]: null != o }),
        children: [
            (0, l.jsxs)('div', {
                className: i()({ [T.descriptionWithThumbnail]: null != o }),
                children: [
                    (0, l.jsx)(s.X6q, {
                        variant: t,
                        selectable: !0,
                        className: T.eventName,
                        children: r
                    }),
                    null != a &&
                        (0, l.jsx)(g.Z, {
                            description: a,
                            className: i()(n, T.description),
                            truncate: u,
                            guildId: c
                        })
                ]
            }),
            null != o &&
                (0, l.jsx)('div', {
                    className: T.thumbnailContainer,
                    children: (0, l.jsx)(N.Z, {
                        source: o,
                        className: T.thumbnail
                    })
                })
        ]
    });
}
function S(e) {
    let { headerVariant: t, descriptionClassName: n, creator: r, name: i, description: a, imageSource: s, isHub: c = !1, truncate: o, guildId: d, isNew: m, guildEvent: x, eventPreview: h, recurrenceId: v } = e,
        g = (0, u.Q3)('GuildEventDetails');
    return (0, l.jsxs)('div', {
        className: T.container,
        children: [
            g && null != s
                ? (0, l.jsx)('div', {
                      className: T.thumbnailContainer,
                      children: (0, l.jsx)(N.Z, {
                          source: s,
                          className: T.thumbnail
                      })
                  })
                : null,
            (0, l.jsx)(j, {
                className: T.eventInfoStatusContainer,
                creator: r,
                guildId: d,
                isHub: c,
                isNew: m,
                guildEvent: x,
                eventPreview: h,
                recurrenceId: v
            }),
            (0, l.jsx)(p, {
                name: i,
                description: a,
                headerVariant: t,
                descriptionClassName: n,
                truncate: o,
                guildId: d,
                imageSource: g ? null : s
            })
        ]
    });
}
