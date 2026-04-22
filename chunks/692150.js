n.r(t), n.d(t, { default: () => y });
var a = n(627968),
    s = n(64700),
    i = n(687966),
    l = n(311907),
    r = n(777666),
    d = n(834730),
    c = n(289873),
    o = n(573613),
    u = n(544420),
    _ = n(58736),
    m = n(208039),
    x = n(71393),
    f = n(975571),
    g = n(363487),
    v = n(665171),
    j = n(397400),
    h = n(187549),
    A = n(522055),
    p = n(969117),
    E = n(982257),
    C = n(140033),
    I = n(486180),
    b = n(566704),
    N = n(652215),
    S = n(76660),
    R = n(985018),
    M = n(581727);
function y(e) {
    let { guildId: t } = e;
    (0, j.tR)(t);
    let n = (0, h.U)("GameServerPage"),
        y = (0, l.bG)([x.A], () => x.A.getGuild(t)?.features.has(N.GuildFeatures.GAME_SERVERS) ?? !1);
    (0, b.A)(y ? t : null),
        s.useEffect(() => {
            y && ((0, v.cq)(t), u.Ay.getDetectableGames());
        }, [t, y]);
    let k = (0, g.A)(t),
        G = (0, p.N)("GameServerPage"),
        T = (0, l.bG)([A.A], () => A.A.getStateForGuild(t)),
        L = s.useMemo(() => {
            if (!T?.hasFetchedInstances) return;
            let e = Object.values(T.instances ?? {});
            return 0 === e.length
                ? null
                : e.map((e, n) => (0, a.jsx)(C.Ay, { guildId: t, instance: e }, `${e.gameId}-${n}`));
        }, [T?.instances, T?.hasFetchedInstances, t]);
    return (0, a.jsxs)("div", {
        className: M.kL,
        children: [
            (0, a.jsxs)(_.Ay, {
                className: M.KE,
                toolbar: (0, a.jsx)("div", {}),
                children: [
                    (0, a.jsx)(_.Ay.Icon, { icon: i._, "aria-label": "" }),
                    (0, a.jsx)(_.Ay.Title, { children: R.intl.string(S.default.vCzwM7) }),
                    (0, a.jsx)(r.Lp, { disableColor: !0, text: R.intl.string(R.t.oW0eUd), className: M.qS }),
                    (0, a.jsx)(_.Ay.Divider, { className: M.yF }),
                    (0, a.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.format(S.default.LiR4eN, {
                            helpCenterUrl: f.A.getArticleURL(N.MVz.GAME_SERVER_HOSTING),
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: M.hQ,
                children: [
                    y && !T?.hasFetchedInstances
                        ? (0, a.jsx)("div", {
                              className: M.dc,
                              children: (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE }),
                          })
                        : null == L
                          ? (0, a.jsx)(E.A, { guildId: t })
                          : (0, a.jsxs)("div", {
                                className: M.nd,
                                children: [
                                    n &&
                                        (0, a.jsx)("div", {
                                            className: M.MR,
                                            children: (0, a.jsx)(m.A, {
                                                look: m.k.WARNING,
                                                children: R.intl.format(S.default.XzXjK2, {}),
                                            }),
                                        }),
                                    (0, a.jsx)(o.Ip, { children: (0, a.jsx)("div", { className: M.Y_, children: L }) }),
                                ],
                            }),
                    (k || G) && (0, a.jsx)(I.A, { guildId: t, isAdmin: k ?? !1 }),
                ],
            }),
        ],
    });
}
