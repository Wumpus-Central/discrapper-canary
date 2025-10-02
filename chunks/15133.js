t.r(n), t.d(n, { default: () => v });
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
    m = t(462923),
    g = t(331500),
    f = t(401561),
    x = t(388032),
    p = t(828843);
function v(e) {
    var n;
    let { guildId: t } = e;
    r.useEffect(() => {
        (0, u.EC)(t), c.Z.getDetectableGames();
    }, [t]);
    let v = (0, d.Z)(t),
        j = (0, s.e7)([b.Z], () => b.Z.getStateForGuild(t)),
        _ = Object.values(null != (n = null == j ? void 0 : j.instances) ? n : {});
    return (0, a.jsxs)("div", {
        className: p.container,
        children: [
            (0, a.jsxs)(l.ZP, {
                className: p.toolbar,
                toolbar: (0, a.jsx)("div", {}),
                children: [
                    (0, a.jsx)(l.ZP.Icon, {
                        icon: i.$Eu,
                        "aria-label": "",
                    }),
                    (0, a.jsx)(l.ZP.Title, { children: x.intl.string(f.default.lH9Dio) }),
                    (0, a.jsx)(o.IGR, {
                        disableColor: !0,
                        text: x.intl.string(x.t.oW0eUV),
                        className: p.badge,
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: p.contentContainer,
                children: [
                    (null == j ? void 0 : j.instances) != null
                        ? (0, a.jsx)(o.zJl, {
                              className: p.gameContainerWrapper,
                              children: (0, a.jsx)("div", {
                                  className: p.gameContainer,
                                  children: _.map((e, n) =>
                                      (0, a.jsx)(
                                          m.Z,
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
                              className: p.spinnerContainer,
                              children: (0, a.jsx)(o.$jN, { type: o.RAz.SPINNING_CIRCLE }),
                          }),
                    v && (0, a.jsx)(g.Z, { guildId: t }),
                ],
            }),
        ],
    });
}
