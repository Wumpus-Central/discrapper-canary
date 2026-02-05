n.d(t, { A: () => b });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(397927),
    s = n(964486),
    d = n(58149),
    o = n(632738),
    u = n(780964),
    c = n(840065),
    m = n(734057),
    _ = n(319582),
    x = n(369053),
    g = n(652215),
    h = n(985018),
    p = n(71561);
function A(e) {
    let { title: t, description: n, onButtonClick: i, trackSettingsUpsellsAction: r } = e,
        [d, u] = a.useState(!1);
    return (
        (0, s.Ay)(() => {
            r(x.lJ.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, l.jsx)(o.PQ, {
            title: t,
            description: n,
            buttonText: d ? h.intl.string(h.t["h+WsPb"]) : h.intl.string(h.t.A8t4Nf),
            buttonDisabled: d,
            onButtonPress: () => {
                i(), u(!0), r(x.lJ.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function b(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: a, reportId: s, reportType: o, reportSubType: b } = e,
        v = (0, i.bG)([m.A], () => m.A.getChannel(n)),
        f = (0, _.MR)(t, v?.type),
        j = (0, x.Mw)(o, b, s);
    return 0 === f.length
        ? null
        : (0, l.jsxs)("div", {
              className: p.kL,
              children: [
                  (0, l.jsx)(r.Heading, {
                      variant: "text-sm/semibold",
                      className: p.wx,
                      children: h.intl.string(h.t["1yxTIJ"]),
                  }),
                  (0, l.jsx)("div", {
                      className: p.uk,
                      children: f.map((e, n) => {
                          let { getTitle: a, getDescription: i, onApply: r } = e;
                          return (0, l.jsx)(
                              A,
                              { title: a(), description: i(), onButtonClick: r, trackSettingsUpsellsAction: j(t[n]) },
                              n,
                          );
                      }),
                  }),
                  (0, l.jsx)(r.QWc, {
                      text: h.intl.string(h.t.olebGx),
                      onClick: () => {
                          (0, c.openUserSettings)(u.X.CONTENT_AND_SOCIAL_PANEL, { section: g.nc_.CONTENT_AND_SOCIAL }),
                              a(),
                              d.Ay.trackWithMetadata(g.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: o.name,
                                  report_subtype: b,
                                  action: x.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
