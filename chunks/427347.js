n.d(t, { Z: () => x });
var i = n(255367);
n(73800);
var r = n(704215),
    s = n(481060),
    l = n(230711),
    a = n(100527),
    o = n(906732),
    c = n(605236),
    d = n(314910),
    u = n(378364),
    m = n(197344),
    p = n(226625),
    g = n(981631),
    h = n(921944),
    f = n(388032),
    b = n(963748);
function _(e) {
    let { dismissibleContent: t } = e,
        n = m.Z.useIsEligible(),
        u = (0, c.wE)(t),
        { analyticsLocations: _ } = (0, o.ZP)(a.Z.HOLIDAY_COACHMARK),
        x = (e) => {
            (0, c.EW)(r.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, { dismissAction: e });
        },
        E = () => {
            l.Z.open(g.oAB.NOTIFICATIONS, null, { analyticsLocations: _ }), x(h.L.SECONDARY);
        };
    return n && !u
        ? (0, i.jsx)(d.ZP, {
              children: (0, i.jsxs)('div', {
                  className: b.wrapper,
                  children: [
                      (0, i.jsxs)('div', {
                          className: b.backgroundWrapper,
                          children: [
                              (0, i.jsx)(p.Z, {
                                  className: b.backgroundImage,
                                  pageMultiplier: 5
                              }),
                              (0, i.jsx)('div', { className: b.backgroundOverlay })
                          ]
                      }),
                      (0, i.jsx)('div', { className: b.heroImage }),
                      (0, i.jsxs)('div', {
                          className: b.content,
                          children: [
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(s.X6q, {
                                          variant: 'heading-md/bold',
                                          color: void 0,
                                          className: b.specialText,
                                          children: f.intl.string(f.t.zUhr3N)
                                      }),
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'always-white',
                                          children: f.intl.format(f.t.Xw2XUV, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      s.P3F,
                                                      {
                                                          tag: 'span',
                                                          className: b.specialTextLink,
                                                          onClick: E,
                                                          children: e
                                                      },
                                                      t
                                                  )
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(s.P3F, {
                                  className: b.closeClickable,
                                  onClick: () => x(h.L.USER_DISMISS),
                                  children: (0, i.jsx)(s.Dio, {
                                      color: 'currentColor',
                                      size: 'xs'
                                  })
                              })
                          ]
                      })
                  ]
              })
          })
        : null;
}
function x() {
    return null == u.Z.coachmarkDismissibleContent ? null : (0, i.jsx)(_, { dismissibleContent: u.Z.coachmarkDismissibleContent });
}
