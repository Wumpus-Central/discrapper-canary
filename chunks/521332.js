r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(481060),
    u = r(230711),
    c = r(493773),
    d = r(367907),
    f = r(138201),
    p = r(592125),
    h = r(155647),
    _ = r(185625),
    m = r(981631),
    g = r(388032),
    E = r(442031);
function v(e) {
    let { title: n, description: r, onButtonClick: i, trackSettingsUpsellsAction: s } = e,
        [l, u] = o.useState(!1);
    return (
        (0, c.Z)(() => {
            s(_.M4.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, a.jsx)(f.ZP, {
            title: n,
            description: r,
            buttonText: l ? g.intl.string(g.t['h+WsPT']) : g.intl.string(g.t.A8t4NT),
            buttonDisabled: l,
            onButtonPress: () => {
                i(), u(!0), s(_.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function y(e) {
    let { settingsUpsells: n, channelId: r, onModalClose: i, reportId: o, reportType: c, reportSubType: f } = e,
        y = (0, s.e7)([p.Z], () => p.Z.getChannel(r)),
        b = (0, h.jc)(n, null == y ? void 0 : y.type),
        I = (0, _.i_)(c, f, o);
    return 0 === b.length
        ? null
        : (0, a.jsxs)('div', {
              className: E.container,
              children: [
                  (0, a.jsx)(l.Heading, {
                      variant: 'text-sm/semibold',
                      className: E.header,
                      children: g.intl.string(g.t['1yxTIC'])
                  }),
                  (0, a.jsx)('div', {
                      className: E.upsellsContainer,
                      children: b.map((e, r) => {
                          let { getTitle: i, getDescription: o, onApply: s } = e;
                          return (0, a.jsx)(
                              v,
                              {
                                  title: i(),
                                  description: o(),
                                  onButtonClick: s,
                                  trackSettingsUpsellsAction: I(n[r])
                              },
                              r
                          );
                      })
                  }),
                  (0, a.jsx)(l.Button, {
                      className: E.navLinkButton,
                      onClick: () => {
                          u.Z.open(m.oAB.CONTENT_AND_SOCIAL),
                              i(),
                              d.ZP.trackWithMetadata(m.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: o,
                                  report_type: c.name,
                                  report_subtype: f,
                                  action: _.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              });
                      },
                      look: l.Button.Looks.LINK,
                      color: l.Button.Colors.LINK,
                      size: l.Button.Sizes.NONE,
                      children: g.intl.string(g.t.olebGx)
                  })
              ]
          });
}
