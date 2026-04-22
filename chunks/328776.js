n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(707554),
    r = n(140735),
    o = n(287809),
    d = n(562153),
    c = n(215530),
    u = n(168015),
    h = n(454719),
    A = n(10635),
    _ = n(318162),
    m = n(762561),
    g = n(985018);
function p(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        p = (0, s.bG)([o.default], () => o.default.getUser(n)),
        f = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
        E = (0, u.A)(),
        [x, I] = (0, c.A)(n);
    if (
        (l.useEffect(() => {
            (0, h.A)(p ?? n, {
                type: "sidebar",
                withMutualFriendsCount: p?.bot !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id,
            });
        }, [p, n, t.id]),
        null == p || null == f || !E)
    )
        return null;
    let C = `user-profile-sidebar-heading-${p.id}`,
        b = d.Ay.getName(null, t.id, p);
    return (0, i.jsx)("aside", {
        "aria-labelledby": C,
        children: (0, i.jsx)(a.F, {
            component: (0, i.jsx)(r.A, {
                children: (0, i.jsx)(a.H, { id: C, children: g.intl.format(g.t.KRe1Fk, { name: b }) }),
            }),
            children: x
                ? (0, i.jsx)(_.A, { user: p, currentUser: f, onHide: I, ...e })
                : p.isNonUserBot()
                  ? (0, i.jsx)(A.A, { user: p, currentUser: f, ...e })
                  : (0, i.jsx)(m.A, { user: p, currentUser: f, ...e }),
        }),
    });
}
