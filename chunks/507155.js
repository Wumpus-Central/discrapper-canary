r.d(t, { Z: () => b }), r(388685), r(953529);
var n = r(951288),
    o = r(647438),
    a = r(120356),
    i = r.n(a),
    s = r(481060),
    l = r(762762),
    c = r(973772),
    d = r(838968),
    u = r(795338),
    p = r(880419),
    f = r(279604),
    v = r(787188),
    j = r(388032),
    x = r(397321);
function b(e) {
    let { canUseBoosts: t, guildId: r, powerup: a } = e,
        [b, m] = o.useState(!1),
        O = (0, c.ZP)(r, a),
        g = (0, v._)(a, O, !1),
        y = (0, c.UP)(O),
        { disabled: C } = (0, l.Z)(r, a, y),
        { onShowDeactivate: h, onActivate: P } = (0, f.ZP)(r, a),
        k = !t || C,
        w = y && !k,
        _ = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: i()(x.perkCardImage, { [x.active]: y }),
                    children: (0, n.jsx)(u.m, {
                        powerup: a,
                        isHovering: !k && b,
                    }),
                }),
                (0, n.jsxs)("div", {
                    className: x.footerContainer,
                    children: [
                        (0, n.jsxs)("div", {
                            className: x.footerDetails,
                            children: [
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(s.Text, {
                                        variant: "text-sm/medium",
                                        color: (y || b) && !k ? "text-primary" : "text-secondary",
                                        children: a.description,
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    children: [
                                        (null == g ? void 0 : g.type) === "expiring" &&
                                            (0, n.jsx)(d.rL, { dateString: g.expiringAt }),
                                        (null == g ? void 0 : g.type) === "removing" &&
                                            (0, n.jsx)(d.c, { removingAt: g.removingAt }),
                                        (null == g ? void 0 : g.type) === "active" &&
                                            (0, n.jsx)(d.P2, { text: g.statusText }),
                                        null == g &&
                                            (0, n.jsxs)("div", {
                                                className: x.statusContainer,
                                                children: [
                                                    (0, n.jsx)(s.$Eu, {
                                                        size: "sm",
                                                        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                    }),
                                                    (0, n.jsx)(s.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-secondary",
                                                        children: j.intl.formatToPlainString(j.t.t2Wbo6, {
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
                        w &&
                            (0, n.jsx)(p.Z, {
                                guildId: r,
                                powerup: a,
                                onClick: h,
                            }),
                    ],
                }),
            ],
        });
    return y
        ? (0, n.jsx)("div", {
              className: i()(x.perkCard, x.activeCard, { [x.disabled]: k }),
              onMouseEnter: () => m(!0),
              onMouseLeave: () => m(!1),
              children: _,
          })
        : (0, n.jsx)(s.P3F, {
              className: i()(x.perkCard, { [x.disabled]: k }),
              onMouseEnter: () => m(!0),
              onMouseLeave: () => m(!1),
              "aria-disabled": k,
              onClick: (e) => {
                  e.stopPropagation(), k || null == P || P(e, { shouldCloseAllModals: !1 });
              },
              children: _,
          });
}
