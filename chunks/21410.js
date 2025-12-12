n.d(t, {
    l: () => o,
    o: () => a,
});
var r = n(8062),
    i = n(82255);
function a(e, t, n, o = (0, i.HN)()) {
    let _ = o && (0, i.Gx)(o);
    _ &&
        _.addEvent(e, {
            [r.Wb]: t,
            [r.E1]: n,
        });
}
function o(e) {
    if (!e || 0 === e.length) return;
    let t = {};
    return (
        e.forEach((e) => {
            let n = e.attributes || {},
                i = n[r.E1],
                a = n[r.Wb];
            "string" == typeof i &&
                "number" == typeof a &&
                (t[e.name] = {
                    value: a,
                    unit: i,
                });
        }),
        t
    );
}
