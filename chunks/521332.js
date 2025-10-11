n.d(t, { Z: () => x }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(493773),
    s = n(367907),
    c = n(138201),
    d = n(313789),
    u = n(518596),
    _ = n(592125),
    m = n(155647),
    p = n(185625),
    g = n(981631),
    f = n(388032),
    h = n(769450);
function b(e) {
    let { title: t, description: n, onButtonClick: l, trackSettingsUpsellsAction: a } = e,
        [s, d] = i.useState(!1);
    return (
        (0, o.ZP)(() => {
            a(p.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(c.JZ, {
            title: t,
            description: n,
            buttonText: s ? f.intl.string(f.t["h+WsPT"]) : f.intl.string(f.t.A8t4NT),
            buttonDisabled: s,
            onButtonPress: () => {
                l(), d(!0), a(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function x(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: o, reportType: c, reportSubType: x } = e,
        v = (0, l.e7)([_.Z], () => _.Z.getChannel(n)),
        j = (0, m.jc)(t, null == v ? void 0 : v.type),
        y = (0, p.i_)(c, x, o);
    return 0 === j.length
        ? null
        : (0, r.jsxs)("div", {
              className: h.container,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "text-sm/semibold",
                      className: h.header,
                      children: f.intl.string(f.t["1yxTIC"]),
                  }),
                  (0, r.jsx)("div", {
                      className: h.upsellsContainer,
                      children: j.map((e, n) => {
                          let { getTitle: i, getDescription: l, onApply: a } = e;
                          return (0, r.jsx)(
                              b,
                              {
                                  title: i(),
                                  description: l(),
                                  onButtonClick: a,
                                  trackSettingsUpsellsAction: y(t[n]),
                              },
                              n,
                          );
                      }),
                  }),
                  (0, r.jsx)(a.Avr, {
                      text: f.intl.string(f.t.olebGx),
                      onClick: () => {
                          (0, u.openUserSettings)(d.n.CONTENT_AND_SOCIAL_PANEL, { section: g.oAB.CONTENT_AND_SOCIAL }),
                              i(),
                              s.ZP.trackWithMetadata(g.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: o,
                                  report_type: c.name,
                                  report_subtype: x,
                                  action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
