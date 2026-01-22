n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(442433),
    a = n(513461),
    s = n(212455),
    o = n(967198),
    c = n(531685),
    u = n(330465),
    d = n(65611),
    f = n(652215);
function p(e, t) {
    (0, i.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => {
            var l, i;
            return (0, r.jsx)(
                e,
                ((l = (function (e) {
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
                })({}, n)),
                (i = i = { guild: t }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                l),
            );
        };
    });
}
function h(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, l.bG)([s.A], () => s.A.getRequest(n)),
        h = (0, l.bG)([s.A], () => s.A.getJoinRequestGuild(n), [n]),
        b = (0, l.bG)([c.A], () => c.A.isFocused()),
        g = (0, l.bG)([o.A], () => o.A.getGuildId());
    return null == h
        ? null
        : (0, r.jsx)(u.A, {
              guildNode: t,
              guild: h,
              animatable: b,
              draggable: !1,
              selected: n === g,
              preloadOnClick: !1,
              contextMenu: p,
              lowerBadge:
                  (null == i ? void 0 : i.applicationStatus) === a.B5.REJECTED
                      ? (0, d.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: f.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
