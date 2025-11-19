_.d(e, {
    l: () => o,
    o: () => n,
});
var a = _(988097),
    r = _(696486);
function n(t, e, _) {
    let n = (0, r.HN)(),
        o = n && (0, r.Gx)(n);
    o &&
        o.addEvent(t, {
            [a.Wb]: e,
            [a.E1]: _,
        });
}
function o(t) {
    if (!t || 0 === t.length) return;
    let e = {};
    return (
        t.forEach((t) => {
            let _ = t.attributes || {},
                r = _[a.E1],
                n = _[a.Wb];
            "string" == typeof r &&
                "number" == typeof n &&
                (e[t.name] = {
                    value: n,
                    unit: r,
                });
        }),
        e
    );
}
