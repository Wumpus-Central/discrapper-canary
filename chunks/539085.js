r.d(t, { A: () => O }), r(896048), r(228524);
var n = r(627968),
    o = r(64700),
    s = r(503698),
    c = r.n(s),
    i = r(397927),
    l = r(470934),
    a = r(998418),
    d = r(813847),
    u = r(890942),
    p = r(490557),
    b = r(439156),
    x = r(220628),
    f = r(867060),
    j = r(985018),
    m = r(235545);
function O(e) {
    let { canUseBoosts: t, guildId: r, powerup: s } = e,
        [O, y] = o.useState(!1),
        v = (0, a.Ay)(r, s),
        g = (0, d.e)(s, v, !1),
        h = (0, a.dy)(v),
        { disabled: w } = (0, l.A)(r, s, h),
        { onActivate: P, error: I } = (0, x.A)(r, s);
    (0, f.A)(I);
    let _ = !t || w,
        A = h && !_,
        N = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: c()(m._W, { [m.vu]: h }),
                    children: (0, n.jsx)(p.l, {
                        powerup: s,
                        isHovering: !_ && O,
                    }),
                }),
                (0, n.jsxs)("div", {
                    className: m.xQ,
                    children: [
                        (0, n.jsxs)("div", {
                            className: m.U7,
                            children: [
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(i.Text, {
                                        variant: "text-sm/medium",
                                        color: (h || O) && !_ ? "text-strong" : "text-subtle",
                                        children: s.description,
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    children: [
                                        (null == g ? void 0 : g.type) === "expiring" &&
                                            (0, n.jsx)(u.P5, { dateString: g.expiringAt }),
                                        (null == g ? void 0 : g.type) === "removing" &&
                                            (0, n.jsx)(u.Yq, { removingAt: g.removingAt }),
                                        (null == g ? void 0 : g.type) === "active" &&
                                            (0, n.jsx)(u.TG, { text: g.statusText }),
                                        null == g &&
                                            (0, n.jsxs)("div", {
                                                className: m.II,
                                                children: [
                                                    (0, n.jsx)(i._Jp, {
                                                        size: "sm",
                                                        color: i.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                    }),
                                                    (0, n.jsx)(i.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-subtle",
                                                        children: j.intl.formatToPlainString(j.t.t2Wbo1, {
                                                            required: s.cost,
                                                            decorator: "",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        A &&
                            (0, n.jsx)(b.A, {
                                compact: !0,
                                iconSize: "md",
                                guildId: r,
                                powerup: s,
                                className: m.Rm,
                            }),
                    ],
                }),
            ],
        });
    return h
        ? (0, n.jsx)("div", {
              className: c()(m.nK, m.RO, { [m.r9]: _ }),
              onMouseEnter: () => y(!0),
              onMouseLeave: () => y(!1),
              children: N,
          })
        : (0, n.jsx)(i.DUT, {
              className: c()(m.nK, { [m.r9]: _ }),
              onMouseEnter: () => y(!0),
              onMouseLeave: () => y(!1),
              "aria-disabled": _,
              onClick: (e) => {
                  e.stopPropagation(), _ || null == P || P({ shouldCloseAllModals: !1 });
              },
              children: N,
          });
}
