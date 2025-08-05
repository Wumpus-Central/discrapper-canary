(n.d(t, { Z: () => h }), n(953529), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(442837),
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
    _ = n(305086);
function b(e) {
    let { title: t, description: n, onButtonClick: i, trackSettingsUpsellsAction: a } = e,
        [s, c] = l.useState(!1);
    return (
        (0, o.ZP)(() => {
            a(p.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(d.ZP, {
            title: t,
            description: n,
            buttonText: s ? x.intl.string(x.t['h+WsPT']) : x.intl.string(x.t.A8t4NT),
            buttonDisabled: s,
            onButtonPress: () => {
                (i(), c(!0), a(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED));
            }
        })
    );
}
function h(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: l, reportId: o, reportType: d, reportSubType: h } = e,
        f = (0, i.e7)([u.Z], () => u.Z.getChannel(n)),
        v = (0, m.jc)(t, null == f ? void 0 : f.type),
        j = (0, p.i_)(d, h, o);
    return 0 === v.length
        ? null
        : (0, r.jsxs)('div', {
              className: _.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      variant: 'text-sm/semibold',
                      className: _.header,
                      children: x.intl.string(x.t['1yxTIC'])
                  }),
                  (0, r.jsx)('div', {
                      className: _.upsellsContainer,
                      children: v.map((e, n) => {
                          let { getTitle: l, getDescription: i, onApply: a } = e;
                          return (0, r.jsx)(
                              b,
                              {
                                  title: l(),
                                  description: i(),
                                  onButtonClick: a,
                                  trackSettingsUpsellsAction: j(t[n])
                              },
                              n
                          );
                      })
                  }),
                  (0, r.jsx)(a.Avr, {
                      text: x.intl.string(x.t.olebGx),
                      onClick: () => {
                          (s.Z.open(g.oAB.CONTENT_AND_SOCIAL),
                              l(),
                              c.ZP.trackWithMetadata(g.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: o,
                                  report_type: d.name,
                                  report_subtype: h,
                                  action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              }));
                      }
                  })
              ]
          });
}
