t.r(n), t.d(n, { default: () => p });
var r = t(951288),
    a = t(647438),
    i = t(657707),
    s = t(442837),
    o = t(481060),
    l = t(224706),
    c = t(665149),
    d = t(639777),
    u = t(905551),
    m = t(60482),
    g = t(52021),
    f = t(809121),
    x = t(546303),
    b = t(948208),
    _ = t(388032),
    v = t(215365);
function p(e) {
    var n;
    let { guildId: t } = e;
    a.useEffect(() => {
        (0, u.mF)(t), l.Z.getDetectableGames();
    }, [t]);
    let p = (0, d.Z)(t),
        j = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)),
        h = Object.values(null != (n = null == j ? void 0 : j.instances) ? n : {});
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
                    (0, r.jsx)(c.ZP.Title, { children: _.intl.string(b.default.vCzwMz) }),
                    (0, r.jsx)(o.IGR, {
                        disableColor: !0,
                        text: _.intl.string(_.t.oW0eUV),
                        className: v.badge,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: v.contentContainer,
                children: [
                    (null == j ? void 0 : j.instances) != null
                        ? (0, r.jsx)(o.zJl, {
                              className: v.gameContainerWrapper,
                              children: (0, r.jsxs)("div", {
                                  className: v.gameContainer,
                                  children: [
                                      h.map((e, n) =>
                                          (0, r.jsx)(
                                              f.ZP,
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
                              children: (0, r.jsx)(o.$jN, { type: o.RAz.SPINNING_CIRCLE }),
                          }),
                    p && (0, r.jsx)(x.Z, { guildId: t }),
                ],
            }),
        ],
    });
}
