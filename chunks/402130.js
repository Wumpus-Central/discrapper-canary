(n.d(t, { Z: () => m }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(44876),
    o = n(594174),
    s = n(788111),
    c = n(60577),
    u = n(184301),
    d = n(124823),
    p = n(550818),
    h = n(983559);
function f(e) {
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
function m(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        m = (0, l.e7)([o.default], () => o.default.getUser(n)),
        g = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        b = (0, c.Z)(),
        [_, y] = (0, s.Z)(n);
    return ((0, a.k)(),
    i.useEffect(() => {
        (0, u.Z)(null != m ? m : n, {
            type: 'sidebar',
            withMutualFriendsCount: (null == m ? void 0 : m.bot) !== !0,
            withMutualFriends: !1,
            withMutualGuilds: !0,
            channelId: t.id
        });
    }, [m, n, t.id]),
    null != m && null != g && b)
        ? _
            ? (0, r.jsx)(
                  p.Z,
                  f(
                      {
                          user: m,
                          currentUser: g,
                          onHide: y
                      },
                      e
                  )
              )
            : m.isNonUserBot()
              ? (0, r.jsx)(
                    d.Z,
                    f(
                        {
                            user: m,
                            currentUser: g
                        },
                        e
                    )
                )
              : (0, r.jsx)(
                    h.Z,
                    f(
                        {
                            user: m,
                            currentUser: g
                        },
                        e
                    )
                )
        : null;
}
