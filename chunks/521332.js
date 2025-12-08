n.d(t, { Z: () => f }), n(953529), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(481060),
    s = n(493773),
    o = n(367907),
    d = n(138201),
    c = n(313789),
    u = n(518596),
    m = n(592125),
    p = n(155647),
    g = n(185625),
    _ = n(981631),
    x = n(388032),
    h = n(769450);
function b(e) {
    let { title: t, description: n, onButtonClick: i, trackSettingsUpsellsAction: a } = e,
        [o, c] = l.useState(!1);
    return (
        (0, s.ZP)(() => {
            a(g.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(d.JZ, {
            title: t,
            description: n,
            buttonText: o ? x.intl.string(x.t["h+WsPb"]) : x.intl.string(x.t.A8t4Nf),
            buttonDisabled: o,
            onButtonPress: () => {
                i(), c(!0), a(g.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function f(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: l, reportId: s, reportType: d, reportSubType: f } = e,
        v = (0, i.e7)([m.Z], () => m.Z.getChannel(n)),
        j = (0, p.jc)(t, null == v ? void 0 : v.type),
        y = (0, g.i_)(d, f, s);
    return 0 === j.length
        ? null
        : (0, r.jsxs)("div", {
              className: h.container,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "text-sm/semibold",
                      className: h.header,
                      children: x.intl.string(x.t["1yxTIJ"]),
                  }),
                  (0, r.jsx)("div", {
                      className: h.upsellsContainer,
                      children: j.map((e, n) => {
                          let { getTitle: l, getDescription: i, onApply: a } = e;
                          return (0, r.jsx)(
                              b,
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
                      text: x.intl.string(x.t.olebGx),
                      onClick: () => {
                          (0, u.openUserSettings)(c.n.CONTENT_AND_SOCIAL_PANEL, { section: _.oAB.CONTENT_AND_SOCIAL }),
                              l(),
                              o.ZP.trackWithMetadata(_.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: d.name,
                                  report_subtype: f,
                                  action: g.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
