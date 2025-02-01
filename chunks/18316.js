var i = n(951332),
    r = RangeError;
e.exports = function (e, t) {
    var n = i(e);
    if (n % t) throw r('Wrong offset');
    return n;
};
