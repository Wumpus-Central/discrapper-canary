n.r(t), n.d(t, { default: () => T });
var a = n(627968),
    s = n(64700),
    i = n(934551),
    l = n(311907),
    r = n(397927),
    d = n(544420),
    c = n(58736),
    o = n(801264),
    u = n(71393),
    _ = n(975571),
    m = n(363487),
    x = n(665171),
    g = n(397400),
    f = n(187549),
    v = n(522055),
    h = n(969117),
    j = n(982257),
    A = n(270424),
    p = n(140033),
    C = n(486180),
    b = n(566704),
    I = n(652215),
    E = n(294726),
    N = n(985018),
    S = n(715896);
function T(e) {
    let { guildId: t } = e;
    (0, g.tR)(t);
    let n = (0, f.U)("GameServerPage"),
        T = (0, l.bG)([u.A], () => u.A.getGuild(t)?.features.has(I.GuildFeatures.GAME_SERVERS) ?? !1);
    (0, b.A)(T ? t : null),
        s.useEffect(() => {
            T && ((0, x.cq)(t), d.A.getDetectableGames());
        }, [t, T]);
    let R = (0, m.A)(t),
        y = (0, h.N)("GameServerPage"),
        M = (0, l.bG)([v.A], () => v.A.getStateForGuild(t)),
        G = s.useMemo(() => {
            if (!M?.hasFetchedInstances) return;
            let e = Object.values(M.instances ?? {});
            return 0 === e.length
                ? null
                : e.map((e, n) => (0, a.jsx)(p.Ay, { guildId: t, instance: e }, `${e.gameId}-${n}`));
        }, [M?.instances, M?.hasFetchedInstances, t]),
        [k, P] = s.useState(!1);
    return (
        s.useEffect(() => {
            (null == G || G.length > 0) && P(!0);
        }, [G]),
        (0, a.jsxs)("div", {
            className: S.kL,
            children: [
                (0, a.jsxs)(c.Ay, {
                    className: S.KE,
                    toolbar: (0, a.jsx)("div", {}),
                    children: [
                        (0, a.jsx)(c.Ay.Icon, { icon: i.GameControllerIcon, "aria-label": "" }),
                        (0, a.jsx)(c.Ay.Title, { children: N.intl.string(E.default.vCzwM7) }),
                        (0, a.jsx)(r.LpS, { disableColor: !0, text: N.intl.string(N.t.oW0eUd), className: S.qS }),
                        (0, a.jsx)(c.Ay.Divider, { className: S.yF }),
                        (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: N.intl.format(E.default.LiR4eN, {
                                helpCenterUrl: _.A.getArticleURL(I.MVz.GAME_SERVER_HOSTING),
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: S.hQ,
                    children: [
                        T && !M?.hasFetchedInstances
                            ? (0, a.jsx)("div", {
                                  className: S.dc,
                                  children: (0, a.jsx)(r.y$y, { type: r.tVU.SPINNING_CIRCLE }),
                              })
                            : null == G
                              ? (0, a.jsx)(j.A, { guildId: t })
                              : (0, a.jsxs)("div", {
                                    className: S.nd,
                                    children: [
                                        n &&
                                            (0, a.jsx)("div", {
                                                className: S.MR,
                                                children: (0, a.jsx)(o.A, {
                                                    look: o.k.WARNING,
                                                    children: N.intl.format(E.default.XzXjK2, {}),
                                                }),
                                            }),
                                        (0, a.jsx)(r.IpV, {
                                            children: (0, a.jsxs)("div", {
                                                className: S.Y_,
                                                children: [G, k && (0, a.jsx)(A.A, { guildId: t })],
                                            }),
                                        }),
                                    ],
                                }),
                        (R || y) && (0, a.jsx)(C.A, { guildId: t, isAdmin: R ?? !1 }),
                    ],
                }),
            ],
        })
    );
}
