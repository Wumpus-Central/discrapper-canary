i.d(e, { default: () => T });
var a = i(627968),
    l = i(64700),
    s = i(158954),
    n = i(311907),
    c = i(435371),
    d = i(397927),
    r = i(793574),
    o = i(263063),
    u = i(976860),
    m = i(498642),
    _ = i(522055),
    x = i(823748),
    f = i(843095),
    g = i(800007),
    S = i(652215),
    h = i(746080),
    p = i(738072),
    A = i(985018),
    j = i(635729);
function N(t) {
    let { guild: e, onClick: i } = t,
        l = (0, n.bG)([m.A], () => m.A.getMemberCount(e.id));
    return (0, a.jsxs)(d.DUT, {
        className: j._S,
        onClick: i,
        children: [
            (0, a.jsx)(o.Ay, { className: j.$f, guild: e, size: o.Ay.Sizes.MEDIUM, active: !0 }),
            (0, a.jsxs)("div", {
                className: j.OA,
                children: [
                    (0, a.jsx)(d.Text, {
                        className: j.J5,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: e.name,
                    }),
                    null != l &&
                        (0, a.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: A.intl.formatToPlainString(A.t.zRl6XR, { count: l }),
                        }),
                ],
            }),
        ],
    });
}
function T(t) {
    let { gameName: e, gameApplicationId: i, onClose: n, transitionState: o } = t,
        m = (0, x.EX)("game_server_modal"),
        T = l.useCallback(
            async (t) => {
                let e;
                if ((await n(), (0, u.pX)(S.BVt.CHANNEL(t.id, h.VV.GUILD_BOOSTS)), null != i)) {
                    let { catalog: t } = _.A.getGlobalCatalogState();
                    e = Object.values(t).find((t) => t.gameId === i);
                }
                (0, f.A)({
                    guildId: t.id,
                    analyticsLocation: r.A.GAME_SERVER_GUILD_SELECT_MODAL,
                    ...(null != e
                        ? { stepConfig: { ...g.ZN, initialStep: g.HS.SERVER_SETTINGS }, initialGameServerGame: e }
                        : {}),
                });
            },
            [n, i],
        ),
        b = async () => {
            await n();
        };
    return (0, a.jsxs)(s.Modal, {
        transitionState: o,
        onClose: b,
        title: A.intl.formatToPlainString(p.default.hPiVx3, { gameName: e }),
        subtitle: A.intl.formatToPlainString(p.default.fUFylB, { gameName: e }),
        actions: [],
        children: [
            (0, a.jsxs)("div", {
                className: j.fA,
                children: [
                    (0, a.jsx)(d.Text, { variant: "text-sm/semibold", children: A.intl.string(p.default["4MInNs"]) }),
                    (0, a.jsx)(c.m_, {
                        position: "top",
                        text: A.intl.string(p.default.OdTfpx),
                        children: (0, a.jsx)(d.mir, { size: "xs", className: j.G }),
                    }),
                ],
            }),
            (0, a.jsx)(d.IpV, {
                className: j.OW,
                children: m.map((t) => (0, a.jsx)(N, { guild: t, onClick: () => T(t) }, t.id)),
            }),
        ],
    });
}
