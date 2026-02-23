n.d(t, { A: () => g });
var i = n(627968),
    r = n(311907),
    l = n(397927),
    a = n(975807),
    s = n(429913),
    o = n(64983),
    d = n(194362),
    c = n(486020),
    u = n(125022),
    A = n(261425),
    h = n(652215),
    _ = n(49999),
    m = n(985018),
    p = n(318624);
function g(e) {
    let { guild: t, markAsDismissed: n } = e,
        g = (0, r.bG)([u.A], () => u.A.getUnclaimedGameIdsForGuild(t.id), [t.id]) ?? [],
        E = g[0],
        I = (0, s.h)(E);
    if (0 === g.length || null == E || null == I) return null;
    let f = c.Ay.getGameAssetURL({ id: E, hash: I.coverImage, keepAspectRatio: !0 });
    if (null == f) return null;
    let C = I.name ?? m.intl.string(m.t.VQq92a),
        T = t.features.has(h.GuildFeatures.VERIFIED) ? m.intl.string(m.t.uUARXe) : m.intl.string(m.t["0Dx29f"]);
    return (0, i.jsx)(o.A, {
        guild: t,
        onDismissed: () => n(_.i.USER_DISMISS),
        title: m.intl.format(m.t.Q11WTQ, { gameName: C }),
        message: T,
        cta: (0, i.jsxs)("span", {
            className: p.m,
            children: [m.intl.string(m.t["2u6ZlY"]), (0, i.jsx)(l.I9m, { size: "xs", color: "currentColor" })],
        }),
        type: h.n5X.GAME_CLAIM,
        image: (0, i.jsx)(A.A, { imageSrc: f }),
        imageMarginX: 60,
        onClick: async () => {
            n(_.i.TAKE_ACTION);
            let e = await (0, d.a)(h.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, a.A)(e);
        },
    });
}
