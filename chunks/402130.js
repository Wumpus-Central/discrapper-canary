(n.d(t, { Z: () => _ }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(365943),
    o = n(594174),
    c = n(5192),
    d = n(788111),
    u = n(60577),
    h = n(184301),
    p = n(124823),
    f = n(550818),
    g = n(983559),
    m = n(388032);
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
        _ = (0, l.e7)([o.default], () => o.default.getUser(n)),
        y = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        j = (0, u.Z)(),
        [O, x] = (0, d.Z)(n);
    if (
        (i.useEffect(() => {
            (0, s.t)();
        }, []),
        i.useEffect(() => {
            (0, h.Z)(null != _ ? _ : n, {
                type: 'sidebar',
                withMutualFriendsCount: (null == _ ? void 0 : _.bot) !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [_, n, t.id]),
        null == _ || null == y || !j)
    )
        return null;
    let v = 'user-profile-sidebar-heading-'.concat(_.id),
        C = c.ZP.getName(null, t.id, _);
    return (0, r.jsx)('aside', {
        'aria-labelledby': v,
        children: (0, r.jsx)(a.y5t, {
            component: (0, r.jsx)(a.nn4, {
                children: (0, r.jsx)(a.H, {
                    id: v,
                    children: m.intl.format(m.t.KRe1Fh, { name: C })
                })
            }),
            children: O
                ? (0, r.jsx)(
                      f.Z,
                      b(
                          {
                              user: _,
                              currentUser: y,
                              onHide: x
                          },
                          e
                      )
                  )
                : _.isNonUserBot()
                  ? (0, r.jsx)(
                        p.Z,
                        b(
                            {
                                user: _,
                                currentUser: y
                            },
                            e
                        )
                    )
                  : (0, r.jsx)(
                        g.Z,
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
