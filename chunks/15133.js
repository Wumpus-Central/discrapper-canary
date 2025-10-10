t.r(n), t.d(n, { default: () => j });
var r = t(951288),
    a = t(647438),
    i = t(657707),
    s = t(442837),
    l = t(481060),
    o = t(224706),
    c = t(665149),
    d = t(639777),
    u = t(744993),
    m = t(693587),
    g = t(682187),
    b = t(462923),
    f = t(331500),
    x = t(401561),
    p = t(388032),
    v = t(828843);
function j(e) {
    var n;
    let { guildId: t } = e;
    a.useEffect(() => {
        (0, u.EC)(t), o.Z.getDetectableGames();
    }, [t]);
    let j = (0, d.Z)(t),
        _ = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)),
        h = Object.values(null != (n = null == _ ? void 0 : _.instances) ? n : {});
    return (0, r.jsxs)("div", {
        className: v.container,
        children: [
            (0, r.jsxs)(c.ZP, {
                className: v.toolbar,
                toolbar: (0, r.jsx)("div", {}),
                children: [
                    (0, r.jsx)(c.ZP.Icon, {
                        icon: i.Ucv,
                        "aria-label": "",
                    }),
                    (0, r.jsx)(c.ZP.Title, { children: p.intl.string(x.default.lH9Dio) }),
                    (0, r.jsx)(l.IGR, {
                        disableColor: !0,
                        text: p.intl.string(p.t.oW0eUV),
                        className: v.badge,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: v.contentContainer,
                children: [
                    (null == _ ? void 0 : _.instances) != null
                        ? (0, r.jsx)(l.zJl, {
                              className: v.gameContainerWrapper,
                              children: (0, r.jsxs)("div", {
                                  className: v.gameContainer,
                                  children: [
                                      h.map((e, n) =>
                                          (0, r.jsx)(
                                              b.ZP,
                                              {
                                                  guildId: t,
                                                  instance: e,
                                              },
                                              "".concat(e.gameId, "-").concat(n),
                                          ),
                                      ),
                                      (0, r.jsx)(g.Z, {}),
                                  ],
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: v.spinnerContainer,
                              children: (0, r.jsx)(l.$jN, { type: l.RAz.SPINNING_CIRCLE }),
                          }),
                    j && (0, r.jsx)(f.Z, { guildId: t }),
                ],
            }),
        ],
    });
}
