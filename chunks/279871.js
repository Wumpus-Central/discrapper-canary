e.d(i, { default: () => b });
var a = e(627968),
    l = e(64700),
    s = e(158954),
    n = e(311907),
    c = e(435371),
    d = e(397927),
    r = e(793574),
    o = e(263063),
    u = e(976860),
    m = e(498642),
    _ = e(397400),
    x = e(522055),
    f = e(823748),
    g = e(843095),
    S = e(800007),
    h = e(652215),
    p = e(746080),
    A = e(294726),
    j = e(985018),
    N = e(733039);
function T(t) {
    let { guild: i, onClick: e } = t,
        l = (0, n.bG)([m.A], () => m.A.getMemberCount(i.id));
    return (0, a.jsxs)(d.DUT, {
        className: N._S,
        onClick: e,
        children: [
            (0, a.jsx)(o.Ay, { className: N.$f, guild: i, size: o.Ay.Sizes.MEDIUM, active: !0 }),
            (0, a.jsxs)("div", {
                className: N.OA,
                children: [
                    (0, a.jsx)(d.Text, {
                        className: N.J5,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: i.name,
                    }),
                    null != l &&
                        (0, a.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: j.intl.formatToPlainString(j.t.zRl6XR, { count: l }),
                        }),
                ],
            }),
        ],
    });
}
function b(t) {
    let { gameName: i, gameApplicationId: e, onClose: n, transitionState: o } = t,
        m = (0, f.EX)("game_server_modal"),
        b = l.useCallback(
            async (t) => {
                let i;
                if (
                    ((0, _.gU)({ guildId: t.id, gameApplicationId: e }),
                    await n(),
                    (0, u.pX)(h.BVt.CHANNEL(t.id, p.VV.GUILD_BOOSTS)),
                    null != e)
                ) {
                    let { catalog: t } = x.A.getGlobalCatalogState();
                    i = Object.values(t).find((t) => t.gameId === e);
                }
                (0, g.A)({
                    guildId: t.id,
                    analyticsLocation: r.A.GAME_SERVER_GUILD_SELECT_MODAL,
                    ...(null != i
                        ? { stepConfig: { ...S.ZN, initialStep: S.HS.SERVER_SETTINGS }, initialGameServerGame: i }
                        : {}),
                });
            },
            [n, e],
        ),
        I = async () => {
            await n();
        };
    return (0, a.jsxs)(s.Modal, {
        transitionState: o,
        onClose: I,
        title: j.intl.formatToPlainString(A.default.hPiVx3, { gameName: i }),
        subtitle: j.intl.formatToPlainString(A.default.fUFylB, { gameName: i }),
        actions: [],
        children: [
            (0, a.jsxs)("div", {
                className: N.fA,
                children: [
                    (0, a.jsx)(d.Text, { variant: "text-sm/semibold", children: j.intl.string(A.default["4MInNs"]) }),
                    (0, a.jsx)(c.m_, {
                        position: "top",
                        text: j.intl.string(A.default.OdTfpx),
                        children: (0, a.jsx)(d.mir, { size: "xs", className: N.G }),
                    }),
                ],
            }),
            (0, a.jsx)(d.IpV, {
                className: N.OW,
                children: m.map((t) => (0, a.jsx)(T, { guild: t, onClick: () => b(t) }, t.id)),
            }),
        ],
    });
}
