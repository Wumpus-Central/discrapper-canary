n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
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
            headerClassName: _,
            contentClassName: y,
            tryItText: O,
            dismissText: v,
            onTryFeature: j,
            onClose: x,
            className: C,
            inlineArt: E = !1,
            isPremiumFeature: S = !1,
            shouldUseHorizontalButtons: I = !1,
            showGIFTag: P = !1,
            dismissibleContent: N,
            position: Z = "top",
            align: w = "center",
            art: T,
            maxWidth: A = 280,
            hideDismissButton: R = !1,
            pointerClassName: D,
            dismissIconClassName: L,
            dismissIcon: M,
            onDismissIconClick: k,
            tryItButtonColor: G,
        } = e,
        U = I ? a.zx.Sizes.LARGE : a.zx.Sizes.MAX,
        [B, F] = i.useState(!1),
        { ref: V, width: H } = (0, c.ZP)();
    function z(e) {
        if ((0, u.lg)(N)) return void (0, p.bj)(N, { dismissAction: e });
        (0, d.Q3)(N, { dismissAction: e });
    }
    return (
        i.useEffect(() => {
            var e, t;
            let n = (null != (t = null == (e = V.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
            !B && n > A && F(!0);
        }, [B, H, V, A]),
        i.useEffect(() => {
            (0, p.kk)(N);
        }, [N]),
        (0, r.jsx)("div", {
            className: C,
            ref: t,
            children: (0, r.jsxs)("div", {
                className: o()(m.content, y, {
                    [m.contentNoArt]: null == b || E,
                    [m.contentPremium]: S,
                }),
                children: [
                    null != M &&
                        (0, r.jsx)(s.P3F, {
                            onClick: k,
                            className: L,
                            children: M,
                        }),
                    (0, r.jsxs)("div", {
                        className: o()(b, E ? m.artInline : m.artAbsolute),
                        children: [P && (0, r.jsx)(f.Z, { className: m.gifTag }), T],
                    }),
                    (0, r.jsxs)("div", {
                        className: m.body,
                        children: [
                            (0, r.jsxs)(s.Heading, {
                                className: o()(S ? m.headerWithPremiumIcon : m.header, _),
                                variant: "heading-md/bold",
                                color: "always-white",
                                children: [
                                    S
                                        ? (0, r.jsx)(s.SrA, {
                                              size: "md",
                                              color: "currentColor",
                                              className: m.premiumIcon,
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
                        ref: V,
                        className: B || !I ? m.buttonContainerVertical : m.buttonContainerHorizontal,
                        children:
                            null != j
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(a.zx, {
                                              className: m.button,
                                              size: U,
                                              onClick: (e) => {
                                                  null == x || x(e), j(e), z(h.L.PRIMARY);
                                              },
                                              color: null != G ? G : S ? a.zx.Colors.BRAND_INVERTED : a.zx.Colors.WHITE,
                                              children: null != O ? O : g.intl.string(g.t.IHf1RN),
                                          }),
                                          !R &&
                                              (0, r.jsx)(a.zx, {
                                                  className: m.button,
                                                  size: U,
                                                  onClick: (e) => {
                                                      null == x || x(e), z(h.L.DISMISS);
                                                  },
                                                  color: S ? a.zx.Colors.WHITE : a.zx.Colors.BRAND,
                                                  look: S ? a.zx.Looks.LINK : a.zx.Looks.FILLED,
                                                  children: null != v ? v : g.intl.string(g.t.om7Ovn),
                                              }),
                                      ],
                                  })
                                : (0, r.jsx)(a.zx, {
                                      className: m.button,
                                      size: a.zx.Sizes.MAX,
                                      onClick: (e) => {
                                          null == x || x(e), z(h.L.PRIMARY);
                                      },
                                      color: a.zx.Colors.WHITE,
                                      children: g.intl.string(g.t.HU2IR5),
                                  }),
                    }),
                    (0, r.jsx)("div", {
                        className: o()(m.pointer, D, {
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
