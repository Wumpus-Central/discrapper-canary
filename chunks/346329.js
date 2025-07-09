(n.r(e),
    n.d(e, {
        installApplication: () => p,
        performDefaultLibraryApplicationAction: () => y,
        playApplication: () => r.a,
        repairApplication: () => f,
        updateApplication: () => h
    }));
var i = n(51025),
    r = n(696748),
    l = n(812206),
    a = n(173747),
    o = n(7956),
    s = n(417363),
    c = n(941128),
    d = n(702523),
    u = n(981631);
function p(t, e, n) {
    let i = l.Z.getApplication(t);
    if (null == i) return;
    let r = a.Z.getTargetBuildId(i.id, e),
        o = a.Z.getTargetManifests(i.id, e);
    null != r && null != o && null != d.L && (0, d.L)(i, e, r, o, n);
}
function h(t, e) {
    let n = l.Z.getApplication(t);
    if (null != n) return i.li(n, e, a.Z.getTargetBuildId(n.id, e), a.Z.getTargetManifests(n.id, e));
}
function f(t, e, n) {
    let r = l.Z.getApplication(t);
    if (null != r) return i.cG(r, e, n);
}
function y(t, e) {
    let n = (0, o.i)(t, s.Z, c.Z),
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
