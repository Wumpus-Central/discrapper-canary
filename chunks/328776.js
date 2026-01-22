n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(287809),
    o = n(562153),
    c = n(215530),
    u = n(168015),
    d = n(454719),
    f = n(10635),
    p = n(318162),
    h = n(762561),
    b = n(985018);

function g(e) {
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
}

function m(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        m = (0, i.bG)([s.default], () => s.default.getUser(n)),
        A = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        y = (0, u.A)(),
        [O, j] = (0, c.A)(n);
    if (
        (l.useEffect(() => {
            (0, d.A)(null != m ? m : n, {
                type: "sidebar",
                withMutualFriendsCount: (null == m ? void 0 : m.bot) !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id,
            });
        }, [m, n, t.id]),
        null == m || null == A || !y)
    )
        return null;
    let v = "user-profile-sidebar-heading-".concat(m.id),
        x = o.Ay.getName(null, t.id, m);
    return (0, r.jsx)("aside", {
        "aria-labelledby": v,
        children: (0, r.jsx)(a.Fmo, {
            component: (0, r.jsx)(a.AC4, {
                children: (0, r.jsx)(a.H, {
                    id: v,
                    children: b.intl.format(b.t.KRe1Fk, {
                        name: x,
                    }),
                }),
            }),
            children: O
                ? (0, r.jsx)(
                      p.A,
                      g(
                          {
                              user: m,
                              currentUser: A,
                              onHide: j,
                          },
                          e,
                      ),
                  )
                : m.isNonUserBot()
                  ? (0, r.jsx)(
                        f.A,
                        g(
                            {
                                user: m,
                                currentUser: A,
                            },
                            e,
                        ),
                    )
                  : (0, r.jsx)(
                        h.A,
                        g(
                            {
                                user: m,
                                currentUser: A,
                            },
                            e,
                        ),
                    ),
        }),
    });
}
