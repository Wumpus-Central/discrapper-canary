t.r(n), t.d(n, { default: () => I }), t(388685);
var a = t(54381),
    r = t(473749),
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
    b = t(853944),
    x = t(60482),
    v = t(52021),
    j = t(809121),
    p = t(546303),
    h = t(17790),
    C = t(981631),
    y = t(914820),
    O = t(388032),
    _ = t(618167);
function I(e) {
    let { guildId: n } = e;
    (0, f.cX)(n), (0, h.Z)(n);
    let t = (0, b.V)("GameServerPage");
    r.useEffect(() => {
        (0, g.mF)(n), o.Z.getDetectableGames();
    }, [n]);
    let I = (0, m.Z)(n),
        N = (0, l.e7)([x.Z], () => x.Z.getStateForGuild(n)),
        S = r.useMemo(
            () =>
                (null == N ? void 0 : N.instances) == null
                    ? void 0
                    : 0 === Object.values(N.instances).length
                      ? null
                      : Object.values(N.instances).map((e, t) =>
                            (0, a.jsx)(
                                j.ZP,
                                {
                                    guildId: n,
                                    instance: e,
                                },
                                "".concat(e.gameId, "-").concat(t),
                            ),
                        ),
            [null == N ? void 0 : N.instances, n],
        ),
        [P, E] = r.useState(!1);
    return (
        r.useEffect(() => {
            (null == S || S.length > 0) && E(!0);
        }, [S]),
        (0, a.jsxs)("div", {
            className: _.container,
            children: [
                (0, a.jsxs)(c.ZP, {
                    className: _.toolbar,
                    toolbar: (0, a.jsx)("div", {}),
                    children: [
                        (0, a.jsx)(c.ZP.Icon, {
                            icon: i.iWm,
                            "aria-label": "",
                        }),
                        (0, a.jsx)(c.ZP.Title, { children: O.intl.string(y.default.vCzwM7) }),
                        (0, a.jsx)(s.IGR, {
                            disableColor: !0,
                            text: O.intl.string(O.t.oW0eUd),
                            className: _.badge,
                        }),
                        (0, a.jsx)(c.ZP.Divider, { className: _.divider }),
                        (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: O.intl.format(y.default.LiR4eN, {
                                helpCenterUrl: u.Z.getEnglishArticleURL(C.BhN.GAME_SERVER_HOSTING),
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: _.contentContainer,
                    children: [
                        (null == N ? void 0 : N.instances) != null
                            ? (0, a.jsxs)("div", {
                                  className: _.gameContainerWrapper,
                                  children: [
                                      t &&
                                          (0, a.jsx)("div", {
                                              className: _.degradedWarningContainer,
                                              children: (0, a.jsx)(d.Z, {
                                                  look: d.z.WARNING,
                                                  children: O.intl.format(y.default.XzXjK2, {}),
                                              }),
                                          }),
                                      (0, a.jsx)(s.zJl, {
                                          children: (0, a.jsxs)("div", {
                                              className: _.gameContainer,
                                              children: [S, P && (0, a.jsx)(v.Z, { guildId: n })],
                                          }),
                                      }),
                                  ],
                              })
                            : (0, a.jsx)("div", {
                                  className: _.spinnerContainer,
                                  children: (0, a.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                              }),
                        I && (0, a.jsx)(p.Z, { guildId: n }),
                    ],
                }),
            ],
        })
    );
}
