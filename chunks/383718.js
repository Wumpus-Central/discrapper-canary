var i = r(690244)('%TypeError%'),
    a = r(828148),
    o = r(632384);
e.exports = function (e, n) {
    if ('Object' !== o(e)) throw new i('Assertion failed: `O` must be an Object');
    if (!a(n)) throw new i('Assertion failed: `P` must be a Property Key');
    return n in e;
};
