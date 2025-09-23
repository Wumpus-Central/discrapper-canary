n.d(t, { Z: () => j });
var a = n(951288);
n(647438);
var r = n(704215),
    i = n(481060),
    l = n(100527),
    s = n(906732),
    o = n(266454),
    c = n(314910),
    d = n(313789),
    u = n(518596),
    m = n(378364),
    p = n(197344),
    h = n(226625),
    x = n(981631),
    f = n(921944),
    b = n(388032),
    g = n(120289);
function v(e) {
    let { dismissibleContent: t } = e,
        n = p.Z.useIsEligible(),
        m = (0, o.Nj)(t),
        { analyticsLocations: v } = (0, s.ZP)(l.Z.HOLIDAY_COACHMARK),
        j = (e) => {
            (0, o.Q3)(r.z.HOLIDAY_COACHMARK_HALLOWEEN_2024, { dismissAction: e });
        },
        _ = () => {
            (0, u.openUserSettings)(d.n.NOTIFICATIONS_PANEL, {
                section: x.oAB.NOTIFICATIONS,
                analyticsLocations: v,
            }),
                j(f.L.SECONDARY);
        };
    return n && !m
        ? (0, a.jsx)(c.ZP, {
              children: (0, a.jsxs)("div", {
                  className: g.wrapper,
                  children: [
                      (0, a.jsxs)("div", {
                          className: g.backgroundWrapper,
                          children: [
                              (0, a.jsx)(h.Z, {
                                  className: g.backgroundImage,
                                  pageMultiplier: 5,
                              }),
                              (0, a.jsx)("div", { className: g.backgroundOverlay }),
                          ],
                      }),
                      (0, a.jsx)("div", { className: g.heroImage }),
                      (0, a.jsxs)("div", {
                          className: g.content,
                          children: [
                              (0, a.jsxs)("div", {
                                  children: [
                                      (0, a.jsx)(i.X6q, {
                                          variant: "heading-md/bold",
                                          color: void 0,
                                          className: g.specialText,
                                          children: b.intl.string(b.t.zUhr3N),
                                      }),
                                      (0, a.jsx)(i.Text, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: b.intl.format(b.t.Xw2XUV, {
                                              settingsHook: (e, t) =>
                                                  (0, a.jsx)(
                                                      i.P3F,
                                                      {
                                                          tag: "span",
                                                          className: g.specialTextLink,
                                                          onClick: _,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(i.P3F, {
                                  className: g.closeClickable,
                                  onClick: () => j(f.L.USER_DISMISS),
                                  children: (0, a.jsx)(i.Dio, {
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
function j() {
    return null == m.Z.coachmarkDismissibleContent
        ? null
        : (0, a.jsx)(v, { dismissibleContent: m.Z.coachmarkDismissibleContent });
}
