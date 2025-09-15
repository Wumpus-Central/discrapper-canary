n.d(t, { Z: () => h }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    l = n(481060),
    o = n(493773),
    s = n(367907),
    c = n(138201),
    d = n(313789),
    u = n(518596),
    _ = n(592125),
    m = n(155647),
    p = n(185625),
    f = n(981631),
    g = n(388032),
    b = n(769450);
function x(e) {
    let { title: t, description: n, onButtonClick: a, trackSettingsUpsellsAction: l } = e,
        [s, d] = i.useState(!1);
    return (
        (0, o.ZP)(() => {
            l(p.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(c.JZ, {
            title: t,
            description: n,
            buttonText: s ? g.intl.string(g.t["h+WsPT"]) : g.intl.string(g.t.A8t4NT),
            buttonDisabled: s,
            onButtonPress: () => {
                a(), d(!0), l(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function h(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: o, reportType: c, reportSubType: h } = e,
        v = (0, a.e7)([_.Z], () => _.Z.getChannel(n)),
        j = (0, m.jc)(t, null == v ? void 0 : v.type),
        y = (0, p.i_)(c, h, o);
    return 0 === j.length
        ? null
        : (0, r.jsxs)("div", {
              className: b.container,
              children: [
                  (0, r.jsx)(l.X6q, {
                      variant: "text-sm/semibold",
                      className: b.header,
                      children: g.intl.string(g.t["1yxTIC"]),
                  }),
                  (0, r.jsx)("div", {
                      className: b.upsellsContainer,
                      children: j.map((e, n) => {
                          let { getTitle: i, getDescription: a, onApply: l } = e;
                          return (0, r.jsx)(
                              x,
                              {
                                  title: i(),
                                  description: a(),
                                  onButtonClick: l,
                                  trackSettingsUpsellsAction: y(t[n]),
                              },
                              n,
                          );
                      }),
                  }),
                  (0, r.jsx)(l.Avr, {
                      text: g.intl.string(g.t.olebGx),
                      onClick: () => {
                          (0, u.openUserSettings)(d.n.CONTENT_AND_SOCIAL_PANEL, { section: f.oAB.CONTENT_AND_SOCIAL }),
                              i(),
                              s.ZP.trackWithMetadata(f.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: o,
                                  report_type: c.name,
                                  report_subtype: h,
                                  action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
