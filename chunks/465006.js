n.d(t, { Ay: () => o, V: () => s, ns: () => u });
var l = n(17928),
    r = n(71393),
    a = n(809526),
    i = n(105292);
function s(e) {
    let t = e?.guild_id,
        n = (0, l.bG)([r.A], () => (null != t ? (r.A.getGuild(t) ?? null) : null), [t]);
    return null == e || null != e.install_scope_setup
        ? null
        : "user" === e.install_scope
          ? { kind: "user", label: i.intl.string(a.default.KxFFKT) }
          : "guild" === e.install_scope && null != n
            ? { kind: "guild", label: n.name, guild: n }
            : null;
}
function u(e) {
    return "guild" === e.install_scope && null == e.guild_id && null == e.install_scope_setup;
}
function o(e) {
    return s(e)?.label ?? null;
}
