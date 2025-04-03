n.d(t, { Z: () => _ }), n(266796), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(230711),
    s = n(493773),
    c = n(367907),
    d = n(138201),
    u = n(592125),
    m = n(155647),
    x = n(185625),
    p = n(981631),
    f = n(388032),
    b = n(305086);
function h(e) {
    let { title: t, description: n, onButtonClick: i, trackSettingsUpsellsAction: a } = e,
        [o, c] = l.useState(!1);
    return (
        (0, s.ZP)(() => {
            a(x.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(d.ZP, {
            title: t,
            description: n,
            buttonText: o ? f.NW.string(f.t['h+WsPT']) : f.NW.string(f.t.A8t4NT),
            buttonDisabled: o,
            onButtonPress: () => {
                i(), c(!0), a(x.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function _(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: l, reportId: s, reportType: d, reportSubType: _ } = e,
        g = (0, i.e7)([u.Z], () => u.Z.getChannel(n)),
        v = (0, m.jc)(t, null == g ? void 0 : g.type),
        j = (0, x.i_)(d, _, s);
    return 0 === v.length
        ? null
        : (0, r.jsxs)('div', {
              className: b.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      variant: 'text-sm/semibold',
                      className: b.header,
                      children: f.NW.string(f.t['1yxTIC'])
                  }),
                  (0, r.jsx)('div', {
                      className: b.upsellsContainer,
                      children: v.map((e, n) => {
                          let { getTitle: l, getDescription: i, onApply: a } = e;
                          return (0, r.jsx)(
                              h,
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
                  (0, r.jsx)(a.zxk, {
                      className: b.navLinkButton,
                      onClick: () => {
                          o.Z.open(p.oAB.CONTENT_AND_SOCIAL),
                              l(),
                              c.ZP.trackWithMetadata(p.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: d.name,
                                  report_subtype: _,
                                  action: x.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              });
                      },
                      look: a.zxk.Looks.LINK,
                      color: a.zxk.Colors.LINK,
                      size: a.zxk.Sizes.NONE,
                      children: f.NW.string(f.t.olebGx)
                  })
              ]
          });
}
