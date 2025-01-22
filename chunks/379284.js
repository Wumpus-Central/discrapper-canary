var i = r(690244),
    a = r(49662),
    o = i('%SyntaxError%'),
    s = i('%TypeError%'),
    l = r(395238),
    u = r(75150),
    c = r(860438),
    d = r(365916),
    f = r(828148),
    p = r(240919),
    h = r(148309),
    _ = r(632384),
    m = r(905125);
e.exports = function (e, n, r) {
    if ('Object' !== _(e)) throw new s('Assertion failed: O must be an Object');
    if (!f(n)) throw new s('Assertion failed: P must be a Property Key');
    if (
        !l(
            {
                Type: _,
                IsDataDescriptor: c,
                IsAccessorDescriptor: u
            },
            r
        )
    )
        throw new s('Assertion failed: Desc must be a Property Descriptor');
    if (!a) {
        if (u(r)) throw new o('This environment does not support accessor property descriptors.');
        var i = !(n in e) && r['[[Writable]]'] && r['[[Enumerable]]'] && r['[[Configurable]]'] && '[[Value]]' in r,
            g = n in e && (!('[[Configurable]]' in r) || r['[[Configurable]]']) && (!('[[Enumerable]]' in r) || r['[[Enumerable]]']) && (!('[[Writable]]' in r) || r['[[Writable]]']) && '[[Value]]' in r;
        if (i || g) return (e[n] = r['[[Value]]']), h(e[n], r['[[Value]]']);
        throw new o('This environment does not support defining non-writable, non-enumerable, or non-configurable properties');
    }
    var E = a(e, n),
        v = E && p(E),
        y = d(e);
    return m(e, n, y, r, v);
};
