var r = n(690244),
    i = n(49662),
    o = r('%SyntaxError%'),
    a = r('%TypeError%'),
    s = n(395238),
    l = n(75150),
    c = n(860438),
    u = n(365916),
    d = n(828148),
    f = n(240919),
    _ = n(148309),
    p = n(632384),
    h = n(905125);
e.exports = function (e, t, n) {
    if ('Object' !== p(e)) throw new a('Assertion failed: O must be an Object');
    if (!d(t)) throw new a('Assertion failed: P must be a Property Key');
    if (
        !s(
            {
                Type: p,
                IsDataDescriptor: c,
                IsAccessorDescriptor: l
            },
            n
        )
    )
        throw new a('Assertion failed: Desc must be a Property Descriptor');
    if (!i) {
        if (l(n)) throw new o('This environment does not support accessor property descriptors.');
        var r = !(t in e) && n['[[Writable]]'] && n['[[Enumerable]]'] && n['[[Configurable]]'] && '[[Value]]' in n,
            m = t in e && (!('[[Configurable]]' in n) || n['[[Configurable]]']) && (!('[[Enumerable]]' in n) || n['[[Enumerable]]']) && (!('[[Writable]]' in n) || n['[[Writable]]']) && '[[Value]]' in n;
        if (r || m) return (e[t] = n['[[Value]]']), _(e[t], n['[[Value]]']);
        throw new o('This environment does not support defining non-writable, non-enumerable, or non-configurable properties');
    }
    var g = i(e, t),
        E = g && f(g),
        b = u(e);
    return h(e, t, b, n, E);
};
