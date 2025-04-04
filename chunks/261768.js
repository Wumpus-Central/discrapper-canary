var r = n(815329),
    i = n(951575),
    o = n(163567);
e.exports = function (e, t) {
    if (!i(e)) throw new r('Assertion failed: `O` must be an Object');
    if (!o(t)) throw new r('Assertion failed: `P` must be a Property Key');
    return t in e;
};
