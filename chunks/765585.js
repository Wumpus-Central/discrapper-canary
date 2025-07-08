(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(393238),
    c = n(428967),
    u = n(266454),
    d = n(605236),
    f = n(279745),
    _ = n(921944),
    p = n(388032),
    h = n(418952);
let m = 280,
    g = i.forwardRef(function (e, t) {
        let { body: n, header: a, artClassName: g, headerClassName: E, contentClassName: b, tryItText: y, dismissText: O, onTryFeature: v, onClose: I, className: T, inlineArt: S = !1, isPremiumFeature: A = !1, shouldUseHorizontalButtons: N = !1, showGIFTag: C = !1, dismissibleContent: R, position: P = 'top', align: w = 'center', art: D, isPremiumEarlyAccess: L = !1, maxWidth: x = m, hideDismissButton: M = !1, pointerClassName: k, dismissIconClassName: j, dismissIcon: U, onDismissIconClick: G, tryItButtonColor: B } = e,
            V = N ? s.zxk.Sizes.LARGE : s.zxk.Sizes.MAX,
            [F, Z] = i.useState(!1),
            { ref: H, width: Y } = (0, l.ZP)();
        function W(e) {
            if ((0, c.lg)(R)) return void (0, d.bj)(R, { dismissAction: e });
            (0, u.Q3)(R, { dismissAction: e });
        }
        function K() {
            return null == n
                ? null
                : 'string' == typeof n
                  ? (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'always-white',
                        children: n
                    })
                  : n;
        }
        return (
            i.useEffect(() => {
                var e, t;
                let n = (null != (t = null == (e = H.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
                !F && n > x && Z(!0);
            }, [F, Y, H, x]),
            i.useEffect(() => {
                (0, d.kk)(R);
            }, [R]),
            (0, r.jsx)('div', {
                className: T,
                ref: t,
                children: (0, r.jsxs)('div', {
                    className: o()(h.content, b, {
                        [h.contentNoArt]: null == g || S,
                        [h.contentPremium]: A || L
                    }),
                    children: [
                        null != U &&
                            (0, r.jsx)(s.P3F, {
                                onClick: G,
                                className: j,
                                children: U
                            }),
                        (0, r.jsxs)('div', {
                            className: o()(g, S ? h.artInline : h.artAbsolute),
                            children: [C && (0, r.jsx)(f.Z, { className: h.gifTag }), D]
                        }),
                        (0, r.jsxs)('div', {
                            className: h.body,
                            children: [
                                (0, r.jsxs)(s.X6q, {
                                    className: o()(A ? h.headerWithPremiumIcon : h.header, E),
                                    variant: 'heading-md/bold',
                                    color: 'always-white',
                                    children: [
                                        A && !L
                                            ? (0, r.jsx)(s.SrA, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: h.premiumIcon
                                              })
                                            : null,
                                        L
                                            ? (0, r.jsxs)(s.Text, {
                                                  color: 'always-white',
                                                  variant: 'eyebrow',
                                                  className: h.earlyAccessBadgeContainer,
                                                  children: [
                                                      (0, r.jsx)(s.SrA, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: h.earlyAccessIcon
                                                      }),
                                                      (0, r.jsx)('span', {
                                                          className: h.earlyAccessText,
                                                          children: p.intl.string(p.t.phHyIS)
                                                      })
                                                  ]
                                              })
                                            : null,
                                        a
                                    ]
                                }),
                                K()
                            ]
                        }),
                        (0, r.jsx)('div', {
                            ref: H,
                            className: F || !N ? h.buttonContainerVertical : h.buttonContainerHorizontal,
                            children:
                                null != v
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.zxk, {
                                                  className: h.button,
                                                  size: V,
                                                  onClick: (e) => {
                                                      (null == I || I(e), v(e), W(_.L.PRIMARY));
                                                  },
                                                  color: null != B ? B : A || L ? s.zxk.Colors.BRAND_INVERTED : s.zxk.Colors.WHITE,
                                                  children: null != y ? y : p.intl.string(p.t.IHf1RE)
                                              }),
                                              !M &&
                                                  (0, r.jsx)(s.zxk, {
                                                      className: h.button,
                                                      size: V,
                                                      onClick: (e) => {
                                                          (null == I || I(e), W(_.L.DISMISS));
                                                      },
                                                      color: A || L ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
                                                      look: A || L ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED,
                                                      children: null != O ? O : p.intl.string(p.t.om7Ovr)
                                                  })
                                          ]
                                      })
                                    : (0, r.jsx)(s.zxk, {
                                          className: h.button,
                                          size: s.zxk.Sizes.MAX,
                                          onClick: (e) => {
                                              (null == I || I(e), W(_.L.PRIMARY));
                                          },
                                          color: s.zxk.Colors.WHITE,
                                          children: p.intl.string(p.t.HU2IR0)
                                      })
                        }),
                        (0, r.jsx)('div', {
                            className: o()(h.pointer, k, {
                                [h.bottomPointer]: 'top' === P,
                                [h.centerLeftPointer]: 'right' === P && 'center' === w,
                                [h.topLeftPointer]: 'right' === P && 'top' === w,
                                [h.bottomLeftPointer]: 'right' === P && 'bottom' === w
                            })
                        })
                    ]
                })
            })
        );
    });
