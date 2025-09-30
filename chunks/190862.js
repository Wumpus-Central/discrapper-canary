n.d(t, { Z: () => h });
var r = n(951288),
    i = n(296009),
    o = n(442837),
    a = n(314897),
    l = n(86419),
    c = n(747101),
    s = n(556045),
    u = n(881410),
    d = n(985748),
    g = n(566007),
    f = n(173951),
    p = n(455731),
    b = n(272289),
    m = n(39642);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let j = (e) => {
        var { widget: t } = e,
            n = y(e, ["widget"]);
        switch (t.type) {
            case i.l.FAVORITE_GAMES:
                return (0, r.jsx)(g.Z, O({ widget: t }, n));
            case i.l.CURRENT_GAMES:
                return (0, r.jsx)(d.Z, O({ widget: t }, n));
            case i.l.WANT_TO_PLAY_GAMES:
                return (0, r.jsx)(p.Z, O({ widget: t }, n));
            case i.l.PLAYED_GAMES:
                return (0, r.jsx)(f.Z, O({ widget: t }, n));
            default:
                return null;
        }
    },
    h = (e) => {
        var { widget: t, user: n, disableInteraction: i } = e,
            d = y(e, ["widget", "user", "disableInteraction"]);
        let g = (0, c.FX)(t),
            { shouldShowSuggestions: f, handleDismissSuggestions: p } = (0, s.h)(g),
            h = (0, o.e7)([a.default], () => a.default.getId() === n.id),
            v = h && !i && f,
            x = (0, l.mR)(g),
            _ = (0, l.Hy)(g, { isCurrentUser: h }),
            P = (0, l.kQ)(g);
        return (0, r.jsx)(
            j,
            O(
                {
                    widget: g,
                    user: n,
                    disableInteraction: i,
                    headerTitle: x,
                    headerSubtitle: _,
                    headerActionButtons: h
                        ? [
                              (0, r.jsx)(
                                  u.Z,
                                  {
                                      disabled: P,
                                      widgetType: g.type,
                                      widget: g,
                                  },
                                  "".concat(g.type, "-browse-games-popout"),
                              ),
                          ]
                        : void 0,
                    trailingContent:
                        v &&
                        (0, r.jsx)(b.Z, {
                            userId: n.id,
                            widgetType: g.type,
                            onDismiss: p,
                            className: m.suggestedGames,
                        }),
                },
                d,
            ),
        );
    };
