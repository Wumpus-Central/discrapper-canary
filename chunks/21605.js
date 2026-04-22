i.d(t, { c: () => c });
var n = i(627968);
i(64700);
var s = i(311907),
    l = i(477782),
    a = i(138134),
    r = i(865116),
    d = i(928658),
    o = i(287809);
function c(e) {
    let t = (0, s.bG)([r.Ay], () => r.Ay.get("iar_testing")),
        i = (0, s.bG)([o.default], () => o.default.getCurrentUser());
    return null != i && i.isStaff() && t
        ? (0, n.jsx)(l.Dr, {
              id: "staff-test-guild-report",
              label: "[STAFF] Test Guild Report",
              action: () => (0, d.RV)(e, "web_guild_context_menu"),
              icon: a.i,
              color: "danger",
          })
        : null;
}
