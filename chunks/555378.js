var r = n(66823),
    i = n(274581),
    l = n(279137),
    s = n(659671);
e.exports = function (e) {
    return function (t) {
        var n = i((t = s(t))) ? l(t) : void 0,
            a = n ? n[0] : t.charAt(0),
            c = n ? r(n, 1).join("") : t.slice(1);
        return a[e]() + c;
    };
};
