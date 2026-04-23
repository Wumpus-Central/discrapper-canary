n.d(t, { A: () => v });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(534514),
    s = n(123292),
    d = n(964486),
    o = n(58149),
    c = n(632738),
    u = n(780964),
    _ = n(858897),
    m = n(734057),
    h = n(319582),
    g = n(369053),
    p = n(652215),
    x = n(985018),
    A = n(998436);
function f(e) {
    let { title: t, description: n, onButtonClick: i, trackSettingsUpsellsAction: r } = e,
        [s, o] = a.useState(!1);
    return (
        (0, d.Ay)(() => {
            r(g.lJ.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, l.jsx)(c.PQ, {
            title: t,
            description: n,
            buttonText: s ? x.intl.string(x.t["h+WsPb"]) : x.intl.string(x.t.A8t4Nf),
            buttonDisabled: s,
            onButtonPress: () => {
                i(), o(!0), r(g.lJ.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function v(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: a, reportId: d, reportType: c, reportSubType: v } = e,
        b = (0, i.bG)([m.A], () => m.A.getChannel(n)),
        N = (0, h.MR)(t, b?.type),
        E = (0, g.Mw)(c, v, d);
    return 0 === N.length
        ? null
        : (0, l.jsxs)("div", {
              className: A.kL,
              children: [
                  (0, l.jsx)(r.D, {
                      variant: "text-sm/semibold",
                      className: A.wx,
                      children: x.intl.string(x.t["1yxTIJ"]),
                  }),
                  (0, l.jsx)("div", {
                      className: A.uk,
                      children: N.map((e, n) => {
                          let { getTitle: a, getDescription: i, onApply: r } = e;
                          return (0, l.jsx)(
                              f,
                              { title: a(), description: i(), onButtonClick: r, trackSettingsUpsellsAction: E(t[n]) },
                              n,
                          );
                      }),
                  }),
                  (0, l.jsx)(s.Q, {
                      text: x.intl.string(x.t.olebGx),
                      onClick: () => {
                          (0, _.openUserSettings)(u.X.CONTENT_AND_SOCIAL_PANEL),
                              a(),
                              o.Ay.trackWithMetadata(p.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: d,
                                  report_type: c.name,
                                  report_subtype: v,
                                  action: g.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
