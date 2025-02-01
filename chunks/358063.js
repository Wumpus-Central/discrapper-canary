let i = t;
(i._reverse = function (e) {
    let t = {};
    return (
        Object.keys(e).forEach(function (n) {
            (0 | n) == n && (n |= 0), (t[e[n]] = n);
        }),
        t
    );
}),
    (i.der = n(375990));
