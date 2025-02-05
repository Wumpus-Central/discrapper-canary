n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(230711),
    l = n(493773),
    u = n(367907),
    c = n(138201),
    d = n(592125),
    f = n(155647),
    _ = n(185625),
    p = n(981631),
    h = n(388032),
    m = n(442031);
function g(e) {
    let { title: t, description: n, onButtonClick: a, trackSettingsUpsellsAction: s } = e,
        [o, u] = r.useState(!1);
    return (
        (0, l.ZP)(() => {
            s(_.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, i.jsx)(c.ZP, {
            title: t,
            description: n,
            buttonText: o ? h.intl.string(h.t['h+WsPT']) : h.intl.string(h.t.A8t4NT),
            buttonDisabled: o,
            onButtonPress: () => {
                a(), u(!0), s(_.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function E(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: r, reportId: l, reportType: c, reportSubType: E } = e,
        v = (0, a.e7)([d.Z], () => d.Z.getChannel(n)),
        y = (0, f.jc)(t, null == v ? void 0 : v.type),
        I = (0, _.i_)(c, E, l);
    return 0 === y.length
        ? null
        : (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(s.X6q, {
                      variant: 'text-sm/semibold',
                      className: m.header,
                      children: h.intl.string(h.t['1yxTIC'])
                  }),
                  (0, i.jsx)('div', {
                      className: m.upsellsContainer,
                      children: y.map((e, n) => {
                          let { getTitle: r, getDescription: a, onApply: s } = e;
                          return (0, i.jsx)(
                              g,
                              {
                                  title: r(),
                                  description: a(),
                                  onButtonClick: s,
                                  trackSettingsUpsellsAction: I(t[n])
                              },
                              n
                          );
                      })
                  }),
                  (0, i.jsx)(s.zxk, {
                      className: m.navLinkButton,
                      onClick: () => {
                          o.Z.open(p.oAB.CONTENT_AND_SOCIAL),
                              r(),
                              u.ZP.trackWithMetadata(p.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: l,
                                  report_type: c.name,
                                  report_subtype: E,
                                  action: _.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              });
                      },
                      look: s.zxk.Looks.LINK,
                      color: s.zxk.Colors.LINK,
                      size: s.zxk.Sizes.NONE,
                      children: h.intl.string(h.t.olebGx)
                  })
              ]
          });
}
