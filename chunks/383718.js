var r = n(690244)('%TypeError%'),
    i = n(828148),
    o = n(632384);
e.exports = function (e, t) {
    if ('Object' !== o(e)) throw new r('Assertion failed: `O` must be an Object');
    if (!i(t)) throw new r('Assertion failed: `P` must be a Property Key');
    return t in e;
};
