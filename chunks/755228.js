var i = n(690244)('%TypeError%'),
    r = n(813426),
    a = n(828148),
    s = n(632384);
e.exports = function (e, t) {
    if ('Object' !== s(e)) throw new i('Assertion failed: Type(O) is not Object');
    if (!a(t)) throw new i('Assertion failed: IsPropertyKey(P) is not true, got ' + r(t));
    return e[t];
};
