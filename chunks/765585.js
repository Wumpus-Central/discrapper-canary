n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(755721),
    s = n(481060),
    c = n(393238),
    u = n(428967),
    d = n(266454),
    f = n(605236),
    h = n(279745),
    p = n(921944),
    g = n(388032),
    b = n(675065);
let m = i.forwardRef(function (e, t) {
    let {
            body: n,
            header: l,
            artClassName: m,
            headerClassName: y,
            contentClassName: O,
            tryItText: v,
            dismissText: j,
            onTryFeature: C,
            onClose: x,
            className: E,
            inlineArt: S = !1,
            isPremiumFeature: I = !1,
            shouldUseHorizontalButtons: _ = !1,
            showGIFTag: P = !1,
            dismissibleContent: N,
            position: Z = "top",
            align: w = "center",
            art: T,
            maxWidth: A = 280,
            hideDismissButton: R = !1,
            pointerClassName: D,
            dismissIconClassName: M,
            dismissIcon: L,
            onDismissIconClick: k,
            tryItButtonColor: G,
        } = e,
        U = _ ? o.zx.Sizes.LARGE : o.zx.Sizes.MAX,
        [B, F] = i.useState(!1),
        { ref: V, width: H } = (0, c.ZP)();
    function z(e) {
        if ((0, u.lg)(N)) return void (0, f.bj)(N, { dismissAction: e });
        (0, d.Q3)(N, { dismissAction: e });
    }
    return (
        i.useEffect(() => {
            var e, t;
            let n = (null != (t = null == (e = V.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
            !B && n > A && F(!0);
        }, [B, H, V, A]),
        i.useEffect(() => {
            (0, f.kk)(N);
        }, [N]),
        (0, r.jsx)("div", {
            className: E,
            ref: t,
            children: (0, r.jsxs)("div", {
                className: a()(b.content, O, {
                    [b.contentNoArt]: null == m || S,
                    [b.contentPremium]: I,
                }),
                children: [
                    null != L &&
                        (0, r.jsx)(s.P3F, {
                            onClick: k,
                            className: M,
                            children: L,
                        }),
                    (0, r.jsxs)("div", {
                        className: a()(m, S ? b.artInline : b.artAbsolute),
                        children: [P && (0, r.jsx)(h.Z, { className: b.gifTag }), T],
                    }),
                    (0, r.jsxs)("div", {
                        className: b.body,
                        children: [
                            (0, r.jsxs)(s.Heading, {
                                className: a()(I ? b.headerWithPremiumIcon : b.header, y),
                                variant: "heading-md/bold",
                                color: "always-white",
                                children: [
                                    I
                                        ? (0, r.jsx)(s.SrA, {
                                              size: "md",
                                              color: "currentColor",
                                              className: b.premiumIcon,
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
                        className: B || !_ ? b.buttonContainerVertical : b.buttonContainerHorizontal,
                        children:
                            null != C
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(o.zx, {
                                              className: b.button,
                                              size: U,
                                              onClick: (e) => {
                                                  null == x || x(e), C(e), z(p.L.PRIMARY);
                                              },
                                              color: null != G ? G : I ? o.zx.Colors.BRAND_INVERTED : o.zx.Colors.WHITE,
                                              children: null != v ? v : g.intl.string(g.t.IHf1RN),
                                          }),
                                          !R &&
                                              (0, r.jsx)(o.zx, {
                                                  className: b.button,
                                                  size: U,
                                                  onClick: (e) => {
                                                      null == x || x(e), z(p.L.DISMISS);
                                                  },
                                                  color: I ? o.zx.Colors.WHITE : o.zx.Colors.BRAND,
                                                  look: I ? o.zx.Looks.LINK : o.zx.Looks.FILLED,
                                                  children: null != j ? j : g.intl.string(g.t.om7Ovn),
                                              }),
                                      ],
                                  })
                                : (0, r.jsx)(o.zx, {
                                      className: b.button,
                                      size: o.zx.Sizes.MAX,
                                      onClick: (e) => {
                                          null == x || x(e), z(p.L.PRIMARY);
                                      },
                                      color: o.zx.Colors.WHITE,
                                      children: g.intl.string(g.t.HU2IR5),
                                  }),
                    }),
                    (0, r.jsx)("div", {
                        className: a()(b.pointer, D, {
                            [b.bottomPointer]: "top" === Z,
                            [b.centerLeftPointer]: "right" === Z && "center" === w,
                            [b.topLeftPointer]: "right" === Z && "top" === w,
                            [b.bottomLeftPointer]: "right" === Z && "bottom" === w,
                        }),
                    }),
                ],
            }),
        })
    );
});
