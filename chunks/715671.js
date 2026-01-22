n.r(t),
    n.d(t, {
        installApplication: () => f,
        performDefaultLibraryApplicationAction: () => h,
        playApplication: () => i.L,
        repairApplication: () => _,
        updateApplication: () => p,
    });
var r = n(92077),
    i = n(501945),
    a = n(587895),
    s = n(568004),
    o = n(227841),
    l = n(194871),
    c = n(966846),
    u = n(201373),
    d = n(652215);

function f(e, t, n) {
    let r = a.A.getApplication(e);
    if (null == r) return;
    let i = s.A.getTargetBuildId(r.id, t),
        o = s.A.getTargetManifests(r.id, t);
    null != i && null != o && null != u.o && (0, u.o)(r, t, i, o, n);
}

function p(e, t) {
    let n = a.A.getApplication(e);
    if (null != n) return r.K3(n, t, s.A.getTargetBuildId(n.id, t), s.A.getTargetManifests(n.id, t));
}

function _(e, t, n) {
    let i = a.A.getApplication(e);
    if (null != i) return r.qv(i, t, n);
}

function h(e, t) {
    let n = (0, o.F)(e, l.A, c.A),
        { analyticsParams: r } = t;
    switch (n) {
        case d.Hf6.PLAY:
            return (0, i.L)(e.id, e, {
                analyticsParams: r,
            });
        case d.Hf6.INSTALL:
            return f(e.id, e.branchId, r.source);
        case d.Hf6.UPDATE:
            return p(e.id, e.branchId);
    }
}
