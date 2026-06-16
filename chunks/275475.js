var i = n(278276),
    r = n(817584),
    s = n(467957),
    a = n(154164),
    o = n(615861),
    l = n(579571),
    u = Object.prototype.hasOwnProperty;
e.exports = function (e, t) {
    var n = s(e),
        c = !n && r(e),
        d = !n && !c && a(e),
        _ = !n && !c && !d && l(e),
        h = n || c || d || _,
        f = h ? i(e.length, String) : [],
        p = f.length;
    for (var E in e)
        (t || u.call(e, E)) &&
            !(
                h &&
                ("length" == E ||
                    (d && ("offset" == E || "parent" == E)) ||
                    (_ && ("buffer" == E || "byteLength" == E || "byteOffset" == E)) ||
                    o(E, p))
            ) &&
            f.push(E);
    return f;
};
