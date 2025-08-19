r.d(t, {
    C: () => x,
    Z: () => y,
});
var n = r(951288);
r(647438);
var l = r(296009),
    i = r(442837),
    a = r(481060),
    o = r(314897),
    c = r(117029),
    s = r(747101),
    u = r(517157),
    d = r(985748),
    f = r(566007),
    g = r(173951),
    p = r(455731),
    b = r(430790),
    O = r(795990),
    m = r(830202);
function j(e) {
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
function y(e) {
    var { widget: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ["widget"]);
    switch (t.type) {
        case l.l.FAVORITE_GAMES:
            return (0, n.jsx)(f.Z, j({ widget: t }, r));
        case l.l.CURRENT_GAMES:
            return (0, n.jsx)(d.Z, j({ widget: t }, r));
        case l.l.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(p.Z, j({ widget: t }, r));
        case l.l.PLAYED_GAMES:
            return (0, n.jsx)(g.Z, j({ widget: t }, r));
        default:
            return null;
    }
}
function v(e) {
    let { user: t, guildId: r, channelId: l } = e,
        a = (0, u.Z)(t.id),
        { widgets: d, isGameFetching: f } = (0, s.Z)(a),
        g = (0, i.e7)([o.default], () => o.default.getId() === t.id),
        p = 0 === d.length && g;
    return ((0, c.J)(g, d), p)
        ? (0, n.jsx)(O.Z, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  d.map((e) =>
                      (0, n.jsx)(
                          y,
                          {
                              widget: e,
                              user: t,
                              guildId: r,
                              channelId: l,
                              isGameFetching: f,
                          },
                          e.id,
                      ),
                  ),
                  g && (0, n.jsx)(b.Z, {}),
              ],
          });
}
function x(e) {
    return (0, n.jsx)(a.Ttm, {
        className: m.scroller,
        fade: !0,
        children: (0, n.jsx)(v, j({}, e)),
    });
}
