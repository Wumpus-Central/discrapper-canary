var r = n(566817),
    i = n(429675),
    o = n(815329),
    a = n(699367),
    s = n(425194),
    l = n(752743),
    c = n(163567),
    u = n(511389),
    d = n(414235),
    f = n(936342),
    _ = n(951575);
e.exports = function (e, t, n) {
    if (!_(e)) throw new o('Assertion failed: O must be an Object');
    if (!c(t)) throw new o('Assertion failed: P must be a Property Key');
    if (!a(n)) throw new o('Assertion failed: Desc must be a Property Descriptor');
    if (!r) {
        if (s(n)) throw new i('This environment does not support accessor property descriptors.');
        var p = !(t in e) && n['[[Writable]]'] && n['[[Enumerable]]'] && n['[[Configurable]]'] && '[[Value]]' in n,
            h = t in e && (!('[[Configurable]]' in n) || n['[[Configurable]]']) && (!('[[Enumerable]]' in n) || n['[[Enumerable]]']) && (!('[[Writable]]' in n) || n['[[Writable]]']) && '[[Value]]' in n;
        if (p || h) return (e[t] = n['[[Value]]']), d(e[t], n['[[Value]]']);
        throw new i('This environment does not support defining non-writable, non-enumerable, or non-configurable properties');
    }
    var m = r(e, t),
        g = m && u(m),
        E = l(e);
    return f(e, t, E, n, g);
};
