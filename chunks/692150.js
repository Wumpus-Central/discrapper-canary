n.r(t), n.d(t, { default: () => S });
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
    h = n(982257),
    j = n(270424),
    p = n(140033),
    A = n(486180),
    b = n(566704),
    C = n(652215),
    I = n(294726),
    E = n(985018),
    N = n(715896);
function S(e) {
    let { guildId: t } = e;
    (0, g.tR)(t);
    let n = (0, f.U)("GameServerPage"),
        S = (0, l.bG)([u.A], () => u.A.getGuild(t)?.features.has(C.GuildFeatures.GAME_SERVERS) ?? !1);
    (0, b.A)(S ? t : null),
        s.useEffect(() => {
            S && ((0, x.cq)(t), d.A.getDetectableGames());
        }, [t, S]);
    let T = (0, m.A)(t),
        y = (0, l.bG)([v.A], () => v.A.getStateForGuild(t)),
        M = s.useMemo(() => {
            if (!y?.hasFetchedInstances) return;
            let e = Object.values(y.instances ?? {});
            return 0 === e.length
                ? null
                : e.map((e, n) => (0, a.jsx)(p.Ay, { guildId: t, instance: e }, `${e.gameId}-${n}`));
        }, [y?.instances, y?.hasFetchedInstances, t]),
        [R, G] = s.useState(!1);
    return (
        s.useEffect(() => {
            (null == M || M.length > 0) && G(!0);
        }, [M]),
        (0, a.jsxs)("div", {
            className: N.kL,
            children: [
                (0, a.jsxs)(c.Ay, {
                    className: N.KE,
                    toolbar: (0, a.jsx)("div", {}),
                    children: [
                        (0, a.jsx)(c.Ay.Icon, { icon: i.GameControllerIcon, "aria-label": "" }),
                        (0, a.jsx)(c.Ay.Title, { children: E.intl.string(I.default.vCzwM7) }),
                        (0, a.jsx)(r.LpS, { disableColor: !0, text: E.intl.string(E.t.oW0eUd), className: N.qS }),
                        (0, a.jsx)(c.Ay.Divider, { className: N.yF }),
                        (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: E.intl.format(I.default.LiR4eN, {
                                helpCenterUrl: _.A.getArticleURL(C.MVz.GAME_SERVER_HOSTING),
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: N.hQ,
                    children: [
                        S && !y?.hasFetchedInstances
                            ? (0, a.jsx)("div", {
                                  className: N.dc,
                                  children: (0, a.jsx)(r.y$y, { type: r.tVU.SPINNING_CIRCLE }),
                              })
                            : null == M
                              ? (0, a.jsx)(h.A, { guildId: t })
                              : (0, a.jsxs)("div", {
                                    className: N.nd,
                                    children: [
                                        n &&
                                            (0, a.jsx)("div", {
                                                className: N.MR,
                                                children: (0, a.jsx)(o.A, {
                                                    look: o.k.WARNING,
                                                    children: E.intl.format(I.default.XzXjK2, {}),
                                                }),
                                            }),
                                        (0, a.jsx)(r.IpV, {
                                            children: (0, a.jsxs)("div", {
                                                className: N.Y_,
                                                children: [M, R && (0, a.jsx)(j.A, { guildId: t })],
                                            }),
                                        }),
                                    ],
                                }),
                        T && (0, a.jsx)(A.A, { guildId: t }),
                    ],
                }),
            ],
        })
    );
}
