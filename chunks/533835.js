t.d(n, { default: () => m }), t(47120);
var r = t(200651),
    o = t(192379),
    i = t(442837),
    l = t(100527),
    s = t(695346),
    c = t(699516),
    a = t(787018),
    d = t(752342),
    u = t(886794),
    f = t(910364);
function p(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function b(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let y = [l.Z.BITE_SIZE_PROFILE_POPOUT, l.Z.PROFILE_PANEL];
function m(e) {
    var { user: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (t = i[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ['user']);
    let { isBlocked: l, isIgnored: m } = (0, i.cj)([c.Z], () => ({
            isBlocked: c.Z.isBlocked(n.id),
            isIgnored: c.Z.isIgnored(n.id)
        })),
        [g, I] = o.useState(l || m || l);
    o.useEffect(() => {
        I(m || l);
    }, [m, l]);
    let j = !y.some((e) => {
            var n;
            return (null != (n = t.sourceAnalyticsLocations) ? n : []).includes(e);
        }),
        v = s.Rt.useSetting();
    return g && j && !(m && v)
        ? (0, r.jsx)(
              a.W,
              p(
                  {
                      user: n,
                      onViewBlockedProfileClick: () => I(!1)
                  },
                  t
              )
          )
        : n.isNonUserBot()
          ? (0, r.jsx)(u.Z, b(p({}, t), { user: n }))
          : n.bot
            ? (0, r.jsx)(d.Z, b(p({}, t), { user: n }))
            : (0, r.jsx)(f.Z, b(p({}, t), { user: n }));
}
