n.d(t, { A: () => d, G: () => u });
var i = n(114994),
    r = n(91242),
    l = n(457827),
    s = n(661943),
    a = n(392164),
    o = n(165610);
function d(e) {
    for (let t of r.A.getFramesForSurface(o.ZN))
        null == t || (0, o.zB)(t) !== a.f || e.has(t.applicationId) || (0, l.r)(t.id);
}
function u(e) {
    if (null != i.A.getProject(e) && !(0, s.$5)(e)) return;
    let t = (0, o.VA)(e, o.ZN);
    null != r.A.getFrame(t) && (0, l.r)(t);
}
