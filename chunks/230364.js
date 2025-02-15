var r = a(581031),
    n = a(936940),
    _ = a(354848),
    o = a(740362),
    i = a(325008),
    c = a(539459).CONFIGURABLE,
    s = a(943329),
    E = a(644659),
    l = E.enforce,
    u = E.get,
    I = String,
    R = Object.defineProperty,
    d = r(''.slice),
    A = r(''.replace),
    f = r([].join),
    p =
        i &&
        !n(function () {
            return 8 !== R(function () {}, 'length', { value: 8 }).length;
        }),
    T = String(String).split('String'),
    N = (t.exports = function (t, e, a) {
        'Symbol(' === d(I(e), 0, 7) && (e = '[' + A(I(e), /^Symbol\(([^)]*)\)/, '$1') + ']'),
            a && a.getter && (e = 'get ' + e),
            a && a.setter && (e = 'set ' + e),
            (!o(t, 'name') || (c && t.name !== e)) &&
                (i
                    ? R(t, 'name', {
                          value: e,
                          configurable: !0
                      })
                    : (t.name = e)),
            p && a && o(a, 'arity') && t.length !== a.arity && R(t, 'length', { value: a.arity });
        try {
            a && o(a, 'constructor') && a.constructor ? i && R(t, 'prototype', { writable: !1 }) : t.prototype && (t.prototype = void 0);
        } catch (t) {}
        var r = l(t);
        return o(r, 'source') || (r.source = f(T, 'string' == typeof e ? e : '')), t;
    });
Function.prototype.toString = N(function () {
    return (_(this) && u(this).source) || s(this);
}, 'toString');
