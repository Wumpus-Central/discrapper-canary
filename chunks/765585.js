n.d(t, { Z: () => h }), n(388685);
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
let h = i.forwardRef(function (e, t) {
    let { body: n, header: o, artClassName: h, headerClassName: f, contentClassName: m, tryItText: b, dismissText: g, onTryFeature: E, onClose: O, className: y, inlineArt: C = !1, isPremiumFeature: S = !1, shouldUseHorizontalButtons: N = !1, showGIFTag: v = !1, dismissibleContent: T, position: I = 'top', align: x = 'center', art: P, isPremiumEarlyAccess: A = !1, maxWidth: R = 280, hideDismissButton: w = !1, pointerClassName: j, dismissIconClassName: k, dismissIcon: L, onDismissIconClick: M, tryItButtonColor: D } = e,
        Z = N ? s.zxk.Sizes.LARGE : s.zxk.Sizes.MAX,
        [U, V] = i.useState(!1),
        { ref: W, width: G } = (0, a.Z)();
    function H(e) {
        (0, c.EW)(T, { dismissAction: e });
    }
    return (
        i.useEffect(() => {
            var e, t;
            let n = (null != (t = null == (e = W.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
            !U && n > R && V(!0);
        }, [U, G, W, R]),
        i.useEffect(() => {
            (0, c.kk)(T);
        }, [T]),
        (0, r.jsx)('div', {
            className: y,
            ref: t,
            children: (0, r.jsxs)('div', {
                className: l()(_.content, m, {
                    [_.contentNoArt]: null == h || C,
                    [_.contentPremium]: S || A
                }),
                children: [
                    null != L &&
                        (0, r.jsx)(s.P3F, {
                            onClick: M,
                            className: k,
                            children: L
                        }),
                    (0, r.jsxs)('div', {
                        className: l()(h, C ? _.artInline : _.artAbsolute),
                        children: [v && (0, r.jsx)(u.Z, { className: _.gifTag }), P]
                    }),
                    (0, r.jsxs)('div', {
                        className: _.body,
                        children: [
                            (0, r.jsxs)(s.X6q, {
                                className: l()(S ? _.headerWithPremiumIcon : _.header, f),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    S && !A
                                        ? (0, r.jsx)(s.SrA, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: _.premiumIcon
                                          })
                                        : null,
                                    A
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
                        ref: W,
                        className: U || !N ? _.buttonContainerVertical : _.buttonContainerHorizontal,
                        children:
                            null != E
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(s.zxk, {
                                              className: _.button,
                                              size: Z,
                                              onClick: (e) => {
                                                  null == O || O(e), E(e), H(d.L.PRIMARY);
                                              },
                                              color: null != D ? D : S || A ? s.zxk.Colors.BRAND_INVERTED : s.zxk.Colors.WHITE,
                                              children: null != b ? b : p.NW.string(p.t.IHf1RE)
                                          }),
                                          !w &&
                                              (0, r.jsx)(s.zxk, {
                                                  className: _.button,
                                                  size: Z,
                                                  onClick: (e) => {
                                                      null == O || O(e), H(d.L.DISMISS);
                                                  },
                                                  color: S || A ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
                                                  look: S || A ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED,
                                                  children: null != g ? g : p.NW.string(p.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, r.jsx)(s.zxk, {
                                      className: _.button,
                                      size: s.zxk.Sizes.MAX,
                                      onClick: (e) => {
                                          null == O || O(e), H(d.L.PRIMARY);
                                      },
                                      color: s.zxk.Colors.WHITE,
                                      children: p.NW.string(p.t.HU2IR0)
                                  })
                    }),
                    (0, r.jsx)('div', {
                        className: l()(_.pointer, j, {
                            [_.bottomPointer]: 'top' === I,
                            [_.centerLeftPointer]: 'right' === I && 'center' === x,
                            [_.topLeftPointer]: 'right' === I && 'top' === x
                        })
                    })
                ]
            })
        })
    );
});
