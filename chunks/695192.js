n.d(t, { m: () => c });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(477782),
    a = n(544231),
    d = n(349435),
    s = n(178186),
    u = n(287809),
    o = n(985018);
function c(e) {
    let t = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        n = (0, i.bG)([d.Ay], () => d.Ay.getChannelSafetyWarnings(e.id));
    return t?.isStaff() !== !0 || null == n || 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.Dr, {
                      id: "delete-safety-warnings",
                      label: o.intl.string(o.t.g7o9bs),
                      action: () => (0, s.Ey)(e.id),
                  }),
                  (0, r.jsx)(l.Dr, {
                      id: "clear-safety-warnings",
                      label: o.intl.string(o.t.VuSvGu),
                      action: () => (0, a.WJ)(e.id),
                  }),
              ],
          });
}
