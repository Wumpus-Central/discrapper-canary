n.d(t, { Z: () => h }), n(953529), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(442837),
    o = n(481060),
    l = n(230711),
    s = n(493773),
    c = n(367907),
    d = n(138201),
    u = n(592125),
    _ = n(155647),
    m = n(185625),
    p = n(981631),
    g = n(388032),
    f = n(769450);
function b(e) {
    let { title: t, description: n, onButtonClick: i, trackSettingsUpsellsAction: o } = e,
        [l, c] = a.useState(!1);
    return (
        (0, s.ZP)(() => {
            o(m.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(d.JZ, {
            title: t,
            description: n,
            buttonText: l ? g.intl.string(g.t["h+WsPT"]) : g.intl.string(g.t.A8t4NT),
            buttonDisabled: l,
            onButtonPress: () => {
                i(), c(!0), o(m.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function h(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: a, reportId: s, reportType: d, reportSubType: h } = e,
        x = (0, i.e7)([u.Z], () => u.Z.getChannel(n)),
        v = (0, _.jc)(t, null == x ? void 0 : x.type),
        j = (0, m.i_)(d, h, s);
    return 0 === v.length
        ? null
        : (0, r.jsxs)("div", {
              className: f.container,
              children: [
                  (0, r.jsx)(o.X6q, {
                      variant: "text-sm/semibold",
                      className: f.header,
                      children: g.intl.string(g.t["1yxTIC"]),
                  }),
                  (0, r.jsx)("div", {
                      className: f.upsellsContainer,
                      children: v.map((e, n) => {
                          let { getTitle: a, getDescription: i, onApply: o } = e;
                          return (0, r.jsx)(
                              b,
                              {
                                  title: a(),
                                  description: i(),
                                  onButtonClick: o,
                                  trackSettingsUpsellsAction: j(t[n]),
                              },
                              n,
                          );
                      }),
                  }),
                  (0, r.jsx)(o.Avr, {
                      text: g.intl.string(g.t.olebGx),
                      onClick: () => {
                          l.Z.open(p.oAB.CONTENT_AND_SOCIAL),
                              a(),
                              c.ZP.trackWithMetadata(p.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: d.name,
                                  report_subtype: h,
                                  action: m.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
