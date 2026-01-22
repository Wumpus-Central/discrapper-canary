var r = n(81833),
    i = 11920928955078125e-23,
    a = 34028234663852886e22,
    s = 11754943508222875e-54;
e.exports =
    Math.fround ||
    function (e) {
        return r(e, i, a, s);
    };
