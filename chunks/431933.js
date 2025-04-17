n.d(t, { Z: () => y }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(442837),
    s = n(911367),
    c = n(695346),
    u = n(699516),
    d = n(594174),
    p = n(212321),
    h = n(646915),
    f = n(184301),
    m = n(432958),
    g = n(792379),
    b = n(177222);
function _(e) {
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
function y(e) {
    let { channel: t } = e,
        n = (0, h.Z)();
    (0, s.t)();
    let { withMutualFriendsCount: l } = (0, p.j)({ location: 'UserProfilePanelRenderer' }),
        [y] = t.recipients,
        C = (0, a.e7)([d.default], () => d.default.getUser(y));
    o()(null != C, 'UserProfilePanelRenderer: user cannot be undefined');
    let x = (0, a.e7)([d.default], () => d.default.getCurrentUser());
    o()(null != x, 'UserProfilePanelRenderer: currentUser cannot be undefined'),
        i.useEffect(() => {
            (0, f.Z)(C, {
                type: 'panel',
                withMutualFriendsCount: !C.bot && l,
                withMutualFriends: !C.bot && !l,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [C, t.id, l]);
    let { isBlocked: v, isIgnored: j } = (0, a.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(C.id),
            isIgnored: u.Z.isIgnored(C.id)
        })),
        [O, E] = i.useState(v || j),
        N = c.Rt.useSetting();
    return (i.useEffect(() => {
        E(v || j);
    }, [v, j]),
    n)
        ? null
        : O && !(j && N)
          ? (0, r.jsx)(
                m.A,
                _(
                    {
                        user: C,
                        currentUser: x,
                        onViewBlockedProfileClick: () => E(!1)
                    },
                    e
                )
            )
          : C.isNonUserBot()
            ? (0, r.jsx)(
                  g.Z,
                  _(
                      {
                          user: C,
                          currentUser: x
                      },
                      e
                  )
              )
            : (0, r.jsx)(
                  b.Z,
                  _(
                      {
                          user: C,
                          currentUser: x
                      },
                      e
                  )
              );
}
