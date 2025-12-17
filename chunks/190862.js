n.d(t, { Z: () => j });
var r = n(54381);
n(473749);
var i = n(296009),
    a = n(442837),
    l = n(314897),
    o = n(86419),
    c = n(556045),
    s = n(881410),
    u = n(141014),
    d = n(985748),
    f = n(566007),
    g = n(173951),
    p = n(455731),
    b = n(272289),
    m = n(902210);
function h(e) {
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
function v(e) {
    var { widget: t } = e,
        n = y(e, ["widget"]);
    switch (t.type) {
        case i.l.FAVORITE_GAMES:
            return (0, r.jsx)(f.Z, h({ widget: t }, n));
        case i.l.CURRENT_GAMES:
            return (0, r.jsx)(d.Z, h({ widget: t }, n));
        case i.l.WANT_TO_PLAY_GAMES:
            return (0, r.jsx)(p.Z, h({ widget: t }, n));
        case i.l.PLAYED_GAMES:
            return (0, r.jsx)(g.Z, h({ widget: t }, n));
        default:
            return null;
    }
}
function O(e) {
    var { widget: t, user: n, disableInteraction: i } = e,
        d = y(e, ["widget", "user", "disableInteraction"]);
    let { setExpanded: f } = (0, u.g)(),
        { shouldShowSuggestions: g, handleDismissSuggestions: p } = (0, c.h)(t),
        O = (0, a.e7)([l.default], () => l.default.getId() === n.id),
        j = O && !i && g,
        x = (0, o.mR)(t),
        P = (0, o.Hy)(t, { isCurrentUser: O }),
        w = (0, o.kQ)(t),
        I = 1 === (0, o.Gv)(t.type);
    return (0, r.jsx)(
        v,
        h(
            {
                widget: t,
                user: n,
                disableInteraction: i,
                headerTitle: x,
                headerSubtitle: P,
                headerActionButtons:
                    O && !I
                        ? [
                              (0, r.jsx)(
                                  s.yX,
                                  {
                                      disabled: w,
                                      widgetType: t.type,
                                      widget: t,
                                      onAddGame: () => f(!0),
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
                        className: m.suggestedGames,
                    }),
            },
            d,
        ),
    );
}
function j(e) {
    var { widget: t } = e,
        n = y(e, ["widget"]);
    return (0, r.jsx)(u.N, {
        widgetType: t.type,
        children: (0, r.jsx)(O, h({ widget: t }, n)),
    });
}
