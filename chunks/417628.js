n.d(t, { c: () => x });
var i = n(627968),
    s = n(139033),
    l = n(314116),
    a = n(397927),
    r = n(631670),
    o = n(425587),
    d = n(662758),
    c = n(71393),
    u = n(287809),
    m = n(652215),
    g = n(985018);
function _(e) {
    if (e.body.code === m.t02.INVALID_PASSWORD) throw e;
    (0, s.A)({ title: g.intl.string(g.t.LX0nT8), subtitle: e.body.message });
}
async function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = u.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await o.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, s.A)({ title: g.intl.string(g.t.UNGZDI), subtitle: g.intl.string(g.t.alpAUm) })
        : c.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, s.A)({ title: g.intl.string(g.t.I5UrbV), subtitle: g.intl.string(g.t.UyVVan) })
          : t.isClaimed()
            ? (0, a.qfG)((t) =>
                  (0, i.jsx)(d.default, {
                      ...t,
                      handleSubmit: (t) => (0, r.U_)(t, e).then(m.tEg, _),
                      title: e ? g.intl.string(g.t["8lQ2rR"]) : g.intl.string(g.t.jf5GGb),
                      actionText: e ? g.intl.string(g.t["8lQ2rR"]) : g.intl.string(g.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? g.intl.string(g.t.FB4H1D) : g.intl.string(g.t.gk7h32),
                  }),
              )
            : (0, l.A)({
                  title: g.intl.string(g.t["8lQ2rR"]),
                  subtitle: g.intl.string(g.t.FB4H1D),
                  confirmText: g.intl.string(g.t["8lQ2rR"]),
                  onConfirm: () => (0, r.U_)("", !0),
              });
}
