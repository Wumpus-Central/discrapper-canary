"use strict";
n.d(t, { A: () => x });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    l = n(534514),
    s = n(123292),
    d = n(964486),
    o = n(58149),
    c = n(632738),
    u = n(780964),
    _ = n(858897),
    m = n(734057),
    p = n(319582),
    h = n(369053),
    g = n(652215),
    f = n(985018),
    b = n(998436);
function A(e) {
    let { title: t, description: n, onButtonClick: r, trackSettingsUpsellsAction: l } = e,
        [s, o] = i.useState(!1);
    return (
        (0, d.Ay)(() => {
            l(h.lJ.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, a.jsx)(c.PQ, {
            title: t,
            description: n,
            buttonText: s ? f.intl.string(f.t["h+WsPb"]) : f.intl.string(f.t.A8t4Nf),
            buttonDisabled: s,
            onButtonPress: () => {
                r(), o(!0), l(h.lJ.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function x(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: d, reportType: c, reportSubType: x } = e,
        v = (0, r.bG)([m.A], () => m.A.getChannel(n)),
        E = (0, p.MR)(t, v?.type),
        I = (0, h.Mw)(c, x, d);
    return 0 === E.length
        ? null
        : (0, a.jsxs)("div", {
              className: b.kL,
              children: [
                  (0, a.jsx)(l.D, {
                      variant: "text-sm/semibold",
                      className: b.wx,
                      children: f.intl.string(f.t["1yxTIJ"]),
                  }),
                  (0, a.jsx)("div", {
                      className: b.uk,
                      children: E.map((e, n) => {
                          let { getTitle: i, getDescription: r, onApply: l } = e;
                          return (0, a.jsx)(
                              A,
                              { title: i(), description: r(), onButtonClick: l, trackSettingsUpsellsAction: I(t[n]) },
                              n,
                          );
                      }),
                  }),
                  (0, a.jsx)(s.Q, {
                      text: f.intl.string(f.t.olebGx),
                      onClick: () => {
                          (0, _.openUserSettings)(u.X.CONTENT_AND_SOCIAL_PANEL),
                              i(),
                              o.Ay.trackWithMetadata(g.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: d,
                                  report_type: c.name,
                                  report_subtype: x,
                                  action: h.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
