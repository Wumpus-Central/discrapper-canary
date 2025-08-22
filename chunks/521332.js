n.d(t, { Z: () => _ }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
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
    x = n(388032),
    h = n(769450);
function b(e) {
    let { title: t, description: n, onButtonClick: l, trackSettingsUpsellsAction: a } = e,
        [s, c] = i.useState(!1);
    return (
        (0, o.ZP)(() => {
            a(p.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(d.JZ, {
            title: t,
            description: n,
            buttonText: s ? x.intl.string(x.t["h+WsPT"]) : x.intl.string(x.t.A8t4NT),
            buttonDisabled: s,
            onButtonPress: () => {
                l(), c(!0), a(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function _(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: o, reportType: d, reportSubType: _ } = e,
        f = (0, l.e7)([u.Z], () => u.Z.getChannel(n)),
        v = (0, m.jc)(t, null == f ? void 0 : f.type),
        j = (0, p.i_)(d, _, o);
    return 0 === v.length
        ? null
        : (0, r.jsxs)("div", {
              className: h.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      variant: "text-sm/semibold",
                      className: h.header,
                      children: x.intl.string(x.t["1yxTIC"]),
                  }),
                  (0, r.jsx)("div", {
                      className: h.upsellsContainer,
                      children: v.map((e, n) => {
                          let { getTitle: i, getDescription: l, onApply: a } = e;
                          return (0, r.jsx)(
                              b,
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
                          s.Z.open(g.oAB.CONTENT_AND_SOCIAL),
                              i(),
                              c.ZP.trackWithMetadata(g.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: o,
                                  report_type: d.name,
                                  report_subtype: _,
                                  action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
