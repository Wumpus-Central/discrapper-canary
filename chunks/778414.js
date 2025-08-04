n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var o = n(924322),
    i = n(481060),
    l = n(747101),
    a = n(517157),
    c = n(985748),
    s = n(566007),
    u = n(173951),
    d = n(455731),
    f = n(19043);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
}
function b(e) {
    var { widget: t } = e,
        n = m(e, ['widget']);
    switch (t.gameWidgetType) {
        case o.g.FAVORITE:
            return (0, r.jsx)(s.Z, p({ widget: t }, n));
        case o.g.CURRENT:
            return (0, r.jsx)(c.Z, p({ widget: t }, n));
        case o.g.WANT_TO_PLAY:
            return (0, r.jsx)(d.Z, p({ widget: t }, n));
        case o.g.PLAYED:
            return (0, r.jsx)(u.Z, p({ widget: t }, n));
        default:
            return null;
    }
}
function g(e) {
    var { user: t } = e,
        n = m(e, ['user']);
    let o = (0, a.Z)(),
        { widgets: c, isFetching: s } = (0, l.Z)(o);
    return (0, r.jsx)(i.Ttm, {
        className: f.scroller,
        fade: !0,
        children: c.map((e) =>
            (0, r.jsx)(
                b,
                p(
                    {
                        widget: e,
                        user: t,
                        loading: s
                    },
                    n
                ),
                e.id
            )
        )
    });
}
