n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(594174),
    o = n(5192),
    c = n(788111),
    d = n(60577),
    u = n(184301),
    p = n(124823),
    h = n(550818),
    f = n(983559),
    g = n(388032);
function m(e) {
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
function b(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        b = (0, l.e7)([s.default], () => s.default.getUser(n)),
        y = (0, l.e7)([s.default], () => s.default.getCurrentUser()),
        O = (0, d.Z)(),
        [x, j] = (0, c.Z)(n);
    if (
        (i.useEffect(() => {
            (0, u.Z)(null != b ? b : n, {
                type: "sidebar",
                withMutualFriendsCount: (null == b ? void 0 : b.bot) !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id,
            });
        }, [b, n, t.id]),
        null == b || null == y || !O)
    )
        return null;
    let v = "user-profile-sidebar-heading-".concat(b.id),
        C = o.ZP.getName(null, t.id, b);
    return (0, r.jsx)("aside", {
        "aria-labelledby": v,
        children: (0, r.jsx)(a.y5t, {
            component: (0, r.jsx)(a.nn4, {
                children: (0, r.jsx)(a.H, {
                    id: v,
                    children: g.intl.format(g.t.KRe1Fk, { name: C }),
                }),
            }),
            children: x
                ? (0, r.jsx)(
                      h.Z,
                      m(
                          {
                              user: b,
                              currentUser: y,
                              onHide: j,
                          },
                          e,
                      ),
                  )
                : b.isNonUserBot()
                  ? (0, r.jsx)(
                        p.Z,
                        m(
                            {
                                user: b,
                                currentUser: y,
                            },
                            e,
                        ),
                    )
                  : (0, r.jsx)(
                        f.Z,
                        m(
                            {
                                user: b,
                                currentUser: y,
                            },
                            e,
                        ),
                    ),
        }),
    });
}
