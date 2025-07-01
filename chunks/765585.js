(n.d(t, { Z: () => m }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(393238),
    c = n(428967),
    u = n(605236),
    d = n(279745),
    f = n(921944),
    _ = n(388032),
    p = n(418952);
let h = 280,
    m = i.forwardRef(function (e, t) {
        let { body: n, header: a, artClassName: m, headerClassName: g, contentClassName: E, tryItText: b, dismissText: y, onTryFeature: O, onClose: v, className: I, inlineArt: T = !1, isPremiumFeature: S = !1, shouldUseHorizontalButtons: A = !1, showGIFTag: N = !1, dismissibleContent: C, position: R = 'top', align: P = 'center', art: w, isPremiumEarlyAccess: D = !1, maxWidth: L = h, hideDismissButton: x = !1, pointerClassName: k, dismissIconClassName: M, dismissIcon: j, onDismissIconClick: U, tryItButtonColor: G } = e,
            B = A ? s.zxk.Sizes.LARGE : s.zxk.Sizes.MAX,
            [V, F] = i.useState(!1),
            { ref: Z, width: H } = (0, l.ZP)();
        function Y(e) {
            if ((0, c.lg)(C)) return void (0, u.bj)(C, { dismissAction: e });
            (0, u.EW)(C, { dismissAction: e });
        }
        function W() {
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
                let n = (null != (t = null == (e = Z.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
                !V && n > L && F(!0);
            }, [V, H, Z, L]),
            i.useEffect(() => {
                (0, u.kk)(C);
            }, [C]),
            (0, r.jsx)('div', {
                className: I,
                ref: t,
                children: (0, r.jsxs)('div', {
                    className: o()(p.content, E, {
                        [p.contentNoArt]: null == m || T,
                        [p.contentPremium]: S || D
                    }),
                    children: [
                        null != j &&
                            (0, r.jsx)(s.P3F, {
                                onClick: U,
                                className: M,
                                children: j
                            }),
                        (0, r.jsxs)('div', {
                            className: o()(m, T ? p.artInline : p.artAbsolute),
                            children: [N && (0, r.jsx)(d.Z, { className: p.gifTag }), w]
                        }),
                        (0, r.jsxs)('div', {
                            className: p.body,
                            children: [
                                (0, r.jsxs)(s.X6q, {
                                    className: o()(S ? p.headerWithPremiumIcon : p.header, g),
                                    variant: 'heading-md/bold',
                                    color: 'always-white',
                                    children: [
                                        S && !D
                                            ? (0, r.jsx)(s.SrA, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: p.premiumIcon
                                              })
                                            : null,
                                        D
                                            ? (0, r.jsxs)(s.Text, {
                                                  color: 'always-white',
                                                  variant: 'eyebrow',
                                                  className: p.earlyAccessBadgeContainer,
                                                  children: [
                                                      (0, r.jsx)(s.SrA, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: p.earlyAccessIcon
                                                      }),
                                                      (0, r.jsx)('span', {
                                                          className: p.earlyAccessText,
                                                          children: _.intl.string(_.t.phHyIS)
                                                      })
                                                  ]
                                              })
                                            : null,
                                        a
                                    ]
                                }),
                                W()
                            ]
                        }),
                        (0, r.jsx)('div', {
                            ref: Z,
                            className: V || !A ? p.buttonContainerVertical : p.buttonContainerHorizontal,
                            children:
                                null != O
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.zxk, {
                                                  className: p.button,
                                                  size: B,
                                                  onClick: (e) => {
                                                      (null == v || v(e), O(e), Y(f.L.PRIMARY));
                                                  },
                                                  color: null != G ? G : S || D ? s.zxk.Colors.BRAND_INVERTED : s.zxk.Colors.WHITE,
                                                  children: null != b ? b : _.intl.string(_.t.IHf1RE)
                                              }),
                                              !x &&
                                                  (0, r.jsx)(s.zxk, {
                                                      className: p.button,
                                                      size: B,
                                                      onClick: (e) => {
                                                          (null == v || v(e), Y(f.L.DISMISS));
                                                      },
                                                      color: S || D ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
                                                      look: S || D ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED,
                                                      children: null != y ? y : _.intl.string(_.t.om7Ovr)
                                                  })
                                          ]
                                      })
                                    : (0, r.jsx)(s.zxk, {
                                          className: p.button,
                                          size: s.zxk.Sizes.MAX,
                                          onClick: (e) => {
                                              (null == v || v(e), Y(f.L.PRIMARY));
                                          },
                                          color: s.zxk.Colors.WHITE,
                                          children: _.intl.string(_.t.HU2IR0)
                                      })
                        }),
                        (0, r.jsx)('div', {
                            className: o()(p.pointer, k, {
                                [p.bottomPointer]: 'top' === R,
                                [p.centerLeftPointer]: 'right' === R && 'center' === P,
                                [p.topLeftPointer]: 'right' === R && 'top' === P,
                                [p.bottomLeftPointer]: 'right' === R && 'bottom' === P
                            })
                        })
                    ]
                })
            })
        );
    });
