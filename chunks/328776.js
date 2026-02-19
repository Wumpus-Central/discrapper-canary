"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(287809),
    o = n(562153),
    c = n(215530),
    d = n(168015),
    u = n(454719),
    h = n(10635),
    A = n(318162),
    p = n(762561),
    g = n(985018);
function m(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        m = (0, l.bG)([a.default], () => a.default.getUser(n)),
        _ = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
        f = (0, d.A)(),
        [x, C] = (0, c.A)(n);
    if (
        (s.useEffect(() => {
            (0, u.A)(m ?? n, {
                type: "sidebar",
                withMutualFriendsCount: m?.bot !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id,
            });
        }, [m, n, t.id]),
        null == m || null == _ || !f)
    )
        return null;
    let E = `user-profile-sidebar-heading-${m.id}`,
        I = o.Ay.getName(null, t.id, m);
    return (0, i.jsx)("aside", {
        "aria-labelledby": E,
        children: (0, i.jsx)(r.Fmo, {
            component: (0, i.jsx)(r.AC4, {
                children: (0, i.jsx)(r.H, { id: E, children: g.intl.format(g.t.KRe1Fk, { name: I }) }),
            }),
            children: x
                ? (0, i.jsx)(A.A, { user: m, currentUser: _, onHide: C, ...e })
                : m.isNonUserBot()
                  ? (0, i.jsx)(h.A, { user: m, currentUser: _, ...e })
                  : (0, i.jsx)(p.A, { user: m, currentUser: _, ...e }),
        }),
    });
}
