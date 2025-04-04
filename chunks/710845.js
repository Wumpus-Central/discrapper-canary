n.d(t, { Z: () => l }), n(47120);
var r = n(259443),
    i = n(569611);
let o = Date.now(),
    a = o,
    s = '\nfont-weight: bold;\ncolor: purple;\n';
(0, r._n)(function (e, t, n) {
    for (var r = arguments.length, l = Array(r > 3 ? r - 3 : 0), c = 3; c < r; c++) l[c - 3] = arguments[c];
    let u = Date.now(),
        d = ((u - o) / 1000).toFixed(3),
        f = ((u - a) / 1000).toFixed(3),
        _ = 'Σ:'.concat(d, 's, Δ:').concat(f, 's');
    (a = u),
        i.Hj(
            {
                name: e,
                timing: _
            },
            n,
            ...l
        ),
        'file-only' !== t && console[t]('%c['.concat(e, ']'), s, n, ...l);
});
let l = r.Yd;
