r.d(t, {
    l: () => o,
    o: () => i,
});
var n = r(8062),
    a = r(82255);
function i(e, t, r, o = (0, a.HN)()) {
    let _ = o && (0, a.Gx)(o);
    _ &&
        _.addEvent(e, {
            [n.Wb]: t,
            [n.E1]: r,
        });
}
function o(e) {
    if (!e || 0 === e.length) return;
    let t = {};
    return (
        e.forEach((e) => {
            let r = e.attributes || {},
                a = r[n.E1],
                i = r[n.Wb];
            "string" == typeof a &&
                "number" == typeof i &&
                (t[e.name] = {
                    value: i,
                    unit: a,
                });
        }),
        t
    );
}
