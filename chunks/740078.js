n.d(t, {
    BL: () => c,
    Ct: () => m,
    F2: () => a,
    I: () => i,
    Pj: () => f,
    YP: () => p,
    bw: () => h,
    d7: () => s,
    k5: () => _,
    mv: () => l,
    t$: () => o,
    ut: () => u,
    we: () => r,
    xs: () => g,
    zV: () => d
});
var r = 'top',
    i = 'bottom',
    a = 'right',
    o = 'left',
    s = 'auto',
    l = [r, i, a, o],
    c = 'start',
    u = 'end',
    d = 'clippingParents',
    f = 'viewport',
    _ = 'popper',
    p = 'reference',
    h = l.reduce(function (e, t) {
        return e.concat([t + '-' + c, t + '-' + u]);
    }, []),
    m = [].concat(l, [s]).reduce(function (e, t) {
        return e.concat([t, t + '-' + c, t + '-' + u]);
    }, []),
    g = ['beforeRead', 'read', 'afterRead', 'beforeMain', 'main', 'afterMain', 'beforeWrite', 'write', 'afterWrite'];
