n.d(t, { Z: () => b }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(230711),
    s = n(493773),
    c = n(367907),
    d = n(138201),
    u = n(592125),
    m = n(155647),
    _ = n(185625),
    p = n(981631),
    x = n(388032),
    g = n(769450);
function f(e) {
    let { title: t, description: n, onButtonClick: l, trackSettingsUpsellsAction: a } = e,
        [o, c] = i.useState(!1);
    return (
        (0, s.ZP)(() => {
            a(_.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(d.JZ, {
            title: t,
            description: n,
            buttonText: o ? x.intl.string(x.t["h+WsPT"]) : x.intl.string(x.t.A8t4NT),
            buttonDisabled: o,
            onButtonPress: () => {
                l(), c(!0), a(_.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function b(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: s, reportType: d, reportSubType: b } = e,
        h = (0, l.e7)([u.Z], () => u.Z.getChannel(n)),
        v = (0, m.jc)(t, null == h ? void 0 : h.type),
        j = (0, _.i_)(d, b, s);
    return 0 === v.length
        ? null
        : (0, r.jsxs)("div", {
              className: g.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      variant: "text-sm/semibold",
                      className: g.header,
                      children: x.intl.string(x.t["1yxTIC"]),
                  }),
                  (0, r.jsx)("div", {
                      className: g.upsellsContainer,
                      children: v.map((e, n) => {
                          let { getTitle: i, getDescription: l, onApply: a } = e;
                          return (0, r.jsx)(
                              f,
                              {
                                  title: i(),
                                  description: l(),
                                  onButtonClick: a,
                                  trackSettingsUpsellsAction: j(t[n]),
                              },
                              n,
                          );
                      }),
                  }),
                  (0, r.jsx)(a.Avr, {
                      text: x.intl.string(x.t.olebGx),
                      onClick: () => {
                          o.Z.open(p.oAB.CONTENT_AND_SOCIAL),
                              i(),
                              c.ZP.trackWithMetadata(p.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: d.name,
                                  report_subtype: b,
                                  action: _.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
