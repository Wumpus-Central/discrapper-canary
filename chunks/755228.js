var i = r(690244)('%TypeError%'),
    a = r(813426),
    o = r(828148),
    s = r(632384);
e.exports = function (e, n) {
    if ('Object' !== s(e)) throw new i('Assertion failed: Type(O) is not Object');
    if (!o(n)) throw new i('Assertion failed: IsPropertyKey(P) is not true, got ' + a(n));
    return e[n];
};
