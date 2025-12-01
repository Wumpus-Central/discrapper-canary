var r = n(585606),
    i = n(443735),
    a = n(402428),
    o = n(207757),
    s = n(830911),
    l = n(556868),
    c = Object.prototype.hasOwnProperty;
e.exports = function (e, t) {
    var n = a(e),
        u = !n && i(e),
        d = !n && !u && o(e),
        f = !n && !u && !d && l(e),
        p = n || u || d || f,
        _ = p ? r(e.length, String) : [],
        m = _.length;
    for (var h in e)
        (t || c.call(e, h)) &&
            !(
                p &&
                ("length" == h ||
                    (d && ("offset" == h || "parent" == h)) ||
                    (f && ("buffer" == h || "byteLength" == h || "byteOffset" == h)) ||
                    s(h, m))
            ) &&
            _.push(h);
    return _;
};
