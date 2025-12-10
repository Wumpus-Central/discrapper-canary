r.d(t, { Z: () => m }), r(388685), r(953529);
var n = r(54381),
    o = r(473749),
    a = r(120356),
    i = r.n(a),
    s = r(481060),
    l = r(762762),
    c = r(448222),
    d = r(973772),
    u = r(329134),
    p = r(838968),
    f = r(795338),
    v = r(880419),
    b = r(388032),
    j = r(397321);
function m(e) {
    let { canUseBoosts: t, guildId: r, powerup: a } = e,
        [m, x] = o.useState(!1),
        g = (0, d.ZP)(r, a),
        O = (0, u.P)(a, g, !1),
        C = (0, d.UP)(g),
        { disabled: h } = (0, l.Z)(r, a, C),
        { onActivate: y } = (0, c.Z)(r, a),
        P = !t || h,
        k = C && !P,
        w = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: i()(j.perkCardImage, { [j.active]: C }),
                    children: (0, n.jsx)(f.m, {
                        powerup: a,
                        isHovering: !P && m,
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
                                        color: (C || m) && !P ? "text-strong" : "text-subtle",
                                        children: a.description,
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    children: [
                                        (null == O ? void 0 : O.type) === "expiring" &&
                                            (0, n.jsx)(p.rL, { dateString: O.expiringAt }),
                                        (null == O ? void 0 : O.type) === "removing" &&
                                            (0, n.jsx)(p.c, { removingAt: O.removingAt }),
                                        (null == O ? void 0 : O.type) === "active" &&
                                            (0, n.jsx)(p.P2, { text: O.statusText }),
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
                                                        color: "text-subtle",
                                                        children: b.intl.formatToPlainString(b.t.t2Wbo1, {
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
                            (0, n.jsx)(v.Z, {
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
    return C
        ? (0, n.jsx)("div", {
              className: i()(j.perkCard, j.activeCard, { [j.disabled]: P }),
              onMouseEnter: () => x(!0),
              onMouseLeave: () => x(!1),
              children: w,
          })
        : (0, n.jsx)(s.P3F, {
              className: i()(j.perkCard, { [j.disabled]: P }),
              onMouseEnter: () => x(!0),
              onMouseLeave: () => x(!1),
              "aria-disabled": P,
              onClick: (e) => {
                  e.stopPropagation(), P || null == y || y({ shouldCloseAllModals: !1 });
              },
              children: w,
          });
}
