s.d(a, { A: () => f });
var t = s(627968),
    i = s(64700),
    r = s(503698),
    n = s.n(r),
    d = s(777666),
    o = s(834730),
    l = s(104510),
    c = s(827734),
    x = s(939249),
    u = s(470934),
    m = s(998418),
    p = s(813847),
    v = s(890942),
    h = s(490557),
    j = s(439156),
    g = s(220628),
    _ = s(867060),
    I = s(985018),
    C = s(416122);
function f(e) {
    let { canUseBoosts: a, guildId: s, powerup: r, isNewPerk: f, forceStaticImages: A } = e,
        [N, k] = i.useState(!1),
        b = (0, m.Ay)(s, r),
        S = (0, p.e)(r, b, !1),
        w = (0, m.dy)(b),
        { disabled: y } = (0, u.A)(s, r, w),
        { onActivate: M, error: R } = (0, g.A)(s, r);
    (0, _.A)(R);
    let E = !a || y,
        P = w && !E,
        q = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)("div", {
                    className: C.R9,
                    children: [
                        (0, t.jsx)("div", {
                            className: n()(C._W, { [C.vu]: w }),
                            children: (0, t.jsx)(h.l, { powerup: r, isHovering: !E && N, forceStaticImage: A }),
                        }),
                        f && (0, t.jsx)(d.Lp, { className: C.qS, text: I.intl.string(I.t.y2b7CA) }),
                    ],
                }),
                (0, t.jsxs)("div", {
                    className: C.xQ,
                    children: [
                        (0, t.jsxs)("div", {
                            className: C.U7,
                            children: [
                                (0, t.jsx)("div", {
                                    children: (0, t.jsx)(o.E, {
                                        variant: "text-sm/medium",
                                        color: (w || N) && !E ? "text-strong" : "text-subtle",
                                        children: r.description,
                                    }),
                                }),
                                (0, t.jsxs)("div", {
                                    children: [
                                        S?.type === "expiring" && (0, t.jsx)(v.P5, { dateString: S.expiringAt }),
                                        S?.type === "removing" && (0, t.jsx)(v.Yq, { removingAt: S.removingAt }),
                                        S?.type === "active" && (0, t.jsx)(v.TG, { text: S.statusText }),
                                        null == S &&
                                            (0, t.jsxs)("div", {
                                                className: C.II,
                                                children: [
                                                    (0, t.jsx)(l._, {
                                                        size: "sm",
                                                        color: c.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                    }),
                                                    (0, t.jsx)(o.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-subtle",
                                                        children: I.intl.formatToPlainString(I.t.t2Wbo1, {
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
                        P && (0, t.jsx)(j.A, { compact: !0, iconSize: "md", guildId: s, powerup: r, className: C.Rm }),
                    ],
                }),
            ],
        });
    return w
        ? (0, t.jsx)("div", {
              className: n()(C.nK, C.RO, { [C.r9]: E }),
              onMouseEnter: () => k(!0),
              onMouseLeave: () => k(!1),
              children: q,
          })
        : (0, t.jsx)(x.D, {
              className: n()(C.nK, { [C.r9]: E }),
              onMouseEnter: () => k(!0),
              onMouseLeave: () => k(!1),
              "aria-disabled": E,
              onClick: (e) => {
                  e.stopPropagation(), E || M?.({ shouldCloseAllModals: !1 });
              },
              children: q,
          });
}
