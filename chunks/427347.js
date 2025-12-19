n.d(t, { Z: () => j });
var a = n(54381);
n(473749);
var r = n(481060),
    i = n(100527),
    l = n(906732),
    s = n(266454),
    o = n(314910),
    c = n(313789),
    d = n(526665),
    u = n(518596),
    m = n(378364),
    p = n(197344),
    h = n(226625),
    f = n(981631),
    x = n(921944),
    b = n(388032),
    g = n(240095);
function v(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: m } = e,
        v = p.Z.useIsEligible(),
        j = (0, s.Nj)(t),
        y = null != n,
        C = null != m ? { color: m } : void 0,
        { analyticsLocations: _ } = (0, l.ZP)(i.Z.HOLIDAY_COACHMARK),
        S = (e) => {
            (0, s.Q3)(t, { dismissAction: e });
        },
        E = () => {
            let e = (0, d.KV)("HolidayCoachmark");
            (0, u.openUserSettings)(e ? c.n.NOTIFICATIONS_PANEL : c.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
                section: f.oAB.NOTIFICATIONS,
                analyticsLocations: _,
            }),
                S(x.L.TAKE_ACTION);
        };
    return v && !j
        ? (0, a.jsx)(o.ZP, {
              children: (0, a.jsxs)("div", {
                  className: g.wrapper,
                  style: { backgroundColor: y ? n : void 0 },
                  children: [
                      !y &&
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
                                      (0, a.jsx)(r.Heading, {
                                          variant: "heading-md/bold",
                                          color: null != C ? void 0 : "always-white",
                                          style: C,
                                          children: b.intl.string(b.t["6CxPoB"]),
                                      }),
                                      (0, a.jsx)(r.Text, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: b.intl.format(b.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, a.jsx)(
                                                      r.P3F,
                                                      {
                                                          tag: "span",
                                                          className: g.link,
                                                          style: C,
                                                          onClick: E,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(r.P3F, {
                                  className: g.closeClickable,
                                  onClick: () => S(x.L.USER_DISMISS),
                                  children: (0, a.jsx)(r.Dio, {
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
        : (0, a.jsx)(v, {
              dismissibleContent: m.Z.coachmarkDismissibleContent,
              backgroundColor: m.Z.coachmarkBackgroundColor,
              specialTextColor: m.Z.coachmarkSpecialTextColor,
          });
}
