n.r(t),
    n.d(t, {
        installApplication: () => E,
        performDefaultLibraryApplicationAction: () => I,
        playApplication: () => a.L,
        repairApplication: () => A,
        updateApplication: () => u,
    });
var i = n(92077),
    a = n(501945),
    r = n(587895),
    s = n(568004),
    l = n(227841),
    o = n(340829),
    d = n(966846),
    c = n(201373),
    _ = n(652215);
function E(e, t, n) {
    let i = r.A.getApplication(e);
    if (null == i) return;
    let a = s.A.getTargetBuildId(i.id, t),
        l = s.A.getTargetManifests(i.id, t);
    null != a && null != l && null != c.o && (0, c.o)(i, t, a, l, n);
}
function u(e, t) {
    let n = r.A.getApplication(e);
    if (null != n) return i.K3(n, t, s.A.getTargetBuildId(n.id, t), s.A.getTargetManifests(n.id, t));
}
function A(e, t, n) {
    let a = r.A.getApplication(e);
    if (null != a) return i.qv(a, t, n);
}
function I(e, t) {
    let n = (0, l.F)(e, o.A, d.A),
        { analyticsParams: i } = t;
    switch (n) {
        case _.Hf6.PLAY:
            return (0, a.L)(e.id, e, { analyticsParams: i });
        case _.Hf6.INSTALL:
            return E(e.id, e.branchId, i.source);
        case _.Hf6.UPDATE:
            return u(e.id, e.branchId);
    }
}
