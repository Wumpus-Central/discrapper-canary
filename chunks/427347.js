n.d(t, { Z: () => y });
var r = n(951288);
n(647438);
var i = n(704215),
    a = n(481060),
    o = n(230711),
    s = n(100527),
    l = n(906732),
    c = n(266454),
    u = n(314910),
    d = n(378364),
    f = n(197344),
    _ = n(226625),
    p = n(981631),
    h = n(921944),
    m = n(388032),
    g = n(972663);
let E = 5;
function b(e) {
    let { dismissibleContent: t } = e,
        n = f.Z.useIsEligible(),
        d = (0, c.Nj)(t),
        b = n && !d,
        { analyticsLocations: y } = (0, l.ZP)(s.Z.HOLIDAY_COACHMARK),
        O = (e) => {
            (0, c.Q3)(i.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, { dismissAction: e });
        },
        v = () => {
            o.Z.open(p.oAB.NOTIFICATIONS, null, { analyticsLocations: y }), O(h.L.SECONDARY);
        };
    return b
        ? (0, r.jsx)(u.ZP, {
              children: (0, r.jsxs)("div", {
                  className: g.wrapper,
                  children: [
                      (0, r.jsxs)("div", {
                          className: g.backgroundWrapper,
                          children: [
                              (0, r.jsx)(_.Z, {
                                  className: g.backgroundImage,
                                  pageMultiplier: E,
                              }),
                              (0, r.jsx)("div", { className: g.backgroundOverlay }),
                          ],
                      }),
                      (0, r.jsx)("div", { className: g.heroImage }),
                      (0, r.jsxs)("div", {
                          className: g.content,
                          children: [
                              (0, r.jsxs)("div", {
                                  children: [
                                      (0, r.jsx)(a.X6q, {
                                          variant: "heading-md/bold",
                                          color: void 0,
                                          className: g.specialText,
                                          children: m.intl.string(m.t.zUhr3N),
                                      }),
                                      (0, r.jsx)(a.Text, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: m.intl.format(m.t.Xw2XUV, {
                                              settingsHook: (e, t) =>
                                                  (0, r.jsx)(
                                                      a.P3F,
                                                      {
                                                          tag: "span",
                                                          className: g.specialTextLink,
                                                          onClick: v,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(a.P3F, {
                                  className: g.closeClickable,
                                  onClick: () => O(h.L.USER_DISMISS),
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
function y() {
    return null == d.Z.coachmarkDismissibleContent
        ? null
        : (0, r.jsx)(b, { dismissibleContent: d.Z.coachmarkDismissibleContent });
}
