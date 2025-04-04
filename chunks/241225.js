a.d(e, {
    l: () => o,
    o: () => _
});
var r = a(988097),
    n = a(696486);
function _(t, e, a) {
    let _ = (0, n.HN)(),
        o = _ && (0, n.Gx)(_);
    o &&
        o.addEvent(t, {
            [r.Wb]: e,
            [r.E1]: a
        });
}
function o(t) {
    if (!t || 0 === t.length) return;
    let e = {};
    return (
        t.forEach((t) => {
            let a = t.attributes || {},
                n = a[r.E1],
                _ = a[r.Wb];
            'string' == typeof n &&
                'number' == typeof _ &&
                (e[t.name] = {
                    value: _,
                    unit: n
                });
        }),
        e
    );
}
