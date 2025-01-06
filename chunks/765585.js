n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    u = n(481060),
    a = n(393238),
    s = n(605236),
    c = n(279745),
    d = n(921944),
    f = n(388032),
    _ = n(410842);
e.Z = r.forwardRef(function (t, e) {
    let { body: n, header: l, artClassName: E, headerClassName: p, contentClassName: m, tryItText: g, dismissText: I, onTryFeature: S, onClose: h, className: C, inlineArt: T = !1, isPremiumFeature: v = !1, shouldUseHorizontalButtons: N = !1, showGIFTag: A = !1, dismissibleContent: L, position: b = 'top', align: O = 'center', art: P, isPremiumEarlyAccess: R = !1, maxWidth: M = 280, hideDismissButton: y = !1, pointerClassName: Z, dismissIconClassName: U, dismissIcon: D, onDismissIconClick: j } = t,
        x = N ? u.Button.Sizes.LARGE : u.Button.Sizes.MAX,
        [F, G] = r.useState(!1),
        { ref: w, width: H } = (0, a.Z)();
    function k(t) {
        (0, s.EW)(L, { dismissAction: t });
    }
    return (
        r.useEffect(() => {
            var t, e;
            let n = (null !== (e = null === (t = w.current) || void 0 === t ? void 0 : t.scrollWidth) && void 0 !== e ? e : 0) + 64;
            !F && n > M && G(!0);
        }, [F, H, w, M]),
        r.useEffect(() => {
            (0, s.kk)(L);
        }, [L]),
        (0, i.jsx)('div', {
            className: C,
            ref: e,
            children: (0, i.jsxs)('div', {
                className: o()(_.content, m, {
                    [_.contentNoArt]: null == E || T,
                    [_.contentPremium]: v || R
                }),
                children: [
                    null != D &&
                        (0, i.jsx)(u.Clickable, {
                            onClick: j,
                            className: U,
                            children: D
                        }),
                    (0, i.jsxs)('div', {
                        className: o()(E, T ? _.artInline : _.artAbsolute),
                        children: [A && (0, i.jsx)(c.Z, { className: _.gifTag }), P]
                    }),
                    (0, i.jsxs)('div', {
                        className: _.body,
                        children: [
                            (0, i.jsxs)(u.Heading, {
                                className: o()(v ? _.headerWithPremiumIcon : _.header, p),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    v && !R
                                        ? (0, i.jsx)(u.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: _.premiumIcon
                                          })
                                        : null,
                                    R
                                        ? (0, i.jsxs)(u.Text, {
                                              color: 'always-white',
                                              variant: 'eyebrow',
                                              className: _.earlyAccessBadgeContainer,
                                              children: [
                                                  (0, i.jsx)(u.NitroWheelIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: _.earlyAccessIcon
                                                  }),
                                                  (0, i.jsx)('span', {
                                                      className: _.earlyAccessText,
                                                      children: f.intl.string(f.t.phHyIS)
                                                  })
                                              ]
                                          })
                                        : null,
                                    l
                                ]
                            }),
                            null == n
                                ? null
                                : 'string' == typeof n
                                  ? (0, i.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'always-white',
                                        children: n
                                    })
                                  : n
                        ]
                    }),
                    (0, i.jsx)('div', {
                        ref: w,
                        className: F || !N ? _.buttonContainerVertical : _.buttonContainerHorizontal,
                        children:
                            null != S
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.Button, {
                                              className: _.button,
                                              size: x,
                                              onClick: (t) => {
                                                  null == h || h(t), S(t), k(d.L.PRIMARY);
                                              },
                                              color: v || R ? u.Button.Colors.BRAND_INVERTED : u.Button.Colors.WHITE,
                                              children: null != g ? g : f.intl.string(f.t.IHf1RE)
                                          }),
                                          !y &&
                                              (0, i.jsx)(u.Button, {
                                                  className: _.button,
                                                  size: x,
                                                  onClick: (t) => {
                                                      null == h || h(t), k(d.L.DISMISS);
                                                  },
                                                  color: v || R ? u.Button.Colors.WHITE : u.Button.Colors.BRAND,
                                                  look: v || R ? u.Button.Looks.LINK : u.Button.Looks.FILLED,
                                                  children: null != I ? I : f.intl.string(f.t.om7Ovr)
                                              })
                                      ]
                                  })
                                : (0, i.jsx)(u.Button, {
                                      className: _.button,
                                      size: u.Button.Sizes.MAX,
                                      onClick: (t) => {
                                          null == h || h(t), k(d.L.PRIMARY);
                                      },
                                      color: u.Button.Colors.WHITE,
                                      children: f.intl.string(f.t.HU2IR0)
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: o()(_.pointer, Z, {
                            [_.bottomPointer]: 'top' === b,
                            [_.centerLeftPointer]: 'right' === b && 'center' === O,
                            [_.topLeftPointer]: 'right' === b && 'top' === O
                        })
                    })
                ]
            })
        })
    );
});
