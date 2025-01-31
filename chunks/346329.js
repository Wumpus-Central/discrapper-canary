n.r(e),
    n.d(e, {
        installApplication: () => p,
        performDefaultLibraryApplicationAction: () => C,
        playApplication: () => l.a,
        repairApplication: () => f,
        updateApplication: () => h
    });
var i = n(51025),
    l = n(696748),
    a = n(812206),
    s = n(173747),
    o = n(7956),
    r = n(417363),
    c = n(941128),
    d = n(702523),
    u = n(981631);
function p(t, e, n) {
    let i = a.Z.getApplication(t);
    if (null == i) return;
    let l = s.Z.getTargetBuildId(i.id, e),
        o = s.Z.getTargetManifests(i.id, e);
    null != l && null != o && null != d.L && (0, d.L)(i, e, l, o, n);
}
function h(t, e) {
    let n = a.Z.getApplication(t);
    if (null != n) return i.li(n, e, s.Z.getTargetBuildId(n.id, e), s.Z.getTargetManifests(n.id, e));
}
function f(t, e, n) {
    let l = a.Z.getApplication(t);
    if (null != l) return i.cG(l, e, n);
}
function C(t, e) {
    let n = (0, o.i)(t, r.Z, c.Z),
        { analyticsParams: i } = e;
    switch (n) {
        case u.apO.PLAY:
            return (0, l.a)(t.id, t, { analyticsParams: i });
        case u.apO.INSTALL:
            return p(t.id, t.branchId, i.source);
        case u.apO.UPDATE:
            return h(t.id, t.branchId);
    }
}
