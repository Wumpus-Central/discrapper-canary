t.r(n), t.d(n, { default: () => h });
var r = t(951288),
    a = t(647438),
    i = t(657707),
    s = t(442837),
    o = t(481060),
    l = t(224706),
    c = t(665149),
    d = t(63063),
    u = t(639777),
    m = t(905551),
    g = t(60482),
    f = t(52021),
    x = t(809121),
    _ = t(546303),
    b = t(981631),
    v = t(948208),
    p = t(388032),
    j = t(215365);
function h(e) {
    var n;
    let { guildId: t } = e;
    a.useEffect(() => {
        (0, m.mF)(t), l.Z.getDetectableGames();
    }, [t]);
    let h = (0, u.Z)(t),
        y = (0, s.e7)([g.Z], () => g.Z.getStateForGuild(t)),
        C = Object.values(null != (n = null == y ? void 0 : y.instances) ? n : {});
    return (0, r.jsxs)("div", {
        className: j.container,
        children: [
            (0, r.jsxs)(c.ZP, {
                className: j.toolbar,
                toolbar: (0, r.jsx)("div", {}),
                children: [
                    (0, r.jsx)(c.ZP.Icon, {
                        icon: i.Ucv,
                        "aria-label": "",
                    }),
                    (0, r.jsx)(c.ZP.Title, { children: p.intl.string(v.default.vCzwMz) }),
                    (0, r.jsx)(o.IGR, {
                        disableColor: !0,
                        text: p.intl.string(p.t.oW0eUV),
                        className: j.badge,
                    }),
                    (0, r.jsx)(c.ZP.Divider, { className: j.divider }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: p.intl.format(v.default.LiR4eH, {
                            helpCenterUrl: d.Z.getArticleURL(b.BhN.GAME_SERVER_HOSTING),
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: j.contentContainer,
                children: [
                    (null == y ? void 0 : y.instances) != null
                        ? (0, r.jsx)(o.zJl, {
                              className: j.gameContainerWrapper,
                              children: (0, r.jsxs)("div", {
                                  className: j.gameContainer,
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
                                      (0, r.jsx)(f.Z, {}),
                                  ],
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: j.spinnerContainer,
                              children: (0, r.jsx)(o.$jN, { type: o.RAz.SPINNING_CIRCLE }),
                          }),
                    h && (0, r.jsx)(_.Z, { guildId: t }),
                ],
            }),
        ],
    });
}
