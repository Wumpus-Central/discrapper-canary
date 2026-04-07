n.r(t), n.d(t, { default: () => S });
var a = n(627968),
    s = n(64700),
    i = n(934551),
    l = n(311907),
    r = n(397927),
    d = n(544420),
    c = n(58736),
    o = n(208039),
    u = n(71393),
    _ = n(975571),
    m = n(363487),
    x = n(665171),
    g = n(397400),
    f = n(187549),
    v = n(522055),
    j = n(969117),
    h = n(982257),
    A = n(140033),
    p = n(486180),
    C = n(566704),
    b = n(652215),
    I = n(294726),
    N = n(985018),
    E = n(504175);
function S(e) {
    let { guildId: t } = e;
    (0, g.tR)(t);
    let n = (0, f.U)("GameServerPage"),
        S = (0, l.bG)([u.A], () => u.A.getGuild(t)?.features.has(b.GuildFeatures.GAME_SERVERS) ?? !1);
    (0, C.A)(S ? t : null),
        s.useEffect(() => {
            S && ((0, x.cq)(t), d.Ay.getDetectableGames());
        }, [t, S]);
    let T = (0, m.A)(t),
        R = (0, j.N)("GameServerPage"),
        y = (0, l.bG)([v.A], () => v.A.getStateForGuild(t)),
        M = s.useMemo(() => {
            if (!y?.hasFetchedInstances) return;
            let e = Object.values(y.instances ?? {});
            return 0 === e.length
                ? null
                : e.map((e, n) => (0, a.jsx)(A.Ay, { guildId: t, instance: e }, `${e.gameId}-${n}`));
        }, [y?.instances, y?.hasFetchedInstances, t]);
    return (0, a.jsxs)("div", {
        className: E.kL,
        children: [
            (0, a.jsxs)(c.Ay, {
                className: E.KE,
                toolbar: (0, a.jsx)("div", {}),
                children: [
                    (0, a.jsx)(c.Ay.Icon, { icon: i.GameControllerIcon, "aria-label": "" }),
                    (0, a.jsx)(c.Ay.Title, { children: N.intl.string(I.default.vCzwM7) }),
                    (0, a.jsx)(r.LpS, { disableColor: !0, text: N.intl.string(N.t.oW0eUd), className: E.qS }),
                    (0, a.jsx)(c.Ay.Divider, { className: E.yF }),
                    (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: N.intl.format(I.default.LiR4eN, {
                            helpCenterUrl: _.A.getArticleURL(b.MVz.GAME_SERVER_HOSTING),
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: E.hQ,
                children: [
                    S && !y?.hasFetchedInstances
                        ? (0, a.jsx)("div", {
                              className: E.dc,
                              children: (0, a.jsx)(r.y$y, { type: r.tVU.SPINNING_CIRCLE }),
                          })
                        : null == M
                          ? (0, a.jsx)(h.A, { guildId: t })
                          : (0, a.jsxs)("div", {
                                className: E.nd,
                                children: [
                                    n &&
                                        (0, a.jsx)("div", {
                                            className: E.MR,
                                            children: (0, a.jsx)(o.A, {
                                                look: o.k.WARNING,
                                                children: N.intl.format(I.default.XzXjK2, {}),
                                            }),
                                        }),
                                    (0, a.jsx)(r.IpV, {
                                        children: (0, a.jsx)("div", { className: E.Y_, children: M }),
                                    }),
                                ],
                            }),
                    (T || R) && (0, a.jsx)(p.A, { guildId: t, isAdmin: T ?? !1 }),
                ],
            }),
        ],
    });
}
