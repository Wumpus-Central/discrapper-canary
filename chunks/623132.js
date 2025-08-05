n.d(t, { Z: () => b });
var r = n(255367),
    o = n(73800),
    i = n(481060),
    l = n(810568),
    a = n(168524),
    c = n(817053),
    s = n(879877),
    d = n(919498),
    u = n(388032),
    f = n(467514),
    p = n(418718);
function m(e) {
    let { text: t } = e;
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(i.PEf, {
                      size: 'xs',
                      color: i.TVs.colors.ICON_TERTIARY,
                      className: p.icon
                  }),
                  (0, r.jsx)(i.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-tertiary',
                      children: t
                  })
              ]
          });
}
function g(e) {
    let { applicationId: t, userId: n, gameName: c, className: s, children: d } = e,
        f = (0, a.Z)({
            location: 'UserProfileWidgetGameDetailsCard',
            applicationId: t,
            source: l.m1.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0
        }),
        m = o.useCallback(
            (e) => {
                e.target === e.currentTarget && (null == f || f(e));
            },
            [f]
        ),
        g = null != c ? c : u.intl.string(u.t.GIWFlJ),
        b = null != f;
    return (0, r.jsxs)('div', {
        className: s,
        children: [
            b &&
                (0, r.jsx)(i.P3F, {
                    className: p.clickableCard,
                    'aria-label': u.intl.formatToPlainString(u.t['8QLQBw'], { gameName: g }),
                    onClick: m
                }),
            d
        ]
    });
}
function b(e) {
    let { game: t, userId: n, guildId: o, channelId: l, loading: a = !1, disableInteraction: u = !1 } = e,
        { gameName: b, imageSrc: y, applicationId: O, comment: h, tags: j } = t,
        x = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        imageSrc: y,
                        gameName: b,
                        applicationId: O,
                        userId: n,
                        disableInteraction: !0
                    }),
                    (0, r.jsxs)('div', {
                        className: p.details,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: 'text-md/normal',
                                color: 'text-default',
                                children: b
                            }),
                            (0, r.jsx)(m, { text: h }),
                            (0, r.jsx)(s.Z, { tags: j }),
                            (0, r.jsx)(d.Z, {
                                applicationId: O,
                                guildId: o,
                                channelId: l,
                                className: p.socialProof
                            })
                        ]
                    })
                ]
            });
    return a
        ? (0, r.jsxs)('div', {
              className: p.card,
              children: [(0, r.jsx)('div', { className: f.gameCover }), (0, r.jsx)('div', { className: p.details })]
          })
        : u
          ? (0, r.jsx)('div', {
                className: p.card,
                children: x()
            })
          : (0, r.jsx)(g, {
                applicationId: O,
                userId: n,
                gameName: b,
                className: p.card,
                children: x()
            });
}
