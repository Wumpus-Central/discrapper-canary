var r = n(815329),
    i = n(48511),
    a = n(951575),
    o = n(163567);
e.exports = function (e, t) {
    if (!a(e)) throw new r('Assertion failed: Type(O) is not Object');
    if (!o(t)) throw new r('Assertion failed: P is not a Property Key, got ' + i(t));
    return e[t];
};
