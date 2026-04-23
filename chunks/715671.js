n.r(t),
    n.d(t, {
        installApplication: () => c,
        performDefaultLibraryApplicationAction: () => A,
        playApplication: () => r.L,
        repairApplication: () => I,
        updateApplication: () => u,
    });
var i = n(92077),
    r = n(501945),
    a = n(587895),
    s = n(568004),
    _ = n(227841),
    l = n(340829),
    o = n(966846),
    E = n(201373),
    d = n(652215);
function c(e, t, n) {
    let i = a.A.getApplication(e);
    if (null == i) return;
    let r = s.A.getTargetBuildId(i.id, t),
        _ = s.A.getTargetManifests(i.id, t);
    null != r && null != _ && null != E.o && (0, E.o)(i, t, r, _, n);
}
function u(e, t) {
    let n = a.A.getApplication(e);
    if (null != n) return i.K3(n, t, s.A.getTargetBuildId(n.id, t), s.A.getTargetManifests(n.id, t));
}
function I(e, t, n) {
    let r = a.A.getApplication(e);
    if (null != r) return i.qv(r, t, n);
}
function A(e, t) {
    let n = (0, _.F)(e, l.A, o.A),
        { analyticsParams: i } = t;
    switch (n) {
        case d.Hf6.PLAY:
            return (0, r.L)(e.id, e, { analyticsParams: i });
        case d.Hf6.INSTALL:
            return c(e.id, e.branchId, i.source);
        case d.Hf6.UPDATE:
            return u(e.id, e.branchId);
    }
}
