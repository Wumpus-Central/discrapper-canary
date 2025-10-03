t.r(n), t.d(n, { default: () => j });
var r = t(951288),
    a = t(647438),
    i = t(657707),
    s = t(442837),
    o = t(481060),
    l = t(224706),
    c = t(665149),
    d = t(639777),
    u = t(744993),
    b = t(693587),
    m = t(462923),
    g = t(331500),
    f = t(401561),
    x = t(388032),
    p = t(828843);
function j(e) {
    var n;
    let { guildId: t } = e;
    a.useEffect(() => {
        (0, u.EC)(t), l.Z.getDetectableGames();
    }, [t]);
    let j = (0, d.Z)(t),
        v = (0, s.e7)([b.Z], () => b.Z.getStateForGuild(t)),
        _ = Object.values(null != (n = null == v ? void 0 : v.instances) ? n : {});
    return (0, r.jsxs)("div", {
        className: p.container,
        children: [
            (0, r.jsxs)(c.ZP, {
                className: p.toolbar,
                toolbar: (0, r.jsx)("div", {}),
                children: [
                    (0, r.jsx)(c.ZP.Icon, {
                        icon: i.$Eu,
                        "aria-label": "",
                    }),
                    (0, r.jsx)(c.ZP.Title, { children: x.intl.string(f.default.lH9Dio) }),
                    (0, r.jsx)(o.IGR, {
                        disableColor: !0,
                        text: x.intl.string(x.t.oW0eUV),
                        className: p.badge,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: p.contentContainer,
                children: [
                    (null == v ? void 0 : v.instances) != null
                        ? (0, r.jsx)(o.zJl, {
                              className: p.gameContainerWrapper,
                              children: (0, r.jsx)("div", {
                                  className: p.gameContainer,
                                  children: _.map((e, n) =>
                                      (0, r.jsx)(
                                          m.ZP,
                                          {
                                              guildId: t,
                                              instance: e,
                                          },
                                          "".concat(e.gameId, "-").concat(n),
                                      ),
                                  ),
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: p.spinnerContainer,
                              children: (0, r.jsx)(o.$jN, { type: o.RAz.SPINNING_CIRCLE }),
                          }),
                    j && (0, r.jsx)(g.Z, { guildId: t }),
                ],
            }),
        ],
    });
}
