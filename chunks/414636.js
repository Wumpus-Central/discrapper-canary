n.d(t, { gE: () => U, p7: () => O, n8: () => I });
var l = n(477900),
    r = n(582128),
    i = n(855986),
    a = n(477782),
    s = n(403581),
    d = n(793574),
    c = n(688810),
    u = n(917445),
    o = n(287809),
    y = n(245175),
    m = n(708645),
    E = n(609425),
    f = n(834730),
    x = n(646514),
    p = n(913563),
    h = n(898985),
    _ = n(16371),
    v = n(842671),
    N = n(792996),
    g = n(547961);
function j(e) {
    let { displayNameStyles: t } = e,
        { name: n } = (0, h._)(t.effectId),
        r = N.intl.string((0, p.A)(t.fontId));
    return (0, l.jsxs)("div", {
        className: g.nM,
        children: [
            (0, l.jsx)("div", {
                className: g.Vs,
                "aria-hidden": !0,
                children: (0, l.jsx)(f.E, {
                    variant: "body-lg/semibold",
                    color: "none",
                    children: (0, l.jsx)(_.A, { userName: "Gg", displayNameStyles: t }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: g.Qq,
                children: [
                    (0, l.jsx)(f.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        children: N.intl.format(v.default.DC7gJB, { fontName: r, effectName: n }),
                    }),
                    (0, l.jsxs)("div", {
                        className: g.VA,
                        children: [
                            (0, l.jsx)(s.NitroWheelIcon, { size: "xs", color: x.A.colors.TEXT_SUBTLE }),
                            (0, l.jsx)(f.E, {
                                variant: "body-xs/normal",
                                color: "text-subtle",
                                children: N.intl.string(v.default.M4qsJL),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var b = n(805251),
    A = n(32014);
function M() {
    return (0, l.jsxs)("div", {
        className: A.w,
        children: [
            (0, l.jsx)(f.E, {
                variant: "body-sm/medium",
                color: "text-muted",
                children: N.intl.string(v.default.NJLgMs),
            }),
            (0, l.jsx)(b.E, { type: "beta", variant: "primary" }),
        ],
    });
}
var F = n(259065);
function L(e, t, n) {
    let l = (0, m.uh)(),
        a = (0, E.A)({ userId: e.id, guildId: t }),
        { analyticsLocations: s } = (0, c.Ay)(n),
        d = (0, i.bG)([o.default], () => o.default.getCurrentUser()?.id),
        f = !(0, y.rA)(l, y.yw.OFF) && null != a;
    r.useEffect(() => {
        f && null != d && (0, u.A)(d, void 0, { waitForRefetch: !1 }).catch(() => {});
    }, [f, d]);
    let x = r.useCallback(() => {
        null != a && (0, F.L)({ analyticsLocations: s, tryOnDisplayNameStyles: a, tryOnStyleOwner: e });
    }, [s, a, e]);
    return { placement: l, tryOnDisplayNameStyles: a, openTryOnEditor: x };
}
function O(e, t) {
    let { placement: n, tryOnDisplayNameStyles: r, openTryOnEditor: i } = L(e, t, d.A.USER_PROFILE_OVERFLOW_MENU);
    return (0, y.rA)(n, y.yw.TOP_LEVEL_MENU_ITEM) && null != r
        ? (0, l.jsx)(a.Dr, {
              id: "try-display-name-style",
              label: N.intl.string(v.default.NJLgMs),
              badge: { type: "beta", variant: "primary" },
              leadingAccessory: { type: "icon", icon: s.NitroWheelIcon },
              action: i,
          })
        : null;
}
function U(e, t) {
    let { placement: n, tryOnDisplayNameStyles: r, openTryOnEditor: i } = L(e, t, []);
    return (0, y.rA)(n, y.yw.TOP_LEVEL_MENU_ITEM) && null != r
        ? (0, l.jsx)(a.Dr, {
              id: "try-display-name-style",
              label: N.intl.string(v.default.NJLgMs),
              leadingAccessory: { type: "icon", icon: s.NitroWheelIcon },
              action: i,
          })
        : null;
}
function I(e, t) {
    let { placement: n, tryOnDisplayNameStyles: r, openTryOnEditor: i } = L(e, t, d.A.USER_PROFILE_OVERFLOW_MENU);
    return (0, y.rA)(n, y.yw.SUBMENU) && null != r
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(a.Dr, {
                      id: "try-display-name-style-header",
                      navigable: !1,
                      render: () => (0, l.jsx)(M, {}),
                  }),
                  (0, l.jsx)(a.Dr, {
                      id: "try-display-name-style-row",
                      navigable: !0,
                      keepItemStyles: !0,
                      render: () => (0, l.jsx)(j, { displayNameStyles: r }),
                      action: i,
                  }),
              ],
          })
        : null;
}
