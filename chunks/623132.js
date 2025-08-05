n.d(t, { Z: () => y });
var r = n(255367),
    o = n(73800),
    i = n(481060),
    l = n(810568),
    a = n(168524),
    c = n(5192),
    s = n(817053),
    d = n(879877),
    u = n(919498),
    f = n(388032),
    p = n(467514),
    m = n(418718);
function g(e) {
    let { text: t, user: n, guildId: o, channelId: l } = e;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(i.PEf, {
                size: 'xxs',
                color: i.TVs.colors.ICON_TERTIARY,
                className: m.icon
            }),
            (0, r.jsx)(i.nn4, { children: f.intl.format(f.t.TM0XDQ, { name: c.ZP.getName(o, l, n) }) }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                color: 'text-tertiary',
                children: t
            })
        ]
    });
}
function b(e) {
    let { applicationId: t, userId: n, gameName: c, className: s, children: d } = e,
        u = (0, a.Z)({
            location: 'UserProfileWidgetGameDetailsCard',
            applicationId: t,
            source: l.m1.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0
        }),
        p = o.useCallback(
            (e) => {
                e.target === e.currentTarget && (null == u || u(e));
            },
            [u]
        ),
        g = null != c ? c : f.intl.string(f.t.GIWFlJ),
        b = null != u;
    return (0, r.jsxs)('div', {
        className: s,
        children: [
            b &&
                (0, r.jsx)(i.P3F, {
                    className: m.clickableCard,
                    'aria-label': f.intl.formatToPlainString(f.t['8QLQBw'], { gameName: g }),
                    onClick: p
                }),
            d
        ]
    });
}
function y(e) {
    let { user: t, guildId: n, channelId: o, game: l, loading: a = !1, disableInteraction: c = !1 } = e,
        { gameName: f, imageSrc: y, applicationId: O, comment: h, tags: j } = l,
        x = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.Z, {
                        imageSrc: y,
                        gameName: f,
                        applicationId: O,
                        userId: t.id,
                        disableInteraction: !0
                    }),
                    (0, r.jsxs)('div', {
                        className: m.details,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: 'text-md/normal',
                                color: 'text-default',
                                children: f
                            }),
                            null != h &&
                                (0, r.jsx)(g, {
                                    text: h,
                                    user: t,
                                    guildId: n,
                                    channelId: o
                                }),
                            (0, r.jsx)(d.Z, { tags: j }),
                            (0, r.jsx)(u.Z, {
                                applicationId: O,
                                guildId: n,
                                channelId: o,
                                className: m.socialProof
                            })
                        ]
                    })
                ]
            });
    return a
        ? (0, r.jsxs)('div', {
              className: m.card,
              children: [(0, r.jsx)('div', { className: p.gameCover }), (0, r.jsx)('div', { className: m.details })]
          })
        : c
          ? (0, r.jsx)('div', {
                className: m.card,
                children: x()
            })
          : (0, r.jsx)(b, {
                applicationId: O,
                userId: t.id,
                gameName: f,
                className: m.card,
                children: x()
            });
}
