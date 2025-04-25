t.r(n), t.d(n, { default: () => d }), t(388685);
var i = t(200651);
t(192379);
var o = t(788111),
    l = t(752342),
    r = t(886794),
    s = t(4599),
    a = t(910364);
function c(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function d(e) {
    var { hideRestrictedProfile: n = !1 } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                i,
                o = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        i,
                        o = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (t = l[i]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) (t = l[i]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ['hideRestrictedProfile']);
    let { user: d } = t,
        [u, f] = (0, o.Z)(d.id);
    return u && !n ? (0, i.jsx)(s.Z, c({ onHide: f }, t)) : d.isNonUserBot() ? (0, i.jsx)(r.Z, c({}, t)) : d.bot ? (0, i.jsx)(l.Z, c({}, t)) : (0, i.jsx)(a.Z, c({}, t));
}
