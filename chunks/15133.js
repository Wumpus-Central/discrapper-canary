t.r(n), t.d(n, { default: () => j });
var a = t(951288),
    r = t(647438),
    i = t(657707),
    s = t(442837),
    o = t(481060),
    c = t(224706),
    l = t(665149),
    d = t(639777),
    u = t(744993),
    b = t(693587),
    g = t(462923),
    m = t(331500),
    f = t(401561),
    p = t(388032),
    x = t(828843);
function j(e) {
    var n;
    let { guildId: t } = e;
    r.useEffect(() => {
        (0, u.EC)(t), c.Z.getDetectableGames();
    }, [t]);
    let j = (0, d.Z)(t),
        v = (0, s.e7)([b.Z], () => b.Z.getStateForGuild(t)),
        _ = Object.values(null != (n = null == v ? void 0 : v.instances) ? n : {});
    return (0, a.jsxs)("div", {
        className: x.container,
        children: [
            (0, a.jsxs)(l.ZP, {
                className: x.toolbar,
                toolbar: (0, a.jsx)("div", {}),
                children: [
                    (0, a.jsx)(l.ZP.Icon, {
                        icon: i.$Eu,
                        "aria-label": "",
                    }),
                    (0, a.jsx)(l.ZP.Title, { children: p.intl.string(f.default.lH9Dio) }),
                    (0, a.jsx)(o.IGR, {
                        disableColor: !0,
                        text: p.intl.string(p.t.oW0eUV),
                        className: x.badge,
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: x.contentContainer,
                children: [
                    (null == v ? void 0 : v.instances) != null
                        ? (0, a.jsx)(o.zJl, {
                              className: x.gameContainerWrapper,
                              children: (0, a.jsx)("div", {
                                  className: x.gameContainer,
                                  children: _.map((e, n) =>
                                      (0, a.jsx)(
                                          g.Z,
                                          {
                                              guildId: t,
                                              instance: e,
                                          },
                                          "".concat(e.gameId, "-").concat(n),
                                      ),
                                  ),
                              }),
                          })
                        : (0, a.jsx)("div", {
                              className: x.spinnerContainer,
                              children: (0, a.jsx)(o.$jN, { type: o.RAz.SPINNING_CIRCLE }),
                          }),
                    j && (0, a.jsx)(m.Z, { guildId: t }),
                ],
            }),
        ],
    });
}
