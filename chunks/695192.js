n.d(t, { m: () => u });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(544231),
    o = n(349435),
    s = n(178186),
    d = n(287809),
    c = n(985018);
function u(e) {
    let t = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        n = (0, i.bG)([o.Ay], () => o.Ay.getChannelSafetyWarnings(e.id));
    return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.Drp, {
                      id: "delete-safety-warnings",
                      label: c.intl.string(c.t.g7o9bs),
                      action: () => (0, s.Ey)(e.id),
                  }),
                  (0, r.jsx)(l.Drp, {
                      id: "clear-safety-warnings",
                      label: c.intl.string(c.t.VuSvGu),
                      action: () => (0, a.WJ)(e.id),
                  }),
              ],
          });
}
