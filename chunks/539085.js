t.d(s, { A: () => _ });
var a = t(627968),
    i = t(64700),
    r = t(503698),
    n = t.n(r),
    d = t(397927),
    o = t(470934),
    l = t(998418),
    c = t(813847),
    x = t(890942),
    u = t(490557),
    p = t(439156),
    m = t(220628),
    v = t(867060),
    h = t(985018),
    j = t(235545);
function _(e) {
    let { canUseBoosts: s, guildId: t, powerup: r } = e,
        [_, g] = i.useState(!1),
        C = (0, l.Ay)(t, r),
        I = (0, c.e)(r, C, !1),
        A = (0, l.dy)(C),
        { disabled: f } = (0, o.A)(t, r, A),
        { onActivate: N, error: k } = (0, m.A)(t, r);
    (0, v.A)(k);
    let b = !s || f,
        T = A && !b,
        w = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: n()(j._W, { [j.vu]: A }),
                    children: (0, a.jsx)(u.l, { powerup: r, isHovering: !b && _ }),
                }),
                (0, a.jsxs)("div", {
                    className: j.xQ,
                    children: [
                        (0, a.jsxs)("div", {
                            className: j.U7,
                            children: [
                                (0, a.jsx)("div", {
                                    children: (0, a.jsx)(d.Text, {
                                        variant: "text-sm/medium",
                                        color: (A || _) && !b ? "text-strong" : "text-subtle",
                                        children: r.description,
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    children: [
                                        I?.type === "expiring" && (0, a.jsx)(x.P5, { dateString: I.expiringAt }),
                                        I?.type === "removing" && (0, a.jsx)(x.Yq, { removingAt: I.removingAt }),
                                        I?.type === "active" && (0, a.jsx)(x.TG, { text: I.statusText }),
                                        null == I &&
                                            (0, a.jsxs)("div", {
                                                className: j.II,
                                                children: [
                                                    (0, a.jsx)(d._Jp, {
                                                        size: "sm",
                                                        color: d.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                    }),
                                                    (0, a.jsx)(d.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-subtle",
                                                        children: h.intl.formatToPlainString(h.t.t2Wbo1, {
                                                            required: r.cost,
                                                            decorator: "",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        T && (0, a.jsx)(p.A, { compact: !0, iconSize: "md", guildId: t, powerup: r, className: j.Rm }),
                    ],
                }),
            ],
        });
    return A
        ? (0, a.jsx)("div", {
              className: n()(j.nK, j.RO, { [j.r9]: b }),
              onMouseEnter: () => g(!0),
              onMouseLeave: () => g(!1),
              children: w,
          })
        : (0, a.jsx)(d.DUT, {
              className: n()(j.nK, { [j.r9]: b }),
              onMouseEnter: () => g(!0),
              onMouseLeave: () => g(!1),
              "aria-disabled": b,
              onClick: (e) => {
                  e.stopPropagation(), b || N?.({ shouldCloseAllModals: !1 });
              },
              children: w,
          });
}
