n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(755721),
    s = n(481060),
    c = n(393238),
    u = n(428967),
    d = n(266454),
    p = n(605236),
    f = n(279745),
    h = n(921944),
    g = n(388032),
    m = n(882482);
let b = i.forwardRef(function (e, t) {
    let {
            body: n,
            header: l,
            artClassName: b,
            headerClassName: O,
            contentClassName: y,
            tryItText: _,
            dismissText: j,
            onTryFeature: v,
            onClose: x,
            className: C,
            inlineArt: E = !1,
            isPremiumFeature: S = !1,
            shouldUseHorizontalButtons: P = !1,
            showGIFTag: I = !1,
            dismissibleContent: N,
            position: Z = "top",
            align: w = "center",
            art: T,
            isPremiumEarlyAccess: A = !1,
            maxWidth: R = 280,
            hideDismissButton: D = !1,
            pointerClassName: L,
            dismissIconClassName: M,
            dismissIcon: k,
            onDismissIconClick: U,
            tryItButtonColor: G,
        } = e,
        B = P ? a.zx.Sizes.LARGE : a.zx.Sizes.MAX,
        [V, F] = i.useState(!1),
        { ref: H, width: z } = (0, c.ZP)();
    function W(e) {
        if ((0, u.lg)(N)) return void (0, p.bj)(N, { dismissAction: e });
        (0, d.Q3)(N, { dismissAction: e });
    }
    return (
        i.useEffect(() => {
            var e, t;
            let n = (null != (t = null == (e = H.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
            !V && n > R && F(!0);
        }, [V, z, H, R]),
        i.useEffect(() => {
            (0, p.kk)(N);
        }, [N]),
        (0, r.jsx)("div", {
            className: C,
            ref: t,
            children: (0, r.jsxs)("div", {
                className: o()(m.content, y, {
                    [m.contentNoArt]: null == b || E,
                    [m.contentPremium]: S || A,
                }),
                children: [
                    null != k &&
                        (0, r.jsx)(s.P3F, {
                            onClick: U,
                            className: M,
                            children: k,
                        }),
                    (0, r.jsxs)("div", {
                        className: o()(b, E ? m.artInline : m.artAbsolute),
                        children: [I && (0, r.jsx)(f.Z, { className: m.gifTag }), T],
                    }),
                    (0, r.jsxs)("div", {
                        className: m.body,
                        children: [
                            (0, r.jsxs)(s.X6q, {
                                className: o()(S ? m.headerWithPremiumIcon : m.header, O),
                                variant: "heading-md/bold",
                                color: "always-white",
                                children: [
                                    S && !A
                                        ? (0, r.jsx)(s.SrA, {
                                              size: "md",
                                              color: "currentColor",
                                              className: m.premiumIcon,
                                          })
                                        : null,
                                    A
                                        ? (0, r.jsxs)(s.Text, {
                                              color: "always-white",
                                              variant: "eyebrow",
                                              className: m.earlyAccessBadgeContainer,
                                              children: [
                                                  (0, r.jsx)(s.SrA, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: m.earlyAccessIcon,
                                                  }),
                                                  (0, r.jsx)("span", {
                                                      className: m.earlyAccessText,
                                                      children: g.intl.string(g.t.phHyIS),
                                                  }),
                                              ],
                                          })
                                        : null,
                                    l,
                                ],
                            }),
                            null == n
                                ? null
                                : "string" == typeof n
                                  ? (0, r.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        color: "always-white",
                                        children: n,
                                    })
                                  : n,
                        ],
                    }),
                    (0, r.jsx)("div", {
                        ref: H,
                        className: V || !P ? m.buttonContainerVertical : m.buttonContainerHorizontal,
                        children:
                            null != v
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(a.zx, {
                                              className: m.button,
                                              size: B,
                                              onClick: (e) => {
                                                  null == x || x(e), v(e), W(h.L.PRIMARY);
                                              },
                                              color:
                                                  null != G
                                                      ? G
                                                      : S || A
                                                        ? a.zx.Colors.BRAND_INVERTED
                                                        : a.zx.Colors.WHITE,
                                              children: null != _ ? _ : g.intl.string(g.t.IHf1RE),
                                          }),
                                          !D &&
                                              (0, r.jsx)(a.zx, {
                                                  className: m.button,
                                                  size: B,
                                                  onClick: (e) => {
                                                      null == x || x(e), W(h.L.DISMISS);
                                                  },
                                                  color: S || A ? a.zx.Colors.WHITE : a.zx.Colors.BRAND,
                                                  look: S || A ? a.zx.Looks.LINK : a.zx.Looks.FILLED,
                                                  children: null != j ? j : g.intl.string(g.t.om7Ovr),
                                              }),
                                      ],
                                  })
                                : (0, r.jsx)(a.zx, {
                                      className: m.button,
                                      size: a.zx.Sizes.MAX,
                                      onClick: (e) => {
                                          null == x || x(e), W(h.L.PRIMARY);
                                      },
                                      color: a.zx.Colors.WHITE,
                                      children: g.intl.string(g.t.HU2IR0),
                                  }),
                    }),
                    (0, r.jsx)("div", {
                        className: o()(m.pointer, L, {
                            [m.bottomPointer]: "top" === Z,
                            [m.centerLeftPointer]: "right" === Z && "center" === w,
                            [m.topLeftPointer]: "right" === Z && "top" === w,
                            [m.bottomLeftPointer]: "right" === Z && "bottom" === w,
                        }),
                    }),
                ],
            }),
        })
    );
});
