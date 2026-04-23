i.d(t, { A: () => s });
var l = i(627968);
i(64700);
var a = i(665260),
    e = i(477782),
    r = i(59636),
    d = i(954571),
    c = i(652215),
    A = i(985018);
function s(n) {
    return null == n
        ? null
        : (0, l.jsx)(e.sL, {
              id: "private",
              label: A.intl.string(A.t.fHDNJv),
              action: function () {
                  if (null == n) return;
                  let t = (0, a.PQ)(n.getFlags(), c.hM6.PRIVATE);
                  r.V(n.id, n.branchId, t),
                      d.default.track(c.HAw.APPLICATION_SETTINGS_UPDATED, {
                          private_enabled: (0, a.Lt)(t, c.hM6.PRIVATE),
                          ...n.getAnalyticsData(),
                      });
              },
              checked: n.hasFlag(c.hM6.PRIVATE),
          });
}
