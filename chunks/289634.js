i.d(s, { default: () => S });
var t = i(477900),
    a = i(189213),
    r = i(834730),
    n = i(363487),
    l = i(582128),
    c = i(503698),
    d = i.n(c),
    o = i(62010),
    x = i(104510),
    u = i(661531),
    m = i(939249),
    p = i(470934),
    v = i(998418),
    h = i(813847),
    j = i(612400),
    g = i(72377),
    N = i(439156),
    I = i(249286),
    A = i(867060),
    b = i(105292),
    k = i(434031);
function w(e) {
    let { canUseBoosts: s, guildId: i, powerup: a, isNewPerk: n, forceStaticImages: c } = e,
        [w, f] = l.useState(!1),
        S = (0, v.Ay)(i, a),
        y = (0, h.e)(a, S, !1),
        _ = (0, v.dy)(S),
        { disabled: E } = (0, p.A)(i, a, _),
        { onActivate: C, error: M } = (0, I.A)(i, a);
    (0, A.A)(M);
    let P = !s || E,
        T = _ && !P,
        q = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)("div", {
                    className: k.R9,
                    children: [
                        (0, t.jsx)("div", {
                            className: d()(k._W, { [k.vu]: _ }),
                            children: (0, t.jsx)(g.l, { powerup: a, isHovering: !P && w, forceStaticImage: c }),
                        }),
                        n &&
                            (0, t.jsx)("div", {
                                className: k.qS,
                                children: (0, t.jsx)(o.E, { type: "new", variant: "primary" }),
                            }),
                    ],
                }),
                (0, t.jsxs)("div", {
                    className: k.xQ,
                    children: [
                        (0, t.jsxs)("div", {
                            className: k.U7,
                            children: [
                                (0, t.jsx)("div", {
                                    children: (0, t.jsx)(r.E, {
                                        variant: "text-sm/medium",
                                        color: (_ || w) && !P ? "text-strong" : "text-subtle",
                                        children: a.description,
                                    }),
                                }),
                                (0, t.jsxs)("div", {
                                    children: [
                                        y?.type === "expiring" && (0, t.jsx)(j.P5, { dateString: y.expiringAt }),
                                        y?.type === "removing" && (0, t.jsx)(j.Yq, { removingAt: y.removingAt }),
                                        y?.type === "active" && (0, t.jsx)(j.TG, { text: y.statusText }),
                                        null == y &&
                                            (0, t.jsxs)("div", {
                                                className: k.II,
                                                children: [
                                                    (0, t.jsx)(x._, {
                                                        size: "sm",
                                                        color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                    }),
                                                    (0, t.jsx)(r.E, {
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
                        T && (0, t.jsx)(N.A, { compact: !0, iconSize: "md", guildId: i, powerup: a, className: k.Rm }),
                    ],
                }),
            ],
        });
    return _
        ? (0, t.jsx)("div", {
              className: d()(k.nK, k.RO, { [k.r9]: P }),
              onMouseEnter: () => f(!0),
              onMouseLeave: () => f(!1),
              children: q,
          })
        : (0, t.jsx)(m.D, {
              className: d()(k.nK, { [k.r9]: P }),
              onMouseEnter: () => f(!0),
              onMouseLeave: () => f(!1),
              "aria-disabled": P,
              onClick: (e) => {
                  (e.stopPropagation(), P || C?.({ shouldCloseAllModals: !1 }));
              },
              children: q,
          });
}
var f = i(620968);
function S(e) {
    let {
            guildId: s,
            title: i,
            description: l,
            powerups: c,
            newPowerupSkuIdSet: d,
            forceStaticImages: o,
            footerInfoText: x,
            footerAction: u,
            ...m
        } = e,
        p = (0, n.A)(s),
        v =
            null != x && x.length > 0
                ? (0, t.jsx)("div", {
                      className: f.x,
                      children: (0, t.jsx)(r.E, {
                          variant: "text-sm/semibold",
                          color: "text-feedback-warning",
                          children: x,
                      }),
                  })
                : void 0;
    return (0, t.jsx)(a.a, {
        title: i,
        subtitle: l,
        actionBarInput: v,
        actions: null != u ? [u] : [],
        ...m,
        children: (0, t.jsx)("div", {
            className: f.p,
            children: c.map((e) =>
                (0, t.jsx)(
                    w,
                    { guildId: s, powerup: e, canUseBoosts: p ?? !1, isNewPerk: d?.has(e.skuId), forceStaticImages: o },
                    e.skuId,
                ),
            ),
        }),
    });
}
