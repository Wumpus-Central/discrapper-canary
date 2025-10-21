t.r(n), t.d(n, { default: () => h });
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
    g = t(60482),
    f = t(52021),
    x = t(809121),
    _ = t(546303),
    v = t(981631),
    b = t(45765),
    j = t(388032),
    p = t(909842);
function h(e) {
    var n;
    let { guildId: t } = e;
    a.useEffect(() => {
        (0, m.mF)(t), o.Z.getDetectableGames();
    }, [t]);
    let h = (0, u.Z)(t),
        y = (0, l.e7)([g.Z], () => g.Z.getStateForGuild(t)),
        C = Object.values(null != (n = null == y ? void 0 : y.instances) ? n : {});
    return (0, r.jsxs)("div", {
        className: p.container,
        children: [
            (0, r.jsxs)(c.ZP, {
                className: p.toolbar,
                toolbar: (0, r.jsx)("div", {}),
                children: [
                    (0, r.jsx)(c.ZP.Icon, {
                        icon: i.iWm,
                        "aria-label": "",
                    }),
                    (0, r.jsx)(c.ZP.Title, { children: j.intl.string(b.default.vCzwMz) }),
                    (0, r.jsx)(s.IGR, {
                        disableColor: !0,
                        text: j.intl.string(j.t.oW0eUV),
                        className: p.badge,
                    }),
                    (0, r.jsx)(c.ZP.Divider, { className: p.divider }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: j.intl.format(b.default.LiR4eH, {
                            helpCenterUrl: d.Z.getArticleURL(v.BhN.GAME_SERVER_HOSTING),
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: p.contentContainer,
                children: [
                    (null == y ? void 0 : y.instances) != null
                        ? (0, r.jsx)(s.zJl, {
                              className: p.gameContainerWrapper,
                              children: (0, r.jsxs)("div", {
                                  className: p.gameContainer,
                                  children: [
                                      C.map((e, n) =>
                                          (0, r.jsx)(
                                              x.ZP,
                                              {
                                                  guildId: t,
                                                  instance: e,
                                              },
                                              "".concat(e.gameId, "-").concat(n),
                                          ),
                                      ),
                                      (0, r.jsx)(f.Z, { guildId: t }),
                                  ],
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: p.spinnerContainer,
                              children: (0, r.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                          }),
                    h && (0, r.jsx)(_.Z, { guildId: t }),
                ],
            }),
        ],
    });
}
