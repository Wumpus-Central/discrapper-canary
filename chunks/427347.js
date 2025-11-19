n.d(t, { Z: () => j });
var a = n(54381);
n(473749);
var l = n(481060),
    i = n(100527),
    r = n(906732),
    s = n(266454),
    o = n(314910),
    c = n(313789),
    d = n(526665),
    u = n(518596),
    m = n(378364),
    p = n(197344),
    h = n(226625),
    x = n(981631),
    g = n(921944),
    f = n(388032),
    b = n(972663);
function v(e) {
    let { dismissibleContent: t } = e,
        n = p.Z.useIsEligible(),
        m = (0, s.Nj)(t),
        { analyticsLocations: v } = (0, r.ZP)(i.Z.HOLIDAY_COACHMARK),
        j = (e) => {
            (0, s.Q3)(t, { dismissAction: e });
        },
        _ = () => {
            let e = (0, d.KV)("HolidayCoachmark");
            (0, u.openUserSettings)(e ? c.n.NOTIFICATIONS_PANEL : c.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
                section: x.oAB.NOTIFICATIONS,
                analyticsLocations: v,
            }),
                j(g.L.TAKE_ACTION);
        };
    return n && !m
        ? (0, a.jsx)(o.ZP, {
              children: (0, a.jsxs)("div", {
                  className: b.wrapper,
                  children: [
                      (0, a.jsxs)("div", {
                          className: b.backgroundWrapper,
                          children: [
                              (0, a.jsx)(h.Z, {
                                  className: b.backgroundImage,
                                  pageMultiplier: 5,
                              }),
                              (0, a.jsx)("div", { className: b.backgroundOverlay }),
                          ],
                      }),
                      (0, a.jsx)("div", { className: b.heroImage }),
                      (0, a.jsxs)("div", {
                          className: b.content,
                          children: [
                              (0, a.jsxs)("div", {
                                  children: [
                                      (0, a.jsx)(l.Heading, {
                                          variant: "heading-md/bold",
                                          color: void 0,
                                          className: b.specialText,
                                          children: f.intl.string(f.t.zUhr3D),
                                      }),
                                      (0, a.jsx)(l.Text, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: f.intl.format(f.t.Xw2XUT, {
                                              settingsHook: (e, t) =>
                                                  (0, a.jsx)(
                                                      l.P3F,
                                                      {
                                                          tag: "span",
                                                          className: b.specialTextLink,
                                                          onClick: _,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(l.P3F, {
                                  className: b.closeClickable,
                                  onClick: () => j(g.L.USER_DISMISS),
                                  children: (0, a.jsx)(l.Dio, {
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
