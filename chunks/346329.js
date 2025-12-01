n.r(t),
    n.d(t, {
        installApplication: () => f,
        performDefaultLibraryApplicationAction: () => m,
        playApplication: () => i.a,
        repairApplication: () => _,
        updateApplication: () => p,
    });
var r = n(51025),
    i = n(696748),
    a = n(812206),
    o = n(173747),
    s = n(7956),
    l = n(417363),
    c = n(941128),
    u = n(702523),
    d = n(981631);
function f(e, t, n) {
    let r = a.Z.getApplication(e);
    if (null == r) return;
    let i = o.Z.getTargetBuildId(r.id, t),
        s = o.Z.getTargetManifests(r.id, t);
    null != i && null != s && null != u.L && (0, u.L)(r, t, i, s, n);
}
function p(e, t) {
    let n = a.Z.getApplication(e);
    if (null != n) return r.li(n, t, o.Z.getTargetBuildId(n.id, t), o.Z.getTargetManifests(n.id, t));
}
function _(e, t, n) {
    let i = a.Z.getApplication(e);
    if (null != i) return r.cG(i, t, n);
}
function m(e, t) {
    let n = (0, s.i)(e, l.Z, c.Z),
        { analyticsParams: r } = t;
    switch (n) {
        case d.apO.PLAY:
            return (0, i.a)(e.id, e, { analyticsParams: r });
        case d.apO.INSTALL:
            return f(e.id, e.branchId, r.source);
        case d.apO.UPDATE:
            return p(e.id, e.branchId);
    }
}
