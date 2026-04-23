n.d(t, { c: () => A });
var i = n(627968),
    s = n(139033),
    l = n(314116),
    a = n(192308),
    r = n(631670),
    o = n(425587),
    d = n(662758),
    u = n(71393),
    c = n(287809),
    g = n(652215),
    m = n(985018);
function _(e) {
    if (e.body.code === g.t02.INVALID_PASSWORD) throw e;
    (0, s.A)({ title: m.intl.string(m.t.LX0nT8), subtitle: e.body.message });
}
async function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = c.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await o.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, s.A)({ title: m.intl.string(m.t.UNGZDI), subtitle: m.intl.string(m.t.alpAUm) })
        : u.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, s.A)({ title: m.intl.string(m.t.I5UrbV), subtitle: m.intl.string(m.t.UyVVan) })
          : t.isClaimed()
            ? (0, a.openModal)((t) =>
                  (0, i.jsx)(d.default, {
                      ...t,
                      handleSubmit: (t) => (0, r.U_)(t, e).then(g.tEg, _),
                      title: e ? m.intl.string(m.t["8lQ2rR"]) : m.intl.string(m.t.jf5GGb),
                      actionText: e ? m.intl.string(m.t["8lQ2rR"]) : m.intl.string(m.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? m.intl.string(m.t.FB4H1D) : m.intl.string(m.t.gk7h32),
                  }),
              )
            : (0, l.A)({
                  title: m.intl.string(m.t["8lQ2rR"]),
                  subtitle: m.intl.string(m.t.FB4H1D),
                  confirmText: m.intl.string(m.t["8lQ2rR"]),
                  onConfirm: () => (0, r.U_)("", !0),
              });
}
