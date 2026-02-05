n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(287809),
    o = n(562153),
    d = n(215530),
    c = n(168015),
    u = n(454719),
    h = n(10635),
    A = n(318162),
    g = n(762561),
    m = n(985018);
function p(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        p = (0, s.bG)([r.default], () => r.default.getUser(n)),
        _ = (0, s.bG)([r.default], () => r.default.getCurrentUser()),
        x = (0, c.A)(),
        [f, E] = (0, d.A)(n);
    if (
        (l.useEffect(() => {
            (0, u.A)(p ?? n, {
                type: "sidebar",
                withMutualFriendsCount: p?.bot !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id,
            });
        }, [p, n, t.id]),
        null == p || null == _ || !x)
    )
        return null;
    let C = `user-profile-sidebar-heading-${p.id}`,
        I = o.Ay.getName(null, t.id, p);
    return (0, i.jsx)("aside", {
        "aria-labelledby": C,
        children: (0, i.jsx)(a.Fmo, {
            component: (0, i.jsx)(a.AC4, {
                children: (0, i.jsx)(a.H, { id: C, children: m.intl.format(m.t.KRe1Fk, { name: I }) }),
            }),
            children: f
                ? (0, i.jsx)(A.A, { user: p, currentUser: _, onHide: E, ...e })
                : p.isNonUserBot()
                  ? (0, i.jsx)(h.A, { user: p, currentUser: _, ...e })
                  : (0, i.jsx)(g.A, { user: p, currentUser: _, ...e }),
        }),
    });
}
