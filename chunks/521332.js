n.d(t, { Z: () => x }), n(953529), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(442837),
    l = n(481060),
    o = n(230711),
    s = n(493773),
    c = n(367907),
    d = n(138201),
    u = n(592125),
    m = n(155647),
    p = n(185625),
    _ = n(981631),
    g = n(388032),
    b = n(769450);
function h(e) {
    let { title: t, description: n, onButtonClick: i, trackSettingsUpsellsAction: l } = e,
        [o, c] = a.useState(!1);
    return (
        (0, s.ZP)(() => {
            l(p.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(d.JZ, {
            title: t,
            description: n,
            buttonText: o ? g.intl.string(g.t["h+WsPT"]) : g.intl.string(g.t.A8t4NT),
            buttonDisabled: o,
            onButtonPress: () => {
                i(), c(!0), l(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function x(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: a, reportId: s, reportType: d, reportSubType: x } = e,
        f = (0, i.e7)([u.Z], () => u.Z.getChannel(n)),
        v = (0, m.jc)(t, null == f ? void 0 : f.type),
        j = (0, p.i_)(d, x, s);
    return 0 === v.length
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
                      children: v.map((e, n) => {
                          let { getTitle: a, getDescription: i, onApply: l } = e;
                          return (0, r.jsx)(
                              h,
                              {
                                  title: a(),
                                  description: i(),
                                  onButtonClick: l,
                                  trackSettingsUpsellsAction: j(t[n]),
                              },
                              n,
                          );
                      }),
                  }),
                  (0, r.jsx)(l.Avr, {
                      text: g.intl.string(g.t.olebGx),
                      onClick: () => {
                          o.Z.open(_.oAB.CONTENT_AND_SOCIAL),
                              a(),
                              c.ZP.trackWithMetadata(_.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: d.name,
                                  report_subtype: x,
                                  action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
