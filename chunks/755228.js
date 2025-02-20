var r = n(690244)('%TypeError%'),
    i = n(813426),
    o = n(828148),
    a = n(632384);
e.exports = function (e, t) {
    if ('Object' !== a(e)) throw new r('Assertion failed: Type(O) is not Object');
    if (!o(t)) throw new r('Assertion failed: IsPropertyKey(P) is not true, got ' + i(t));
    return e[t];
};
