var r = n(509185),
    i = n(621699),
    a = n(624977),
    s = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    if (!r(e)) return a(e);
    var t = i(e),
        n = [];
    for (var o in e) ("constructor" == o && (t || !s.call(e, o))) || n.push(o);
    return n;
};
