n.d(t, { Z: () => j });
var r = n(255367);
n(73800);
var l = n(296009),
    o = n(481060),
    i = n(747101),
    a = n(517157),
    c = n(985748),
    s = n(566007),
    d = n(173951),
    u = n(455731),
    f = n(795990),
    p = n(19043);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function g(e) {
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
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['widget']);
    switch (t.type) {
        case l.l.FAVORITE_GAMES:
            return (0, r.jsx)(s.Z, m({ widget: t }, n));
        case l.l.CURRENT_GAMES:
            return (0, r.jsx)(c.Z, m({ widget: t }, n));
        case l.l.WANT_TO_PLAY_GAMES:
            return (0, r.jsx)(u.Z, m({ widget: t }, n));
        case l.l.PLAYED_GAMES:
            return (0, r.jsx)(d.Z, m({ widget: t }, n));
        default:
            return null;
    }
}
function b(e) {
    let { user: t, guildId: n, channelId: l } = e,
        o = (0, a.Z)(),
        { widgets: c, isFetching: s } = (0, i.Z)(o);
    return 0 === c.length
        ? (0, r.jsx)(f.Z, {})
        : (0, r.jsx)(r.Fragment, {
              children: c.map((e) =>
                  (0, r.jsx)(
                      g,
                      {
                          widget: e,
                          user: t,
                          guildId: n,
                          channelId: l,
                          loading: s
                      },
                      e.id
                  )
              )
          });
}
function j(e) {
    return (0, r.jsx)(o.Ttm, {
        className: p.scroller,
        fade: !0,
        children: (0, r.jsx)(b, m({}, e))
    });
}
