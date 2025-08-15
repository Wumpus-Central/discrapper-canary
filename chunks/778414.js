n.d(t, {
    C: () => _,
    Z: () => h,
});
var r = n(255367),
    l = n(73800),
    i = n(296009),
    o = n(442837),
    a = n(481060),
    c = n(314897),
    s = n(592183),
    d = n(224724),
    u = n(747101),
    f = n(517157),
    p = n(985748),
    m = n(566007),
    g = n(173951),
    b = n(455731),
    j = n(430790),
    y = n(795990),
    O = n(830202);
function x(e) {
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
function h(e) {
    var { widget: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["widget"]);
    switch (t.type) {
        case i.l.FAVORITE_GAMES:
            return (0, r.jsx)(m.Z, x({ widget: t }, n));
        case i.l.CURRENT_GAMES:
            return (0, r.jsx)(p.Z, x({ widget: t }, n));
        case i.l.WANT_TO_PLAY_GAMES:
            return (0, r.jsx)(b.Z, x({ widget: t }, n));
        case i.l.PLAYED_GAMES:
            return (0, r.jsx)(g.Z, x({ widget: t }, n));
        default:
            return null;
    }
}
function v(e) {
    let { user: t, guildId: n, channelId: l } = e,
        i = (0, f.Z)(t.id),
        { widgets: a, isGameFetching: s } = (0, u.Z)(i),
        d = (0, o.e7)([c.default], () => c.default.getId() === t.id);
    return 0 === a.length && d
        ? (0, r.jsx)(y.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  a.map((e) =>
                      (0, r.jsx)(
                          h,
                          {
                              widget: e,
                              user: t,
                              guildId: n,
                              channelId: l,
                              isGameFetching: s,
                          },
                          e.id,
                      ),
                  ),
                  d && (0, r.jsx)(j.Z, {}),
              ],
          });
}
function _(e) {
    let t = (0, o.e7)([d.Z], () => d.Z.suggestedFetchAttempted);
    return (
        l.useEffect(() => {
            t || s.Z.fetchSuggestedGames();
        }, [t]),
        (0, r.jsx)(a.Ttm, {
            className: O.scroller,
            fade: !0,
            children: (0, r.jsx)(v, x({}, e)),
        })
    );
}
