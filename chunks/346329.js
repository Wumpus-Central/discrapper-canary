n.r(e),
    n.d(e, {
        installApplication: () => p,
        performDefaultLibraryApplicationAction: () => y,
        playApplication: () => r.a,
        repairApplication: () => f,
        updateApplication: () => h
    });
var i = n(51025),
    r = n(696748),
    l = n(812206),
    o = n(173747),
    a = n(7956),
    s = n(417363),
    c = n(941128),
    d = n(702523),
    u = n(981631);
function p(t, e, n) {
    let i = l.Z.getApplication(t);
    if (null == i) return;
    let r = o.Z.getTargetBuildId(i.id, e),
        a = o.Z.getTargetManifests(i.id, e);
    null != r && null != a && null != d.L && (0, d.L)(i, e, r, a, n);
}
function h(t, e) {
    let n = l.Z.getApplication(t);
    if (null != n) return i.li(n, e, o.Z.getTargetBuildId(n.id, e), o.Z.getTargetManifests(n.id, e));
}
function f(t, e, n) {
    let r = l.Z.getApplication(t);
    if (null != r) return i.cG(r, e, n);
}
function y(t, e) {
    let n = (0, a.i)(t, s.Z, c.Z),
        { analyticsParams: i } = e;
    switch (n) {
        case u.apO.PLAY:
            return (0, r.a)(t.id, t, { analyticsParams: i });
        case u.apO.INSTALL:
            return p(t.id, t.branchId, i.source);
        case u.apO.UPDATE:
            return h(t.id, t.branchId);
    }
}
