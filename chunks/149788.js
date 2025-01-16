var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(749210),
    s = n(322665),
    o = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(469988),
    h = n(526383),
    m = n(294330),
    p = n(388032),
    g = n(874892),
    f = n(337596);
t.Z = function (e) {
    let { onScroll: t } = e,
        n = (0, h.Z)(),
        _ = r.useMemo(
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
    return (0, i.jsxs)(d.Z, {
        onScroll: t,
        children: [
            (0, i.jsx)(o.Z, {
                title: p.intl.string(p.t.X5xPlZ),
                description: p.intl.string(p.t['F/IQCA']),
                children: (0, i.jsx)(s.Z, {})
            }),
            (0, i.jsxs)(c.Z, {
                children: [
                    n.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(l.Heading, {
                                      className: g.sectionTitle,
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      children: p.intl.string(p.t['2DfZIS'])
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: g.content,
                                      children: [
                                          _.map((e) =>
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
                    (0, i.jsx)('div', { className: f.divider }),
                    (0, i.jsxs)('div', {
                        className: f.disclaimer,
                        children: [
                            (0, i.jsxs)(l.Text, {
                                className: f.text,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: [p.intl.string(p.t.O1k9XV), ' ']
                            }),
                            (0, i.jsx)(l.Text, {
                                className: f.text,
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
