n.d(t, { Z: () => v });
var r = n(951288),
    i = n(296009),
    o = n(442837),
    a = n(314897),
    l = n(86419),
    c = n(747101),
    s = n(556045),
    u = n(881410),
    d = n(985748),
    f = n(566007),
    g = n(173951),
    p = n(455731),
    b = n(272289),
    m = n(517143);
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
                return (0, r.jsx)(f.Z, O({ widget: t }, n));
            case i.l.CURRENT_GAMES:
                return (0, r.jsx)(d.Z, O({ widget: t }, n));
            case i.l.WANT_TO_PLAY_GAMES:
                return (0, r.jsx)(p.Z, O({ widget: t }, n));
            case i.l.PLAYED_GAMES:
                return (0, r.jsx)(g.Z, O({ widget: t }, n));
            default:
                return null;
        }
    },
    v = (e) => {
        var { widget: t, user: n, disableInteraction: i } = e,
            d = y(e, ["widget", "user", "disableInteraction"]);
        let f = (0, c.FX)(t),
            { shouldShowSuggestions: g, handleDismissSuggestions: p } = (0, s.h)(f),
            v = (0, o.e7)([a.default], () => a.default.getId() === n.id),
            h = v && !i && g,
            x = (0, l.mR)(f),
            P = (0, l.Hy)(f, { isCurrentUser: v }),
            _ = (0, l.kQ)(f);
        return (0, r.jsx)(
            j,
            O(
                {
                    widget: f,
                    user: n,
                    disableInteraction: i,
                    headerTitle: x,
                    headerSubtitle: P,
                    headerActionButtons: v
                        ? [
                              (0, r.jsx)(
                                  u.Z,
                                  {
                                      disabled: _,
                                      widgetType: f.type,
                                      widget: f,
                                  },
                                  "".concat(f.type, "-browse-games-popout"),
                              ),
                          ]
                        : void 0,
                    trailingContent:
                        h &&
                        (0, r.jsx)(b.Z, {
                            userId: n.id,
                            widgetType: f.type,
                            onDismiss: p,
                            className: m.suggestedGames,
                        }),
                },
                d,
            ),
        );
    };
