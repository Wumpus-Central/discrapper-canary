t.r(n), t.d(n, { default: () => y }), t(388685);
var r = t(951288),
    a = t(647438),
    i = t(657707),
    l = t(442837),
    s = t(481060),
    o = t(224706),
    c = t(665149),
    d = t(63063),
    u = t(639777),
    m = t(905551),
    g = t(578756),
    f = t(60482),
    x = t(52021),
    _ = t(809121),
    v = t(546303),
    b = t(981631),
    j = t(269794),
    p = t(388032),
    h = t(215365);
function y(e) {
    let { guildId: n } = e;
    (0, g.cX)(n),
        a.useEffect(() => {
            (0, m.mF)(n), o.Z.getDetectableGames();
        }, [n]);
    let t = (0, u.Z)(n),
        y = (0, l.e7)([f.Z], () => f.Z.getStateForGuild(n)),
        C = a.useMemo(
            () =>
                (null == y ? void 0 : y.instances) == null
                    ? void 0
                    : 0 === Object.values(y.instances).length
                      ? null
                      : Object.values(y.instances).map((e, t) =>
                            (0, r.jsx)(
                                _.ZP,
                                {
                                    guildId: n,
                                    instance: e,
                                },
                                "".concat(e.gameId, "-").concat(t),
                            ),
                        ),
            [null == y ? void 0 : y.instances, n],
        ),
        [O, I] = a.useState(!1);
    return (
        a.useEffect(() => {
            (null == C || C.length > 0) && I(!0);
        }, [C]),
        (0, r.jsxs)("div", {
            className: h.container,
            children: [
                (0, r.jsxs)(c.ZP, {
                    className: h.toolbar,
                    toolbar: (0, r.jsx)("div", {}),
                    children: [
                        (0, r.jsx)(c.ZP.Icon, {
                            icon: i.iWm,
                            "aria-label": "",
                        }),
                        (0, r.jsx)(c.ZP.Title, { children: p.intl.string(j.default.vCzwM7) }),
                        (0, r.jsx)(s.IGR, {
                            disableColor: !0,
                            text: p.intl.string(p.t.oW0eUd),
                            className: h.badge,
                        }),
                        (0, r.jsx)(c.ZP.Divider, { className: h.divider }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: p.intl.format(j.default.LiR4eN, {
                                helpCenterUrl: d.Z.getArticleURL(b.BhN.GAME_SERVER_HOSTING),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: h.contentContainer,
                    children: [
                        (null == y ? void 0 : y.instances) != null
                            ? (0, r.jsx)(s.zJl, {
                                  className: h.gameContainerWrapper,
                                  children: (0, r.jsxs)("div", {
                                      className: h.gameContainer,
                                      children: [C, O && (0, r.jsx)(x.Z, { guildId: n })],
                                  }),
                              })
                            : (0, r.jsx)("div", {
                                  className: h.spinnerContainer,
                                  children: (0, r.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                              }),
                        t && (0, r.jsx)(v.Z, { guildId: n }),
                    ],
                }),
            ],
        })
    );
}
