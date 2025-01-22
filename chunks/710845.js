var i = r(47120);
var a = r(259443),
    o = r(569611);
let s = Date.now(),
    l = s,
    u = '\nfont-weight: bold;\ncolor: purple;\n';
(0, a._n)(function (e, n, r) {
    for (var i = arguments.length, a = Array(i > 3 ? i - 3 : 0), c = 3; c < i; c++) a[c - 3] = arguments[c];
    let d = Date.now(),
        f = ((d - s) / 1000).toFixed(3),
        p = ((d - l) / 1000).toFixed(3),
        h = 'Σ:'.concat(f, 's, Δ:').concat(p, 's');
    (l = d),
        o.Hj(
            {
                name: e,
                timing: h
            },
            r,
            ...a
        ),
        'file-only' !== n && console[n]('%c['.concat(e, ']'), u, r, ...a);
}),
    (n.Z = a.Yd);
