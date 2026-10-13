n.d(t, { gE: () => U, p7: () => w, n8: () => L });
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
    f = n(609425),
    E = n(834730),
    x = n(661531),
    p = n(913563),
    _ = n(898985),
    A = n(660184),
    h = n(701974),
    v = n(660183),
    j = n(547961);
function g(e) {
    let { displayNameStyles: t } = e,
        { name: n } = (0, _._)(t.effectId),
        r = v.intl.string((0, p.A)(t.fontId));
    return (0, l.jsxs)("div", {
        className: j.nM,
        children: [
            (0, l.jsx)("div", {
                className: j.Vs,
                "aria-hidden": !0,
                children: (0, l.jsx)(A.A, { userName: "Gg", displayNameStyles: t, textVariant: "text-lg/semibold" }),
            }),
            (0, l.jsxs)("div", {
                className: j.Qq,
                children: [
                    (0, l.jsx)(E.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: v.intl.format(h.default.DC7gJB, { fontName: r, effectName: n }),
                    }),
                    (0, l.jsxs)("div", {
                        className: j.VA,
                        children: [
                            (0, l.jsx)(s.t, { size: "xs", color: x.A.colors.TEXT_SUBTLE }),
                            (0, l.jsx)(E.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: v.intl.string(h.default.M4qsJL),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var F = n(62010),
    O = n(32014);
function M() {
    return (0, l.jsxs)("div", {
        className: O.w,
        children: [
            (0, l.jsx)(E.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: v.intl.string(h.default.oAYuZw),
            }),
            (0, l.jsx)(F.E, { type: "beta", variant: "primary" }),
        ],
    });
}
var N = n(259065);
function b(e, t, n) {
    let l = (0, m.uh)(),
        i = (0, f.A)({ userId: e.id, guildId: t }),
        { analyticsLocations: s } = (0, u.Ay)(n),
        d = (0, a.bG)([o.default], () => o.default.getCurrentUser()?.id),
        E = !(0, y.rA)(l, y.yw.OFF) && null != i;
    r.useEffect(() => {
        E && null != d && (0, c.A)(d, void 0, { waitForRefetch: !1 }).catch(() => {});
    }, [E, d]);
    let x = r.useCallback(() => {
        null != i && (0, N.L)({ analyticsLocations: s, tryOnDisplayNameStyles: i, tryOnStyleOwner: e });
    }, [s, i, e]);
    return { placement: l, tryOnDisplayNameStyles: i, openTryOnEditor: x };
}
function w(e, t) {
    let { placement: n, tryOnDisplayNameStyles: r, openTryOnEditor: a } = b(e, t, d.A.USER_PROFILE_OVERFLOW_MENU);
    return (0, y.rA)(n, y.yw.TOP_LEVEL_MENU_ITEM) && null != r
        ? (0, l.jsx)(i.Dr, {
              id: "try-display-name-style",
              label: v.intl.string(h.default.oAYuZw),
              badge: { type: "beta", variant: "primary" },
              leadingAccessory: { type: "icon", icon: s.t },
              action: a,
          })
        : null;
}
function U(e, t) {
    let { placement: n, tryOnDisplayNameStyles: r, openTryOnEditor: a } = b(e, t, []);
    return (0, y.rA)(n, y.yw.TOP_LEVEL_MENU_ITEM) && null != r
        ? (0, l.jsx)(i.Dr, {
              id: "try-display-name-style",
              label: v.intl.string(h.default.oAYuZw),
              leadingAccessory: { type: "icon", icon: s.t },
              action: a,
          })
        : null;
}
function L(e, t) {
    let { placement: n, tryOnDisplayNameStyles: r, openTryOnEditor: a } = b(e, t, d.A.USER_PROFILE_OVERFLOW_MENU);
    return (0, y.rA)(n, y.yw.SUBMENU) && null != r
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(i.Dr, {
                      id: "try-display-name-style-header",
                      navigable: !1,
                      render: () => (0, l.jsx)(M, {}),
                  }),
                  (0, l.jsx)(i.Dr, {
                      id: "try-display-name-style-row",
                      navigable: !0,
                      keepItemStyles: !0,
                      render: () => (0, l.jsx)(g, { displayNameStyles: r }),
                      action: a,
                  }),
              ],
          })
        : null;
}
