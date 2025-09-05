n.r(t), n.d(t, { default: () => v });
var r = n(951288),
    a = n(647438),
    s = n(657707),
    i = n(442837),
    o = n(481060),
    c = n(665149),
    l = n(639777),
    u = n(744993),
    d = n(693587),
    m = n(462923),
    p = n(331500),
    b = n(401561),
    g = n(388032),
    f = n(828843);
function v(e) {
    let { guildId: t } = e;
    a.useEffect(() => {
        (0, u.EC)(t);
    }, [t]);
    let n = (0, l.Z)(t),
        v = (0, i.e7)([d.Z], () => d.Z.getStateForGuild(t)),
        y = a.useMemo(
            () => ((null == v ? void 0 : v.instances) == null ? [] : Object.values(v.instances)),
            [null == v ? void 0 : v.instances],
        );
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsxs)(c.ZP, {
                className: f.toolbar,
                toolbar: (0, r.jsx)("div", {}),
                children: [
                    (0, r.jsx)(c.ZP.Icon, {
                        icon: s.$Eu,
                        "aria-label": "",
                    }),
                    (0, r.jsx)(c.ZP.Title, { children: g.intl.string(b.default.lH9Dio) }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: f.contentContainer,
                children: [
                    (null == v ? void 0 : v.instances) != null
                        ? (0, r.jsx)("div", {
                              className: f.gameContainer,
                              children: y.map((e) =>
                                  (0, r.jsx)(
                                      m.Z,
                                      {
                                          guildId: t,
                                          instance: e,
                                      },
                                      e.gameId,
                                  ),
                              ),
                          })
                        : (0, r.jsx)("div", {
                              className: f.spinnerContainer,
                              children: (0, r.jsx)(o.$jN, { type: o.RAz.SPINNING_CIRCLE }),
                          }),
                    n && (0, r.jsx)(p.Z, { guildId: t }),
                ],
            }),
        ],
    });
}
