n.d(t, {
    BL: () => c,
    Ct: () => m,
    F2: () => o,
    I: () => i,
    Pj: () => f,
    YP: () => p,
    bw: () => h,
    d7: () => s,
    k5: () => _,
    mv: () => l,
    t$: () => a,
    ut: () => u,
    we: () => r,
    xs: () => g,
    zV: () => d
});
var r = 'top',
    i = 'bottom',
    o = 'right',
    a = 'left',
    s = 'auto',
    l = [r, i, o, a],
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
