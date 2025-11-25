t.r(n), t.d(n, { default: () => I }), t(388685);
var r = t(54381),
    a = t(473749),
    i = t(657707),
    l = t(442837),
    s = t(481060),
    o = t(224706),
    c = t(665149),
    d = t(494620),
    u = t(63063),
    m = t(639777),
    g = t(905551),
    f = t(578756),
    x = t(853944),
    v = t(60482),
    _ = t(52021),
    b = t(809121),
    j = t(546303),
    p = t(17790),
    h = t(981631),
    C = t(613275),
    y = t(388032),
    O = t(215365);
function I(e) {
    let { guildId: n } = e;
    (0, f.cX)(n), (0, p.Z)(n);
    let t = (0, x.V)("GameServerPage");
    a.useEffect(() => {
        (0, g.mF)(n), o.Z.getDetectableGames();
    }, [n]);
    let I = (0, m.Z)(n),
        N = (0, l.e7)([v.Z], () => v.Z.getStateForGuild(n)),
        S = a.useMemo(
            () =>
                (null == N ? void 0 : N.instances) == null
                    ? void 0
                    : 0 === Object.values(N.instances).length
                      ? null
                      : Object.values(N.instances).map((e, t) =>
                            (0, r.jsx)(
                                b.ZP,
                                {
                                    guildId: n,
                                    instance: e,
                                },
                                "".concat(e.gameId, "-").concat(t),
                            ),
                        ),
            [null == N ? void 0 : N.instances, n],
        ),
        [P, E] = a.useState(!1);
    return (
        a.useEffect(() => {
            (null == S || S.length > 0) && E(!0);
        }, [S]),
        (0, r.jsxs)("div", {
            className: O.container,
            children: [
                (0, r.jsxs)(c.ZP, {
                    className: O.toolbar,
                    toolbar: (0, r.jsx)("div", {}),
                    children: [
                        (0, r.jsx)(c.ZP.Icon, {
                            icon: i.iWm,
                            "aria-label": "",
                        }),
                        (0, r.jsx)(c.ZP.Title, { children: y.intl.string(C.default.vCzwM7) }),
                        (0, r.jsx)(s.IGR, {
                            disableColor: !0,
                            text: y.intl.string(y.t.oW0eUd),
                            className: O.badge,
                        }),
                        (0, r.jsx)(c.ZP.Divider, { className: O.divider }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: y.intl.format(C.default.LiR4eN, {
                                helpCenterUrl: u.Z.getArticleURL(h.BhN.GAME_SERVER_HOSTING),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: O.contentContainer,
                    children: [
                        (null == N ? void 0 : N.instances) != null
                            ? (0, r.jsxs)("div", {
                                  className: O.gameContainerWrapper,
                                  children: [
                                      t &&
                                          (0, r.jsx)("div", {
                                              className: O.degradedWarningContainer,
                                              children: (0, r.jsx)(d.Z, {
                                                  look: d.z.WARNING,
                                                  children: y.intl.format(C.default.XzXjK2, {}),
                                              }),
                                          }),
                                      (0, r.jsx)(s.zJl, {
                                          children: (0, r.jsxs)("div", {
                                              className: O.gameContainer,
                                              children: [S, P && (0, r.jsx)(_.Z, { guildId: n })],
                                          }),
                                      }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: O.spinnerContainer,
                                  children: (0, r.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                              }),
                        I && (0, r.jsx)(j.Z, { guildId: n }),
                    ],
                }),
            ],
        })
    );
}
