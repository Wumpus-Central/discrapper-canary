var i = r(338752),
    a = r(342545),
    o = r(463374),
    s = RangeError;
e.exports = function (e) {
    var n = a(o(this)),
        r = '',
        l = i(e);
    if (l < 0 || l === 1 / 0) throw new s('Wrong number of repetitions');
    for (; l > 0; (l >>>= 1) && (n += n)) 1 & l && (r += n);
    return r;
};
