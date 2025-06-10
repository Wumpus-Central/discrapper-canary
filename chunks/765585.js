n.d(t, { Z: () => h }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(393238),
    c = n(428967),
    d = n(605236),
    u = n(279745),
    m = n(921944),
    g = n(388032),
    p = n(418952);
let h = r.forwardRef(function (e, t) {
    let { body: n, header: s, artClassName: h, headerClassName: f, contentClassName: b, tryItText: _, dismissText: x, onTryFeature: E, onClose: j, className: C, inlineArt: O = !1, isPremiumFeature: S = !1, shouldUseHorizontalButtons: v = !1, showGIFTag: T = !1, dismissibleContent: I, position: N = 'top', align: y = 'center', art: A, isPremiumEarlyAccess: P = !1, maxWidth: R = 280, hideDismissButton: D = !1, pointerClassName: Z, dismissIconClassName: w, dismissIcon: k, onDismissIconClick: L, tryItButtonColor: B } = e,
        M = v ? a.zxk.Sizes.LARGE : a.zxk.Sizes.MAX,
        [U, V] = r.useState(!1),
        { ref: G, width: F } = (0, o.ZP)();
    function H(e) {
        if ((0, c.lg)(I)) return void (0, d.bj)(I, { dismissAction: e });
        (0, d.EW)(I, { dismissAction: e });
    }
    return (
        r.useEffect(() => {
            var e, t;
            let n = (null != (t = null == (e = G.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
            !U && n > R && V(!0);
        }, [U, F, G, R]),
        r.useEffect(() => {
            (0, d.kk)(I);
        }, [I]),
        (0, i.jsx)('div', {
            className: C,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: l()(p.content, b, {
                    [p.contentNoArt]: null == h || O,
                    [p.contentPremium]: S || P
                }),
                children: [
                    null != k &&
                        (0, i.jsx)(a.P3F, {
                            onClick: L,
                            className: w,
                            children: k
                        }),
                    (0, i.jsxs)('div', {
                        className: l()(h, O ? p.artInline : p.artAbsolute),
                        children: [T && (0, i.jsx)(u.Z, { className: p.gifTag }), A]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.body,
                        children: [
                            (0, i.jsxs)(a.X6q, {
                                className: l()(S ? p.headerWithPremiumIcon : p.header, f),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    S && !P
                                        ? (0, i.jsx)(a.SrA, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.premiumIcon
                                          })
                                        : null,
                                    P
                                        ? (0, i.jsxs)(a.Text, {
                                              color: 'always-white',
                                              variant: 'eyebrow',
                                              className: p.earlyAccessBadgeContainer,
                                              children: [
                                                  (0, i.jsx)(a.SrA, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: p.earlyAccessIcon
                                                  }),
                                                  (0, i.jsx)('span', {
                                                      className: p.earlyAccessText,
                                                      children: g.intl.string(g.t.phHyIS)
                                                  })
                                              ]
                                          })
                                        : null,
                                    s
                                ]
                            }),
                            null == n
                                ? null
                                : 'string' == typeof n
                                  ? (0, i.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'always-white',
                                        children: n
                                    })
                                  : n
                        ]
                    }),
                    (0, i.jsx)('div', {
                        ref: G,
                        className: U || !v ? p.buttonContainerVertical : p.buttonContainerHorizontal,
                        children:
                            null != E
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(a.zxk, {
                                              className: p.button,
                                              size: M,
                                              onClick: (e) => {
                                                  null == j || j(e), E(e), H(m.L.PRIMARY);
                                              },
                                              color: null != B ? B : S || P ? a.zxk.Colors.BRAND_INVERTED : a.zxk.Colors.WHITE,
                                              children: null != _ ? _ : g.intl.string(g.t.IHf1RE)
                                          }),
                                          !D &&
                                              (0, i.jsx)(a.zxk, {
                                                  className: p.button,
                                                  size: M,
                                                  onClick: (e) => {
                                                      null == j || j(e), H(m.L.DISMISS);
                                                  },
                                                  color: S || P ? a.zxk.Colors.WHITE : a.zxk.Colors.BRAND,
                                                  look: S || P ? a.zxk.Looks.LINK : a.zxk.Looks.FILLED,
                                                  children: null != x ? x : g.intl.string(g.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(a.zxk, {
                                      className: p.button,
                                      size: a.zxk.Sizes.MAX,
                                      onClick: (e) => {
                                          null == j || j(e), H(m.L.PRIMARY);
                                      },
                                      color: a.zxk.Colors.WHITE,
                                      children: g.intl.string(g.t.HU2IR0)
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: l()(p.pointer, Z, {
                            [p.bottomPointer]: 'top' === N,
                            [p.centerLeftPointer]: 'right' === N && 'center' === y,
                            [p.topLeftPointer]: 'right' === N && 'top' === y,
                            [p.bottomLeftPointer]: 'right' === N && 'bottom' === y
                        })
                    })
                ]
            })
        })
    );
});
