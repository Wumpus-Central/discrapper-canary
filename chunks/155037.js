n.d(t, { Ay: () => d, Iq: () => u, mu: () => c });
var i = n(114994),
    r = n(91242),
    s = n(457827),
    l = n(392164),
    a = n(165610);
function o(e) {
    return null != e && (0, a.zB)(e) === l.f;
}
function d(e) {
    for (let t of r.A.getFramesForSurface(a.ZN)) o(t) && !e.has(t.applicationId) && (0, s.r)(t.id);
}
function u(e) {
    let t = r.A.getFrame((0, a.VA)(e, a.ZN));
    o(t) && (0, s.r)(t.id);
}
function c(e) {
    if (null != i.A.getProject(e)) return;
    let t = (0, a.VA)(e, a.ZN);
    null != r.A.getFrame(t) && (0, s.r)(t);
}
