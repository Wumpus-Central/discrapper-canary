s.d(a, { A: () => _ });
var t = s(627968),
    i = s(64700),
    r = s(503698),
    n = s.n(r),
    d = s(397927),
    o = s(470934),
    l = s(998418),
    c = s(813847),
    x = s(890942),
    u = s(490557),
    m = s(439156),
    p = s(220628),
    v = s(867060),
    h = s(985018),
    j = s(235545);
function _(e) {
    let { canUseBoosts: a, guildId: s, powerup: r, isNewPerk: _, forceStaticImages: g } = e,
        [I, C] = i.useState(!1),
        N = (0, l.Ay)(s, r),
        f = (0, c.e)(r, N, !1),
        A = (0, l.dy)(N),
        { disabled: k } = (0, o.A)(s, r, A),
        { onActivate: b, error: S } = (0, p.A)(s, r);
    (0, v.A)(S);
    let T = !a || k,
        w = A && !T,
        y = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)("div", {
                    className: j.R9,
                    children: [
                        (0, t.jsx)("div", {
                            className: n()(j._W, { [j.vu]: A }),
                            children: (0, t.jsx)(u.l, { powerup: r, isHovering: !T && I, forceStaticImage: g }),
                        }),
                        _ && (0, t.jsx)(d.LpS, { className: j.qS, text: h.intl.string(h.t.y2b7CA) }),
                    ],
                }),
                (0, t.jsxs)("div", {
                    className: j.xQ,
                    children: [
                        (0, t.jsxs)("div", {
                            className: j.U7,
                            children: [
                                (0, t.jsx)("div", {
                                    children: (0, t.jsx)(d.Text, {
                                        variant: "text-sm/medium",
                                        color: (A || I) && !T ? "text-strong" : "text-subtle",
                                        children: r.description,
                                    }),
                                }),
                                (0, t.jsxs)("div", {
                                    children: [
                                        f?.type === "expiring" && (0, t.jsx)(x.P5, { dateString: f.expiringAt }),
                                        f?.type === "removing" && (0, t.jsx)(x.Yq, { removingAt: f.removingAt }),
                                        f?.type === "active" && (0, t.jsx)(x.TG, { text: f.statusText }),
                                        null == f &&
                                            (0, t.jsxs)("div", {
                                                className: j.II,
                                                children: [
                                                    (0, t.jsx)(d._Jp, {
                                                        size: "sm",
                                                        color: d.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                    }),
                                                    (0, t.jsx)(d.Text, {
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
                        w && (0, t.jsx)(m.A, { compact: !0, iconSize: "md", guildId: s, powerup: r, className: j.Rm }),
                    ],
                }),
            ],
        });
    return A
        ? (0, t.jsx)("div", {
              className: n()(j.nK, j.RO, { [j.r9]: T }),
              onMouseEnter: () => C(!0),
              onMouseLeave: () => C(!1),
              children: y,
          })
        : (0, t.jsx)(d.DUT, {
              className: n()(j.nK, { [j.r9]: T }),
              onMouseEnter: () => C(!0),
              onMouseLeave: () => C(!1),
              "aria-disabled": T,
              onClick: (e) => {
                  e.stopPropagation(), T || b?.({ shouldCloseAllModals: !1 });
              },
              children: y,
          });
}
