t.r(n), t.d(n, { default: () => v });
var r = t(951288),
    a = t(647438),
    i = t(657707),
    o = t(442837),
    s = t(481060),
    l = t(224706),
    c = t(665149),
    d = t(639777),
    u = t(744993),
    m = t(693587),
    b = t(462923),
    g = t(331500),
    f = t(440589),
    x = t(388032),
    p = t(50803);
function v(e) {
    var n;
    let { guildId: t } = e;
    a.useEffect(() => {
        (0, u.EC)(t), l.Z.getDetectableGames();
    }, [t]);
    let v = (0, d.Z)(t),
        j = (0, o.e7)([m.Z], () => m.Z.getStateForGuild(t)),
        _ = Object.values(null != (n = null == j ? void 0 : j.instances) ? n : {});
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
                    (0, r.jsx)(s.IGR, {
                        disableColor: !0,
                        text: x.intl.string(x.t.oW0eUV),
                        className: p.badge,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: p.contentContainer,
                children: [
                    (null == j ? void 0 : j.instances) != null
                        ? (0, r.jsx)(s.zJl, {
                              className: p.gameContainerWrapper,
                              children: (0, r.jsx)("div", {
                                  className: p.gameContainer,
                                  children: _.map((e, n) =>
                                      (0, r.jsx)(
                                          b.ZP,
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
                              children: (0, r.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                          }),
                    v && (0, r.jsx)(g.Z, { guildId: t }),
                ],
            }),
        ],
    });
}
