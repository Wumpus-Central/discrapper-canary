r.d(t, { Z: () => x }), r(388685), r(953529);
var n = r(255367),
    o = r(73800),
    a = r(120356),
    i = r.n(a),
    s = r(481060),
    l = r(762762),
    c = r(973772),
    d = r(838968),
    u = r(795338),
    p = r(880419),
    f = r(279604),
    m = r(787188),
    v = r(388032),
    j = r(397321);
function x(e) {
    let { canUseBoosts: t, guildId: r, powerup: a } = e,
        [x, b] = o.useState(!1),
        g = (0, c.ZP)(r, a),
        O = (0, m._)(a, g, !1),
        y = (0, c.UP)(g),
        { disabled: C } = (0, l.Z)(r, a, y),
        { onShowDeactivate: h, onActivate: P } = (0, f.ZP)(r, a),
        k = !t || C,
        _ = y && !k,
        w = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: i()(j.perkCardImage, { [j.active]: y }),
                    children: (0, n.jsx)(u.m, {
                        powerup: a,
                        isHovering: !k && x,
                    }),
                }),
                (0, n.jsxs)("div", {
                    className: j.footerContainer,
                    children: [
                        (0, n.jsxs)("div", {
                            className: j.footerDetails,
                            children: [
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(s.Text, {
                                        variant: "text-sm/medium",
                                        color: (y || x) && !k ? "text-primary" : "text-secondary",
                                        children: a.description,
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    children: [
                                        (null == O ? void 0 : O.type) === "expiring" &&
                                            (0, n.jsx)(d.rL, { dateString: O.expiringAt }),
                                        (null == O ? void 0 : O.type) === "removing" &&
                                            (0, n.jsx)(d.c, { removingAt: O.removingAt }),
                                        (null == O ? void 0 : O.type) === "active" &&
                                            (0, n.jsx)(d.P2, { text: O.statusText }),
                                        null == O &&
                                            (0, n.jsxs)("div", {
                                                className: j.statusContainer,
                                                children: [
                                                    (0, n.jsx)(s.$Eu, {
                                                        size: "sm",
                                                        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                    }),
                                                    (0, n.jsx)(s.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-secondary",
                                                        children: v.intl.formatToPlainString(v.t.t2Wbo6, {
                                                            required: a.cost,
                                                            decorator: "",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        _ &&
                            (0, n.jsx)(p.Z, {
                                compact: !0,
                                iconSize: "md",
                                guildId: r,
                                powerup: a,
                                onClick: h,
                                className: j.toggleButton,
                            }),
                    ],
                }),
            ],
        });
    return y
        ? (0, n.jsx)("div", {
              className: i()(j.perkCard, j.activeCard, { [j.disabled]: k }),
              onMouseEnter: () => b(!0),
              onMouseLeave: () => b(!1),
              children: w,
          })
        : (0, n.jsx)(s.P3F, {
              className: i()(j.perkCard, { [j.disabled]: k }),
              onMouseEnter: () => b(!0),
              onMouseLeave: () => b(!1),
              "aria-disabled": k,
              onClick: (e) => {
                  e.stopPropagation(), k || null == P || P(e, { shouldCloseAllModals: !1 });
              },
              children: w,
          });
}
