l.d(i, { default: () => v });
var a = l(477900),
    e = l(582128),
    s = l(189213),
    n = l(17928),
    d = l(939249),
    c = l(834730),
    o = l(866665),
    r = l(885574),
    u = l(364522),
    m = l(793574),
    x = l(548118),
    f = l(976860),
    g = l(498642),
    S = l(907878),
    h = l(475669),
    p = l(610010),
    E = l(144977),
    j = l(628049),
    A = l(652215),
    C = l(746080),
    N = l(667378),
    b = l(375708),
    I = l(640715);
function _(t) {
    let { guild: i, onClick: l } = t,
        e = (0, n.bG)([g.A], () => g.A.getMemberCount(i.id));
    return (0, a.jsxs)(d.D, {
        className: I._S,
        onClick: l,
        children: [
            (0, a.jsx)(x.Ay, { className: I.$f, guild: i, size: x.Ay.Sizes.MEDIUM, active: !0 }),
            (0, a.jsxs)("div", {
                className: I.OA,
                children: [
                    (0, a.jsx)(c.E, {
                        className: I.J5,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: i.name,
                    }),
                    null != e &&
                        (0, a.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: b.intl.formatToPlainString(b.t.zRl6XR, { count: e }),
                        }),
                ],
            }),
        ],
    });
}
function v(t) {
    let { gameName: i, gameApplicationId: l, onClose: n, transitionState: d } = t,
        x = (0, p.EX)("game_server_modal"),
        g = e.useCallback(
            async (t) => {
                let i;
                if (
                    ((0, S.gU)({ guildId: t.id, gameApplicationId: l }),
                    await n(),
                    (0, f.pX)(A.BVt.CHANNEL(t.id, C.VV.GUILD_BOOSTS)),
                    null != l)
                ) {
                    let { catalog: t } = h.A.getGlobalCatalogState();
                    i = Object.values(t).find((t) => t.gameId === l);
                }
                (0, E.A)({
                    guildId: t.id,
                    analyticsLocation: m.A.GAME_SERVER_GUILD_SELECT_MODAL,
                    ...(null != i
                        ? { stepConfig: { ...j.ZN, initialStep: j.HS.SERVER_SETTINGS }, initialGameServerGame: i }
                        : {}),
                });
            },
            [n, l],
        );
    async function v() {
        await n();
    }
    return (0, a.jsxs)(s.Modal, {
        transitionState: d,
        onClose: v,
        title: b.intl.formatToPlainString(N.default.hPiVx3, { gameName: i }),
        subtitle: b.intl.formatToPlainString(N.default.fUFylB, { gameName: i }),
        actions: [],
        children: [
            (0, a.jsxs)("div", {
                className: I.fA,
                children: [
                    (0, a.jsx)(c.E, { variant: "text-sm/semibold", children: b.intl.string(N.default["4MInNs"]) }),
                    (0, a.jsx)(o.m, {
                        position: "top",
                        text: b.intl.string(N.default.OdTfpx),
                        children: (0, a.jsx)(r.CircleInformationIcon, { size: "xs", className: I.G }),
                    }),
                ],
            }),
            (0, a.jsx)(u.Ip, {
                className: I.OW,
                children: x.map((t) => (0, a.jsx)(_, { guild: t, onClick: () => g(t) }, t.id)),
            }),
        ],
    });
}
