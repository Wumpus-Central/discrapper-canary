n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(749210),
    s = n(322665),
    o = n(17845),
    d = n(374939),
    c = n(283293),
    u = n(469988),
    h = n(526383),
    m = n(294330),
    p = n(388032),
    g = n(545091),
    _ = n(19707);
let f = function (e) {
    let { onScroll: t } = e,
        n = (0, h.Z)(),
        f = l.useMemo(
            () =>
                n.map((e) => ({
                    ...e,
                    presenceCount: void 0,
                    memberCount: void 0,
                    premiumSubscriptionCount: void 0,
                    emojis: void 0
                })),
            [n]
        );
    return (0, i.jsxs)(c.Z, {
        onScroll: t,
        children: [
            (0, i.jsx)(o.Z, {
                title: p.intl.string(p.t.X5xPlZ),
                description: p.intl.string(p.t['F/IQCA']),
                children: (0, i.jsx)(s.Z, {})
            }),
            (0, i.jsxs)(d.Z, {
                children: [
                    n.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(r.X6q, {
                                      className: g.sectionTitle,
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      children: p.intl.string(p.t['2DfZIS'])
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: g.content,
                                      children: [
                                          f.map((e) =>
                                              (0, i.jsx)(
                                                  m.VD,
                                                  {
                                                      guild: e,
                                                      onClick: () => a.Z.transitionToGuildSync(e.id)
                                                  },
                                                  e.id
                                              )
                                          ),
                                          (0, i.jsx)(u.Z, { hasHub: !0 })
                                      ]
                                  })
                              ]
                          })
                        : (0, i.jsx)('div', {
                              className: g.content,
                              children: (0, i.jsx)(u.Z, { hasHub: !1 })
                          }),
                    (0, i.jsx)('div', { className: _.divider }),
                    (0, i.jsxs)('div', {
                        className: _.disclaimer,
                        children: [
                            (0, i.jsxs)(r.Text, {
                                className: _.text,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: [p.intl.string(p.t.O1k9XV), ' ']
                            }),
                            (0, i.jsx)(r.Text, {
                                className: _.text,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: p.intl.string(p.t.FV5dvr)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
