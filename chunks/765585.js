n.d(t, { Z: () => f }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(393238),
    c = n(605236),
    u = n(279745),
    d = n(921944),
    E = n(388032),
    h = n(788212);
let f = r.forwardRef(function (e, t) {
    let { body: n, header: i, artClassName: f, headerClassName: p, contentClassName: C, tryItText: _, dismissText: g, onTryFeature: I, onClose: T, className: O, inlineArt: S = !1, isPremiumFeature: N = !1, shouldUseHorizontalButtons: m = !1, showGIFTag: v = !1, dismissibleContent: b, position: A = 'top', align: P = 'center', art: y, isPremiumEarlyAccess: L = !1, maxWidth: j = 280, hideDismissButton: Z = !1, pointerClassName: D, dismissIconClassName: x, dismissIcon: R, onDismissIconClick: U } = e,
        w = m ? o.zxk.Sizes.LARGE : o.zxk.Sizes.MAX,
        [k, G] = r.useState(!1),
        { ref: M, width: H } = (0, s.Z)();
    function F(e) {
        (0, c.EW)(b, { dismissAction: e });
    }
    return (
        r.useEffect(() => {
            var e, t;
            let n = (null !== (t = null === (e = M.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
            !k && n > j && G(!0);
        }, [k, H, M, j]),
        r.useEffect(() => {
            (0, c.kk)(b);
        }, [b]),
        (0, l.jsx)('div', {
            className: O,
            ref: t,
            children: (0, l.jsxs)('div', {
                className: a()(h.content, C, {
                    [h.contentNoArt]: null == f || S,
                    [h.contentPremium]: N || L
                }),
                children: [
                    null != R &&
                        (0, l.jsx)(o.P3F, {
                            onClick: U,
                            className: x,
                            children: R
                        }),
                    (0, l.jsxs)('div', {
                        className: a()(f, S ? h.artInline : h.artAbsolute),
                        children: [v && (0, l.jsx)(u.Z, { className: h.gifTag }), y]
                    }),
                    (0, l.jsxs)('div', {
                        className: h.body,
                        children: [
                            (0, l.jsxs)(o.X6q, {
                                className: a()(N ? h.headerWithPremiumIcon : h.header, p),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    N && !L
                                        ? (0, l.jsx)(o.SrA, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: h.premiumIcon
                                          })
                                        : null,
                                    L
                                        ? (0, l.jsxs)(o.Text, {
                                              color: 'always-white',
                                              variant: 'eyebrow',
                                              className: h.earlyAccessBadgeContainer,
                                              children: [
                                                  (0, l.jsx)(o.SrA, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: h.earlyAccessIcon
                                                  }),
                                                  (0, l.jsx)('span', {
                                                      className: h.earlyAccessText,
                                                      children: E.NW.string(E.t.phHyIS)
                                                  })
                                              ]
                                          })
                                        : null,
                                    i
                                ]
                            }),
                            null == n
                                ? null
                                : 'string' == typeof n
                                  ? (0, l.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'always-white',
                                        children: n
                                    })
                                  : n
                        ]
                    }),
                    (0, l.jsx)('div', {
                        ref: M,
                        className: k || !m ? h.buttonContainerVertical : h.buttonContainerHorizontal,
                        children:
                            null != I
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(o.zxk, {
                                              className: h.button,
                                              size: w,
                                              onClick: (e) => {
                                                  null == T || T(e), I(e), F(d.L.PRIMARY);
                                              },
                                              color: N || L ? o.zxk.Colors.BRAND_INVERTED : o.zxk.Colors.WHITE,
                                              children: null != _ ? _ : E.NW.string(E.t.IHf1RE)
                                          }),
                                          !Z &&
                                              (0, l.jsx)(o.zxk, {
                                                  className: h.button,
                                                  size: w,
                                                  onClick: (e) => {
                                                      null == T || T(e), F(d.L.DISMISS);
                                                  },
                                                  color: N || L ? o.zxk.Colors.WHITE : o.zxk.Colors.BRAND,
                                                  look: N || L ? o.zxk.Looks.LINK : o.zxk.Looks.FILLED,
                                                  children: null != g ? g : E.NW.string(E.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, l.jsx)(o.zxk, {
                                      className: h.button,
                                      size: o.zxk.Sizes.MAX,
                                      onClick: (e) => {
                                          null == T || T(e), F(d.L.PRIMARY);
                                      },
                                      color: o.zxk.Colors.WHITE,
                                      children: E.NW.string(E.t.HU2IR0)
                                  })
                    }),
                    (0, l.jsx)('div', {
                        className: a()(h.pointer, D, {
                            [h.bottomPointer]: 'top' === A,
                            [h.centerLeftPointer]: 'right' === A && 'center' === P,
                            [h.topLeftPointer]: 'right' === A && 'top' === P
                        })
                    })
                ]
            })
        })
    );
});
