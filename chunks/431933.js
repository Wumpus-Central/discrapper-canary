n.d(t, { Z: () => b }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(911367),
    a = n(695346),
    s = n(699516),
    c = n(594174),
    u = n(212321),
    d = n(646915),
    p = n(184301),
    h = n(432958),
    f = n(792379),
    m = n(177222);
function g(e) {
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
}
function b(e) {
    let { channel: t } = e,
        n = (0, d.Z)();
    (0, o.t)();
    let { withMutualFriendsCount: b } = (0, u.j)({ location: 'UserProfilePanelRenderer' }),
        [_] = t.recipients,
        y = (0, l.e7)([c.default], () => c.default.getUser(_)),
        C = (0, l.e7)([c.default], () => c.default.getCurrentUser());
    i.useEffect(() => {
        (0, p.Z)(null != y ? y : _, {
            type: 'panel',
            withMutualFriendsCount: (null == y ? void 0 : y.bot) !== !0 && b,
            withMutualFriends: (null == y ? void 0 : y.bot) !== !0 && !b,
            withMutualGuilds: !0,
            channelId: t.id
        });
    }, [y, _, t.id, b]);
    let { isBlocked: x, isIgnored: v } = (0, l.cj)([s.Z], () => ({
            isBlocked: s.Z.isBlocked(_),
            isIgnored: s.Z.isIgnored(_)
        })),
        [j, O] = i.useState(x || v),
        E = a.Rt.useSetting();
    return (i.useEffect(() => {
        O(x || v);
    }, [x, v]),
    null == y || null == C || n)
        ? null
        : j && !(v && E)
          ? (0, r.jsx)(
                h.A,
                g(
                    {
                        user: y,
                        currentUser: C,
                        onViewBlockedProfileClick: () => O(!1)
                    },
                    e
                )
            )
          : y.isNonUserBot()
            ? (0, r.jsx)(
                  f.Z,
                  g(
                      {
                          user: y,
                          currentUser: C
                      },
                      e
                  )
              )
            : (0, r.jsx)(
                  m.Z,
                  g(
                      {
                          user: y,
                          currentUser: C
                      },
                      e
                  )
              );
}
