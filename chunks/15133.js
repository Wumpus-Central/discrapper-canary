n.r(t), n.d(t, { default: () => v });
var r = n(951288),
    a = n(647438),
    i = n(657707),
    s = n(442837),
    c = n(481060),
    o = n(665149),
    l = n(639777),
    d = n(744993),
    u = n(693587),
    b = n(462923),
    m = n(331500),
    p = n(401561),
    f = n(388032),
    j = n(828843);
function v(e) {
    let { guildId: t } = e;
    a.useEffect(() => {
        (0, d.EC)(t);
    }, [t]);
    let n = (0, l.Z)(t),
        v = (0, s.e7)([u.Z], () => u.Z.getStateForGuild(t)),
        g = a.useMemo(
            () => ((null == v ? void 0 : v.instances) == null ? [] : Object.values(v.instances)),
            [null == v ? void 0 : v.instances],
        );
    return (0, r.jsxs)("div", {
        className: j.container,
        children: [
            (0, r.jsxs)(o.ZP, {
                className: j.toolbar,
                toolbar: (0, r.jsx)("div", {}),
                children: [
                    (0, r.jsx)(o.ZP.Icon, {
                        icon: i.$Eu,
                        "aria-label": "",
                    }),
                    (0, r.jsx)(o.ZP.Title, { children: f.intl.string(p.default.lH9Dio) }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: j.contentContainer,
                children: [
                    (null == v ? void 0 : v.instances) != null
                        ? (0, r.jsx)("div", {
                              className: j.gameContainerWrapper,
                              children: (0, r.jsx)("div", {
                                  className: j.gameContainer,
                                  children: g.map((e, n) =>
                                      (0, r.jsx)(
                                          b.Z,
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
                              className: j.spinnerContainer,
                              children: (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }),
                          }),
                    n && (0, r.jsx)(m.Z, { guildId: t }),
                ],
            }),
        ],
    });
}
