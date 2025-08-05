n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var o = n(296009),
    l = n(481060),
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
function b(e) {
    var { widget: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        })(e, ['widget']);
    switch (t.type) {
        case o.l.FAVORITE_GAMES:
            return (0, r.jsx)(s.Z, m({ widget: t }, n));
        case o.l.CURRENT_GAMES:
            return (0, r.jsx)(c.Z, m({ widget: t }, n));
        case o.l.WANT_TO_PLAY_GAMES:
            return (0, r.jsx)(u.Z, m({ widget: t }, n));
        case o.l.PLAYED_GAMES:
            return (0, r.jsx)(d.Z, m({ widget: t }, n));
        default:
            return null;
    }
}
function g(e) {
    let { user: t, guildId: n, channelId: o } = e,
        l = (0, a.Z)(),
        { widgets: c, isFetching: s } = (0, i.Z)(l);
    return 0 === c.length
        ? (0, r.jsx)(f.Z, {})
        : (0, r.jsx)(r.Fragment, {
              children: c.map((e) =>
                  (0, r.jsx)(
                      b,
                      {
                          widget: e,
                          user: t,
                          guildId: n,
                          channelId: o,
                          loading: s
                      },
                      e.id
                  )
              )
          });
}
function y(e) {
    return (0, r.jsx)(l.Ttm, {
        className: p.scroller,
        fade: !0,
        children: (0, r.jsx)(g, m({}, e))
    });
}
