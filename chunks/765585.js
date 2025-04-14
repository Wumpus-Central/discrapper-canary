n.d(t, { Z: () => f }), n(388685);
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
let f = i.forwardRef(function (e, t) {
    let { body: n, header: o, artClassName: f, headerClassName: _, contentClassName: m, tryItText: b, dismissText: g, onTryFeature: E, onClose: O, className: y, inlineArt: C = !1, isPremiumFeature: S = !1, shouldUseHorizontalButtons: v = !1, showGIFTag: N = !1, dismissibleContent: T, position: I = 'top', align: x = 'center', art: P, isPremiumEarlyAccess: A = !1, maxWidth: w = 280, hideDismissButton: R = !1, pointerClassName: j, dismissIconClassName: k, dismissIcon: L, onDismissIconClick: M, tryItButtonColor: D } = e,
        Z = v ? s.zxk.Sizes.LARGE : s.zxk.Sizes.MAX,
        [U, V] = i.useState(!1),
        { ref: H, width: W } = (0, a.Z)();
    function G(e) {
        (0, c.EW)(T, { dismissAction: e });
    }
    return (
        i.useEffect(() => {
            var e, t;
            let n = (null != (t = null == (e = H.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
            !U && n > w && V(!0);
        }, [U, W, H, w]),
        i.useEffect(() => {
            (0, c.kk)(T);
        }, [T]),
        (0, r.jsx)('div', {
            className: y,
            ref: t,
            children: (0, r.jsxs)('div', {
                className: l()(h.content, m, {
                    [h.contentNoArt]: null == f || C,
                    [h.contentPremium]: S || A
                }),
                children: [
                    null != L &&
                        (0, r.jsx)(s.P3F, {
                            onClick: M,
                            className: k,
                            children: L
                        }),
                    (0, r.jsxs)('div', {
                        className: l()(f, C ? h.artInline : h.artAbsolute),
                        children: [N && (0, r.jsx)(u.Z, { className: h.gifTag }), P]
                    }),
                    (0, r.jsxs)('div', {
                        className: h.body,
                        children: [
                            (0, r.jsxs)(s.X6q, {
                                className: l()(S ? h.headerWithPremiumIcon : h.header, _),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    S && !A
                                        ? (0, r.jsx)(s.SrA, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: h.premiumIcon
                                          })
                                        : null,
                                    A
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
                        className: U || !v ? h.buttonContainerVertical : h.buttonContainerHorizontal,
                        children:
                            null != E
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(s.zxk, {
                                              className: h.button,
                                              size: Z,
                                              onClick: (e) => {
                                                  null == O || O(e), E(e), G(d.L.PRIMARY);
                                              },
                                              color: null != D ? D : S || A ? s.zxk.Colors.BRAND_INVERTED : s.zxk.Colors.WHITE,
                                              children: null != b ? b : p.NW.string(p.t.IHf1RE)
                                          }),
                                          !R &&
                                              (0, r.jsx)(s.zxk, {
                                                  className: h.button,
                                                  size: Z,
                                                  onClick: (e) => {
                                                      null == O || O(e), G(d.L.DISMISS);
                                                  },
                                                  color: S || A ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
                                                  look: S || A ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED,
                                                  children: null != g ? g : p.NW.string(p.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, r.jsx)(s.zxk, {
                                      className: h.button,
                                      size: s.zxk.Sizes.MAX,
                                      onClick: (e) => {
                                          null == O || O(e), G(d.L.PRIMARY);
                                      },
                                      color: s.zxk.Colors.WHITE,
                                      children: p.NW.string(p.t.HU2IR0)
                                  })
                    }),
                    (0, r.jsx)('div', {
                        className: l()(h.pointer, j, {
                            [h.bottomPointer]: 'top' === I,
                            [h.centerLeftPointer]: 'right' === I && 'center' === x,
                            [h.topLeftPointer]: 'right' === I && 'top' === x
                        })
                    })
                ]
            })
        })
    );
});
