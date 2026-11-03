n.d(t, { Ay: () => d, V: () => i, ns: () => u });
var l = n(17928),
    a = n(71393),
    s = n(809526),
    r = n(105292);
function i(e) {
    let t = e?.guild_id,
        n = (0, l.bG)([a.A], () => (null != t ? (a.A.getGuild(t) ?? null) : null), [t]);
    return null == e || null != e.install_scope_setup
        ? null
        : "user" === e.install_scope
          ? { kind: "user", label: r.intl.string(s.default.KxFFKT) }
          : "guild" === e.install_scope && null != n
            ? { kind: "guild", label: n.name, guild: n }
            : null;
}
function u(e) {
    return "guild" === e.install_scope && null == e.guild_id && null == e.install_scope_setup;
}
function d(e) {
    return i(e)?.label ?? null;
}
