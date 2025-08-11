n.d(t, {
    C: () => j,
    Z: () => g,
});
var r = n(255367);
n(73800);
var l = n(296009),
    i = n(481060),
    o = n(747101),
    a = n(517157),
    c = n(985748),
    s = n(566007),
    d = n(173951),
    u = n(455731),
    f = n(795990),
    m = n(19043);
function p(e) {
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
            return (0, r.jsx)(s.Z, p({ widget: t }, n));
        case l.l.CURRENT_GAMES:
            return (0, r.jsx)(c.Z, p({ widget: t }, n));
        case l.l.WANT_TO_PLAY_GAMES:
            return (0, r.jsx)(u.Z, p({ widget: t }, n));
        case l.l.PLAYED_GAMES:
            return (0, r.jsx)(d.Z, p({ widget: t }, n));
        default:
            return null;
    }
}
function b(e) {
    let { user: t, guildId: n, channelId: l } = e,
        i = (0, a.Z)(t.id),
        { widgets: c, isGameFetching: s } = (0, o.Z)(i);
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
                          isGameFetching: s,
                      },
                      e.id,
                  ),
              ),
          });
}
function j(e) {
    return (0, r.jsx)(i.Ttm, {
        className: m.scroller,
        fade: !0,
        children: (0, r.jsx)(b, p({}, e)),
    });
}
