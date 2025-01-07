n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(393238),
    c = n(605236),
    u = n(279745),
    d = n(921944),
    h = n(388032),
    p = n(410842);
t.Z = l.forwardRef(function (e, t) {
    let { body: n, header: r, artClassName: f, headerClassName: m, contentClassName: g, tryItText: v, dismissText: C, onTryFeature: x, onClose: I, className: _, inlineArt: Z = !1, isPremiumFeature: b = !1, shouldUseHorizontalButtons: S = !1, showGIFTag: N = !1, dismissibleContent: E, position: y = 'top', align: j = 'center', art: T, isPremiumEarlyAccess: P = !1, maxWidth: A = 280, hideDismissButton: w = !1, pointerClassName: M, dismissIconClassName: L, dismissIcon: R, onDismissIconClick: D } = e,
        G = S ? o.Button.Sizes.LARGE : o.Button.Sizes.MAX,
        [B, k] = l.useState(!1),
        { ref: U, width: O } = (0, s.Z)();
    function V(e) {
        (0, c.EW)(E, { dismissAction: e });
    }
    return (
        l.useEffect(() => {
            var e, t;
            let n = (null !== (t = null === (e = U.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
            !B && n > A && k(!0);
        }, [B, O, U, A]),
        l.useEffect(() => {
            (0, c.kk)(E);
        }, [E]),
        (0, i.jsx)('div', {
            className: _,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: a()(p.content, g, {
                    [p.contentNoArt]: null == f || Z,
                    [p.contentPremium]: b || P
                }),
                children: [
                    null != R &&
                        (0, i.jsx)(o.Clickable, {
                            onClick: D,
                            className: L,
                            children: R
                        }),
                    (0, i.jsxs)('div', {
                        className: a()(f, Z ? p.artInline : p.artAbsolute),
                        children: [N && (0, i.jsx)(u.Z, { className: p.gifTag }), T]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.body,
                        children: [
                            (0, i.jsxs)(o.Heading, {
                                className: a()(b ? p.headerWithPremiumIcon : p.header, m),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    b && !P
                                        ? (0, i.jsx)(o.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.premiumIcon
                                          })
                                        : null,
                                    P
                                        ? (0, i.jsxs)(o.Text, {
                                              color: 'always-white',
                                              variant: 'eyebrow',
                                              className: p.earlyAccessBadgeContainer,
                                              children: [
                                                  (0, i.jsx)(o.NitroWheelIcon, {
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
                        ref: U,
                        className: B || !S ? p.buttonContainerVertical : p.buttonContainerHorizontal,
                        children:
                            null != x
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(o.Button, {
                                              className: p.button,
                                              size: G,
                                              onClick: (e) => {
                                                  null == I || I(e), x(e), V(d.L.PRIMARY);
                                              },
                                              color: b || P ? o.Button.Colors.BRAND_INVERTED : o.Button.Colors.WHITE,
                                              children: null != v ? v : h.intl.string(h.t.IHf1RE)
                                          }),
                                          !w &&
                                              (0, i.jsx)(o.Button, {
                                                  className: p.button,
                                                  size: G,
                                                  onClick: (e) => {
                                                      null == I || I(e), V(d.L.DISMISS);
                                                  },
                                                  color: b || P ? o.Button.Colors.WHITE : o.Button.Colors.BRAND,
                                                  look: b || P ? o.Button.Looks.LINK : o.Button.Looks.FILLED,
                                                  children: null != C ? C : h.intl.string(h.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(o.Button, {
                                      className: p.button,
                                      size: o.Button.Sizes.MAX,
                                      onClick: (e) => {
                                          null == I || I(e), V(d.L.PRIMARY);
                                      },
                                      color: o.Button.Colors.WHITE,
                                      children: h.intl.string(h.t.HU2IR0)
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: a()(p.pointer, M, {
                            [p.bottomPointer]: 'top' === y,
                            [p.centerLeftPointer]: 'right' === y && 'center' === j,
                            [p.topLeftPointer]: 'right' === y && 'top' === j
                        })
                    })
                ]
            })
        })
    );
});
