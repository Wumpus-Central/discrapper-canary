n.d(t, { A: () => p });
var i = n(627968),
    a = n(311907),
    r = n(397927),
    l = n(975807),
    s = n(926466),
    o = n(152621),
    d = n(194362),
    c = n(125022),
    u = n(261425),
    A = n(652215),
    h = n(49999),
    _ = n(985018),
    m = n(164157);
function p(e) {
    let { guild: t, markAsDismissed: n } = e,
        p = ((0, a.bG)([c.A], () => c.A.getUnclaimedGameIdsForGuild(t.id), [t.id]) ?? [])[0] ?? null,
        { coverImageUrl: g, gameName: E } = (0, o.A)(p, _.intl.string(_.t.VQq92a));
    if (null == g) return null;
    let I = t.features.has(A.GuildFeatures.VERIFIED) ? _.intl.string(_.t.uUARXe) : _.intl.string(_.t["0Dx29f"]);
    return (0, i.jsx)(s.A, {
        guild: t,
        onDismissed: () => n(h.i.USER_DISMISS),
        title: _.intl.format(_.t.Q11WTQ, { gameName: E }),
        message: I,
        cta: (0, i.jsxs)("span", {
            className: m.m,
            children: [_.intl.string(_.t["2u6ZlY"]), (0, i.jsx)(r.I9m, { size: "xs", color: "currentColor" })],
        }),
        type: A.n5X.GAME_CLAIM,
        image: (0, i.jsx)(u.A, { imageSrc: g }),
        imageMarginX: 60,
        onClick: async () => {
            n(h.i.TAKE_ACTION);
            let e = await (0, d.a)(A.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, l.A)(e);
        },
    });
}
