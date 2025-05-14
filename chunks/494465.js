var e = r(46015),
    o = r(621523),
    i = r(880181),
    u = r(77025),
    c = r(507604),
    a = r(938373).CONFIGURABLE,
    f = r(845691),
    s = r(199838),
    l = s.enforce,
    p = s.get,
    d = String,
    _ = Object.defineProperty,
    h = e(''.slice),
    y = e(''.replace),
    b = e([].join),
    g =
        c &&
        !o(function () {
            return 8 !== _(function () {}, 'length', { value: 8 }).length;
        }),
    v = String(String).split('String'),
    w = (t.exports = function (t, n, r) {
        'Symbol(' === h(d(n), 0, 7) && (n = '[' + y(d(n), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
            r && r.getter && (n = 'get ' + n),
            r && r.setter && (n = 'set ' + n),
            (!u(t, 'name') || (a && t.name !== n)) &&
                (c
                    ? _(t, 'name', {
                          value: n,
                          configurable: !0
                      })
                    : (t.name = n)),
            g && r && u(r, 'arity') && t.length !== r.arity && _(t, 'length', { value: r.arity });
        try {
            r && u(r, 'constructor') && r.constructor ? c && _(t, 'prototype', { writable: !1 }) : t.prototype && (t.prototype = void 0);
        } catch (t) {}
        var e = l(t);
        return u(e, 'source') || (e.source = b(v, 'string' == typeof n ? n : '')), t;
    });
Function.prototype.toString = w(function () {
    return (i(this) && p(this).source) || f(this);
}, 'toString');
