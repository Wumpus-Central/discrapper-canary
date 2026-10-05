l.d(i, { default: () => T });
var e = l(477900),
    a = l(582128),
    n = l(793574),
    s = l(17928),
    o = l(189213),
    c = l(939249),
    d = l(834730),
    r = l(866665),
    u = l(885574),
    m = l(364522),
    x = l(498642),
    f = l(548118),
    S = l(375708),
    g = l(599127);
function p(t) {
    let { guild: i, onClick: l } = t,
        a = (0, s.bG)([x.A], () => x.A.getMemberCount(i.id));
    return (0, e.jsxs)(c.D, {
        className: g._S,
        onClick: l,
        children: [
            (0, e.jsx)(f.Ay, { className: g.$f, guild: i, size: f.Ay.Sizes.MEDIUM, active: !0 }),
            (0, e.jsxs)("div", {
                className: g.OA,
                children: [
                    (0, e.jsx)(d.E, {
                        className: g.J5,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: i.name,
                    }),
                    null != a &&
                        (0, e.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: S.intl.formatToPlainString(S.t.zRl6XR, { count: a }),
                        }),
                ],
            }),
        ],
    });
}
function h(t) {
    let {
        title: i,
        subtitle: l,
        listLabel: a,
        listLabelTooltip: n,
        guilds: s,
        onSelectGuild: c,
        onClose: x,
        transitionState: f,
    } = t;
    async function S() {
        await x();
    }
    return (0, e.jsxs)(o.a, {
        transitionState: f,
        onClose: S,
        title: i,
        subtitle: l,
        actions: [],
        children: [
            null != a &&
                (0, e.jsxs)("div", {
                    className: g.RO,
                    children: [
                        (0, e.jsx)(d.E, { variant: "text-sm/semibold", children: a }),
                        null != n &&
                            (0, e.jsx)(r.m, {
                                position: "top",
                                text: n,
                                children: (0, e.jsx)(u.CircleInformationIcon, { size: "xs", className: g.G }),
                            }),
                    ],
                }),
            (0, e.jsx)(m.Ip, {
                className: g.OW,
                children: s.map((t) => (0, e.jsx)(p, { guild: t, onClick: () => c(t) }, t.id)),
            }),
        ],
    });
}
var b = l(976860),
    j = l(907878),
    E = l(475669),
    C = l(610010),
    N = l(144977),
    A = l(628049),
    I = l(652215),
    _ = l(746080),
    v = l(394107);
function T(t) {
    let { gameName: i, gameApplicationId: l, onClose: s, transitionState: o } = t,
        c = (0, C.EX)("game_server_modal"),
        d = a.useCallback(
            async (t) => {
                let i;
                if (
                    ((0, j.gU)({ guildId: t.id, gameApplicationId: l }),
                    await s(),
                    (0, b.pX)(I.BVt.CHANNEL(t.id, _.VV.GUILD_BOOSTS)),
                    null != l)
                ) {
                    let { catalog: t } = E.A.getGlobalCatalogState();
                    i = Object.values(t).find((t) => t.gameId === l);
                }
                (0, N.A)({
                    guildId: t.id,
                    analyticsLocation: n.A.GAME_SERVER_GUILD_SELECT_MODAL,
                    ...(null != i
                        ? { stepConfig: { ...A.ZN, initialStep: A.HS.SERVER_SETTINGS }, initialGameServerGame: i }
                        : {}),
                });
            },
            [s, l],
        );
    return (0, e.jsx)(h, {
        transitionState: o,
        onClose: s,
        title: S.intl.formatToPlainString(v.default.hPiVx3, { gameName: i }),
        subtitle: S.intl.formatToPlainString(v.default.fUFylB, { gameName: i }),
        listLabel: S.intl.string(v.default["4MInNs"]),
        listLabelTooltip: S.intl.string(v.default.OdTfpx),
        guilds: c,
        onSelectGuild: d,
    });
}
