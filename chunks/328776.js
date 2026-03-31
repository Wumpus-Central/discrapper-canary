n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(287809),
    o = n(562153),
    c = n(215530),
    d = n(168015),
    u = n(454719),
    h = n(10635),
    A = n(318162),
    _ = n(762561),
    m = n(985018);
function g(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        g = (0, s.bG)([r.default], () => r.default.getUser(n)),
        p = (0, s.bG)([r.default], () => r.default.getCurrentUser()),
        f = (0, d.A)(),
        [x, E] = (0, c.A)(n);
    if (
        (l.useEffect(() => {
            (0, u.A)(g ?? n, {
                type: "sidebar",
                withMutualFriendsCount: g?.bot !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id,
            });
        }, [g, n, t.id]),
        null == g || null == p || !f)
    )
        return null;
    let I = `user-profile-sidebar-heading-${g.id}`,
        C = o.Ay.getName(null, t.id, g);
    return (0, i.jsx)("aside", {
        "aria-labelledby": I,
        children: (0, i.jsx)(a.Fmo, {
            component: (0, i.jsx)(a.AC4, {
                children: (0, i.jsx)(a.H, { id: I, children: m.intl.format(m.t.KRe1Fk, { name: C }) }),
            }),
            children: x
                ? (0, i.jsx)(A.A, { user: g, currentUser: p, onHide: E, ...e })
                : g.isNonUserBot()
                  ? (0, i.jsx)(h.A, { user: g, currentUser: p, ...e })
                  : (0, i.jsx)(_.A, { user: g, currentUser: p, ...e }),
        }),
    });
}
