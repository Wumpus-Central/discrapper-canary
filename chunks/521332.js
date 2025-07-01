(n.d(t, { Z: () => h }), n(953529), n(388685));
var r = n(255367),
    a = n(73800),
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
    b = n(305086);
function x(e) {
    let { title: t, description: n, onButtonClick: i, trackSettingsUpsellsAction: l } = e,
        [o, c] = a.useState(!1);
    return (
        (0, s.ZP)(() => {
            l(p.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(d.ZP, {
            title: t,
            description: n,
            buttonText: o ? g.intl.string(g.t['h+WsPT']) : g.intl.string(g.t.A8t4NT),
            buttonDisabled: o,
            onButtonPress: () => {
                (i(), c(!0), l(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED));
            }
        })
    );
}
function h(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: a, reportId: s, reportType: d, reportSubType: h } = e,
        f = (0, i.e7)([u.Z], () => u.Z.getChannel(n)),
        v = (0, m.jc)(t, null == f ? void 0 : f.type),
        j = (0, p.i_)(d, h, s);
    return 0 === v.length
        ? null
        : (0, r.jsxs)('div', {
              className: b.container,
              children: [
                  (0, r.jsx)(l.X6q, {
                      variant: 'text-sm/semibold',
                      className: b.header,
                      children: g.intl.string(g.t['1yxTIC'])
                  }),
                  (0, r.jsx)('div', {
                      className: b.upsellsContainer,
                      children: v.map((e, n) => {
                          let { getTitle: a, getDescription: i, onApply: l } = e;
                          return (0, r.jsx)(
                              x,
                              {
                                  title: a(),
                                  description: i(),
                                  onButtonClick: l,
                                  trackSettingsUpsellsAction: j(t[n])
                              },
                              n
                          );
                      })
                  }),
                  (0, r.jsx)(l.zxk, {
                      className: b.navLinkButton,
                      onClick: () => {
                          (o.Z.open(_.oAB.CONTENT_AND_SOCIAL),
                              a(),
                              c.ZP.trackWithMetadata(_.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: d.name,
                                  report_subtype: h,
                                  action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              }));
                      },
                      look: l.zxk.Looks.LINK,
                      color: l.zxk.Colors.LINK,
                      size: l.zxk.Sizes.NONE,
                      children: g.intl.string(g.t.olebGx)
                  })
              ]
          });
}
