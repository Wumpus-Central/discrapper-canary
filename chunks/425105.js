var e = r(861353),
    o = RangeError;
t.exports = function (t, n) {
    var r = e(t);
    if (r % n) throw new o('Wrong offset');
    return r;
};
