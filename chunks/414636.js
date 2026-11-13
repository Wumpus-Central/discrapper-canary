t.d(n, { gE: () => U, p7: () => O, n8: () => I });
var l = t(477900),
    r = t(582128),
    i = t(855986),
    a = t(477782),
    s = t(403581),
    d = t(793574),
    c = t(688810),
    u = t(917445),
    o = t(287809),
    y = t(245175),
    m = t(708645),
    E = t(609425),
    f = t(834730),
    h = t(646514),
    x = t(913563),
    p = t(898985),
    g = t(16371),
    v = t(842671),
    _ = t(792996),
    j = t(547961);
function N(e) {
    let { displayNameStyles: n } = e,
        { name: t } = (0, p._)(n.effectId),
        r = _.intl.string((0, x.A)(n.fontId));
    return (0, l.jsxs)("div", {
        className: j.nM,
        children: [
            (0, l.jsx)("div", {
                className: j.Vs,
                "aria-hidden": !0,
                children: (0, l.jsx)(f.E, {
                    variant: "body-lg/semibold",
                    color: "none",
                    children: (0, l.jsx)(g.A, { userName: "Gg", displayNameStyles: n }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: j.Qq,
                children: [
                    (0, l.jsx)(f.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        children: _.intl.format(v.default.DC7gJB, { fontName: r, effectName: t }),
                    }),
                    (0, l.jsxs)("div", {
                        className: j.VA,
                        children: [
                            (0, l.jsx)(s.NitroWheelIcon, { size: "xs", color: h.A.colors.TEXT_SUBTLE }),
                            (0, l.jsx)(f.E, {
                                variant: "body-xs/normal",
                                color: "text-subtle",
                                children: _.intl.string(v.default.M4qsJL),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var b = t(805251),
    A = t(32014);
function M() {
    return (0, l.jsxs)("div", {
        className: A.w,
        children: [
            (0, l.jsx)(f.E, {
                variant: "body-sm/medium",
                color: "text-muted",
                children: _.intl.string(v.default.NJLgMs),
            }),
            (0, l.jsx)(b.E, { type: "beta", variant: "primary" }),
        ],
    });
}
var F = t(259065);
function L(e, n, t) {
    let l = (0, m.uh)(),
        a = (0, E.A)({ userId: e.id, guildId: n }),
        { analyticsLocations: s } = (0, c.Ay)(t),
        d = (0, i.bG)([o.default], () => o.default.getCurrentUser()?.id),
        f = !(0, y.rA)(l, y.yw.OFF) && null != a;
    r.useEffect(() => {
        f && null != d && (0, u.A)(d, void 0, { waitForRefetch: !1 }).catch(() => {});
    }, [f, d]);
    let h = r.useCallback(() => {
        null != a && (0, F.L)({ analyticsLocations: s, tryOnDisplayNameStyles: a, tryOnStyleOwner: e });
    }, [s, a, e]);
    return { placement: l, tryOnDisplayNameStyles: a, openTryOnEditor: h };
}
function O(e, n) {
    let { placement: t, tryOnDisplayNameStyles: r, openTryOnEditor: i } = L(e, n, d.A.USER_PROFILE_OVERFLOW_MENU);
    return (0, y.rA)(t, y.yw.TOP_LEVEL_MENU_ITEM) && null != r
        ? (0, l.jsx)(a.Dr, {
              id: "try-display-name-style",
              label: _.intl.string(v.default.NJLgMs),
              badge: { type: "beta", variant: "primary" },
              leadingAccessory: { type: "icon", icon: s.NitroWheelIcon },
              action: i,
          })
        : null;
}
function U(e, n) {
    let { placement: t, tryOnDisplayNameStyles: r, openTryOnEditor: i } = L(e, n, []);
    return (0, y.rA)(t, y.yw.TOP_LEVEL_MENU_ITEM) && null != r
        ? (0, l.jsx)(a.Dr, {
              id: "try-display-name-style",
              label: _.intl.string(v.default.NJLgMs),
              leadingAccessory: { type: "icon", icon: s.NitroWheelIcon },
              action: i,
          })
        : null;
}
function I(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.A.USER_PROFILE_OVERFLOW_MENU,
        { placement: i, tryOnDisplayNameStyles: s, openTryOnEditor: c } = L(e, n, r);
    return (0, y.rA)(i, y.yw.SUBMENU) && null != s
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(a.Dr, {
                      id: "try-display-name-style-header",
                      navigable: !1,
                      render: () => (0, l.jsxs)(l.Fragment, { children: [t, (0, l.jsx)(M, {})] }),
                  }),
                  (0, l.jsx)(a.Dr, {
                      id: "try-display-name-style-row",
                      navigable: !0,
                      keepItemStyles: !0,
                      render: () => (0, l.jsx)(N, { displayNameStyles: s }),
                      action: c,
                  }),
              ],
          })
        : null;
}
