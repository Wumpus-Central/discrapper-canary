r.d(t, { Z: () => x }), r(388685), r(953529);
var n = r(54381),
    o = r(473749),
    a = r(120356),
    i = r.n(a),
    s = r(481060),
    l = r(762762),
    d = r(973772),
    c = r(329134),
    u = r(838968),
    p = r(795338),
    f = r(880419),
    b = r(994234),
    v = r(192958),
    j = r(388032),
    m = r(599374);
function x(e) {
    let { canUseBoosts: t, guildId: r, powerup: a } = e,
        [x, g] = o.useState(!1),
        O = (0, d.ZP)(r, a),
        C = (0, c.P)(a, O, !1),
        h = (0, d.UP)(O),
        { disabled: y } = (0, l.Z)(r, a, h),
        { onActivate: P, error: k } = (0, b.Z)(r, a);
    (0, v.Z)(k);
    let w = !t || y,
        I = h && !w,
        N = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: i()(m.perkCardImage, { [m.active]: h }),
                    children: (0, n.jsx)(p.m, {
                        powerup: a,
                        isHovering: !w && x,
                    }),
                }),
                (0, n.jsxs)("div", {
                    className: m.footerContainer,
                    children: [
                        (0, n.jsxs)("div", {
                            className: m.footerDetails,
                            children: [
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(s.Text, {
                                        variant: "text-sm/medium",
                                        color: (h || x) && !w ? "text-strong" : "text-subtle",
                                        children: a.description,
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    children: [
                                        (null == C ? void 0 : C.type) === "expiring" &&
                                            (0, n.jsx)(u.rL, { dateString: C.expiringAt }),
                                        (null == C ? void 0 : C.type) === "removing" &&
                                            (0, n.jsx)(u.c, { removingAt: C.removingAt }),
                                        (null == C ? void 0 : C.type) === "active" &&
                                            (0, n.jsx)(u.P2, { text: C.statusText }),
                                        null == C &&
                                            (0, n.jsxs)("div", {
                                                className: m.statusContainer,
                                                children: [
                                                    (0, n.jsx)(s.Ucv, {
                                                        size: "sm",
                                                        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                    }),
                                                    (0, n.jsx)(s.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-subtle",
                                                        children: j.intl.formatToPlainString(j.t.t2Wbo1, {
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
                        I &&
                            (0, n.jsx)(f.Z, {
                                compact: !0,
                                iconSize: "md",
                                guildId: r,
                                powerup: a,
                                className: m.toggleButton,
                            }),
                    ],
                }),
            ],
        });
    return h
        ? (0, n.jsx)("div", {
              className: i()(m.perkCard, m.activeCard, { [m.disabled]: w }),
              onMouseEnter: () => g(!0),
              onMouseLeave: () => g(!1),
              children: N,
          })
        : (0, n.jsx)(s.P3F, {
              className: i()(m.perkCard, { [m.disabled]: w }),
              onMouseEnter: () => g(!0),
              onMouseLeave: () => g(!1),
              "aria-disabled": w,
              onClick: (e) => {
                  e.stopPropagation(), w || null == P || P({ shouldCloseAllModals: !1 });
              },
              children: N,
          });
}
