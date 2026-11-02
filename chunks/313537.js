n.d(t, { cR: () => l, fL: () => s, z$: () => o });
var i = n(751841),
    r = n(434279),
    a = n(260498);
function s(e) {
    return null == e || "guild" !== e.install_scope || null != e.install_scope_setup ? null : (0, r.wu)(e);
}
function l(e) {
    return [...a.Ay.getOwnedProjects(), ...a.Ay.getSharedProjects(e)].filter((t) => s(t) === e);
}
function o(e) {
    let t = s(a.Ay.getProject(e));
    return null != t ? (0, i.Oj)(t, e) : (0, i.hU)(e);
}
