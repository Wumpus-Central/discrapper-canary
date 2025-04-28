n.d(t, { Z: () => g }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(911367),
    a = n(594174),
    s = n(212321),
    c = n(788111),
    u = n(60577),
    d = n(184301),
    p = n(505582),
    h = n(455646),
    f = n(671741);
function m(e) {
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
function g(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        g = (0, l.e7)([a.default], () => a.default.getUser(n)),
        b = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        _ = (0, u.Z)(),
        [y, x] = (0, c.Z)(n);
    (0, o.t)();
    let { withMutualFriendsCount: C } = (0, s.j)({ location: 'UserProfileSidebarRenderer' });
    return (i.useEffect(() => {
        (0, d.Z)(null != g ? g : n, {
            type: 'sidebar',
            withMutualFriendsCount: (null == g ? void 0 : g.bot) !== !0 && C,
            withMutualFriends: (null == g ? void 0 : g.bot) !== !0 && !C,
            withMutualGuilds: !0,
            channelId: t.id
        });
    }, [g, n, t.id, C]),
    null != g && null != b && _)
        ? y
            ? (0, r.jsx)(
                  h.Z,
                  m(
                      {
                          user: g,
                          currentUser: b,
                          onHide: x
                      },
                      e
                  )
              )
            : g.isNonUserBot()
              ? (0, r.jsx)(
                    p.Z,
                    m(
                        {
                            user: g,
                            currentUser: b
                        },
                        e
                    )
                )
              : (0, r.jsx)(
                    f.Z,
                    m(
                        {
                            user: g,
                            currentUser: b
                        },
                        e
                    )
                )
        : null;
}
