t.r(n), t.d(n, { default: () => p });
var a = t(951288),
    r = t(647438),
    i = t(657707),
    o = t(442837),
    s = t(481060),
    c = t(665149),
    l = t(639777),
    d = t(744993),
    u = t(693587),
    b = t(462923),
    m = t(331500),
    g = t(401561),
    f = t(388032),
    x = t(828843);
function p(e) {
    let { guildId: n } = e;
    r.useEffect(() => {
        (0, d.EC)(n);
    }, [n]);
    let t = (0, l.Z)(n),
        p = (0, o.e7)([u.Z], () => u.Z.getStateForGuild(n)),
        j = r.useMemo(
            () => ((null == p ? void 0 : p.instances) == null ? [] : Object.values(p.instances)),
            [null == p ? void 0 : p.instances],
        );
    return (0, a.jsxs)("div", {
        className: x.container,
        children: [
            (0, a.jsxs)(c.ZP, {
                className: x.toolbar,
                toolbar: (0, a.jsx)("div", {}),
                children: [
                    (0, a.jsx)(c.ZP.Icon, {
                        icon: i.$Eu,
                        "aria-label": "",
                    }),
                    (0, a.jsx)(c.ZP.Title, { children: f.intl.string(g.default.lH9Dio) }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: x.contentContainer,
                children: [
                    (null == p ? void 0 : p.instances) != null
                        ? (0, a.jsx)(s.zJl, {
                              className: x.gameContainerWrapper,
                              children: (0, a.jsx)("div", {
                                  className: x.gameContainer,
                                  children: j.map((e, t) =>
                                      (0, a.jsx)(
                                          b.Z,
                                          {
                                              guildId: n,
                                              instance: e,
                                          },
                                          "".concat(e.gameId, "-").concat(t),
                                      ),
                                  ),
                              }),
                          })
                        : (0, a.jsx)("div", {
                              className: x.spinnerContainer,
                              children: (0, a.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                          }),
                    t && (0, a.jsx)(m.Z, { guildId: n }),
                ],
            }),
        ],
    });
}
