n.d(t, { Z: () => v });
var r = n(951288),
    i = n(296009),
    a = n(442837),
    l = n(314897),
    o = n(86419),
    c = n(556045),
    s = n(881410),
    u = n(985748),
    d = n(566007),
    g = n(173951),
    f = n(455731),
    p = n(272289),
    m = n(39642);
function b(e) {
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
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let y = (e) => {
        var { widget: t } = e,
            n = h(e, ["widget"]);
        switch (t.type) {
            case i.l.FAVORITE_GAMES:
                return (0, r.jsx)(d.Z, b({ widget: t }, n));
            case i.l.CURRENT_GAMES:
                return (0, r.jsx)(u.Z, b({ widget: t }, n));
            case i.l.WANT_TO_PLAY_GAMES:
                return (0, r.jsx)(f.Z, b({ widget: t }, n));
            case i.l.PLAYED_GAMES:
                return (0, r.jsx)(g.Z, b({ widget: t }, n));
            default:
                return null;
        }
    },
    v = (e) => {
        var { widget: t, user: n, disableInteraction: i } = e,
            u = h(e, ["widget", "user", "disableInteraction"]);
        let { shouldShowSuggestions: d, handleDismissSuggestions: g } = (0, c.h)(t),
            f = (0, a.e7)([l.default], () => l.default.getId() === n.id),
            v = f && !i && d,
            O = (0, o.mR)(t),
            j = (0, o.Hy)(t, { isCurrentUser: f }),
            x = (0, o.kQ)(t),
            _ = 1 === (0, o.Gv)(t.type);
        return (0, r.jsx)(
            y,
            b(
                {
                    widget: t,
                    user: n,
                    disableInteraction: i,
                    headerTitle: O,
                    headerSubtitle: j,
                    headerActionButtons:
                        f && !_
                            ? [
                                  (0, r.jsx)(
                                      s.yX,
                                      {
                                          disabled: x,
                                          widgetType: t.type,
                                          widget: t,
                                      },
                                      "".concat(t.type, "-browse-games-popout"),
                                  ),
                              ]
                            : void 0,
                    trailingContent:
                        v &&
                        (0, r.jsx)(p.Z, {
                            userId: n.id,
                            widgetType: t.type,
                            onDismiss: g,
                            className: m.suggestedGames,
                        }),
                },
                u,
            ),
        );
    };
