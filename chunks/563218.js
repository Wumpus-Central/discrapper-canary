n.d(t, { A: () => v });
var l = n(627968),
    a = n(64700),
    r = n(311907),
    i = n(397927),
    s = n(964486),
    d = n(58149),
    o = n(632738),
    c = n(780964),
    u = n(840065),
    _ = n(734057),
    m = n(319582),
    x = n(369053),
    p = n(652215),
    h = n(985018),
    g = n(624507);
function A(e) {
    let { title: t, description: n, onButtonClick: r, trackSettingsUpsellsAction: i } = e,
        [d, c] = a.useState(!1);
    return (
        (0, s.Ay)(() => {
            i(x.lJ.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, l.jsx)(o.PQ, {
            title: t,
            description: n,
            buttonText: d ? h.intl.string(h.t["h+WsPb"]) : h.intl.string(h.t.A8t4Nf),
            buttonDisabled: d,
            onButtonPress: () => {
                r(), c(!0), i(x.lJ.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function v(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: a, reportId: s, reportType: o, reportSubType: v } = e,
        f = (0, r.bG)([_.A], () => _.A.getChannel(n)),
        b = (0, m.MR)(t, f?.type),
        C = (0, x.Mw)(o, v, s);
    return 0 === b.length
        ? null
        : (0, l.jsxs)("div", {
              className: g.kL,
              children: [
                  (0, l.jsx)(i.Heading, {
                      variant: "text-sm/semibold",
                      className: g.wx,
                      children: h.intl.string(h.t["1yxTIJ"]),
                  }),
                  (0, l.jsx)("div", {
                      className: g.uk,
                      children: b.map((e, n) => {
                          let { getTitle: a, getDescription: r, onApply: i } = e;
                          return (0, l.jsx)(
                              A,
                              { title: a(), description: r(), onButtonClick: i, trackSettingsUpsellsAction: C(t[n]) },
                              n,
                          );
                      }),
                  }),
                  (0, l.jsx)(i.QWc, {
                      text: h.intl.string(h.t.olebGx),
                      onClick: () => {
                          (0, u.openUserSettings)(c.X.CONTENT_AND_SOCIAL_PANEL),
                              a(),
                              d.Ay.trackWithMetadata(p.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: o.name,
                                  report_subtype: v,
                                  action: x.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
