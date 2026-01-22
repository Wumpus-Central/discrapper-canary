var n = e(918078),
    o = e(57284),
    s = e(693755),
    i = RangeError;
t.exports = function (t) {
    var r = o(s(this)),
        e = "",
        u = n(t);
    if (u < 0 || u === 1 / 0) throw new i("Wrong number of repetitions");
    for (; u > 0; (u >>>= 1) && (r += r)) 1 & u && (e += r);
    return e;
};
