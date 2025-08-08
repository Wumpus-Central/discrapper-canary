r.d(t, { Z: () => v }), r(388685), r(953529);
var n = r(255367),
    o = r(73800),
    a = r(120356),
    i = r.n(a),
    s = r(481060),
    l = r(762762),
    d = r(973772),
    c = r(838968),
    u = r(795338),
    p = r(880419),
    f = r(279604),
    x = r(787188),
    m = r(388032),
    j = r(153013);
function v(e) {
    let { canUseBoosts: t, guildId: r, powerup: a } = e,
        [v, C] = o.useState(!1),
        g = (0, d.ZP)(r, a),
        b = (0, x._)(a, g, !1),
        h = (0, d.UP)(g),
        { disabled: y } = (0, l.Z)(r, a, h),
        { onShowDeactivate: O, onActivate: k } = (0, f.ZP)(r, a),
        P = !t || y,
        _ = h && !P,
        w = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: i()(j.perkCardImage, { [j.active]: h }),
                    children: (0, n.jsx)(u.m, {
                        powerup: a,
                        isHovering: v,
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
                                        color: h || v ? "text-primary" : "text-secondary",
                                        children: a.description,
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    children: [
                                        (null == b ? void 0 : b.type) === "expiring" &&
                                            (0, n.jsx)(c.rL, { dateString: b.expiringAt }),
                                        (null == b ? void 0 : b.type) === "removing" &&
                                            (0, n.jsx)(c.c, { removingAt: b.removingAt }),
                                        (null == b ? void 0 : b.type) === "active" &&
                                            (0, n.jsx)(c.P2, { text: b.statusText }),
                                        null == b &&
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
                                                        children: m.intl.formatToPlainString(m.t.t2Wbo6, {
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
                                onClick: O,
                                className: j.toggleButton,
                            }),
                    ],
                }),
            ],
        });
    return h
        ? (0, n.jsx)("div", {
              className: i()(j.perkCard, j.activeCard, { [j.disabled]: P }),
              onMouseEnter: () => C(!0),
              onMouseLeave: () => C(!1),
              children: w,
          })
        : (0, n.jsx)(s.P3F, {
              className: i()(j.perkCard, { [j.disabled]: P }),
              onMouseEnter: () => C(!0),
              onMouseLeave: () => C(!1),
              "aria-disabled": P,
              onClick: (e) => {
                  e.stopPropagation(), P || null == k || k(e, { shouldCloseAllModals: !1 });
              },
              children: w,
          });
}
