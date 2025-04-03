n.d(t, { Z: () => x });
var r = n(200651);
n(192379);
var i = n(704215),
    s = n(481060),
    a = n(230711),
    l = n(100527),
    o = n(906732),
    c = n(605236),
    d = n(314910),
    u = n(378364),
    m = n(197344),
    g = n(226625),
    p = n(981631),
    h = n(921944),
    f = n(388032),
    b = n(963748);
function N(e) {
    let { dismissibleContent: t } = e,
        n = m.Z.useIsEligible(),
        u = (0, c.wE)(t),
        { analyticsLocations: N } = (0, o.ZP)(l.Z.HOLIDAY_COACHMARK),
        x = (e) => {
            (0, c.EW)(i.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, { dismissAction: e });
        },
        _ = () => {
            a.Z.open(p.oAB.NOTIFICATIONS, null, { analyticsLocations: N }), x(h.L.SECONDARY);
        };
    return n && !u
        ? (0, r.jsx)(d.ZP, {
              children: (0, r.jsxs)('div', {
                  className: b.wrapper,
                  children: [
                      (0, r.jsxs)('div', {
                          className: b.backgroundWrapper,
                          children: [
                              (0, r.jsx)(g.Z, {
                                  className: b.backgroundImage,
                                  pageMultiplier: 5
                              }),
                              (0, r.jsx)('div', { className: b.backgroundOverlay })
                          ]
                      }),
                      (0, r.jsx)('div', { className: b.heroImage }),
                      (0, r.jsxs)('div', {
                          className: b.content,
                          children: [
                              (0, r.jsxs)('div', {
                                  children: [
                                      (0, r.jsx)(s.X6q, {
                                          variant: 'heading-md/bold',
                                          color: void 0,
                                          className: b.specialText,
                                          children: f.NW.string(f.t.zUhr3N)
                                      }),
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'always-white',
                                          children: f.NW.format(f.t.Xw2XUV, {
                                              settingsHook: (e, t) =>
                                                  (0, r.jsx)(
                                                      s.P3F,
                                                      {
                                                          tag: 'span',
                                                          className: b.specialTextLink,
                                                          onClick: _,
                                                          children: e
                                                      },
                                                      t
                                                  )
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsx)(s.P3F, {
                                  className: b.closeClickable,
                                  onClick: () => x(h.L.USER_DISMISS),
                                  children: (0, r.jsx)(s.Dio, {
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
    return null == u.Z.coachmarkDismissibleContent ? null : (0, r.jsx)(N, { dismissibleContent: u.Z.coachmarkDismissibleContent });
}
