n.d(t, { Z: () => p });
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
    let { userId: t, game: n, loading: p = !1, disableInteraction: g = !1 } = e,
        { gameName: x, imageSrc: b, applicationId: _, comment: h, tags: j } = n,
        y = (0, l.Z)({
            location: 'UserProfileWidgetGameDetailsCard',
            applicationId: _,
            source: a.m1.UserProfile,
            sourceUserId: t,
            trackEntryPointImpression: !0
        }),
        I = o.useCallback(
            (e) => {
                e.target === e.currentTarget && (null == y || y(e));
            },
            [y]
        ),
        v = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        imageSrc: b,
                        gameName: x,
                        applicationId: _,
                        userId: t,
                        disableInteraction: !0
                    }),
                    (0, r.jsxs)('div', {
                        className: f.details,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: 'text-md/normal',
                                color: 'text-default',
                                children: x
                            }),
                            (0, r.jsx)(m, { text: h }),
                            (0, r.jsx)(s.Z, { tags: j }),
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
    return p
        ? (0, r.jsxs)('div', {
              className: f.card,
              children: [(0, r.jsx)('div', { className: u.gameCover }), (0, r.jsx)('div', { className: f.details })]
          })
        : g || null == y
          ? (0, r.jsx)('div', {
                className: f.card,
                children: v()
            })
          : (0, r.jsxs)('div', {
                className: f.card,
                children: [
                    (0, r.jsx)(i.P3F, {
                        className: f.clickableCard,
                        'aria-label': d.intl.formatToPlainString(d.t['8QLQBw'], { gameName: x }),
                        onClick: I
                    }),
                    v()
                ]
            });
}
