n.d(t, { Z: () => j }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(296009),
    a = n(442837),
    o = n(314897),
    s = n(86419),
    c = n(556045),
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
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let v = (e) => {
        var { widget: t } = e,
            n = O(e, ["widget"]);
        switch (t.type) {
            case l.l.FAVORITE_GAMES:
                return (0, r.jsx)(g.Z, y({ widget: t }, n));
            case l.l.CURRENT_GAMES:
                return (0, r.jsx)(f.Z, y({ widget: t }, n));
            case l.l.WANT_TO_PLAY_GAMES:
                return (0, r.jsx)(m.Z, y({ widget: t }, n));
            case l.l.PLAYED_GAMES:
                return (0, r.jsx)(p.Z, y({ widget: t }, n));
            default:
                return null;
        }
    },
    j = (e) => {
        var { widget: t, user: n, disableInteraction: l } = e,
            f = O(e, ["widget", "user", "disableInteraction"]);
        let { shouldShowSuggestions: g, handleDismissSuggestions: p } = (0, c.h)(t),
            m = (0, a.e7)([o.default], () => o.default.getId() === n.id),
            j = m && !l && g,
            x = (0, s.mR)(t),
            P = (0, s.Hy)(t, { isCurrentUser: m }),
            _ = (0, s.kQ)(t),
            I = 1 === (0, s.Gv)(t.type),
            [w, S] = i.useState(!1);
        return (0, r.jsx)(d.N, {
            value: {
                expanded: w,
                setExpanded: S,
            },
            children: (0, r.jsx)(
                v,
                y(
                    {
                        widget: t,
                        user: n,
                        disableInteraction: l,
                        headerTitle: x,
                        headerSubtitle: P,
                        headerActionButtons:
                            m && !I
                                ? [
                                      (0, r.jsx)(
                                          u.yX,
                                          {
                                              disabled: _,
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
