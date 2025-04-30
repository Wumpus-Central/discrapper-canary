t.r(n), t.d(n, { default: () => l }), t(388685);
var o = t(200651);
t(192379);
var c = t(788111),
    i = t(752342),
    r = t(886794),
    a = t(4599),
    d = t(910364);
function s(e) {
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
function l(e) {
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
    let { user: l } = t,
        [u, f] = (0, c.Z)(l.id);
    return u && !n ? (0, o.jsx)(a.Z, s({ onHide: f }, t)) : l.isNonUserBot() ? (0, o.jsx)(r.Z, s({}, t)) : l.bot ? (0, o.jsx)(i.Z, s({}, t)) : (0, o.jsx)(d.Z, s({}, t));
}
