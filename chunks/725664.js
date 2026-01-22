e.d(n, {
    A: () => r,
});

function r(t, n) {
    if (null == t) return {};
    var e = {};
    for (var r in t)
        if ({}.hasOwnProperty.call(t, r)) {
            if (-1 !== n.indexOf(r)) continue;
            e[r] = t[r];
        }
    return e;
}
