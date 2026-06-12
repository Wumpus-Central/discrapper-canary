var r = e(66823),
    t = e(274581),
    n = e(279137),
    o = e(659671);
u.exports = function (u) {
    return function (f) {
        var e = t((f = o(f))) ? n(f) : void 0,
            d = e ? e[0] : f.charAt(0),
            x = e ? r(e, 1).join("") : f.slice(1);
        return d[u]() + x;
    };
};
