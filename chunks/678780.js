t.r(n), t.d(n, { default: () => s }), t(388685);
var o = t(255367);
t(73800);
var c = t(788111),
    i = t(752342),
    r = t(886794),
    a = t(4599),
    l = t(910364);
function d(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            o.forEach(function (n) {
                var o;
                (o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = o);
            });
    }
    return e;
}
function s(e) {
    var { hideRestrictedProfile: n = !1 } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                o,
                c = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        o,
                        c = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (c[t] = e[t]);
                    return c;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++) (t = i[o]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (c[t] = e[t]);
            }
            return c;
        })(e, ['hideRestrictedProfile']);
    let { user: s } = t,
        [u, f] = (0, c.Z)(s.id);
    return u && !n ? (0, o.jsx)(a.Z, d({ onHide: f }, t)) : s.isNonUserBot() ? (0, o.jsx)(r.Z, d({}, t)) : s.bot ? (0, o.jsx)(i.Z, d({}, t)) : (0, o.jsx)(l.Z, d({}, t));
}
