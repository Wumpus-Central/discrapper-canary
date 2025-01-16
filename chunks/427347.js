n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651);
n(192379);
var r = n(704215),
    l = n(481060),
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
    f = n(388032),
    _ = n(512360);
function E(e) {
    let { dismissibleContent: t } = e,
        n = h.Z.useIsEligible(),
        u = (0, c.wE)(t),
        { analyticsLocations: E } = (0, o.ZP)(s.Z.HOLIDAY_COACHMARK),
        I = (e) => {
            (0, c.EW)(r.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, { dismissAction: e });
        },
        C = () => {
            a.Z.open(p.oAB.NOTIFICATIONS, null, { analyticsLocations: E }), I(g.L.SECONDARY);
        };
    return n && !u
        ? (0, i.jsx)(d.ZP, {
              children: (0, i.jsxs)('div', {
                  className: _.wrapper,
                  children: [
                      (0, i.jsxs)('div', {
                          className: _.backgroundWrapper,
                          children: [
                              (0, i.jsx)(m.Z, {
                                  className: _.backgroundImage,
                                  pageMultiplier: 5
                              }),
                              (0, i.jsx)('div', { className: _.backgroundOverlay })
                          ]
                      }),
                      (0, i.jsx)('div', { className: _.heroImage }),
                      (0, i.jsxs)('div', {
                          className: _.content,
                          children: [
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(l.Heading, {
                                          variant: 'heading-md/bold',
                                          color: void 0,
                                          className: _.specialText,
                                          children: f.intl.string(f.t.zUhr3N)
                                      }),
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'always-white',
                                          children: f.intl.format(f.t.Xw2XUV, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      l.Clickable,
                                                      {
                                                          tag: 'span',
                                                          className: _.specialTextLink,
                                                          onClick: C,
                                                          children: e
                                                      },
                                                      t
                                                  )
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(l.Clickable, {
                                  className: _.closeClickable,
                                  onClick: () => I(g.L.USER_DISMISS),
                                  children: (0, i.jsx)(l.XSmallIcon, {
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
