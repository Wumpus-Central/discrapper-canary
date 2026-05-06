"use strict";
var a,
    l = t(605685);
t(697509)(r, "__esModule", { value: !0 }), (r.default = void 0);
var o = l(t(736883)),
    s = l(t(945836)),
    i = l(t(290845)),
    n = l(t(622146)),
    u = l(t(431700)),
    d = l(t(448556)),
    c = l(t(68052)),
    p = l(t(582617)),
    m = l(t(936876)),
    b = l(t(729823)),
    f = l(t(747562)),
    v = l(t(340350)),
    h = l(t(782065)),
    C = l(t(466721));
function q(e, r) {
    if (void 0 === n.default || null == (0, i.default)(e)) {
        if (
            (0, s.default)(e) ||
            (l = (function (e) {
                if (e) {
                    if ("string" == typeof e) return P(e, void 0);
                    var r,
                        t = (0, d.default)((r = Object.prototype.toString.call(e))).call(r, 8, -1);
                    if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                        return (0, u.default)(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return P(e, void 0);
                }
            })(e)) ||
            (r && e && "number" == typeof e.length)
        ) {
            l && (e = l);
            var t = 0,
                a = function () {};
            return {
                s: a,
                n: function () {
                    return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
                },
                e: function (e) {
                    throw e;
                },
                f: a,
            };
        }
        throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    var l,
        c,
        p = !0,
        m = !1;
    return {
        s: function () {
            l = (0, o.default)(e);
        },
        n: function () {
            var e = l.next();
            return (p = e.done), e;
        },
        e: function (e) {
            (m = !0), (c = e);
        },
        f: function () {
            try {
                p || null == l.return || l.return();
            } finally {
                if (m) throw c;
            }
        },
    };
}
function P(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, a = Array(r); t < r; t++) a[t] = e[t];
    return a;
}
var x = new f.default([]);
(0, b.default)((a = [v.default, h.default, C.default])).call(a, function (e) {
    (0, b.default)(e).call(e, function (e, r) {
        return x.set(r, e);
    });
}),
    (0, b.default)(x).call(x, function (e, r) {
        var t,
            a = q(e.superClass);
        try {
            for (a.s(); !(t = a.n()).done; ) {
                var l,
                    o = t.value,
                    s = q(o);
                try {
                    for (s.s(); !(l = s.n()).done; ) {
                        var i = l.value,
                            n = x.get(i);
                        if (n)
                            for (var u = 0, d = (0, m.default)(n.props); u < d.length; u++) {
                                var b = d[u];
                                Object.prototype.hasOwnProperty.call(e.props, b) ||
                                    (0, p.default)(e.props, (0, c.default)({}, b, n.props[b]));
                            }
                    }
                } catch (e) {
                    s.e(e);
                } finally {
                    s.f();
                }
            }
        } catch (e) {
            a.e(e);
        } finally {
            a.f();
        }
    }),
    (r.default = x);
