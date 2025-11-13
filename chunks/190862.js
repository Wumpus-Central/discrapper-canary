n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(296009),
    l = n(442837),
    o = n(314897),
    c = n(86419),
    s = n(556045),
    u = n(881410),
    d = n(141014),
    f = n(985748),
    g = n(566007),
    p = n(173951),
    m = n(455731),
    b = n(272289),
    h = n(39642);
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
function v(e, t) {
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
let O = (e) => {
        var { widget: t } = e,
            n = v(e, ["widget"]);
        switch (t.type) {
            case a.l.FAVORITE_GAMES:
                return (0, r.jsx)(g.Z, y({ widget: t }, n));
            case a.l.CURRENT_GAMES:
                return (0, r.jsx)(f.Z, y({ widget: t }, n));
            case a.l.WANT_TO_PLAY_GAMES:
                return (0, r.jsx)(m.Z, y({ widget: t }, n));
            case a.l.PLAYED_GAMES:
                return (0, r.jsx)(p.Z, y({ widget: t }, n));
            default:
                return null;
        }
    },
    j = (e) => {
        var { widget: t, user: n, disableInteraction: a } = e,
            f = v(e, ["widget", "user", "disableInteraction"]);
        let { shouldShowSuggestions: g, handleDismissSuggestions: p } = (0, s.h)(t),
            m = (0, l.e7)([o.default], () => o.default.getId() === n.id),
            j = m && !a && g,
            x = (0, c.mR)(t),
            _ = (0, c.Hy)(t, { isCurrentUser: m }),
            P = (0, c.kQ)(t),
            I = 1 === (0, c.Gv)(t.type),
            [w, S] = i.useState(!1);
        return (0, r.jsx)(d.N, {
            value: {
                expanded: w,
                setExpanded: S,
            },
            children: (0, r.jsx)(
                O,
                y(
                    {
                        widget: t,
                        user: n,
                        disableInteraction: a,
                        headerTitle: x,
                        headerSubtitle: _,
                        headerActionButtons:
                            m && !I
                                ? [
                                      (0, r.jsx)(
                                          u.yX,
                                          {
                                              disabled: P,
                                              widgetType: t.type,
                                              widget: t,
                                              onAddGame: () => S(!0),
                                          },
                                          "".concat(t.type, "-browse-games-popout"),
                                      ),
                                  ]
                                : void 0,
                        trailingContent:
                            j &&
                            (0, r.jsx)(b.Z, {
                                userId: n.id,
                                widgetType: t.type,
                                onDismiss: p,
                                className: h.suggestedGames,
                            }),
                    },
                    f,
                ),
            ),
        });
    };
