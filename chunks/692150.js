n.r(t), n.d(t, { default: () => S });
var a = n(627968),
    i = n(64700),
    s = n(934551),
    r = n(311907),
    l = n(397927),
    o = n(544420),
    d = n(58736),
    c = n(801264),
    u = n(975571),
    m = n(363487),
    _ = n(665171),
    x = n(397400),
    g = n(187549),
    f = n(522055),
    v = n(270424),
    j = n(140033),
    h = n(486180),
    p = n(566704),
    N = n(652215),
    I = n(294726),
    A = n(985018),
    C = n(715896);
function S(e) {
    let { guildId: t } = e;
    (0, x.tR)(t), (0, p.A)(t);
    let n = (0, g.U)("GameServerPage");
    i.useEffect(() => {
        (0, _.cq)(t), o.A.getDetectableGames();
    }, [t]);
    let S = (0, m.A)(t),
        T = (0, r.bG)([f.A], () => f.A.getStateForGuild(t)),
        b = i.useMemo(() => {
            if (!T?.hasFetchedInstances) return;
            let e = Object.values(T.instances ?? {});
            return 0 === e.length
                ? null
                : e.map((e, n) => (0, a.jsx)(j.Ay, { guildId: t, instance: e }, `${e.gameId}-${n}`));
        }, [T?.instances, T?.hasFetchedInstances, t]),
        [E, y] = i.useState(!1);
    return (
        i.useEffect(() => {
            (null == b || b.length > 0) && y(!0);
        }, [b]),
        (0, a.jsxs)("div", {
            className: C.kL,
            children: [
                (0, a.jsxs)(d.Ay, {
                    className: C.KE,
                    toolbar: (0, a.jsx)("div", {}),
                    children: [
                        (0, a.jsx)(d.Ay.Icon, { icon: s.GameControllerIcon, "aria-label": "" }),
                        (0, a.jsx)(d.Ay.Title, { children: A.intl.string(I.default.vCzwM7) }),
                        (0, a.jsx)(l.LpS, { disableColor: !0, text: A.intl.string(A.t.oW0eUd), className: C.qS }),
                        (0, a.jsx)(d.Ay.Divider, { className: C.yF }),
                        (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.format(I.default.LiR4eN, {
                                helpCenterUrl: u.A.getArticleURL(N.MVz.GAME_SERVER_HOSTING),
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: C.hQ,
                    children: [
                        T?.hasFetchedInstances
                            ? (0, a.jsxs)("div", {
                                  className: C.nd,
                                  children: [
                                      n &&
                                          (0, a.jsx)("div", {
                                              className: C.MR,
                                              children: (0, a.jsx)(c.A, {
                                                  look: c.k.WARNING,
                                                  children: A.intl.format(I.default.XzXjK2, {}),
                                              }),
                                          }),
                                      (0, a.jsx)(l.IpV, {
                                          children: (0, a.jsxs)("div", {
                                              className: C.Y_,
                                              children: [b, E && (0, a.jsx)(v.A, { guildId: t })],
                                          }),
                                      }),
                                  ],
                              })
                            : (0, a.jsx)("div", {
                                  className: C.dc,
                                  children: (0, a.jsx)(l.y$y, { type: l.tVU.SPINNING_CIRCLE }),
                              }),
                        S && (0, a.jsx)(h.A, { guildId: t }),
                    ],
                }),
            ],
        })
    );
}
