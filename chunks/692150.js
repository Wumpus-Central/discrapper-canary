n.r(t), n.d(t, { default: () => S });
var a = n(627968),
    i = n(64700),
    s = n(934551),
    r = n(311907),
    l = n(397927),
    d = n(544420),
    o = n(58736),
    c = n(801264),
    u = n(975571),
    _ = n(363487),
    m = n(665171),
    x = n(397400),
    g = n(187549),
    f = n(522055),
    v = n(270424),
    h = n(140033),
    j = n(486180),
    p = n(566704),
    C = n(652215),
    I = n(294726),
    A = n(985018),
    N = n(715896);
function S(e) {
    let { guildId: t } = e;
    (0, x.tR)(t), (0, p.A)(t);
    let n = (0, g.U)("GameServerPage");
    i.useEffect(() => {
        (0, m.cq)(t), d.A.getDetectableGames();
    }, [t]);
    let S = (0, _.A)(t),
        E = (0, r.bG)([f.A], () => f.A.getStateForGuild(t)),
        b = i.useMemo(() => {
            if (!E?.hasFetchedInstances) return;
            let e = Object.values(E.instances ?? {});
            return 0 === e.length
                ? null
                : e.map((e, n) => (0, a.jsx)(h.Ay, { guildId: t, instance: e }, `${e.gameId}-${n}`));
        }, [E?.instances, E?.hasFetchedInstances, t]),
        [T, y] = i.useState(!1);
    return (
        i.useEffect(() => {
            (null == b || b.length > 0) && y(!0);
        }, [b]),
        (0, a.jsxs)("div", {
            className: N.kL,
            children: [
                (0, a.jsxs)(o.Ay, {
                    className: N.KE,
                    toolbar: (0, a.jsx)("div", {}),
                    children: [
                        (0, a.jsx)(o.Ay.Icon, { icon: s.GameControllerIcon, "aria-label": "" }),
                        (0, a.jsx)(o.Ay.Title, { children: A.intl.string(I.default.vCzwM7) }),
                        (0, a.jsx)(l.LpS, { disableColor: !0, text: A.intl.string(A.t.oW0eUd), className: N.qS }),
                        (0, a.jsx)(o.Ay.Divider, { className: N.yF }),
                        (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.format(I.default.LiR4eN, {
                                helpCenterUrl: u.A.getArticleURL(C.MVz.GAME_SERVER_HOSTING),
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: N.hQ,
                    children: [
                        E?.hasFetchedInstances
                            ? (0, a.jsxs)("div", {
                                  className: N.nd,
                                  children: [
                                      n &&
                                          (0, a.jsx)("div", {
                                              className: N.MR,
                                              children: (0, a.jsx)(c.A, {
                                                  look: c.k.WARNING,
                                                  children: A.intl.format(I.default.XzXjK2, {}),
                                              }),
                                          }),
                                      (0, a.jsx)(l.IpV, {
                                          children: (0, a.jsxs)("div", {
                                              className: N.Y_,
                                              children: [b, T && (0, a.jsx)(v.A, { guildId: t })],
                                          }),
                                      }),
                                  ],
                              })
                            : (0, a.jsx)("div", {
                                  className: N.dc,
                                  children: (0, a.jsx)(l.y$y, { type: l.tVU.SPINNING_CIRCLE }),
                              }),
                        S && (0, a.jsx)(j.A, { guildId: t }),
                    ],
                }),
            ],
        })
    );
}
