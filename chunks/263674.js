(r.r(a), r.d(a, { default: () => l }));
var t = r(477900);
r(582128);
var d = r(806163),
    p = r(17928),
    s = r(16619),
    c = r(972013),
    i = r(751841),
    n = r(381991),
    u = r(10357);
function l() {
    let e = (0, d.W5)({ path: i._g, exact: !0 }),
        a = (0, s.rX)("ConjureAppSidebar");
    return (0, p.bG)([c.A], () => c.A.isPinned())
        ? (0, t.jsx)(u.A, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: a, onNavigate: n.Ay })
        : null;
}
