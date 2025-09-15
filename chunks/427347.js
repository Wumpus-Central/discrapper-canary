n.d(t, { Z: () => O });
var r = n(951288);
n(647438);
var i = n(704215),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(266454),
    c = n(314910),
    u = n(313789),
    d = n(518596),
    f = n(378364),
    _ = n(197344),
    p = n(226625),
    h = n(981631),
    m = n(921944),
    g = n(388032),
    E = n(972663);
let b = 5;
function y(e) {
    let { dismissibleContent: t } = e,
        n = _.Z.useIsEligible(),
        f = (0, l.Nj)(t),
        y = n && !f,
        { analyticsLocations: O } = (0, s.ZP)(o.Z.HOLIDAY_COACHMARK),
        v = (e) => {
            (0, l.Q3)(i.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, { dismissAction: e });
        },
        I = () => {
            (0, d.openUserSettings)(u.n.NOTIFICATIONS_PANEL, {
                section: h.oAB.NOTIFICATIONS,
                analyticsLocations: O,
            }),
                v(m.L.SECONDARY);
        };
    return y
        ? (0, r.jsx)(c.ZP, {
              children: (0, r.jsxs)("div", {
                  className: E.wrapper,
                  children: [
                      (0, r.jsxs)("div", {
                          className: E.backgroundWrapper,
                          children: [
                              (0, r.jsx)(p.Z, {
                                  className: E.backgroundImage,
                                  pageMultiplier: b,
                              }),
                              (0, r.jsx)("div", { className: E.backgroundOverlay }),
                          ],
                      }),
                      (0, r.jsx)("div", { className: E.heroImage }),
                      (0, r.jsxs)("div", {
                          className: E.content,
                          children: [
                              (0, r.jsxs)("div", {
                                  children: [
                                      (0, r.jsx)(a.X6q, {
                                          variant: "heading-md/bold",
                                          color: void 0,
                                          className: E.specialText,
                                          children: g.intl.string(g.t.zUhr3N),
                                      }),
                                      (0, r.jsx)(a.Text, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: g.intl.format(g.t.Xw2XUV, {
                                              settingsHook: (e, t) =>
                                                  (0, r.jsx)(
                                                      a.P3F,
                                                      {
                                                          tag: "span",
                                                          className: E.specialTextLink,
                                                          onClick: I,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(a.P3F, {
                                  className: E.closeClickable,
                                  onClick: () => v(m.L.USER_DISMISS),
                                  children: (0, r.jsx)(a.Dio, {
                                      color: "currentColor",
                                      size: "xs",
                                  }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function O() {
    return null == f.Z.coachmarkDismissibleContent
        ? null
        : (0, r.jsx)(y, { dismissibleContent: f.Z.coachmarkDismissibleContent });
}
