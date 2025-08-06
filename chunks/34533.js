var r = n(815329),
    i = n(786950),
    o = n(951575),
    a = n(163567);
e.exports = function (e, t, n) {
    if (!o(e)) throw new r('Assertion failed: Type(O) is not Object');
    if (!a(t)) throw new r('Assertion failed: P is not a Property Key');
    if (!i(e, t, n)) throw new r('unable to create data property');
};
