var i = n(690244),
    r = n(49662),
    a = i('%SyntaxError%'),
    s = i('%TypeError%'),
    o = n(395238),
    l = n(75150),
    u = n(860438),
    c = n(365916),
    d = n(828148),
    f = n(240919),
    _ = n(148309),
    p = n(632384),
    h = n(905125);
e.exports = function (e, t, n) {
    if ('Object' !== p(e)) throw new s('Assertion failed: O must be an Object');
    if (!d(t)) throw new s('Assertion failed: P must be a Property Key');
    if (
        !o(
            {
                Type: p,
                IsDataDescriptor: u,
                IsAccessorDescriptor: l
            },
            n
        )
    )
        throw new s('Assertion failed: Desc must be a Property Descriptor');
    if (!r) {
        if (l(n)) throw new a('This environment does not support accessor property descriptors.');
        var i = !(t in e) && n['[[Writable]]'] && n['[[Enumerable]]'] && n['[[Configurable]]'] && '[[Value]]' in n,
            m = t in e && (!('[[Configurable]]' in n) || n['[[Configurable]]']) && (!('[[Enumerable]]' in n) || n['[[Enumerable]]']) && (!('[[Writable]]' in n) || n['[[Writable]]']) && '[[Value]]' in n;
        if (i || m) return (e[t] = n['[[Value]]']), _(e[t], n['[[Value]]']);
        throw new a('This environment does not support defining non-writable, non-enumerable, or non-configurable properties');
    }
    var g = r(e, t),
        E = g && f(g),
        v = c(e);
    return h(e, t, v, n, E);
};
