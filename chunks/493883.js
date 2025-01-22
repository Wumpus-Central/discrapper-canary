var i = r(690244)('%TypeError%'),
    a = r(297358),
    o = r(828148),
    s = r(632384);
e.exports = function (e, n, r) {
    if ('Object' !== s(e)) throw new i('Assertion failed: Type(O) is not Object');
    if (!o(n)) throw new i('Assertion failed: IsPropertyKey(P) is not true');
    if (!a(e, n, r)) throw new i('unable to create data property');
};
