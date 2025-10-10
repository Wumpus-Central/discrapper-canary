r.d(t, { Z: () => x });
var n = r(951288),
    i = r(296009),
    o = r(442837),
    a = r(314897),
    l = r(86419),
    c = r(747101),
    s = r(556045),
    u = r(881410),
    d = r(985748),
    f = r(566007),
    g = r(173951),
    p = r(455731),
    b = r(272289),
    m = r(39642);
function O(e) {
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
function y(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
            (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
let j = (e) => {
        var { widget: t } = e,
            r = y(e, ["widget"]);
        switch (t.type) {
            case i.l.FAVORITE_GAMES:
                return (0, n.jsx)(f.Z, O({ widget: t }, r));
            case i.l.CURRENT_GAMES:
                return (0, n.jsx)(d.Z, O({ widget: t }, r));
            case i.l.WANT_TO_PLAY_GAMES:
                return (0, n.jsx)(p.Z, O({ widget: t }, r));
            case i.l.PLAYED_GAMES:
                return (0, n.jsx)(g.Z, O({ widget: t }, r));
            default:
                return null;
        }
    },
    x = (e) => {
        var { widget: t, user: r, disableInteraction: i } = e,
            d = y(e, ["widget", "user", "disableInteraction"]);
        let f = (0, c.FX)(t),
            { shouldShowSuggestions: g, handleDismissSuggestions: p } = (0, s.h)(f),
            x = (0, o.e7)([a.default], () => a.default.getId() === r.id),
            h = x && !i && g,
            v = (0, l.mR)(f),
            _ = (0, l.Hy)(f, { isCurrentUser: x }),
            w = (0, l.kQ)(f);
        return (0, n.jsx)(
            j,
            O(
                {
                    widget: f,
                    user: r,
                    disableInteraction: i,
                    headerTitle: v,
                    headerSubtitle: _,
                    headerActionButtons: x
                        ? [
                              (0, n.jsx)(
                                  u.Z,
                                  {
                                      disabled: w,
                                      widgetType: f.type,
                                      widget: f,
                                  },
                                  "".concat(f.type, "-browse-games-popout"),
                              ),
                          ]
                        : void 0,
                    trailingContent:
                        h &&
                        (0, n.jsx)(b.Z, {
                            userId: r.id,
                            widgetType: f.type,
                            onDismiss: p,
                            className: m.suggestedGames,
                        }),
                },
                d,
            ),
        );
    };
