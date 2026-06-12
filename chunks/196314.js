var i = n(670453),
    r = n(115455),
    s = n(926226),
    a = n(758513),
    o = n(978260),
    l = n(481702),
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
