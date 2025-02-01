var i = n(690244)('%TypeError%'),
    r = n(297358),
    a = n(828148),
    s = n(632384);
e.exports = function (e, t, n) {
    if ('Object' !== s(e)) throw new i('Assertion failed: Type(O) is not Object');
    if (!a(t)) throw new i('Assertion failed: IsPropertyKey(P) is not true');
    if (!r(e, t, n)) throw new i('unable to create data property');
};
