n.r(t),
    n.d(t, {
        default: () => N,
    }),
    n(896048);
var r = n(627968),
    a = n(64700),
    l = n(934551),
    i = n(311907),
    s = n(397927),
    c = n(544420),
    o = n(58736),
    d = n(801264),
    u = n(975571),
    f = n(363487),
    b = n(665171),
    m = n(397400),
    x = n(187549),
    j = n(522055),
    v = n(270424),
    g = n(140033),
    p = n(486180),
    h = n(566704),
    y = n(652215),
    O = n(294726),
    S = n(985018),
    _ = n(715896);

function N(e) {
    let { guildId: t } = e;
    (0, m.tR)(t), (0, h.A)(t);
    let n = (0, x.U)("GameServerPage");
    a.useEffect(() => {
        (0, b.cq)(t), c.A.getDetectableGames();
    }, [t]);
    let N = (0, f.A)(t),
        A = (0, i.bG)([j.A], () => j.A.getStateForGuild(t)),
        E = a.useMemo(
            () =>
                (null == A ? void 0 : A.instances) == null
                    ? void 0
                    : 0 === Object.values(A.instances).length
                      ? null
                      : Object.values(A.instances).map((e, n) =>
                            (0, r.jsx)(
                                g.Ay,
                                {
                                    guildId: t,
                                    instance: e,
                                },
                                "".concat(e.gameId, "-").concat(n),
                            ),
                        ),
            [null == A ? void 0 : A.instances, t],
        ),
        [I, T] = a.useState(!1);
    return (
        a.useEffect(() => {
            (null == E || E.length > 0) && T(!0);
        }, [E]),
        (0, r.jsxs)("div", {
            className: _.kL,
            children: [
                (0, r.jsxs)(o.Ay, {
                    className: _.KE,
                    toolbar: (0, r.jsx)("div", {}),
                    children: [
                        (0, r.jsx)(o.Ay.Icon, {
                            icon: l.GameControllerIcon,
                            "aria-label": "",
                        }),
                        (0, r.jsx)(o.Ay.Title, {
                            children: S.intl.string(O.default.vCzwM7),
                        }),
                        (0, r.jsx)(s.LpS, {
                            disableColor: !0,
                            text: S.intl.string(S.t.oW0eUd),
                            className: _.qS,
                        }),
                        (0, r.jsx)(o.Ay.Divider, {
                            className: _.yF,
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: S.intl.format(O.default.LiR4eN, {
                                helpCenterUrl: u.A.getArticleURL(y.MVz.GAME_SERVER_HOSTING),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: _.hQ,
                    children: [
                        (null == A ? void 0 : A.instances) != null
                            ? (0, r.jsxs)("div", {
                                  className: _.nd,
                                  children: [
                                      n &&
                                          (0, r.jsx)("div", {
                                              className: _.MR,
                                              children: (0, r.jsx)(d.A, {
                                                  look: d.k.WARNING,
                                                  children: S.intl.format(O.default.XzXjK2, {}),
                                              }),
                                          }),
                                      (0, r.jsx)(s.IpV, {
                                          children: (0, r.jsxs)("div", {
                                              className: _.Y_,
                                              children: [
                                                  E,
                                                  I &&
                                                      (0, r.jsx)(v.A, {
                                                          guildId: t,
                                                      }),
                                              ],
                                          }),
                                      }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: _.dc,
                                  children: (0, r.jsx)(s.y$y, {
                                      type: s.tVU.SPINNING_CIRCLE,
                                  }),
                              }),
                        N &&
                            (0, r.jsx)(p.A, {
                                guildId: t,
                            }),
                    ],
                }),
            ],
        })
    );
}
