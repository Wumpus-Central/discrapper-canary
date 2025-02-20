var r = n(690244)('%TypeError%'),
    i = n(828148),
    o = n(379284),
    a = n(632384);
e.exports = function (e, t, n) {
    if ('Object' !== a(e)) throw new r('Assertion failed: Type(O) is not Object');
    if (!i(t)) throw new r('Assertion failed: IsPropertyKey(P) is not true');
    return o(e, t, {
        '[[Configurable]]': !0,
        '[[Enumerable]]': !0,
        '[[Value]]': n,
        '[[Writable]]': !0
    });
};
