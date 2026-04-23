a.d(i, { default: () => C });
var e = a(627968),
    l = a(64700),
    n = a(189213),
    s = a(17928),
    d = a(990078),
    c = a(939249),
    o = a(834730),
    r = a(885574),
    u = a(364522),
    m = a(793574),
    _ = a(548118),
    f = a(976860),
    x = a(498642),
    g = a(397400),
    S = a(522055),
    h = a(823748),
    p = a(843095),
    A = a(800007),
    j = a(652215),
    E = a(746080),
    N = a(576709),
    b = a(985018),
    I = a(251320);
function v(t) {
    let { guild: i, onClick: a } = t,
        l = (0, s.bG)([x.A], () => x.A.getMemberCount(i.id));
    return (0, e.jsxs)(c.D, {
        className: I._S,
        onClick: a,
        children: [
            (0, e.jsx)(_.Ay, { className: I.$f, guild: i, size: _.Ay.Sizes.MEDIUM, active: !0 }),
            (0, e.jsxs)("div", {
                className: I.OA,
                children: [
                    (0, e.jsx)(o.E, {
                        className: I.J5,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: i.name,
                    }),
                    null != l &&
                        (0, e.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: b.intl.formatToPlainString(b.t.zRl6XR, { count: l }),
                        }),
                ],
            }),
        ],
    });
}
function C(t) {
    let { gameName: i, gameApplicationId: a, onClose: s, transitionState: c } = t,
        _ = (0, h.EX)("game_server_modal"),
        x = l.useCallback(
            async (t) => {
                let i;
                if (
                    ((0, g.gU)({ guildId: t.id, gameApplicationId: a }),
                    await s(),
                    (0, f.pX)(j.BVt.CHANNEL(t.id, E.VV.GUILD_BOOSTS)),
                    null != a)
                ) {
                    let { catalog: t } = S.A.getGlobalCatalogState();
                    i = Object.values(t).find((t) => t.gameId === a);
                }
                (0, p.A)({
                    guildId: t.id,
                    analyticsLocation: m.A.GAME_SERVER_GUILD_SELECT_MODAL,
                    ...(null != i
                        ? { stepConfig: { ...A.ZN, initialStep: A.HS.SERVER_SETTINGS }, initialGameServerGame: i }
                        : {}),
                });
            },
            [s, a],
        ),
        C = async () => {
            await s();
        };
    return (0, e.jsxs)(n.Modal, {
        transitionState: c,
        onClose: C,
        title: b.intl.formatToPlainString(N.default.hPiVx3, { gameName: i }),
        subtitle: b.intl.formatToPlainString(N.default.fUFylB, { gameName: i }),
        actions: [],
        children: [
            (0, e.jsxs)("div", {
                className: I.fA,
                children: [
                    (0, e.jsx)(o.E, { variant: "text-sm/semibold", children: b.intl.string(N.default["4MInNs"]) }),
                    (0, e.jsx)(d.m, {
                        position: "top",
                        text: b.intl.string(N.default.OdTfpx),
                        children: (0, e.jsx)(r.m, { size: "xs", className: I.G }),
                    }),
                ],
            }),
            (0, e.jsx)(u.Ip, {
                className: I.OW,
                children: _.map((t) => (0, e.jsx)(v, { guild: t, onClick: () => x(t) }, t.id)),
            }),
        ],
    });
}
