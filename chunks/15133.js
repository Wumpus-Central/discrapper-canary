n.r(t), n.d(t, { default: () => v });
var r = n(951288),
    i = n(647438),
    a = n(657707),
    o = n(442837),
    s = n(481060),
    l = n(665149),
    c = n(639777),
    d = n(744993),
    u = n(693587),
    p = n(462923),
    m = n(331500),
    b = n(401561),
    g = n(388032),
    f = n(828843);
function v(e) {
    let { guildId: t } = e;
    i.useEffect(() => {
        (0, d.EC)(t);
    }, [t]);
    let n = (0, c.Z)(t),
        v = (0, o.e7)([u.Z], () => u.Z.getStateForGuild(t)),
        y = i.useMemo(
            () => ((null == v ? void 0 : v.instances) == null ? [] : Object.values(v.instances)),
            [null == v ? void 0 : v.instances],
        );
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsxs)(l.ZP, {
                className: f.toolbar,
                toolbar: (0, r.jsx)("div", {}),
                children: [
                    (0, r.jsx)(l.ZP.Icon, {
                        icon: a.$Eu,
                        "aria-label": "",
                    }),
                    (0, r.jsx)(l.ZP.Title, { children: g.intl.string(b.default.lH9Dio) }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: f.contentContainer,
                children: [
                    (null == v ? void 0 : v.instances) != null
                        ? (0, r.jsx)("div", {
                              className: f.gameContainer,
                              children: y.map((e, n) =>
                                  (0, r.jsx)(
                                      p.Z,
                                      {
                                          guildId: t,
                                          instance: e,
                                      },
                                      "".concat(e.gameId, "-").concat(n),
                                  ),
                              ),
                          })
                        : (0, r.jsx)("div", {
                              className: f.spinnerContainer,
                              children: (0, r.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                          }),
                    n && (0, r.jsx)(m.Z, { guildId: t }),
                ],
            }),
        ],
    });
}
