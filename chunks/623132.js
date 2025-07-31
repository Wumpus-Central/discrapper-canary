n.d(t, { Z: () => g });
var r = n(255367),
    o = n(73800),
    i = n(481060),
    a = n(810568),
    l = n(168524),
    c = n(817053),
    s = n(879877),
    d = n(388032),
    u = n(467514),
    f = n(418718);
function m(e) {
    let { text: t } = e;
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(i.PEf, {
                      size: 'xs',
                      color: i.TVs.colors.ICON_TERTIARY,
                      className: f.icon
                  }),
                  (0, r.jsx)(i.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-tertiary',
                      children: t
                  })
              ]
          });
}
function p(e) {
    let { applicationId: t, userId: n, gameName: c, className: s, children: u } = e,
        m = (0, l.Z)({
            location: 'UserProfileWidgetGameDetailsCard',
            applicationId: t,
            source: a.m1.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0
        }),
        p = o.useCallback(
            (e) => {
                e.target === e.currentTarget && (null == m || m(e));
            },
            [m]
        ),
        g = null != c ? c : d.intl.string(d.t.GIWFlJ),
        b = null != m;
    return (0, r.jsxs)('div', {
        className: s,
        children: [
            b &&
                (0, r.jsx)(i.P3F, {
                    className: f.clickableCard,
                    'aria-label': d.intl.formatToPlainString(d.t['8QLQBw'], { gameName: g }),
                    onClick: p
                }),
            u
        ]
    });
}
function g(e) {
    let { userId: t, game: n, loading: o = !1, disableInteraction: a = !1 } = e,
        { gameName: l, imageSrc: d, applicationId: g, comment: b, tags: x } = n,
        _ = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        imageSrc: d,
                        gameName: l,
                        applicationId: g,
                        userId: t,
                        disableInteraction: !0
                    }),
                    (0, r.jsxs)('div', {
                        className: f.details,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: 'text-md/normal',
                                color: 'text-default',
                                children: l
                            }),
                            (0, r.jsx)(m, { text: b }),
                            (0, r.jsx)(s.Z, { tags: x }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-secondary',
                                className: f.socialProof,
                                children: '3 people you know play this game'
                            })
                        ]
                    })
                ]
            });
    return o
        ? (0, r.jsxs)('div', {
              className: f.card,
              children: [(0, r.jsx)('div', { className: u.gameCover }), (0, r.jsx)('div', { className: f.details })]
          })
        : a
          ? (0, r.jsx)('div', {
                className: f.card,
                children: _()
            })
          : (0, r.jsx)(p, {
                applicationId: g,
                userId: t,
                gameName: l,
                className: f.card,
                children: _()
            });
}
