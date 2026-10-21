n.d(t, { A: () => d, G: () => u });
var i = n(114994),
    l = n(91242),
    r = n(457827),
    s = n(661943),
    a = n(392164),
    o = n(165610);
function d(e) {
    for (let t of l.A.getFramesForSurface(o.ZN))
        null == t || (0, o.zB)(t) !== a.f || e.has(t.applicationId) || (0, r.r)(t.id);
}
function u(e) {
    if (null != i.A.getProject(e) && !(0, s.$5)(e)) return;
    let t = (0, o.VA)(e, o.ZN);
    null != l.A.getFrame(t) && (0, r.r)(t);
}
