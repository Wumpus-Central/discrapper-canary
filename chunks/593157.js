var i = n(338752),
    r = n(342545),
    a = n(463374),
    s = RangeError;
e.exports = function (e) {
    var t = r(a(this)),
        n = '',
        o = i(e);
    if (o < 0 || o === 1 / 0) throw new s('Wrong number of repetitions');
    for (; o > 0; (o >>>= 1) && (t += t)) 1 & o && (n += t);
    return n;
};
