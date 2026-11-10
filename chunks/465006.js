var l = n(855986),
    a = n(71393),
    r = n(191850),
    s = n(792996);
function i(e) {
    let t = e?.guild_id,
        n = (0, l.bG)([a.A], () => (null != t ? (a.A.getGuild(t) ?? null) : null), [t]);
    return null == e
        ? null
        : "user" === e.install_scope
          ? { kind: "user", label: s.intl.string(r.default.KxFFKT) }
          : null != n
            ? { kind: "guild", label: n.name, guild: n }
            : null;
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
            return i(e)?.label ?? null;
        },
        V: i,
        ns: function (e) {
            return "guild" === e.install_scope && null == e.guild_id;
        },
    },
);
