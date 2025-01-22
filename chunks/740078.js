r.d(n, {
    BL: function () {
        return c;
    },
    Ct: function () {
        return g;
    },
    F2: function () {
        return o;
    },
    I: function () {
        return a;
    },
    Pj: function () {
        return p;
    },
    YP: function () {
        return _;
    },
    bw: function () {
        return m;
    },
    d7: function () {
        return l;
    },
    k5: function () {
        return h;
    },
    mv: function () {
        return u;
    },
    t$: function () {
        return s;
    },
    ut: function () {
        return d;
    },
    we: function () {
        return i;
    },
    xs: function () {
        return E;
    },
    zV: function () {
        return f;
    }
});
var i = 'top',
    a = 'bottom',
    o = 'right',
    s = 'left',
    l = 'auto',
    u = [i, a, o, s],
    c = 'start',
    d = 'end',
    f = 'clippingParents',
    p = 'viewport',
    h = 'popper',
    _ = 'reference',
    m = u.reduce(function (e, n) {
        return e.concat([n + '-' + c, n + '-' + d]);
    }, []),
    g = [].concat(u, [l]).reduce(function (e, n) {
        return e.concat([n, n + '-' + c, n + '-' + d]);
    }, []),
    E = ['beforeRead', 'read', 'afterRead', 'beforeMain', 'main', 'afterMain', 'beforeWrite', 'write', 'afterWrite'];
