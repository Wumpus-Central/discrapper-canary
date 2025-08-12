n.d(t, { Z: () => x }), n(953529), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(493773),
    c = n(367907),
    d = n(138201),
    u = n(592125),
    m = n(155647),
    p = n(185625),
    g = n(981631),
    _ = n(388032),
    b = n(995121);
function h(e) {
    let { title: t, description: n, onButtonClick: l, trackSettingsUpsellsAction: a } = e,
        [s, c] = i.useState(!1);
    return (
        (0, o.ZP)(() => {
            a(p.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(d.JZ, {
            title: t,
            description: n,
            buttonText: s ? _.intl.string(_.t["h+WsPT"]) : _.intl.string(_.t.A8t4NT),
            buttonDisabled: s,
            onButtonPress: () => {
                l(), c(!0), a(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function x(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: o, reportType: d, reportSubType: x } = e,
        f = (0, l.e7)([u.Z], () => u.Z.getChannel(n)),
        v = (0, m.jc)(t, null == f ? void 0 : f.type),
        j = (0, p.i_)(d, x, o);
    return 0 === v.length
        ? null
        : (0, r.jsxs)("div", {
              className: b.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      variant: "text-sm/semibold",
                      className: b.header,
                      children: _.intl.string(_.t["1yxTIC"]),
                  }),
                  (0, r.jsx)("div", {
                      className: b.upsellsContainer,
                      children: v.map((e, n) => {
                          let { getTitle: i, getDescription: l, onApply: a } = e;
                          return (0, r.jsx)(
                              h,
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
                      text: _.intl.string(_.t.olebGx),
                      onClick: () => {
                          s.Z.open(g.oAB.CONTENT_AND_SOCIAL),
                              i(),
                              c.ZP.trackWithMetadata(g.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: o,
                                  report_type: d.name,
                                  report_subtype: x,
                                  action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
