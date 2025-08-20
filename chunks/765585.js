n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(393238),
    u = n(428967),
    d = n(266454),
    f = n(605236),
    _ = n(279745),
    p = n(921944),
    h = n(388032),
    m = n(882482);
let g = 280,
    E = i.forwardRef(function (e, t) {
        let {
                body: n,
                header: a,
                artClassName: E,
                headerClassName: b,
                contentClassName: y,
                tryItText: O,
                dismissText: v,
                onTryFeature: I,
                onClose: T,
                className: S,
                inlineArt: A = !1,
                isPremiumFeature: C = !1,
                shouldUseHorizontalButtons: N = !1,
                showGIFTag: R = !1,
                dismissibleContent: P,
                position: w = "top",
                align: D = "center",
                art: x,
                isPremiumEarlyAccess: L = !1,
                maxWidth: j = g,
                hideDismissButton: M = !1,
                pointerClassName: k,
                dismissIconClassName: U,
                dismissIcon: G,
                onDismissIconClick: B,
                tryItButtonColor: Z,
            } = e,
            V = N ? s.zx.Sizes.LARGE : s.zx.Sizes.MAX,
            [F, H] = i.useState(!1),
            { ref: Y, width: W } = (0, c.ZP)();
        function K(e) {
            if ((0, u.lg)(P)) return void (0, f.bj)(P, { dismissAction: e });
            (0, d.Q3)(P, { dismissAction: e });
        }
        function z() {
            return null == n
                ? null
                : "string" == typeof n
                  ? (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        children: n,
                    })
                  : n;
        }
        return (
            i.useEffect(() => {
                var e, t;
                let n = (null != (t = null == (e = Y.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
                !F && n > j && H(!0);
            }, [F, W, Y, j]),
            i.useEffect(() => {
                (0, f.kk)(P);
            }, [P]),
            (0, r.jsx)("div", {
                className: S,
                ref: t,
                children: (0, r.jsxs)("div", {
                    className: o()(m.content, y, {
                        [m.contentNoArt]: null == E || A,
                        [m.contentPremium]: C || L,
                    }),
                    children: [
                        null != G &&
                            (0, r.jsx)(l.P3F, {
                                onClick: B,
                                className: U,
                                children: G,
                            }),
                        (0, r.jsxs)("div", {
                            className: o()(E, A ? m.artInline : m.artAbsolute),
                            children: [R && (0, r.jsx)(_.Z, { className: m.gifTag }), x],
                        }),
                        (0, r.jsxs)("div", {
                            className: m.body,
                            children: [
                                (0, r.jsxs)(l.X6q, {
                                    className: o()(C ? m.headerWithPremiumIcon : m.header, b),
                                    variant: "heading-md/bold",
                                    color: "always-white",
                                    children: [
                                        C && !L
                                            ? (0, r.jsx)(l.SrA, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: m.premiumIcon,
                                              })
                                            : null,
                                        L
                                            ? (0, r.jsxs)(l.Text, {
                                                  color: "always-white",
                                                  variant: "eyebrow",
                                                  className: m.earlyAccessBadgeContainer,
                                                  children: [
                                                      (0, r.jsx)(l.SrA, {
                                                          size: "md",
                                                          color: "currentColor",
                                                          className: m.earlyAccessIcon,
                                                      }),
                                                      (0, r.jsx)("span", {
                                                          className: m.earlyAccessText,
                                                          children: h.intl.string(h.t.phHyIS),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        a,
                                    ],
                                }),
                                z(),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            ref: Y,
                            className: F || !N ? m.buttonContainerVertical : m.buttonContainerHorizontal,
                            children:
                                null != I
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.zx, {
                                                  className: m.button,
                                                  size: V,
                                                  onClick: (e) => {
                                                      null == T || T(e), I(e), K(p.L.PRIMARY);
                                                  },
                                                  color:
                                                      null != Z
                                                          ? Z
                                                          : C || L
                                                            ? s.zx.Colors.BRAND_INVERTED
                                                            : s.zx.Colors.WHITE,
                                                  children: null != O ? O : h.intl.string(h.t.IHf1RE),
                                              }),
                                              !M &&
                                                  (0, r.jsx)(s.zx, {
                                                      className: m.button,
                                                      size: V,
                                                      onClick: (e) => {
                                                          null == T || T(e), K(p.L.DISMISS);
                                                      },
                                                      color: C || L ? s.zx.Colors.WHITE : s.zx.Colors.BRAND,
                                                      look: C || L ? s.zx.Looks.LINK : s.zx.Looks.FILLED,
                                                      children: null != v ? v : h.intl.string(h.t.om7Ovr),
                                                  }),
                                          ],
                                      })
                                    : (0, r.jsx)(s.zx, {
                                          className: m.button,
                                          size: s.zx.Sizes.MAX,
                                          onClick: (e) => {
                                              null == T || T(e), K(p.L.PRIMARY);
                                          },
                                          color: s.zx.Colors.WHITE,
                                          children: h.intl.string(h.t.HU2IR0),
                                      }),
                        }),
                        (0, r.jsx)("div", {
                            className: o()(m.pointer, k, {
                                [m.bottomPointer]: "top" === w,
                                [m.centerLeftPointer]: "right" === w && "center" === D,
                                [m.topLeftPointer]: "right" === w && "top" === D,
                                [m.bottomLeftPointer]: "right" === w && "bottom" === D,
                            }),
                        }),
                    ],
                }),
            })
        );
    });
