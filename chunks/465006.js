n.d(t, { A: () => o, V: () => s });
var l = n(17928),
    a = n(71393),
    r = n(809526),
    i = n(105292);
function s(e) {
    let t = e?.guild_id,
        n = (0, l.bG)([a.A], () => (null != t ? (a.A.getGuild(t) ?? null) : null), [t]);
    return null == e || null != e.install_scope_setup
        ? null
        : "user" === e.install_scope
          ? { kind: "user", label: i.intl.string(r.default.KxFFKT) }
          : null != n
            ? { kind: "guild", label: n.name, guild: n }
            : null;
}
function o(e) {
    return s(e)?.label ?? null;
}
