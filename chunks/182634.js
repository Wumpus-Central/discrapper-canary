var r = n(703441),
    i = n(43452),
    a = n(598349),
    s = n(380744)("species"),
    o = Array;
e.exports = function (e) {
    var t;
    return (
        r(e) &&
            (i((t = e.constructor)) && (t === o || r(t.prototype))
                ? (t = void 0)
                : a(t) && null === (t = t[s]) && (t = void 0)),
        void 0 === t ? o : t
    );
};
