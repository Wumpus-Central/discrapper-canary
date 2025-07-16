(n.d(t, { Z: () => f }), n(953529), n(388685));
var r = n(255367),
    a = n(73800),
    i = n(442837),
    o = n(755721),
    l = n(481060),
    s = n(230711),
    c = n(493773),
    d = n(367907),
    u = n(138201),
    m = n(592125),
    p = n(155647),
    _ = n(185625),
    b = n(981631),
    g = n(388032),
    x = n(305086);
function h(e) {
    let { title: t, description: n, onButtonClick: i, trackSettingsUpsellsAction: o } = e,
        [l, s] = a.useState(!1);
    return (
        (0, c.ZP)(() => {
            o(_.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, r.jsx)(u.ZP, {
            title: t,
            description: n,
            buttonText: l ? g.intl.string(g.t['h+WsPT']) : g.intl.string(g.t.A8t4NT),
            buttonDisabled: l,
            onButtonPress: () => {
                (i(), s(!0), o(_.M4.SETTINGS_UPSELLS_APPLY_CLICKED));
            }
        })
    );
}
function f(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: a, reportId: c, reportType: u, reportSubType: f } = e,
        v = (0, i.e7)([m.Z], () => m.Z.getChannel(n)),
        j = (0, p.jc)(t, null == v ? void 0 : v.type),
        C = (0, _.i_)(u, f, c);
    return 0 === j.length
        ? null
        : (0, r.jsxs)('div', {
              className: x.container,
              children: [
                  (0, r.jsx)(l.X6q, {
                      variant: 'text-sm/semibold',
                      className: x.header,
                      children: g.intl.string(g.t['1yxTIC'])
                  }),
                  (0, r.jsx)('div', {
                      className: x.upsellsContainer,
                      children: j.map((e, n) => {
                          let { getTitle: a, getDescription: i, onApply: o } = e;
                          return (0, r.jsx)(
                              h,
                              {
                                  title: a(),
                                  description: i(),
                                  onButtonClick: o,
                                  trackSettingsUpsellsAction: C(t[n])
                              },
                              n
                          );
                      })
                  }),
                  (0, r.jsx)(o.zx, {
                      className: x.navLinkButton,
                      onClick: () => {
                          (s.Z.open(b.oAB.CONTENT_AND_SOCIAL),
                              a(),
                              d.ZP.trackWithMetadata(b.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: c,
                                  report_type: u.name,
                                  report_subtype: f,
                                  action: _.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              }));
                      },
                      look: o.zx.Looks.LINK,
                      color: o.zx.Colors.LINK,
                      size: o.zx.Sizes.NONE,
                      children: g.intl.string(g.t.olebGx)
                  })
              ]
          });
}
