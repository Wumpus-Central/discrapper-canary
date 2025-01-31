a.d(e, {
    l: () => _,
    o: () => o
});
var r = a(988097),
    n = a(696486);
function o(t, e, a) {
    let o = (0, n.HN)(),
        _ = o && (0, n.Gx)(o);
    _ &&
        _.addEvent(t, {
            [r.Wb]: e,
            [r.E1]: a
        });
}
function _(t) {
    if (!t || 0 === t.length) return;
    let e = {};
    return (
        t.forEach((t) => {
            let a = t.attributes || {},
                n = a[r.E1],
                o = a[r.Wb];
            'string' == typeof n &&
                'number' == typeof o &&
                (e[t.name] = {
                    value: o,
                    unit: n
                });
        }),
        e
    );
}
