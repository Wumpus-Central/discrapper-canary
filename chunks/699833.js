n.d(t, { i: () => d });
var r = n(255367);
n(73800);
var i = n(913527),
    l = n.n(i),
    a = n(692547),
    o = n(481060),
    s = n(800530),
    c = n(388032),
    u = n(832467);
function d(e) {
    var t, i, d, p, m;
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let f = e.message.embeds[0],
        _ =
            null != (d = null == (t = f.fields) ? void 0 : t.find((e) => e.rawName === s.Cg.CLASSIFICATION_ID))
                ? d
                : void 0,
        g = null != (p = null == _ ? void 0 : _.rawValue) ? p : void 0,
        h =
            null != (m = null == (i = f.fields) ? void 0 : i.find((e) => e.rawName === s.Cg.INCIDENT_TIMESTAMP))
                ? m
                : void 0,
        b = null == h || null == h.rawValue ? void 0 : parseFloat(h.rawValue);
    return null == g || null == b
        ? null
        : (0, r.jsxs)(o.P3F, {
              onClick: () => {
                  (0, o.ZDy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("25183"),
                          n.e("3940"),
                          n.e("18831"),
                          n.e("33587"),
                      ]).then(n.bind(n, 41164));
                      return (t) =>
                          (0, r.jsx)(e, {
                              classificationId: g,
                              source: s.s.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose,
                          });
                  });
              },
              className: u.safetyPolicyNoticeContainer,
              children: [
                  (0, r.jsxs)("div", {
                      className: u.noticeContent,
                      children: [
                          (0, r.jsxs)("div", {
                              className: u.headerRow,
                              children: [
                                  (0, r.jsx)(o.aNP, {
                                      className: u.warningIcon,
                                      color: a.Z.colors.STATUS_DANGER,
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-md/semibold",
                                      children: c.intl.string(c.t["4CxGXl"]),
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: u.incidentTiming,
                              children: (0, r.jsx)(o.Text, {
                                  variant: "text-xs/medium",
                                  children: c.intl.format(c.t.eevFb2, { daysAgo: l()().diff(l().unix(b), "days") }),
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: u.noticeBody,
                              children: (0, r.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: c.intl.string(c.t["5CLb0N"]),
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: u.footerContainer,
                      children: (0, r.jsx)(o.Avr, {
                          text: c.intl.string(c.t.zKnzws),
                          variant: "secondary",
                      }),
                  }),
              ],
          });
}
