var r = n(670453),
    i = n(115455),
    a = n(926226),
    s = n(758513),
    o = n(978260),
    l = n(481702),
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
