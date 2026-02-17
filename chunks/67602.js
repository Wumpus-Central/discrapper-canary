n.d(t, { A: () => h });
var i = n(627968),
    r = n(311907),
    l = n(975807),
    a = n(429913),
    s = n(64983),
    o = n(486020),
    d = n(125022),
    c = n(652215),
    u = n(49999),
    A = n(985018);
function h(e) {
    let { guild: t, markAsDismissed: n } = e,
        h = (0, r.bG)([d.A], () => d.A.getUnclaimedGameIdsForGuild(t.id), [t.id]) ?? [],
        _ = h[0],
        m = (0, a.h)(_);
    if (0 === h.length) return null;
    let p = m?.name ?? A.intl.string(A.t.VQq92a),
        g = o.Ay.getGameAssetURL({ id: _, hash: m?.coverImage, keepAspectRatio: !0 }),
        E = t.features.has(c.GuildFeatures.VERIFIED) ? A.intl.string(A.t.uUARXe) : A.intl.string(A.t["0Dx29f"]);
    return (0, i.jsx)(s.A, {
        guild: t,
        onDismissed: () => n(u.i.USER_DISMISS),
        title: A.intl.format(A.t.Q11WTQ, { gameName: p }),
        message: E,
        cta: A.intl.string(A.t["2u6ZlY"]),
        type: c.n5X.GAME_CLAIM,
        image: g ?? "",
        imageMarginX: 100,
        onClick: () => {
            (0, l.A)(c.X7G.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY), n(u.i.TAKE_ACTION);
        },
    });
}
