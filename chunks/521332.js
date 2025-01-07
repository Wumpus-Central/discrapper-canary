r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(481060),
    u = r(230711),
    c = r(493773),
    d = r(367907),
    f = r(138201),
    _ = r(187819),
    h = r(592125),
    p = r(155647),
    m = r(185625),
    g = r(981631),
    E = r(388032),
    v = r(442031);
function I(e) {
    let { title: n, description: r, onButtonClick: i, trackSettingsUpsellsAction: o } = e,
        [l, u] = s.useState(!1);
    return (
        (0, c.Z)(() => {
            o(m.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, a.jsx)(f.Z, {
            title: n,
            description: r,
            buttonText: l ? E.intl.string(E.t['h+WsPT']) : E.intl.string(E.t.A8t4NT),
            buttonDisabled: l,
            onButtonPress: () => {
                i(), u(!0), o(m.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function T(e) {
    let { settingsUpsells: n, channelId: r, onModalClose: i, reportId: s, reportType: c, reportSubType: f } = e,
        T = (0, o.e7)([h.Z], () => h.Z.getChannel(r)),
        b = (0, p.jc)(n, null == T ? void 0 : T.type),
        y = (0, m.i_)(c, f, s),
        S = (0, _._p)({ location: 'settings-upsells-element' });
    return 0 === b.length
        ? null
        : (0, a.jsxs)('div', {
              className: v.container,
              children: [
                  (0, a.jsx)(l.Heading, {
                      variant: 'text-sm/semibold',
                      className: v.header,
                      children: E.intl.string(E.t['1yxTIC'])
                  }),
                  (0, a.jsx)('div', {
                      className: v.upsellsContainer,
                      children: b.map((e, r) => {
                          let { getTitle: i, getDescription: s, onApply: o } = e;
                          return (0, a.jsx)(
                              I,
                              {
                                  title: i(),
                                  description: s(),
                                  onButtonClick: o,
                                  trackSettingsUpsellsAction: y(n[r])
                              },
                              r
                          );
                      })
                  }),
                  (0, a.jsx)(l.Button, {
                      className: v.navLinkButton,
                      onClick: () => {
                          S ? u.Z.open(g.oAB.CONTENT_AND_SOCIAL) : u.Z.open(g.oAB.PRIVACY_AND_SAFETY),
                              i(),
                              d.ZP.trackWithMetadata(g.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: c.name,
                                  report_subtype: f,
                                  action: m.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              });
                      },
                      look: l.Button.Looks.LINK,
                      color: l.Button.Colors.LINK,
                      size: l.Button.Sizes.NONE,
                      children: E.intl.string(E.t.olebGx)
                  })
              ]
          });
}
