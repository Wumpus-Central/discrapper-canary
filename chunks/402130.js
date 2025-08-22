n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(594174),
    s = n(5192),
    c = n(788111),
    u = n(60577),
    d = n(184301),
    p = n(124823),
    h = n(550818),
    f = n(983559),
    m = n(388032);
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
function b(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        b = (0, l.e7)([o.default], () => o.default.getUser(n)),
        _ = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        y = (0, u.Z)(),
        [C, x] = (0, c.Z)(n);
    if (
        (i.useEffect(() => {
            (0, d.Z)(null != b ? b : n, {
                type: "sidebar",
                withMutualFriendsCount: (null == b ? void 0 : b.bot) !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id,
            });
        }, [b, n, t.id]),
        null == b || null == _ || !y)
    )
        return null;
    let v = "user-profile-sidebar-heading-".concat(b.id),
        O = s.ZP.getName(null, t.id, b);
    return (0, r.jsx)("aside", {
        "aria-labelledby": v,
        children: (0, r.jsx)(a.y5t, {
            component: (0, r.jsx)(a.nn4, {
                children: (0, r.jsx)(a.H, {
                    id: v,
                    children: m.intl.format(m.t.KRe1Fh, { name: O }),
                }),
            }),
            children: C
                ? (0, r.jsx)(
                      h.Z,
                      g(
                          {
                              user: b,
                              currentUser: _,
                              onHide: x,
                          },
                          e,
                      ),
                  )
                : b.isNonUserBot()
                  ? (0, r.jsx)(
                        p.Z,
                        g(
                            {
                                user: b,
                                currentUser: _,
                            },
                            e,
                        ),
                    )
                  : (0, r.jsx)(
                        f.Z,
                        g(
                            {
                                user: b,
                                currentUser: _,
                            },
                            e,
                        ),
                    ),
        }),
    });
}
