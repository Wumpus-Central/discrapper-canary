var i = n(690244)('%TypeError%'),
    r = n(395238),
    a = n(116298),
    s = n(441596),
    o = n(75150),
    l = n(860438),
    u = n(828148),
    c = n(148309),
    d = n(240919),
    f = n(632384);
e.exports = function (e, t, n) {
    if ('Object' !== f(e)) throw new i('Assertion failed: Type(O) is not Object');
    if (!u(t)) throw new i('Assertion failed: IsPropertyKey(P) is not true');
    var _ = r(
        {
            Type: f,
            IsDataDescriptor: l,
            IsAccessorDescriptor: o
        },
        n
    )
        ? n
        : d(n);
    if (
        !r(
            {
                Type: f,
                IsDataDescriptor: l,
                IsAccessorDescriptor: o
            },
            _
        )
    )
        throw new i('Assertion failed: Desc is not a valid Property Descriptor');
    return a(l, c, s, e, t, _);
};
