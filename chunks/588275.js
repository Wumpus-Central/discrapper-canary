n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(239091),
    o = n(246364),
    a = n(937111),
    s = n(914010),
    c = n(451478),
    u = n(325257),
    d = n(674552),
    p = n(981631);
function h(e, t) {
    (0, l.jW)(e, async () => {
        let { default: e } = await n.e('6368').then(n.bind(n, 987999));
        return (n) => {
            var i, l;
            return (0, r.jsx)(
                e,
                ((i = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, n)),
                (l = l = { guild: t }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                i)
            );
        };
    });
}
function f(e) {
    let { guildNode: t, height: n } = e,
        l = t.id,
        f = (0, i.e7)([a.Z], () => a.Z.getRequest(l)),
        g = (0, i.e7)([a.Z], () => a.Z.getJoinRequestGuild(l), [l]),
        m = (0, i.e7)([c.Z], () => c.Z.isFocused()),
        b = (0, i.e7)([s.Z], () => s.Z.getGuildId());
    return null == g
        ? null
        : (0, r.jsx)(u.Z, {
              guildNode: t,
              guild: g,
              animatable: m,
              draggable: !1,
              selected: l === b,
              preloadOnClick: !1,
              contextMenu: h,
              lowerBadge: (null == f ? void 0 : f.applicationStatus) === o.wB.REJECTED ? (0, d.jt)({ guildJoinRequestStatus: f.applicationStatus }) : void 0,
              route: p.Z5c.GUILD_MEMBER_VERIFICATION(l),
              height: n
          });
}
