n.d(t, { Z: () => f }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(493773),
    o = n(367907),
    c = n(138201),
    d = n(313789),
    u = n(518596),
    m = n(592125),
    p = n(155647),
    g = n(185625),
    _ = n(981631),
    h = n(388032),
    b = n(298186);
function x(e) {
    let { title: t, description: n, onButtonClick: l, trackSettingsUpsellsAction: a } = e,
        [o, d] = i.useState(!1);
    return (
        (0, s.ZP)(() => {
            a(g.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(c.JZ, {
            title: t,
            description: n,
            buttonText: o ? h.intl.string(h.t["h+WsPb"]) : h.intl.string(h.t.A8t4Nf),
            buttonDisabled: o,
            onButtonPress: () => {
                l(), d(!0), a(g.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function f(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: s, reportType: c, reportSubType: f } = e,
        v = (0, l.e7)([m.Z], () => m.Z.getChannel(n)),
        j = (0, p.jc)(t, null == v ? void 0 : v.type),
        y = (0, g.i_)(c, f, s);
    return 0 === j.length
        ? null
        : (0, r.jsxs)("div", {
              className: b.container,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "text-sm/semibold",
                      className: b.header,
                      children: h.intl.string(h.t["1yxTIJ"]),
                  }),
                  (0, r.jsx)("div", {
                      className: b.upsellsContainer,
                      children: j.map((e, n) => {
                          let { getTitle: i, getDescription: l, onApply: a } = e;
                          return (0, r.jsx)(
                              x,
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
                      text: h.intl.string(h.t.olebGx),
                      onClick: () => {
                          (0, u.openUserSettings)(d.n.CONTENT_AND_SOCIAL_PANEL, { section: _.oAB.CONTENT_AND_SOCIAL }),
                              i(),
                              o.ZP.trackWithMetadata(_.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: c.name,
                                  report_subtype: f,
                                  action: g.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
