n.d(t, { Z: () => f }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(393238),
    c = n(605236),
    u = n(279745),
    d = n(921944),
    h = n(388032),
    p = n(418952);
let f = i.forwardRef(function (e, t) {
    let { body: n, header: l, artClassName: f, headerClassName: g, contentClassName: m, tryItText: b, dismissText: _, onTryFeature: y, onClose: v, className: O, inlineArt: C = !1, isPremiumFeature: S = !1, shouldUseHorizontalButtons: j = !1, showGIFTag: E = !1, dismissibleContent: x, position: N = 'top', align: I = 'center', art: P, isPremiumEarlyAccess: w = !1, maxWidth: Z = 280, hideDismissButton: T = !1, pointerClassName: A, dismissIconClassName: R, dismissIcon: D, onDismissIconClick: L, tryItButtonColor: k } = e,
        M = j ? s.zxk.Sizes.LARGE : s.zxk.Sizes.MAX,
        [U, G] = i.useState(!1),
        { ref: B, width: W } = (0, a.ZP)();
    function V(e) {
        (0, c.EW)(x, { dismissAction: e });
    }
    return (
        i.useEffect(() => {
            var e, t;
            let n = (null != (t = null == (e = B.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
            !U && n > Z && G(!0);
        }, [U, W, B, Z]),
        i.useEffect(() => {
            (0, c.kk)(x);
        }, [x]),
        (0, r.jsx)('div', {
            className: O,
            ref: t,
            children: (0, r.jsxs)('div', {
                className: o()(p.content, m, {
                    [p.contentNoArt]: null == f || C,
                    [p.contentPremium]: S || w
                }),
                children: [
                    null != D &&
                        (0, r.jsx)(s.P3F, {
                            onClick: L,
                            className: R,
                            children: D
                        }),
                    (0, r.jsxs)('div', {
                        className: o()(f, C ? p.artInline : p.artAbsolute),
                        children: [E && (0, r.jsx)(u.Z, { className: p.gifTag }), P]
                    }),
                    (0, r.jsxs)('div', {
                        className: p.body,
                        children: [
                            (0, r.jsxs)(s.X6q, {
                                className: o()(S ? p.headerWithPremiumIcon : p.header, g),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    S && !w
                                        ? (0, r.jsx)(s.SrA, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.premiumIcon
                                          })
                                        : null,
                                    w
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
                                                      children: h.NW.string(h.t.phHyIS)
                                                  })
                                              ]
                                          })
                                        : null,
                                    l
                                ]
                            }),
                            null == n
                                ? null
                                : 'string' == typeof n
                                  ? (0, r.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'always-white',
                                        children: n
                                    })
                                  : n
                        ]
                    }),
                    (0, r.jsx)('div', {
                        ref: B,
                        className: U || !j ? p.buttonContainerVertical : p.buttonContainerHorizontal,
                        children:
                            null != y
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(s.zxk, {
                                              className: p.button,
                                              size: M,
                                              onClick: (e) => {
                                                  null == v || v(e), y(e), V(d.L.PRIMARY);
                                              },
                                              color: null != k ? k : S || w ? s.zxk.Colors.BRAND_INVERTED : s.zxk.Colors.WHITE,
                                              children: null != b ? b : h.NW.string(h.t.IHf1RE)
                                          }),
                                          !T &&
                                              (0, r.jsx)(s.zxk, {
                                                  className: p.button,
                                                  size: M,
                                                  onClick: (e) => {
                                                      null == v || v(e), V(d.L.DISMISS);
                                                  },
                                                  color: S || w ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
                                                  look: S || w ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED,
                                                  children: null != _ ? _ : h.NW.string(h.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, r.jsx)(s.zxk, {
                                      className: p.button,
                                      size: s.zxk.Sizes.MAX,
                                      onClick: (e) => {
                                          null == v || v(e), V(d.L.PRIMARY);
                                      },
                                      color: s.zxk.Colors.WHITE,
                                      children: h.NW.string(h.t.HU2IR0)
                                  })
                    }),
                    (0, r.jsx)('div', {
                        className: o()(p.pointer, A, {
                            [p.bottomPointer]: 'top' === N,
                            [p.centerLeftPointer]: 'right' === N && 'center' === I,
                            [p.topLeftPointer]: 'right' === N && 'top' === I
                        })
                    })
                ]
            })
        })
    );
});
