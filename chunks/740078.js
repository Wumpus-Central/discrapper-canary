n.d(t, {
    BL: () => u,
    Ct: () => m,
    F2: () => a,
    I: () => r,
    Pj: () => f,
    YP: () => p,
    bw: () => h,
    d7: () => o,
    k5: () => _,
    mv: () => l,
    t$: () => s,
    ut: () => c,
    we: () => i,
    xs: () => g,
    zV: () => d
});
var i = 'top',
    r = 'bottom',
    a = 'right',
    s = 'left',
    o = 'auto',
    l = [i, r, a, s],
    u = 'start',
    c = 'end',
    d = 'clippingParents',
    f = 'viewport',
    _ = 'popper',
    p = 'reference',
    h = l.reduce(function (e, t) {
        return e.concat([t + '-' + u, t + '-' + c]);
    }, []),
    m = [].concat(l, [o]).reduce(function (e, t) {
        return e.concat([t, t + '-' + u, t + '-' + c]);
    }, []),
    g = ['beforeRead', 'read', 'afterRead', 'beforeMain', 'main', 'afterMain', 'beforeWrite', 'write', 'afterWrite'];
