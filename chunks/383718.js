var i = n(690244)('%TypeError%'),
    r = n(828148),
    a = n(632384);
e.exports = function (e, t) {
    if ('Object' !== a(e)) throw new i('Assertion failed: `O` must be an Object');
    if (!r(t)) throw new i('Assertion failed: `P` must be a Property Key');
    return t in e;
};
