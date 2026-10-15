n.d(t, { gE: () => U, p7: () => b, n8: () => w });
var l = n(477900),
    r = n(582128),
    a = n(17928),
    i = n(477782),
    s = n(403581),
    d = n(793574),
    u = n(688810),
    c = n(903209),
    o = n(287809),
    y = n(245175),
    m = n(708645),
    E = n(609425),
    f = n(834730),
    x = n(661531),
    p = n(913563),
    _ = n(898985),
    h = n(660184),
    v = n(701974),
    g = n(105292),
    j = n(547961);
function A(e) {
    let { displayNameStyles: t } = e,
        { name: n } = (0, _._)(t.effectId),
        r = g.intl.string((0, p.A)(t.fontId));
    return (0, l.jsxs)("div", {
        className: j.nM,
        children: [
            (0, l.jsx)("div", {
                className: j.Vs,
                "aria-hidden": !0,
                children: (0, l.jsx)(f.E, {
                    variant: "text-lg/semibold",
                    color: "none",
                    children: (0, l.jsx)(h.A, { userName: "Gg", displayNameStyles: t }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: j.Qq,
                children: [
                    (0, l.jsx)(f.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: g.intl.format(v.default.DC7gJB, { fontName: r, effectName: n }),
                    }),
                    (0, l.jsxs)("div", {
                        className: j.VA,
                        children: [
                            (0, l.jsx)(s.t, { size: "xs", color: x.A.colors.TEXT_SUBTLE }),
                            (0, l.jsx)(f.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: g.intl.string(v.default.M4qsJL),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var M = n(62010),
    N = n(32014);
function F() {
    return (0, l.jsxs)("div", {
        className: N.w,
        children: [
            (0, l.jsx)(f.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: g.intl.string(v.default.NJLgMs),
            }),
            (0, l.jsx)(M.E, { type: "beta", variant: "primary" }),
        ],
    });
}
var L = n(259065);
function O(e, t, n) {
    let l = (0, m.uh)(),
        i = (0, E.A)({ userId: e.id, guildId: t }),
        { analyticsLocations: s } = (0, u.Ay)(n),
        d = (0, a.bG)([o.default], () => o.default.getCurrentUser()?.id),
        f = !(0, y.rA)(l, y.yw.OFF) && null != i;
    r.useEffect(() => {
        f && null != d && (0, c.A)(d, void 0, { waitForRefetch: !1 }).catch(() => {});
    }, [f, d]);
    let x = r.useCallback(() => {
        null != i && (0, L.L)({ analyticsLocations: s, tryOnDisplayNameStyles: i, tryOnStyleOwner: e });
    }, [s, i, e]);
    return { placement: l, tryOnDisplayNameStyles: i, openTryOnEditor: x };
}
function b(e, t) {
    let { placement: n, tryOnDisplayNameStyles: r, openTryOnEditor: a } = O(e, t, d.A.USER_PROFILE_OVERFLOW_MENU);
    return (0, y.rA)(n, y.yw.TOP_LEVEL_MENU_ITEM) && null != r
        ? (0, l.jsx)(i.Dr, {
              id: "try-display-name-style",
              label: g.intl.string(v.default.NJLgMs),
              badge: { type: "beta", variant: "primary" },
              leadingAccessory: { type: "icon", icon: s.t },
              action: a,
          })
        : null;
}
function U(e, t) {
    let { placement: n, tryOnDisplayNameStyles: r, openTryOnEditor: a } = O(e, t, []);
    return (0, y.rA)(n, y.yw.TOP_LEVEL_MENU_ITEM) && null != r
        ? (0, l.jsx)(i.Dr, {
              id: "try-display-name-style",
              label: g.intl.string(v.default.NJLgMs),
              leadingAccessory: { type: "icon", icon: s.t },
              action: a,
          })
        : null;
}
function w(e, t) {
    let { placement: n, tryOnDisplayNameStyles: r, openTryOnEditor: a } = O(e, t, d.A.USER_PROFILE_OVERFLOW_MENU);
    return (0, y.rA)(n, y.yw.SUBMENU) && null != r
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(i.Dr, {
                      id: "try-display-name-style-header",
                      navigable: !1,
                      render: () => (0, l.jsx)(F, {}),
                  }),
                  (0, l.jsx)(i.Dr, {
                      id: "try-display-name-style-row",
                      navigable: !0,
                      keepItemStyles: !0,
                      render: () => (0, l.jsx)(A, { displayNameStyles: r }),
                      action: a,
                  }),
              ],
          })
        : null;
}
