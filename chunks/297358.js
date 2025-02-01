var i = n(690244)('%TypeError%'),
    r = n(828148),
    a = n(379284),
    s = n(632384);
e.exports = function (e, t, n) {
    if ('Object' !== s(e)) throw new i('Assertion failed: Type(O) is not Object');
    if (!r(t)) throw new i('Assertion failed: IsPropertyKey(P) is not true');
    return a(e, t, {
        '[[Configurable]]': !0,
        '[[Enumerable]]': !0,
        '[[Value]]': n,
        '[[Writable]]': !0
    });
};
