r.d(t, { Z: () => y });
var n = r(951288),
    i = r(296009),
    l = r(442837),
    a = r(314897),
    o = r(747101),
    c = r(556045),
    s = r(985748),
    u = r(566007),
    d = r(173951),
    f = r(455731),
    g = r(272289),
    b = r(39642);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function m(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++)
            (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
let O = (e) => {
        var { widget: t } = e,
            r = m(e, ["widget"]);
        switch (t.type) {
            case i.l.FAVORITE_GAMES:
                return (0, n.jsx)(u.Z, p({ widget: t }, r));
            case i.l.CURRENT_GAMES:
                return (0, n.jsx)(s.Z, p({ widget: t }, r));
            case i.l.WANT_TO_PLAY_GAMES:
                return (0, n.jsx)(f.Z, p({ widget: t }, r));
            case i.l.PLAYED_GAMES:
                return (0, n.jsx)(d.Z, p({ widget: t }, r));
            default:
                return null;
        }
    },
    y = (e) => {
        var { widget: t, user: r, disableInteraction: i } = e,
            s = m(e, ["widget", "user", "disableInteraction"]);
        let u = (0, o.FX)(t),
            { shouldShowSuggestions: d, handleDismissSuggestions: f } = (0, c.h)(u),
            y = (0, l.e7)([a.default], () => a.default.getId() === r.id);
        return (0, n.jsx)(
            O,
            p(
                {
                    widget: u,
                    user: r,
                    disableInteraction: i,
                    trailingContent:
                        y &&
                        !i &&
                        d &&
                        (0, n.jsx)(g.Z, {
                            userId: r.id,
                            widgetType: u.type,
                            onDismiss: f,
                            className: b.suggestedGames,
                        }),
                },
                s,
            ),
        );
    };
