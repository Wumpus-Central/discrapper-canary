r.d(t, {
    l: () => o,
    o: () => i,
});
var n = r(988097),
    a = r(696486);
function i(e, t, r) {
    let i = (0, a.HN)(),
        o = i && (0, a.Gx)(i);
    o &&
        o.addEvent(e, {
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
