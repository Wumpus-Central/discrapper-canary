n.d(t, { Z: () => l }), n(47120);
var i = n(259443),
    r = n(569611);
let a = Date.now(),
    s = a,
    o = '\nfont-weight: bold;\ncolor: purple;\n';
(0, i._n)(function (e, t, n) {
    for (var i = arguments.length, l = Array(i > 3 ? i - 3 : 0), u = 3; u < i; u++) l[u - 3] = arguments[u];
    let c = Date.now(),
        d = ((c - a) / 1000).toFixed(3),
        f = ((c - s) / 1000).toFixed(3),
        _ = 'Σ:'.concat(d, 's, Δ:').concat(f, 's');
    (s = c),
        r.Hj(
            {
                name: e,
                timing: _
            },
            n,
            ...l
        ),
        'file-only' !== t && console[t]('%c['.concat(e, ']'), o, n, ...l);
});
let l = i.Yd;
