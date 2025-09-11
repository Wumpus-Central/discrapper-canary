n.r(t), n.d(t, { default: () => v });
var r = n(951288),
    i = n(647438),
    s = n(657707),
    a = n(442837),
    o = n(481060),
    l = n(665149),
    c = n(639777),
    d = n(744993),
    u = n(693587),
    m = n(462923),
    p = n(331500),
    b = n(440589),
    g = n(388032),
    f = n(50803);
function v(e) {
    let { guildId: t } = e;
    i.useEffect(() => {
        (0, d.EC)(t);
    }, [t]);
    let n = (0, c.Z)(t),
        v = (0, a.e7)([u.Z], () => u.Z.getStateForGuild(t)),
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
                        icon: s.$Eu,
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
