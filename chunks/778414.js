n.d(t, {
    C: () => h,
    Z: () => y,
});
var r = n(255367);
n(73800);
var l = n(296009),
    i = n(442837),
    o = n(481060),
    a = n(314897),
    c = n(747101),
    s = n(517157),
    d = n(985748),
    u = n(566007),
    f = n(173951),
    p = n(455731),
    m = n(430790),
    g = n(795990),
    b = n(19043);
function j(e) {
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
function y(e) {
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
        case l.l.FAVORITE_GAMES:
            return (0, r.jsx)(u.Z, j({ widget: t }, n));
        case l.l.CURRENT_GAMES:
            return (0, r.jsx)(d.Z, j({ widget: t }, n));
        case l.l.WANT_TO_PLAY_GAMES:
            return (0, r.jsx)(p.Z, j({ widget: t }, n));
        case l.l.PLAYED_GAMES:
            return (0, r.jsx)(f.Z, j({ widget: t }, n));
        default:
            return null;
    }
}
function x(e) {
    let { user: t, guildId: n, channelId: l } = e,
        o = (0, s.Z)(t.id),
        { widgets: d, isGameFetching: u } = (0, c.Z)(o),
        f = (0, i.e7)([a.default], () => a.default.getId() === t.id);
    return 0 === d.length && f
        ? (0, r.jsx)(g.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  d.map((e) =>
                      (0, r.jsx)(
                          y,
                          {
                              widget: e,
                              user: t,
                              guildId: n,
                              channelId: l,
                              isGameFetching: u,
                          },
                          e.id,
                      ),
                  ),
                  f && (0, r.jsx)(m.Z, {}),
              ],
          });
}
function h(e) {
    return (0, r.jsx)(o.Ttm, {
        className: b.scroller,
        fade: !0,
        children: (0, r.jsx)(x, j({}, e)),
    });
}
