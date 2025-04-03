n.d(t, { Z: () => f }), n(47120);
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
    _ = n(418952);
let f = i.forwardRef(function (e, t) {
    let { body: n, header: o, artClassName: f, headerClassName: h, contentClassName: m, tryItText: b, dismissText: g, onTryFeature: E, onClose: C, className: O, inlineArt: y = !1, isPremiumFeature: v = !1, shouldUseHorizontalButtons: N = !1, showGIFTag: S = !1, dismissibleContent: x, position: I = 'top', align: T = 'center', art: L, isPremiumEarlyAccess: P = !1, maxWidth: j = 280, hideDismissButton: A = !1, pointerClassName: R, dismissIconClassName: w, dismissIcon: k, onDismissIconClick: M, tryItButtonColor: Z } = e,
        D = N ? s.zxk.Sizes.LARGE : s.zxk.Sizes.MAX,
        [U, V] = i.useState(!1),
        { ref: H, width: G } = (0, a.Z)();
    function W(e) {
        (0, c.EW)(x, { dismissAction: e });
    }
    return (
        i.useEffect(() => {
            var e, t;
            let n = (null != (t = null == (e = H.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
            !U && n > j && V(!0);
        }, [U, G, H, j]),
        i.useEffect(() => {
            (0, c.kk)(x);
        }, [x]),
        (0, r.jsx)('div', {
            className: O,
            ref: t,
            children: (0, r.jsxs)('div', {
                className: l()(_.content, m, {
                    [_.contentNoArt]: null == f || y,
                    [_.contentPremium]: v || P
                }),
                children: [
                    null != k &&
                        (0, r.jsx)(s.P3F, {
                            onClick: M,
                            className: w,
                            children: k
                        }),
                    (0, r.jsxs)('div', {
                        className: l()(f, y ? _.artInline : _.artAbsolute),
                        children: [S && (0, r.jsx)(u.Z, { className: _.gifTag }), L]
                    }),
                    (0, r.jsxs)('div', {
                        className: _.body,
                        children: [
                            (0, r.jsxs)(s.X6q, {
                                className: l()(v ? _.headerWithPremiumIcon : _.header, h),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    v && !P
                                        ? (0, r.jsx)(s.SrA, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: _.premiumIcon
                                          })
                                        : null,
                                    P
                                        ? (0, r.jsxs)(s.Text, {
                                              color: 'always-white',
                                              variant: 'eyebrow',
                                              className: _.earlyAccessBadgeContainer,
                                              children: [
                                                  (0, r.jsx)(s.SrA, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: _.earlyAccessIcon
                                                  }),
                                                  (0, r.jsx)('span', {
                                                      className: _.earlyAccessText,
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
                        className: U || !N ? _.buttonContainerVertical : _.buttonContainerHorizontal,
                        children:
                            null != E
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(s.zxk, {
                                              className: _.button,
                                              size: D,
                                              onClick: (e) => {
                                                  null == C || C(e), E(e), W(d.L.PRIMARY);
                                              },
                                              color: null != Z ? Z : v || P ? s.zxk.Colors.BRAND_INVERTED : s.zxk.Colors.WHITE,
                                              children: null != b ? b : p.NW.string(p.t.IHf1RE)
                                          }),
                                          !A &&
                                              (0, r.jsx)(s.zxk, {
                                                  className: _.button,
                                                  size: D,
                                                  onClick: (e) => {
                                                      null == C || C(e), W(d.L.DISMISS);
                                                  },
                                                  color: v || P ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
                                                  look: v || P ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED,
                                                  children: null != g ? g : p.NW.string(p.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, r.jsx)(s.zxk, {
                                      className: _.button,
                                      size: s.zxk.Sizes.MAX,
                                      onClick: (e) => {
                                          null == C || C(e), W(d.L.PRIMARY);
                                      },
                                      color: s.zxk.Colors.WHITE,
                                      children: p.NW.string(p.t.HU2IR0)
                                  })
                    }),
                    (0, r.jsx)('div', {
                        className: l()(_.pointer, R, {
                            [_.bottomPointer]: 'top' === I,
                            [_.centerLeftPointer]: 'right' === I && 'center' === T,
                            [_.topLeftPointer]: 'right' === I && 'top' === T
                        })
                    })
                ]
            })
        })
    );
});
