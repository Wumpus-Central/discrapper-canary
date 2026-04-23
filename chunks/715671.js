"use strict";
n.r(t),
    n.d(t, {
        installApplication: () => _,
        performDefaultLibraryApplicationAction: () => h,
        playApplication: () => i.L,
        repairApplication: () => p,
        updateApplication: () => f,
    });
var r = n(92077),
    i = n(501945),
    s = n(587895),
    a = n(568004),
    o = n(227841),
    l = n(194871),
    u = n(966846),
    c = n(201373),
    d = n(652215);
function _(e, t, n) {
    let r = s.A.getApplication(e);
    if (null == r) return;
    let i = a.A.getTargetBuildId(r.id, t),
        o = a.A.getTargetManifests(r.id, t);
    null != i && null != o && null != c.o && (0, c.o)(r, t, i, o, n);
}
function f(e, t) {
    let n = s.A.getApplication(e);
    if (null != n) return r.K3(n, t, a.A.getTargetBuildId(n.id, t), a.A.getTargetManifests(n.id, t));
}
function p(e, t, n) {
    let i = s.A.getApplication(e);
    if (null != i) return r.qv(i, t, n);
}
function h(e, t) {
    let n = (0, o.F)(e, l.A, u.A),
        { analyticsParams: r } = t;
    switch (n) {
        case d.Hf6.PLAY:
            return (0, i.L)(e.id, e, { analyticsParams: r });
        case d.Hf6.INSTALL:
            return _(e.id, e.branchId, r.source);
        case d.Hf6.UPDATE:
            return f(e.id, e.branchId);
    }
}
