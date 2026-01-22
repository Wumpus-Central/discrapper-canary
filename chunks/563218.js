n.d(t, { A: () => h }), n(228524), n(896048);
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(397927),
    s = n(964486),
    o = n(58149),
    c = n(632738),
    d = n(780964),
    u = n(840065),
    m = n(734057),
    b = n(319582),
    p = n(369053),
    x = n(652215),
    g = n(985018),
    f = n(71561);
function v(e) {
    let { title: t, description: n, onButtonClick: a, trackSettingsUpsellsAction: i } = e,
        [o, d] = r.useState(!1);
    return (
        (0, s.Ay)(() => {
            i(p.lJ.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, l.jsx)(c.PQ, {
            title: t,
            description: n,
            buttonText: o ? g.intl.string(g.t["h+WsPb"]) : g.intl.string(g.t.A8t4Nf),
            buttonDisabled: o,
            onButtonPress: () => {
                a(), d(!0), i(p.lJ.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function h(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: r, reportId: s, reportType: c, reportSubType: h } = e,
        j = (0, a.bG)([m.A], () => m.A.getChannel(n)),
        _ = (0, b.MR)(t, null == j ? void 0 : j.type),
        A = (0, p.Mw)(c, h, s);
    return 0 === _.length
        ? null
        : (0, l.jsxs)("div", {
              className: f.kL,
              children: [
                  (0, l.jsx)(i.Heading, {
                      variant: "text-sm/semibold",
                      className: f.wx,
                      children: g.intl.string(g.t["1yxTIJ"]),
                  }),
                  (0, l.jsx)("div", {
                      className: f.uk,
                      children: _.map((e, n) => {
                          let { getTitle: r, getDescription: a, onApply: i } = e;
                          return (0, l.jsx)(
                              v,
                              {
                                  title: r(),
                                  description: a(),
                                  onButtonClick: i,
                                  trackSettingsUpsellsAction: A(t[n]),
                              },
                              n,
                          );
                      }),
                  }),
                  (0, l.jsx)(i.QWc, {
                      text: g.intl.string(g.t.olebGx),
                      onClick: () => {
                          (0, u.openUserSettings)(d.X.CONTENT_AND_SOCIAL_PANEL, { section: x.nc_.CONTENT_AND_SOCIAL }),
                              r(),
                              o.Ay.trackWithMetadata(x.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: c.name,
                                  report_subtype: h,
                                  action: p.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
