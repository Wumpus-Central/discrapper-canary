var n = e(453669),
    o = e(712192),
    s = e(407057),
    i = e(61748)("species"),
    u = Array;
t.exports = function (t) {
    var r;
    return (
        n(t) &&
            (o((r = t.constructor)) && (r === u || n(r.prototype))
                ? (r = void 0)
                : s(r) && null === (r = r[i]) && (r = void 0)),
        void 0 === r ? u : r
    );
};
