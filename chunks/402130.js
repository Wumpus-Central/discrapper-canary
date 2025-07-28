(n.d(t, { Z: () => _ }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(365943),
    s = n(594174),
    c = n(5192),
    u = n(788111),
    d = n(60577),
    p = n(184301),
    h = n(124823),
    f = n(550818),
    m = n(983559),
    g = n(388032);
function b(e) {
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
function _(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        _ = (0, l.e7)([s.default], () => s.default.getUser(n)),
        y = (0, l.e7)([s.default], () => s.default.getCurrentUser()),
        C = (0, d.Z)(),
        [x, v] = (0, u.Z)(n);
    if (
        (i.useEffect(() => {
            (0, o.t)();
        }, []),
        i.useEffect(() => {
            (0, p.Z)(null != _ ? _ : n, {
                type: 'sidebar',
                withMutualFriendsCount: (null == _ ? void 0 : _.bot) !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [_, n, t.id]),
        null == _ || null == y || !C)
    )
        return null;
    let j = 'user-profile-sidebar-heading-'.concat(_.id),
        O = c.ZP.getName(null, t.id, _);
    return (0, r.jsx)('aside', {
        'aria-labelledby': j,
        children: (0, r.jsx)(a.y5t, {
            component: (0, r.jsx)(a.nn4, {
                children: (0, r.jsx)(a.H, {
                    id: j,
                    children: g.intl.format(g.t.KRe1Fh, { name: O })
                })
            }),
            children: x
                ? (0, r.jsx)(
                      f.Z,
                      b(
                          {
                              user: _,
                              currentUser: y,
                              onHide: v
                          },
                          e
                      )
                  )
                : _.isNonUserBot()
                  ? (0, r.jsx)(
                        h.Z,
                        b(
                            {
                                user: _,
                                currentUser: y
                            },
                            e
                        )
                    )
                  : (0, r.jsx)(
                        m.Z,
                        b(
                            {
                                user: _,
                                currentUser: y
                            },
                            e
                        )
                    )
        })
    });
}
