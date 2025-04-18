t.d(n, { default: () => d }), t(388685);
var r = t(200651);
t(192379);
var o = t(788111),
    i = t(752342),
    l = t(886794),
    s = t(4599),
    c = t(910364);
function a(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function d(e) {
    var { hideRestrictedProfile: n = !1 } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (t = i[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ['hideRestrictedProfile']);
    let { user: d } = t,
        [u, f] = (0, o.Z)(d.id);
    return u && !n ? (0, r.jsx)(s.Z, a({ onHide: f }, t)) : d.isNonUserBot() ? (0, r.jsx)(l.Z, a({}, t)) : d.bot ? (0, r.jsx)(i.Z, a({}, t)) : (0, r.jsx)(c.Z, a({}, t));
}
