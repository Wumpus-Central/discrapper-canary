n.d(t, { A: () => p });
var i = n(627968),
    r = n(311907),
    l = n(397927),
    a = n(975807),
    s = n(429913),
    o = n(64983),
    d = n(486020),
    c = n(125022),
    u = n(261425),
    A = n(652215),
    h = n(49999),
    _ = n(985018),
    m = n(318624);
function p(e) {
    let { guild: t, markAsDismissed: n } = e,
        p = (0, r.bG)([c.A], () => c.A.getUnclaimedGameIdsForGuild(t.id), [t.id]) ?? [],
        g = p[0],
        E = (0, s.h)(g);
    if (0 === p.length || null == g || null == E) return null;
    let I = d.Ay.getGameAssetURL({ id: g, hash: E.coverImage, keepAspectRatio: !0 });
    if (null == I) return null;
    let f = E.name ?? _.intl.string(_.t.VQq92a),
        C = t.features.has(A.GuildFeatures.VERIFIED) ? _.intl.string(_.t.uUARXe) : _.intl.string(_.t["0Dx29f"]);
    return (0, i.jsx)(o.A, {
        guild: t,
        onDismissed: () => n(h.i.USER_DISMISS),
        title: _.intl.format(_.t.Q11WTQ, { gameName: f }),
        message: C,
        cta: (0, i.jsxs)("span", {
            className: m.m,
            children: [_.intl.string(_.t["2u6ZlY"]), (0, i.jsx)(l.I9m, { size: "xs", color: "currentColor" })],
        }),
        type: A.n5X.GAME_CLAIM,
        image: (0, i.jsx)(u.A, { imageSrc: I }),
        imageMarginX: 60,
        onClick: () => {
            (0, a.A)(A.X7G.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY), n(h.i.TAKE_ACTION);
        },
    });
}
