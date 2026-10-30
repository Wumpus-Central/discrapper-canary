n.d(t, { A: () => s });
var l = n(17928),
    a = n(71393),
    r = n(809526),
    i = n(105292);
function s(e) {
    let t = e?.guild_id,
        n = (0, l.bG)([a.A], () => (null != t ? (a.A.getGuild(t)?.name ?? null) : null), [t]);
    return null == e || null != e.install_scope_setup
        ? null
        : "user" === e.install_scope
          ? i.intl.string(r.default.KxFFKT)
          : n;
}
