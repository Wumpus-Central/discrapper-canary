i.d(n, { A: () => s });
var l = i(627968);
i(64700);
var a = i(665260),
    e = i(397927),
    r = i(59636),
    d = i(954571),
    c = i(652215),
    A = i(985018);
function s(t) {
    return null == t
        ? null
        : (0, l.jsx)(e.sLh, {
              id: "private",
              label: A.intl.string(A.t.fHDNJv),
              action: function () {
                  if (null == t) return;
                  let n = (0, a.PQ)(t.getFlags(), c.hM6.PRIVATE);
                  r.V(t.id, t.branchId, n),
                      d.default.track(c.HAw.APPLICATION_SETTINGS_UPDATED, {
                          private_enabled: (0, a.Lt)(n, c.hM6.PRIVATE),
                          ...t.getAnalyticsData(),
                      });
              },
              checked: t.hasFlag(c.hM6.PRIVATE),
          });
}
