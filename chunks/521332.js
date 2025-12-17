n.d(t, { Z: () => v }), n(953529), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(481060),
    s = n(493773),
    o = n(367907),
    c = n(138201),
    d = n(313789),
    u = n(518596),
    m = n(592125),
    b = n(155647),
    p = n(185625),
    g = n(981631),
    f = n(388032),
    x = n(427572);
function h(e) {
    let { title: t, description: n, onButtonClick: i, trackSettingsUpsellsAction: a } = e,
        [o, d] = l.useState(!1);
    return (
        (0, s.ZP)(() => {
            a(p.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(c.JZ, {
            title: t,
            description: n,
            buttonText: o ? f.intl.string(f.t["h+WsPb"]) : f.intl.string(f.t.A8t4Nf),
            buttonDisabled: o,
            onButtonPress: () => {
                i(), d(!0), a(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function v(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: l, reportId: s, reportType: c, reportSubType: v } = e,
        j = (0, i.e7)([m.Z], () => m.Z.getChannel(n)),
        _ = (0, b.jc)(t, null == j ? void 0 : j.type),
        y = (0, p.i_)(c, v, s);
    return 0 === _.length
        ? null
        : (0, r.jsxs)("div", {
              className: x.container,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "text-sm/semibold",
                      className: x.header,
                      children: f.intl.string(f.t["1yxTIJ"]),
                  }),
                  (0, r.jsx)("div", {
                      className: x.upsellsContainer,
                      children: _.map((e, n) => {
                          let { getTitle: l, getDescription: i, onApply: a } = e;
                          return (0, r.jsx)(
                              h,
                              {
                                  title: l(),
                                  description: i(),
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
                              l(),
                              o.ZP.trackWithMetadata(g.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: c.name,
                                  report_subtype: v,
                                  action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
