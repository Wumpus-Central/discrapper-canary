var r = n(815329),
    i = n(786950),
    a = n(951575),
    o = n(163567);
e.exports = function (e, t, n) {
    if (!a(e)) throw new r('Assertion failed: Type(O) is not Object');
    if (!o(t)) throw new r('Assertion failed: P is not a Property Key');
    if (!i(e, t, n)) throw new r('unable to create data property');
};
