i.d(t, { c: () => o });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(865116),
    a = i(928658),
    d = i(287809);
function o(e) {
    let t = (0, l.bG)([r.Ay], () => r.Ay.get("iar_testing")),
        i = (0, l.bG)([d.default], () => d.default.getCurrentUser());
    return null != i && i.isStaff() && t
        ? (0, n.jsx)(s.Drp, {
              id: "staff-test-guild-report",
              label: "[STAFF] Test Guild Report",
              action: () => (0, a.RV)(e, "web_guild_context_menu"),
              icon: s.iFK,
              color: "danger",
          })
        : null;
}
