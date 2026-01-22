var r = n(81833),
    i = 1.1920928955078125e-7,
    a = 3.4028234663852886e38,
    s = 1.1754943508222875e-38;
e.exports =
    Math.fround ||
    function (e) {
        return r(e, i, a, s);
    };
