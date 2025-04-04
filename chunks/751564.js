var r = n(690244)('%TypeError%'),
    i = n(395238),
    o = n(116298),
    a = n(441596),
    s = n(75150),
    l = n(860438),
    c = n(828148),
    u = n(148309),
    d = n(240919),
    f = n(632384);
e.exports = function (e, t, n) {
    if ('Object' !== f(e)) throw new r('Assertion failed: Type(O) is not Object');
    if (!c(t)) throw new r('Assertion failed: IsPropertyKey(P) is not true');
    var _ = i(
        {
            Type: f,
            IsDataDescriptor: l,
            IsAccessorDescriptor: s
        },
        n
    )
        ? n
        : d(n);
    if (
        !i(
            {
                Type: f,
                IsDataDescriptor: l,
                IsAccessorDescriptor: s
            },
            _
        )
    )
        throw new r('Assertion failed: Desc is not a valid Property Descriptor');
    return o(l, u, a, e, t, _);
};
