n.d(t, { Z: () => p }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(493773),
    d = n(367907),
    c = n(138201),
    u = n(592125),
    m = n(155647),
    x = n(185625),
    _ = n(981631),
    h = n(388032),
    v = n(945944);
function g(e) {
    let { title: t, description: n, onButtonClick: r, trackSettingsUpsellsAction: a } = e,
        [s, d] = i.useState(!1);
    return (
        (0, o.ZP)(() => {
            a(x.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, l.jsx)(c.ZP, {
            title: t,
            description: n,
            buttonText: s ? h.intl.string(h.t['h+WsPT']) : h.intl.string(h.t.A8t4NT),
            buttonDisabled: s,
            onButtonPress: () => {
                r(), d(!0), a(x.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function p(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: o, reportType: c, reportSubType: p } = e,
        f = (0, r.e7)([u.Z], () => u.Z.getChannel(n)),
        b = (0, m.jc)(t, null == f ? void 0 : f.type),
        Z = (0, x.i_)(c, p, o);
    return 0 === b.length
        ? null
        : (0, l.jsxs)('div', {
              className: v.container,
              children: [
                  (0, l.jsx)(a.X6q, {
                      variant: 'text-sm/semibold',
                      className: v.header,
                      children: h.intl.string(h.t['1yxTIC'])
                  }),
                  (0, l.jsx)('div', {
                      className: v.upsellsContainer,
                      children: b.map((e, n) => {
                          let { getTitle: i, getDescription: r, onApply: a } = e;
                          return (0, l.jsx)(
                              g,
                              {
                                  title: i(),
                                  description: r(),
                                  onButtonClick: a,
                                  trackSettingsUpsellsAction: Z(t[n])
                              },
                              n
                          );
                      })
                  }),
                  (0, l.jsx)(a.zxk, {
                      className: v.navLinkButton,
                      onClick: () => {
                          s.Z.open(_.oAB.CONTENT_AND_SOCIAL),
                              i(),
                              d.ZP.trackWithMetadata(_.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: o,
                                  report_type: c.name,
                                  report_subtype: p,
                                  action: x.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              });
                      },
                      look: a.zxk.Looks.LINK,
                      color: a.zxk.Colors.LINK,
                      size: a.zxk.Sizes.NONE,
                      children: h.intl.string(h.t.olebGx)
                  })
              ]
          });
}
