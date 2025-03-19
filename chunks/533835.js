t.d(n, { default: () => y }), t(47120);
var r = t(200651),
    o = t(192379),
    i = t(442837),
    l = t(100527),
    s = t(922611),
    c = t(695346),
    a = t(699516),
    d = t(971393),
    u = t(787018),
    f = t(752342),
    p = t(886794),
    b = t(910364);
function m(e) {
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
function v(e, n) {
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
let g = [l.Z.BITE_SIZE_PROFILE_POPOUT, l.Z.PROFILE_PANEL];
function y(e) {
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
    let { isBlocked: l, isIgnored: y } = (0, i.cj)([a.Z], () => ({
            isBlocked: a.Z.isBlocked(n.id),
            isIgnored: a.Z.isIgnored(n.id)
        })),
        I = (0, s.D)({ location: 'UserProfileModalWrapper' }),
        [j, h] = o.useState(l || (I && (y || l))),
        x = (0, d.sS)({ location: 'UserProfileModalWrapper' });
    o.useEffect(() => {
        h(y || l);
    }, [y, l]);
    let _ = !g.some((e) => {
            var n;
            return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
        }),
        O = c.Rt.useSetting();
    return j && x && _ && !I
        ? (0, r.jsx)(
              u.Z,
              m(
                  {
                      user: n,
                      onViewBlockedProfileClick: () => h(!1)
                  },
                  t
              )
          )
        : j && _ && I && !(y && O)
          ? (0, r.jsx)(
                u.W,
                m(
                    {
                        user: n,
                        onViewBlockedProfileClick: () => h(!1)
                    },
                    t
                )
            )
          : n.isNonUserBot()
            ? (0, r.jsx)(p.Z, v(m({}, t), { user: n }))
            : n.bot
              ? (0, r.jsx)(f.Z, v(m({}, t), { user: n }))
              : (0, r.jsx)(b.Z, v(m({}, t), { user: n }));
}
