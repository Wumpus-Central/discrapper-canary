var r = n(951332),
    i = RangeError;
e.exports = function (e, t) {
    var n = r(e);
    if (n % t) throw i('Wrong offset');
    return n;
};
