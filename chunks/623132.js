n.d(t, { Z: () => m });
var r = n(255367),
    o = n(73800),
    i = n(481060),
    a = n(810568),
    l = n(168524),
    c = n(817053),
    s = n(388032),
    d = n(467514),
    u = n(418718);
function f(e) {
    let { text: t } = e;
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(i.PEf, {
                      size: 'xs',
                      color: i.TVs.colors.ICON_TERTIARY,
                      className: u.icon
                  }),
                  (0, r.jsx)(i.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-tertiary',
                      children: t
                  })
              ]
          });
}
function m(e) {
    let { userId: t, game: n, loading: m = !1, disableInteraction: p = !1 } = e,
        { gameName: g, imageSrc: b, applicationId: x, comment: h } = n,
        _ = (0, l.Z)({
            location: 'UserProfileWidgetGameDetailsCard',
            applicationId: x,
            source: a.m1.UserProfile,
            sourceUserId: t,
            trackEntryPointImpression: !0
        }),
        j = o.useCallback(
            (e) => {
                e.target === e.currentTarget && (null == _ || _(e));
            },
            [_]
        ),
        y = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        imageSrc: b,
                        gameName: g,
                        applicationId: x,
                        userId: t,
                        disableInteraction: !0
                    }),
                    (0, r.jsxs)('div', {
                        className: u.details,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: 'text-md/normal',
                                color: 'text-default',
                                children: g
                            }),
                            (0, r.jsx)(f, { text: h }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-secondary',
                                className: u.socialProof,
                                children: '3 people you know play this game'
                            })
                        ]
                    })
                ]
            });
    return m
        ? (0, r.jsxs)('div', {
              className: u.card,
              children: [(0, r.jsx)('div', { className: d.gameCover }), (0, r.jsx)('div', { className: u.details })]
          })
        : p || null == _
          ? (0, r.jsx)('div', {
                className: u.card,
                children: y()
            })
          : (0, r.jsxs)('div', {
                className: u.card,
                children: [
                    (0, r.jsx)(i.P3F, {
                        className: u.clickableCard,
                        'aria-label': s.intl.formatToPlainString(s.t['8QLQBw'], { gameName: g }),
                        onClick: j
                    }),
                    y()
                ]
            });
}
