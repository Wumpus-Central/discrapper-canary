n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(393238),
    c = n(605236),
    d = n(279745),
    u = n(921944),
    h = n(388032),
    p = n(410842);
let g = l.forwardRef(function (e, t) {
    let { body: n, header: r, artClassName: g, headerClassName: m, contentClassName: f, tryItText: _, dismissText: v, onTryFeature: C, onClose: x, className: Z, inlineArt: I = !1, isPremiumFeature: b = !1, shouldUseHorizontalButtons: S = !1, showGIFTag: N = !1, dismissibleContent: E, position: j = 'top', align: y = 'center', art: P, isPremiumEarlyAccess: T = !1, maxWidth: A = 280, hideDismissButton: w = !1, pointerClassName: R, dismissIconClassName: L, dismissIcon: M, onDismissIconClick: D } = e,
        G = S ? o.zxk.Sizes.LARGE : o.zxk.Sizes.MAX,
        [k, B] = l.useState(!1),
        { ref: O, width: U } = (0, s.Z)();
    function V(e) {
        (0, c.EW)(E, { dismissAction: e });
    }
    return (
        l.useEffect(() => {
            var e, t;
            let n = (null !== (t = null === (e = O.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
            !k && n > A && B(!0);
        }, [k, U, O, A]),
        l.useEffect(() => {
            (0, c.kk)(E);
        }, [E]),
        (0, i.jsx)('div', {
            className: Z,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: a()(p.content, f, {
                    [p.contentNoArt]: null == g || I,
                    [p.contentPremium]: b || T
                }),
                children: [
                    null != M &&
                        (0, i.jsx)(o.P3F, {
                            onClick: D,
                            className: L,
                            children: M
                        }),
                    (0, i.jsxs)('div', {
                        className: a()(g, I ? p.artInline : p.artAbsolute),
                        children: [N && (0, i.jsx)(d.Z, { className: p.gifTag }), P]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.body,
                        children: [
                            (0, i.jsxs)(o.X6q, {
                                className: a()(b ? p.headerWithPremiumIcon : p.header, m),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    b && !T
                                        ? (0, i.jsx)(o.SrA, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.premiumIcon
                                          })
                                        : null,
                                    T
                                        ? (0, i.jsxs)(o.Text, {
                                              color: 'always-white',
                                              variant: 'eyebrow',
                                              className: p.earlyAccessBadgeContainer,
                                              children: [
                                                  (0, i.jsx)(o.SrA, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: p.earlyAccessIcon
                                                  }),
                                                  (0, i.jsx)('span', {
                                                      className: p.earlyAccessText,
                                                      children: h.intl.string(h.t.phHyIS)
                                                  })
                                              ]
                                          })
                                        : null,
                                    r
                                ]
                            }),
                            null == n
                                ? null
                                : 'string' == typeof n
                                  ? (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'always-white',
                                        children: n
                                    })
                                  : n
                        ]
                    }),
                    (0, i.jsx)('div', {
                        ref: O,
                        className: k || !S ? p.buttonContainerVertical : p.buttonContainerHorizontal,
                        children:
                            null != C
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(o.zxk, {
                                              className: p.button,
                                              size: G,
                                              onClick: (e) => {
                                                  null == x || x(e), C(e), V(u.L.PRIMARY);
                                              },
                                              color: b || T ? o.zxk.Colors.BRAND_INVERTED : o.zxk.Colors.WHITE,
                                              children: null != _ ? _ : h.intl.string(h.t.IHf1RE)
                                          }),
                                          !w &&
                                              (0, i.jsx)(o.zxk, {
                                                  className: p.button,
                                                  size: G,
                                                  onClick: (e) => {
                                                      null == x || x(e), V(u.L.DISMISS);
                                                  },
                                                  color: b || T ? o.zxk.Colors.WHITE : o.zxk.Colors.BRAND,
                                                  look: b || T ? o.zxk.Looks.LINK : o.zxk.Looks.FILLED,
                                                  children: null != v ? v : h.intl.string(h.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(o.zxk, {
                                      className: p.button,
                                      size: o.zxk.Sizes.MAX,
                                      onClick: (e) => {
                                          null == x || x(e), V(u.L.PRIMARY);
                                      },
                                      color: o.zxk.Colors.WHITE,
                                      children: h.intl.string(h.t.HU2IR0)
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: a()(p.pointer, R, {
                            [p.bottomPointer]: 'top' === j,
                            [p.centerLeftPointer]: 'right' === j && 'center' === y,
                            [p.topLeftPointer]: 'right' === j && 'top' === y
                        })
                    })
                ]
            })
        })
    );
});
