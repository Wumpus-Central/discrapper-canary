var r = n(861353),
    i = RangeError;
e.exports = function (e, t) {
    var n = r(e);
    if (n % t) throw new i('Wrong offset');
    return n;
};
