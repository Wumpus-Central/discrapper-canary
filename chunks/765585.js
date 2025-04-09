n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(481060),
    a = n(393238),
    c = n(605236),
    u = n(279745),
    d = n(921944),
    p = n(388032),
    h = n(418952);
let _ = i.forwardRef(function (e, t) {
    let { body: n, header: o, artClassName: _, headerClassName: f, contentClassName: m, tryItText: g, dismissText: b, onTryFeature: E, onClose: C, className: O, inlineArt: y = !1, isPremiumFeature: v = !1, shouldUseHorizontalButtons: S = !1, showGIFTag: N = !1, dismissibleContent: x, position: I = 'top', align: T = 'center', art: L, isPremiumEarlyAccess: P = !1, maxWidth: A = 280, hideDismissButton: j = !1, pointerClassName: R, dismissIconClassName: w, dismissIcon: k, onDismissIconClick: M, tryItButtonColor: Z } = e,
        D = S ? s.zxk.Sizes.LARGE : s.zxk.Sizes.MAX,
        [U, V] = i.useState(!1),
        { ref: H, width: G } = (0, a.Z)();
    function W(e) {
        (0, c.EW)(x, { dismissAction: e });
    }
    return (
        i.useEffect(() => {
            var e, t;
            let n = (null != (t = null == (e = H.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
            !U && n > A && V(!0);
        }, [U, G, H, A]),
        i.useEffect(() => {
            (0, c.kk)(x);
        }, [x]),
        (0, r.jsx)('div', {
            className: O,
            ref: t,
            children: (0, r.jsxs)('div', {
                className: l()(h.content, m, {
                    [h.contentNoArt]: null == _ || y,
                    [h.contentPremium]: v || P
                }),
                children: [
                    null != k &&
                        (0, r.jsx)(s.P3F, {
                            onClick: M,
                            className: w,
                            children: k
                        }),
                    (0, r.jsxs)('div', {
                        className: l()(_, y ? h.artInline : h.artAbsolute),
                        children: [N && (0, r.jsx)(u.Z, { className: h.gifTag }), L]
                    }),
                    (0, r.jsxs)('div', {
                        className: h.body,
                        children: [
                            (0, r.jsxs)(s.X6q, {
                                className: l()(v ? h.headerWithPremiumIcon : h.header, f),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    v && !P
                                        ? (0, r.jsx)(s.SrA, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: h.premiumIcon
                                          })
                                        : null,
                                    P
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
                                                      children: p.NW.string(p.t.phHyIS)
                                                  })
                                              ]
                                          })
                                        : null,
                                    o
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
                        ref: H,
                        className: U || !S ? h.buttonContainerVertical : h.buttonContainerHorizontal,
                        children:
                            null != E
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(s.zxk, {
                                              className: h.button,
                                              size: D,
                                              onClick: (e) => {
                                                  null == C || C(e), E(e), W(d.L.PRIMARY);
                                              },
                                              color: null != Z ? Z : v || P ? s.zxk.Colors.BRAND_INVERTED : s.zxk.Colors.WHITE,
                                              children: null != g ? g : p.NW.string(p.t.IHf1RE)
                                          }),
                                          !j &&
                                              (0, r.jsx)(s.zxk, {
                                                  className: h.button,
                                                  size: D,
                                                  onClick: (e) => {
                                                      null == C || C(e), W(d.L.DISMISS);
                                                  },
                                                  color: v || P ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
                                                  look: v || P ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED,
                                                  children: null != b ? b : p.NW.string(p.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, r.jsx)(s.zxk, {
                                      className: h.button,
                                      size: s.zxk.Sizes.MAX,
                                      onClick: (e) => {
                                          null == C || C(e), W(d.L.PRIMARY);
                                      },
                                      color: s.zxk.Colors.WHITE,
                                      children: p.NW.string(p.t.HU2IR0)
                                  })
                    }),
                    (0, r.jsx)('div', {
                        className: l()(h.pointer, R, {
                            [h.bottomPointer]: 'top' === I,
                            [h.centerLeftPointer]: 'right' === I && 'center' === T,
                            [h.topLeftPointer]: 'right' === I && 'top' === T
                        })
                    })
                ]
            })
        })
    );
});
