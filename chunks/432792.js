n.d(t, {
    M: () => N,
    U_: () => I,
    VK: () => P,
    t4: () => C,
    tE: () => T
}),
    n(47120),
    n(266796);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(442837),
    c = n(704215),
    l = n(481060),
    d = n(607070),
    b = n(70097),
    u = n(605236),
    f = n(930153),
    m = n(822857),
    p = n(622562),
    h = n(921944),
    O = n(388032),
    _ = n(175722),
    g = n(447489),
    x = n(484885);
function j() {
    return (j =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = () => (0, f.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    y = {
        discover: c.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: c.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    N = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: r } = e,
            a = (0, u.wE)(c.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: i } = (0, m.W)({ location: 'virtual_currency_onboarding_coachmark' }),
            s = (0, u.wE)(y[t]),
            l = i && a && n && !s,
            d = o.useCallback(() => {
                s ||
                    (0, u.EW)(y[t], {
                        forceTrack: !0,
                        dismissAction: h.L.USER_DISMISS
                    });
            }, [s, t]),
            [b, f] = o.useState(!1);
        return (
            o.useEffect(() => {
                l ? b || (void 0 !== r && r(), f(!0)) : b && f(!1);
            }, [l, r, b]),
            {
                shouldShow: b,
                closeCoachmarkIfOpen: d
            }
        );
    },
    w = (e) =>
        (0, r.jsx)(
            l.zxk,
            v(k({}, e), {
                'aria-label': O.NW.string(O.t.cpT0Cg),
                look: l.zxk.Looks.BLANK,
                size: l.zxk.Sizes.NONE,
                wrapperClassName: _.closeButton,
                innerClassName: _.closeButtonInner,
                children: (0, r.jsx)(l.Dio, {
                    size: 'refresh_sm',
                    className: _.closeButtonIcon
                })
            })
        ),
    P = (e) => {
        let { invertTail: t, leftOffset: n, rightOffset: o } = e;
        return (0, r.jsxs)('div', {
            className: i()(_.tail, t ? _.tailPositionInverted : _.tailPositionNormal),
            style: {
                left: n,
                right: o
            },
            children: [
                (0, r.jsx)('div', { className: _.tailSpine }),
                (0, r.jsx)('div', {
                    className: i()(_.tailTargetOuter, t ? _.tailTargetPositionInverted : _.tailTargetPositionNormal),
                    children: (0, r.jsx)('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '8',
                        height: '8',
                        viewBox: '0 0 8 8',
                        fill: 'none',
                        children: (0, r.jsx)('circle', {
                            cx: '50%',
                            cy: '50%',
                            r: '3',
                            className: _.tailTargetInner
                        })
                    })
                })
            ]
        });
    },
    A = () =>
        (0, s.e7)([d.Z], () => d.Z.useReducedMotion)
            ? (0, r.jsx)('img', {
                  src: g.Z,
                  className: _.orbAsset,
                  alt: 'Orb'
              })
            : (0, r.jsxs)(b.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: _.orbAsset,
                  children: [
                      (0, r.jsx)('source', {
                          src: x.Z,
                          type: 'video/webm'
                      }),
                      (0, r.jsx)('img', {
                          src: g.Z,
                          className: _.orbAsset,
                          alt: 'Orb'
                      })
                  ]
              }),
    E = (e) => {
        let { titleText: t, descriptionText: n, onClose: o, onCtaClick: a, ctaText: i, iconComponent: s, tailLeftOffset: c = 22, renderTail: d, invertCoachmark: b = !1, coachmarkRef: u } = e;
        return (0, r.jsxs)('div', {
            className: _.container,
            ref: u,
            children: [
                (0, r.jsx)(w, { onClick: o }),
                s,
                (0, r.jsxs)('div', {
                    className: _.content,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            className: _.title,
                            variant: 'heading-md/bold',
                            children: t
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            className: _.description,
                            children: n
                        })
                    ]
                }),
                void 0 !== i &&
                    (0, r.jsx)(l.zxk, {
                        className: _.ctaButton,
                        color: l.zxk.Colors.BRAND,
                        look: l.zxk.Looks.FILLED,
                        onClick: a,
                        fullWidth: !0,
                        children: i
                    }),
                d &&
                    (0, r.jsx)(P, {
                        leftOffset: c,
                        invertTail: b
                    })
            ]
        });
    },
    T = (e) => {
        var t = j(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
        return (0, r.jsx)(E, k({ iconComponent: (0, r.jsx)(A, {}) }, t));
    };
function I(e) {
    let { calculateVisibility: t, backgroundElementRef: n, calculateBaseOffsets: a, offsetControlRef: i, children: s, key: c, coachmarkRef: l, onGetBackgroundElementDimensions: d } = e,
        [b, u] = o.useState(!1),
        [f, m] = o.useState(!0),
        h = o.useCallback(
            (e) => {
                let n = t(e);
                n !== f && m(n);
            },
            [f, t]
        ),
        O = o.useCallback(
            (e) => {
                h(e);
                let t = e.top < window.innerHeight / 2;
                t !== b && u(t);
            },
            [b, h]
        ),
        _ = o.useCallback(
            (e) => {
                let t = a(e),
                    { verticalOffset: n } = t,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                        }
                        return o;
                    })(t, ['verticalOffset']);
                return (void 0 !== d && d(e), b) ? v(k({}, r), { top: e.height + n }) : void 0 !== l && null !== l.current ? v(k({}, r), { top: -l.current.offsetHeight - n }) : v(k({}, r), { bottom: e.height + n });
            },
            [b, a, d, l]
        );
    return (0, r.jsx)(
        p.E,
        {
            backgroundElementRef: n,
            offsetControlRef: i,
            style: { visibility: f ? 'visible' : 'hidden' },
            getOffsetsRelativeToElement: _,
            fallbackAbsoluteOffsets: {
                top: 0,
                left: 0
            },
            onGetBoundingRect: O,
            children: o.Children.map(s, (e) => o.cloneElement(e, { invertCoachmark: b }))
        },
        c
    );
}
