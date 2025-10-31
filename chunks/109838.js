t.r(n), t.d(n, { default: () => y });
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
    p = t(269794),
    j = t(388032),
    h = t(215365);
function y(e) {
    var n;
    let { guildId: t } = e;
    (0, g.cX)(t),
        a.useEffect(() => {
            (0, m.mF)(t), o.Z.getDetectableGames();
        }, [t]);
    let y = (0, u.Z)(t),
        C = (0, l.e7)([f.Z], () => f.Z.getStateForGuild(t)),
        O = Object.values(null != (n = null == C ? void 0 : C.instances) ? n : {});
    return (0, r.jsxs)("div", {
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
                    (0, r.jsx)(c.ZP.Title, { children: j.intl.string(p.default.vCzwM7) }),
                    (0, r.jsx)(s.IGR, {
                        disableColor: !0,
                        text: j.intl.string(j.t.oW0eUd),
                        className: h.badge,
                    }),
                    (0, r.jsx)(c.ZP.Divider, { className: h.divider }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: j.intl.format(p.default.LiR4eN, {
                            helpCenterUrl: d.Z.getArticleURL(b.BhN.GAME_SERVER_HOSTING),
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: h.contentContainer,
                children: [
                    (null == C ? void 0 : C.instances) != null
                        ? (0, r.jsx)(s.zJl, {
                              className: h.gameContainerWrapper,
                              children: (0, r.jsxs)("div", {
                                  className: h.gameContainer,
                                  children: [
                                      O.map((e, n) =>
                                          (0, r.jsx)(
                                              _.ZP,
                                              {
                                                  guildId: t,
                                                  instance: e,
                                              },
                                              "".concat(e.gameId, "-").concat(n),
                                          ),
                                      ),
                                      (0, r.jsx)(x.Z, { guildId: t }),
                                  ],
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: h.spinnerContainer,
                              children: (0, r.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                          }),
                    y && (0, r.jsx)(v.Z, { guildId: t }),
                ],
            }),
        ],
    });
}
