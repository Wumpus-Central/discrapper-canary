var r = n(338752),
    o = n(342545),
    a = n(463374),
    i = RangeError;
e.exports = function (e) {
    var t = o(a(this)),
        n = '',
        s = r(e);
    if (s < 0 || s === 1 / 0) throw new i('Wrong number of repetitions');
    for (; s > 0; (s >>>= 1) && (t += t)) 1 & s && (n += t);
    return n;
};
