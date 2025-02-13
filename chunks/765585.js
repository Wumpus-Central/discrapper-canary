n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(481060),
    s = n(393238),
    c = n(605236),
    d = n(279745),
    u = n(921944),
    h = n(388032),
    p = n(655698);
let m = l.forwardRef(function (e, t) {
    let { body: n, header: r, artClassName: m, headerClassName: g, contentClassName: f, tryItText: _, dismissText: v, onTryFeature: C, onClose: x, className: I, inlineArt: Z = !1, isPremiumFeature: b = !1, shouldUseHorizontalButtons: S = !1, showGIFTag: N = !1, dismissibleContent: E, position: j = 'top', align: y = 'center', art: T, isPremiumEarlyAccess: A = !1, maxWidth: P = 280, hideDismissButton: R = !1, pointerClassName: w, dismissIconClassName: L, dismissIcon: M, onDismissIconClick: D } = e,
        G = S ? a.zxk.Sizes.LARGE : a.zxk.Sizes.MAX,
        [k, B] = l.useState(!1),
        { ref: O, width: U } = (0, s.Z)();
    function V(e) {
        (0, c.EW)(E, { dismissAction: e });
    }
    return (
        l.useEffect(() => {
            var e, t;
            let n = (null !== (t = null === (e = O.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
            !k && n > P && B(!0);
        }, [k, U, O, P]),
        l.useEffect(() => {
            (0, c.kk)(E);
        }, [E]),
        (0, i.jsx)('div', {
            className: I,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: o()(p.content, f, {
                    [p.contentNoArt]: null == m || Z,
                    [p.contentPremium]: b || A
                }),
                children: [
                    null != M &&
                        (0, i.jsx)(a.P3F, {
                            onClick: D,
                            className: L,
                            children: M
                        }),
                    (0, i.jsxs)('div', {
                        className: o()(m, Z ? p.artInline : p.artAbsolute),
                        children: [N && (0, i.jsx)(d.Z, { className: p.gifTag }), T]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.body,
                        children: [
                            (0, i.jsxs)(a.X6q, {
                                className: o()(b ? p.headerWithPremiumIcon : p.header, g),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    b && !A
                                        ? (0, i.jsx)(a.SrA, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.premiumIcon
                                          })
                                        : null,
                                    A
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
                                  ? (0, i.jsx)(a.Text, {
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
                                          (0, i.jsx)(a.zxk, {
                                              className: p.button,
                                              size: G,
                                              onClick: (e) => {
                                                  null == x || x(e), C(e), V(u.L.PRIMARY);
                                              },
                                              color: b || A ? a.zxk.Colors.BRAND_INVERTED : a.zxk.Colors.WHITE,
                                              children: null != _ ? _ : h.intl.string(h.t.IHf1RE)
                                          }),
                                          !R &&
                                              (0, i.jsx)(a.zxk, {
                                                  className: p.button,
                                                  size: G,
                                                  onClick: (e) => {
                                                      null == x || x(e), V(u.L.DISMISS);
                                                  },
                                                  color: b || A ? a.zxk.Colors.WHITE : a.zxk.Colors.BRAND,
                                                  look: b || A ? a.zxk.Looks.LINK : a.zxk.Looks.FILLED,
                                                  children: null != v ? v : h.intl.string(h.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(a.zxk, {
                                      className: p.button,
                                      size: a.zxk.Sizes.MAX,
                                      onClick: (e) => {
                                          null == x || x(e), V(u.L.PRIMARY);
                                      },
                                      color: a.zxk.Colors.WHITE,
                                      children: h.intl.string(h.t.HU2IR0)
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: o()(p.pointer, w, {
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
