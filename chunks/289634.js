s.d(a, { default: () => A });
var t = s(627968),
    i = s(189213),
    r = s(834730),
    n = s(363487),
    d = s(64700),
    o = s(503698),
    l = s.n(o),
    c = s(777666),
    x = s(104510),
    u = s(661531),
    m = s(939249),
    p = s(470934),
    v = s(998418),
    h = s(813847),
    j = s(369174),
    g = s(490557),
    _ = s(439156),
    I = s(249286),
    C = s(867060),
    f = s(985018),
    N = s(416122);
function k(e) {
    let { canUseBoosts: a, guildId: s, powerup: i, isNewPerk: n, forceStaticImages: o } = e,
        [k, b] = d.useState(!1),
        A = (0, v.Ay)(s, i),
        S = (0, h.e)(i, A, !1),
        w = (0, v.dy)(A),
        { disabled: y } = (0, p.A)(s, i, w),
        { onActivate: M, error: R } = (0, I.A)(s, i);
    (0, C.A)(R);
    let E = !a || y,
        P = w && !E,
        q = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)("div", {
                    className: N.R9,
                    children: [
                        (0, t.jsx)("div", {
                            className: l()(N._W, { [N.vu]: w }),
                            children: (0, t.jsx)(g.l, { powerup: i, isHovering: !E && k, forceStaticImage: o }),
                        }),
                        n && (0, t.jsx)(c.Lp, { className: N.qS, text: f.intl.string(f.t.y2b7CA) }),
                    ],
                }),
                (0, t.jsxs)("div", {
                    className: N.xQ,
                    children: [
                        (0, t.jsxs)("div", {
                            className: N.U7,
                            children: [
                                (0, t.jsx)("div", {
                                    children: (0, t.jsx)(r.E, {
                                        variant: "text-sm/medium",
                                        color: (w || k) && !E ? "text-strong" : "text-subtle",
                                        children: i.description,
                                    }),
                                }),
                                (0, t.jsxs)("div", {
                                    children: [
                                        S?.type === "expiring" && (0, t.jsx)(j.P5, { dateString: S.expiringAt }),
                                        S?.type === "removing" && (0, t.jsx)(j.Yq, { removingAt: S.removingAt }),
                                        S?.type === "active" && (0, t.jsx)(j.TG, { text: S.statusText }),
                                        null == S &&
                                            (0, t.jsxs)("div", {
                                                className: N.II,
                                                children: [
                                                    (0, t.jsx)(x._, {
                                                        size: "sm",
                                                        color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                    }),
                                                    (0, t.jsx)(r.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-subtle",
                                                        children: f.intl.formatToPlainString(f.t.t2Wbo1, {
                                                            required: i.cost,
                                                            decorator: "",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        P && (0, t.jsx)(_.A, { compact: !0, iconSize: "md", guildId: s, powerup: i, className: N.Rm }),
                    ],
                }),
            ],
        });
    return w
        ? (0, t.jsx)("div", {
              className: l()(N.nK, N.RO, { [N.r9]: E }),
              onMouseEnter: () => b(!0),
              onMouseLeave: () => b(!1),
              children: q,
          })
        : (0, t.jsx)(m.D, {
              className: l()(N.nK, { [N.r9]: E }),
              onMouseEnter: () => b(!0),
              onMouseLeave: () => b(!1),
              "aria-disabled": E,
              onClick: (e) => {
                  e.stopPropagation(), E || M?.({ shouldCloseAllModals: !1 });
              },
              children: q,
          });
}
var b = s(422699);
function A(e) {
    let {
            guildId: a,
            title: s,
            description: d,
            powerups: o,
            newPowerupSkuIdSet: l,
            forceStaticImages: c,
            footerInfoText: x,
            footerAction: u,
            ...m
        } = e,
        p = (0, n.A)(a),
        v =
            null != x && x.length > 0
                ? (0, t.jsx)("div", {
                      className: b.x,
                      children: (0, t.jsx)(r.E, {
                          variant: "text-sm/semibold",
                          color: "text-feedback-warning",
                          children: x,
                      }),
                  })
                : void 0;
    return (0, t.jsx)(i.Modal, {
        title: s,
        subtitle: d,
        actionBarInput: v,
        actions: null != u ? [u] : [],
        ...m,
        children: (0, t.jsx)("div", {
            className: b.p,
            children: o.map((e) =>
                (0, t.jsx)(
                    k,
                    { guildId: a, powerup: e, canUseBoosts: p ?? !1, isNewPerk: l?.has(e.skuId), forceStaticImages: c },
                    e.skuId,
                ),
            ),
        }),
    });
}
