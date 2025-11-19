r.d(t, { Z: () => x }), r(388685), r(953529);
var n = r(54381),
    o = r(473749),
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
    m = r(388032),
    j = r(489454);
function x(e) {
    let { canUseBoosts: t, guildId: r, powerup: a } = e,
        [x, b] = o.useState(!1),
        g = (0, c.ZP)(r, a),
        O = (0, v._)(a, g, !1),
        y = (0, c.UP)(g),
        { disabled: C } = (0, l.Z)(r, a, y),
        { onActivate: h } = (0, f.ZP)(r, a),
        P = !t || C,
        k = y && !P,
        _ = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: i()(j.perkCardImage, { [j.active]: y }),
                    children: (0, n.jsx)(u.m, {
                        powerup: a,
                        isHovering: !P && x,
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
                                        color: (y || x) && !P ? "text-primary" : "text-secondary",
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
                                                    (0, n.jsx)(s.Ucv, {
                                                        size: "sm",
                                                        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                    }),
                                                    (0, n.jsx)(s.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-secondary",
                                                        children: m.intl.formatToPlainString(m.t.t2Wbo1, {
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
                        k &&
                            (0, n.jsx)(p.Z, {
                                compact: !0,
                                iconSize: "md",
                                guildId: r,
                                powerup: a,
                                className: j.toggleButton,
                            }),
                    ],
                }),
            ],
        });
    return y
        ? (0, n.jsx)("div", {
              className: i()(j.perkCard, j.activeCard, { [j.disabled]: P }),
              onMouseEnter: () => b(!0),
              onMouseLeave: () => b(!1),
              children: _,
          })
        : (0, n.jsx)(s.P3F, {
              className: i()(j.perkCard, { [j.disabled]: P }),
              onMouseEnter: () => b(!0),
              onMouseLeave: () => b(!1),
              "aria-disabled": P,
              onClick: (e) => {
                  e.stopPropagation(), P || null == h || h(e, { shouldCloseAllModals: !1 });
              },
              children: _,
          });
}
