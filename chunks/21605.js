n.d(t, { c: () => c });
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(397927),
    l = n(865116),
    a = n(928658),
    o = n(287809);
function c(e) {
    let t = (0, r.bG)([l.Ay], () => l.Ay.get("iar_testing")),
        n = (0, r.bG)([o.default], () => o.default.getCurrentUser());
    return null != n && n.isStaff() && t
        ? (0, i.jsx)(s.Drp, {
              id: "staff-test-guild-report",
              label: "[STAFF] Test Guild Report",
              action: () => (0, a.RV)(e, "web_guild_context_menu"),
              icon: s.iFK,
              color: "danger",
          })
        : null;
}
