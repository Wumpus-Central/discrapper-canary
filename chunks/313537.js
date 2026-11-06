var i = n(71393),
    r = n(751841),
    a = n(434279),
    s = n(260498);
function l(e) {
    if (null == e || null != e.install_scope_setup) return null;
    if ("guild" === e.install_scope) return (0, a.wu)(e);
    let t = e.guild_id ?? null;
    return null != t && null != i.A.getGuild(t) ? t : null;
}
n.d(
    t,
    {},
    {
        DC: function (e) {
            return e?.install_scope === "guild" ? l(e) : null;
        },
        cR: function (e) {
            return [...s.Ay.getOwnedProjects(), ...s.Ay.getSharedProjects(e)].filter((t) => l(t) === e);
        },
        fL: l,
        z$: function (e) {
            let t = l(s.Ay.getProject(e));
            return null != t ? (0, r.Oj)(t, e) : (0, r.hU)(e);
        },
    },
);
