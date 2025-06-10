a.d(e, {
    l: () => o,
    o: () => n
});
var r = a(988097),
    _ = a(696486);
function n(t, e, a) {
    let n = (0, _.HN)(),
        o = n && (0, _.Gx)(n);
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
                _ = a[r.E1],
                n = a[r.Wb];
            'string' == typeof _ &&
                'number' == typeof n &&
                (e[t.name] = {
                    value: n,
                    unit: _
                });
        }),
        e
    );
}
