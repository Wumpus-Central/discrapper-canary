n.d(t, { Z: () => O });
var r = n(951288),
    i = n(296009),
    a = n(442837),
    l = n(314897),
    o = n(86419),
    c = n(747101),
    s = n(556045),
    u = n(881410),
    d = n(985748),
    f = n(566007),
    g = n(173951),
    p = n(455731),
    m = n(272289),
    b = n(517143);
function y(e) {
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
let v = (e) => {
        var { widget: t } = e,
            n = h(e, ["widget"]);
        switch (t.type) {
            case i.l.FAVORITE_GAMES:
                return (0, r.jsx)(f.Z, y({ widget: t }, n));
            case i.l.CURRENT_GAMES:
                return (0, r.jsx)(d.Z, y({ widget: t }, n));
            case i.l.WANT_TO_PLAY_GAMES:
                return (0, r.jsx)(p.Z, y({ widget: t }, n));
            case i.l.PLAYED_GAMES:
                return (0, r.jsx)(g.Z, y({ widget: t }, n));
            default:
                return null;
        }
    },
    O = (e) => {
        var { widget: t, user: n, disableInteraction: i } = e,
            d = h(e, ["widget", "user", "disableInteraction"]);
        let f = (0, c.FX)(t),
            { shouldShowSuggestions: g, handleDismissSuggestions: p } = (0, s.h)(f),
            O = (0, a.e7)([l.default], () => l.default.getId() === n.id),
            j = O && !i && g,
            x = (0, o.mR)(f),
            _ = (0, o.Hy)(f, { isCurrentUser: O }),
            P = (0, o.kQ)(f),
            I = 1 === (0, o.Gv)(f.type);
        return (0, r.jsx)(
            v,
            y(
                {
                    widget: f,
                    user: n,
                    disableInteraction: i,
                    headerTitle: x,
                    headerSubtitle: _,
                    headerActionButtons:
                        O && !I
                            ? [
                                  (0, r.jsx)(
                                      u.yX,
                                      {
                                          disabled: P,
                                          widgetType: f.type,
                                          widget: f,
                                      },
                                      "".concat(f.type, "-browse-games-popout"),
                                  ),
                              ]
                            : void 0,
                    trailingContent:
                        j &&
                        (0, r.jsx)(m.Z, {
                            userId: n.id,
                            widgetType: f.type,
                            onDismiss: p,
                            className: b.suggestedGames,
                        }),
                },
                d,
            ),
        );
    };
