n.d(t, { Z: () => g });
var r = n(255367),
    o = n(73800),
    i = n(481060),
    l = n(810568),
    a = n(168524),
    c = n(817053),
    s = n(879877),
    u = n(919498),
    d = n(388032),
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
function b(e) {
    let { applicationId: t, userId: n, gameName: c, className: s, children: u } = e,
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
        b = null != c ? c : d.intl.string(d.t.GIWFlJ),
        g = null != f;
    return (0, r.jsxs)('div', {
        className: s,
        children: [
            g &&
                (0, r.jsx)(i.P3F, {
                    className: p.clickableCard,
                    'aria-label': d.intl.formatToPlainString(d.t['8QLQBw'], { gameName: b }),
                    onClick: m
                }),
            u
        ]
    });
}
function g(e) {
    let { game: t, userId: n, guildId: o, channelId: l, loading: a = !1, disableInteraction: d = !1 } = e,
        { gameName: g, imageSrc: y, applicationId: j, comment: O, tags: x } = t,
        h = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        imageSrc: y,
                        gameName: g,
                        applicationId: j,
                        userId: n,
                        disableInteraction: !0
                    }),
                    (0, r.jsxs)('div', {
                        className: p.details,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: 'text-md/normal',
                                color: 'text-default',
                                children: g
                            }),
                            (0, r.jsx)(m, { text: O }),
                            (0, r.jsx)(s.Z, { tags: x }),
                            (0, r.jsx)(u.Z, {
                                applicationId: j,
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
        : d
          ? (0, r.jsx)('div', {
                className: p.card,
                children: h()
            })
          : (0, r.jsx)(b, {
                applicationId: j,
                userId: n,
                gameName: g,
                className: p.card,
                children: h()
            });
}
