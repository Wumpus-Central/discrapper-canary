var i = n(71393),
    r = n(967198),
    a = n(751841),
    s = n(434279),
    l = n(260498);
function o(e) {
    if (null == e) return null;
    if ("guild" === e.install_scope) return (0, s.wu)(e);
    let t = e.guild_id ?? null;
    return null != t && null != i.A.getGuild(t) ? t : null;
}
function d(e, t) {
    return null != e && (o(e) === t || ((0, l.PV)(e) && e.guild_ids?.includes(t) === !0));
}
n.d(
    t,
    {},
    {
        DC: function (e) {
            return e?.install_scope === "guild" ? o(e) : null;
        },
        KV: d,
        cR: function (e) {
            return [...l.Ay.getOwnedProjects(), ...l.Ay.getSharedProjects(e)].filter((t) => d(t, e));
        },
        fL: o,
        z$: function (e) {
            let t = l.Ay.getProject(e),
                n = r.A.getGuildId(),
                i = null != n && d(t, n) ? n : o(t);
            return null != i ? (0, a.Oj)(i, e) : (0, a.hU)(e);
        },
    },
);
