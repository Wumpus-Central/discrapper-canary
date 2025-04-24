t.d(n, { Z: () => c });
var i = t(200651);
t(192379);
var o = t(81570),
    l = t(527790),
    r = t(248930);
function s(e) {
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
function c(e) {
    var { location: n, user: t, currentUser: c } = e,
        a = (function (e, n) {
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
        })(e, ['location', 'user', 'currentUser']);
    return (0, o.T)({ location: n }) && t.id !== c.id && !t.bot ? (0, i.jsx)(r.Z, s({ user: t }, a)) : (0, i.jsx)(l.Z, s({ user: t }, a));
}
