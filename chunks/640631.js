n.d(t, { D: () => s });
var i = n(284009),
    r = n.n(i),
    a = n(935208);
function s(e) {
    r()(
        e.length <= 2 || a.default.compare(e[0].id, e[e.length - 1].id) >= 0,
        "messages must be sorted in descending order.",
    );
}
