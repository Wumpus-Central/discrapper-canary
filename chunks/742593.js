n.d(e, {
    HZ: function () {
        return T;
    },
    Rf: function () {
        return S;
    },
    ZP: function () {
        return p;
    }
});
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(442837),
    s = n(481060),
    u = n(271383),
    c = n(51144),
    o = n(894017),
    d = n(79874),
    m = n(315416),
    v = n(236373),
    x = n(854698),
    h = n(391174),
    E = n(95291),
    g = n(390966),
    N = n(388032),
    f = n(166710);
function T(t) {
    let { className: e, creator: n, guildId: r, isNew: h, isHub: E = !1, guildEvent: T, eventPreview: S, recurrenceId: p } = t,
        j = (0, m.Z)(r, T.id, p),
        D = null != T ? T : S,
        I = (0, a.e7)([u.ZP], () => u.ZP.getNick(r, null == n ? void 0 : n.id), [r, n]);
    p = null == D || null != p ? p : (0, x.DK)(D);
    let { startTime: C } = (0, d.ZP)(null != T ? T : S, p),
        L = (0, o.Z)(p, T.id),
        Z = (null == D ? void 0 : D.scheduled_start_time) != null ? (0, x.lh)(L, C, new Date(D.scheduled_start_time)) : null;
    if (null == D) return null;
    let { entity_type: w, status: _, recurrence_rule: b } = D;
    return (0, l.jsxs)('div', {
        className: i()(f.statusContainer, e),
        children: [
            (0, l.jsx)(g.z, {
                startTime: C.toISOString(),
                status: null != Z ? Z : _,
                eventType: w,
                isNew: h,
                recurrenceRule: (0, v.KV)(b),
                guildEventId: T.id,
                recurrenceId: p
            }),
            (0, l.jsx)('div', { className: f.spacer }),
            !E &&
                null != n &&
                (0, l.jsx)(s.Tooltip, {
                    text: N.intl.formatToPlainString(N.t['+3iypa'], { username: null != I ? I : c.ZP.getName(n) }),
                    children: (t) =>
                        (0, l.jsx)(s.Avatar, {
                            ...t,
                            src: n.getAvatarURL(r, 20),
                            size: s.AvatarSizes.SIZE_20,
                            'aria-label': null != I ? I : n.username,
                            className: f.creator
                        })
                }),
            (0, l.jsx)(s.Tooltip, {
                text: N.intl.formatToPlainString(N.t['+DLsDw'], { count: j }),
                children: (t) =>
                    (0, l.jsxs)('div', {
                        className: f.rsvpCount,
                        ...t,
                        children: [
                            (0, l.jsx)(s.GroupIcon, {
                                size: 'xxs',
                                color: 'currentColor',
                                className: f.rsvpIcon
                            }),
                            (0, l.jsx)(s.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: j
                            })
                        ]
                    })
            })
        ]
    });
}
function S(t) {
    let { headerVariant: e = 'heading-lg/medium', descriptionClassName: n, name: r, description: a, truncate: u, guildId: c, imageSource: o } = t;
    return (0, l.jsxs)('div', {
        className: i()({ [f.withThumbnail]: null != o }),
        children: [
            (0, l.jsxs)('div', {
                className: i()({ [f.descriptionWithThumbnail]: null != o }),
                children: [
                    (0, l.jsx)(s.Heading, {
                        variant: e,
                        selectable: !0,
                        className: f.eventName,
                        children: r
                    }),
                    null != a &&
                        (0, l.jsx)(h.Z, {
                            description: a,
                            className: i()(n, f.description),
                            truncate: u,
                            guildId: c
                        })
                ]
            }),
            null != o &&
                (0, l.jsx)('div', {
                    className: f.thumbnailContainer,
                    children: (0, l.jsx)(E.Z, {
                        source: o,
                        className: f.thumbnail
                    })
                })
        ]
    });
}
function p(t) {
    let { headerVariant: e, descriptionClassName: n, creator: r, name: i, description: a, imageSource: s, isHub: u = !1, truncate: c, guildId: o, isNew: d, guildEvent: m, eventPreview: v, recurrenceId: x } = t;
    return (0, l.jsxs)('div', {
        className: f.container,
        children: [
            (0, l.jsx)(T, {
                className: f.eventInfoStatusContainer,
                creator: r,
                guildId: o,
                isHub: u,
                isNew: d,
                guildEvent: m,
                eventPreview: v,
                recurrenceId: x
            }),
            (0, l.jsx)(S, {
                name: i,
                description: a,
                headerVariant: e,
                descriptionClassName: n,
                truncate: c,
                guildId: o,
                imageSource: s
            })
        ]
    });
}
