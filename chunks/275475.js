var r = n(278276),
    i = n(817584),
    a = n(467957),
    s = n(154164),
    o = n(615861),
    l = n(579571),
    c = Object.prototype.hasOwnProperty;
e.exports = function (e, t) {
    var n = a(e),
        u = !n && i(e),
        d = !n && !u && s(e),
        f = !n && !u && !d && l(e),
        p = n || u || d || f,
        _ = p ? r(e.length, String) : [],
        h = _.length;
    for (var m in e)
        (t || c.call(e, m)) &&
            !(
                p &&
                ("length" == m ||
                    (d && ("offset" == m || "parent" == m)) ||
                    (f && ("buffer" == m || "byteLength" == m || "byteOffset" == m)) ||
                    o(m, h))
            ) &&
            _.push(m);
    return _;
};
