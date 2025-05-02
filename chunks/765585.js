n.d(t, { Z: () => g }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(393238),
    c = n(605236),
    d = n(279745),
    u = n(921944),
    m = n(388032),
    p = n(418952);
let g = r.forwardRef(function (e, t) {
    let { body: n, header: s, artClassName: g, headerClassName: h, contentClassName: f, tryItText: b, dismissText: _, onTryFeature: x, onClose: E, className: j, inlineArt: C = !1, isPremiumFeature: O = !1, shouldUseHorizontalButtons: S = !1, showGIFTag: v = !1, dismissibleContent: T, position: I = 'top', align: N = 'center', art: y, isPremiumEarlyAccess: A = !1, maxWidth: P = 280, hideDismissButton: R = !1, pointerClassName: D, dismissIconClassName: Z, dismissIcon: w, onDismissIconClick: k, tryItButtonColor: L } = e,
        B = S ? a.zxk.Sizes.LARGE : a.zxk.Sizes.MAX,
        [M, U] = r.useState(!1),
        { ref: V, width: G } = (0, o.ZP)();
    function F(e) {
        (0, c.EW)(T, { dismissAction: e });
    }
    return (
        r.useEffect(() => {
            var e, t;
            let n = (null != (t = null == (e = V.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
            !M && n > P && U(!0);
        }, [M, G, V, P]),
        r.useEffect(() => {
            (0, c.kk)(T);
        }, [T]),
        (0, i.jsx)('div', {
            className: j,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: l()(p.content, f, {
                    [p.contentNoArt]: null == g || C,
                    [p.contentPremium]: O || A
                }),
                children: [
                    null != w &&
                        (0, i.jsx)(a.P3F, {
                            onClick: k,
                            className: Z,
                            children: w
                        }),
                    (0, i.jsxs)('div', {
                        className: l()(g, C ? p.artInline : p.artAbsolute),
                        children: [v && (0, i.jsx)(d.Z, { className: p.gifTag }), y]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.body,
                        children: [
                            (0, i.jsxs)(a.X6q, {
                                className: l()(O ? p.headerWithPremiumIcon : p.header, h),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    O && !A
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
                                                      children: m.intl.string(m.t.phHyIS)
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
                        ref: V,
                        className: M || !S ? p.buttonContainerVertical : p.buttonContainerHorizontal,
                        children:
                            null != x
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(a.zxk, {
                                              className: p.button,
                                              size: B,
                                              onClick: (e) => {
                                                  null == E || E(e), x(e), F(u.L.PRIMARY);
                                              },
                                              color: null != L ? L : O || A ? a.zxk.Colors.BRAND_INVERTED : a.zxk.Colors.WHITE,
                                              children: null != b ? b : m.intl.string(m.t.IHf1RE)
                                          }),
                                          !R &&
                                              (0, i.jsx)(a.zxk, {
                                                  className: p.button,
                                                  size: B,
                                                  onClick: (e) => {
                                                      null == E || E(e), F(u.L.DISMISS);
                                                  },
                                                  color: O || A ? a.zxk.Colors.WHITE : a.zxk.Colors.BRAND,
                                                  look: O || A ? a.zxk.Looks.LINK : a.zxk.Looks.FILLED,
                                                  children: null != _ ? _ : m.intl.string(m.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(a.zxk, {
                                      className: p.button,
                                      size: a.zxk.Sizes.MAX,
                                      onClick: (e) => {
                                          null == E || E(e), F(u.L.PRIMARY);
                                      },
                                      color: a.zxk.Colors.WHITE,
                                      children: m.intl.string(m.t.HU2IR0)
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: l()(p.pointer, D, {
                            [p.bottomPointer]: 'top' === I,
                            [p.centerLeftPointer]: 'right' === I && 'center' === N,
                            [p.topLeftPointer]: 'right' === I && 'top' === N
                        })
                    })
                ]
            })
        })
    );
});
