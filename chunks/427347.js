n.d(t, { Z: () => I });
var i = n(200651);
n(192379);
var l = n(704215),
    r = n(481060),
    a = n(230711),
    s = n(100527),
    o = n(906732),
    c = n(605236),
    d = n(314910),
    u = n(378364),
    h = n(197344),
    m = n(226625),
    p = n(981631),
    g = n(921944),
    _ = n(388032),
    f = n(809551);
function E(e) {
    let { dismissibleContent: t } = e,
        n = h.Z.useIsEligible(),
        u = (0, c.wE)(t),
        { analyticsLocations: E } = (0, o.ZP)(s.Z.HOLIDAY_COACHMARK),
        I = (e) => {
            (0, c.EW)(l.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, { dismissAction: e });
        },
        C = () => {
            a.Z.open(p.oAB.NOTIFICATIONS, null, { analyticsLocations: E }), I(g.L.SECONDARY);
        };
    return n && !u
        ? (0, i.jsx)(d.ZP, {
              children: (0, i.jsxs)('div', {
                  className: f.wrapper,
                  children: [
                      (0, i.jsxs)('div', {
                          className: f.backgroundWrapper,
                          children: [
                              (0, i.jsx)(m.Z, {
                                  className: f.backgroundImage,
                                  pageMultiplier: 5
                              }),
                              (0, i.jsx)('div', { className: f.backgroundOverlay })
                          ]
                      }),
                      (0, i.jsx)('div', { className: f.heroImage }),
                      (0, i.jsxs)('div', {
                          className: f.content,
                          children: [
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(r.X6q, {
                                          variant: 'heading-md/bold',
                                          color: void 0,
                                          className: f.specialText,
                                          children: _.intl.string(_.t.zUhr3N)
                                      }),
                                      (0, i.jsx)(r.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'always-white',
                                          children: _.intl.format(_.t.Xw2XUV, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      r.P3F,
                                                      {
                                                          tag: 'span',
                                                          className: f.specialTextLink,
                                                          onClick: C,
                                                          children: e
                                                      },
                                                      t
                                                  )
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(r.P3F, {
                                  className: f.closeClickable,
                                  onClick: () => I(g.L.USER_DISMISS),
                                  children: (0, i.jsx)(r.Dio, {
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
function I() {
    return null == u.Z.coachmarkDismissibleContent ? null : (0, i.jsx)(E, { dismissibleContent: u.Z.coachmarkDismissibleContent });
}
