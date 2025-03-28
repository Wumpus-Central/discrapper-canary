n.d(t, {
    M: () => N,
    U_: () => A,
    VK: () => w,
    t4: () => v,
    tE: () => E
}),
    n(47120),
    n(266796);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    i = n(442837),
    c = n(704215),
    l = n(481060),
    d = n(607070),
    u = n(70097),
    b = n(605236),
    f = n(930153),
    m = n(822857),
    p = n(622562),
    h = n(921944),
    _ = n(388032),
    O = n(175722),
    g = n(447489),
    x = n(484885);
function C() {
    return (C =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function j(e) {
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
function k(e, t) {
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
let v = () => (0, f.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    y = {
        discover: c.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: c.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    N = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: r } = e,
            a = (0, b.wE)(c.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: s } = (0, m.W)({ location: 'virtual_currency_onboarding_coachmark' }),
            i = (0, b.wE)(y[t]),
            l = s && a && n && !i,
            d = o.useCallback(() => {
                i ||
                    (0, b.EW)(y[t], {
                        forceTrack: !0,
                        dismissAction: h.L.USER_DISMISS
                    });
            }, [i, t]),
            [u, f] = o.useState(!1);
        return (
            o.useEffect(() => {
                l ? u || (void 0 !== r && r(), f(!0)) : u && f(!1);
            }, [l, r, u]),
            {
                shouldShow: u,
                closeCoachmarkIfOpen: d
            }
        );
    },
    T = (e) =>
        (0, r.jsx)(
            l.zxk,
            k(j({}, e), {
                'aria-label': _.NW.string(_.t.cpT0Cg),
                look: l.zxk.Looks.BLANK,
                size: l.zxk.Sizes.NONE,
                wrapperClassName: O.closeButton,
                innerClassName: O.closeButtonInner,
                children: (0, r.jsx)(l.Dio, {
                    size: 'refresh_sm',
                    className: O.closeButtonIcon
                })
            })
        ),
    w = (e) => {
        let { invertTail: t, leftOffset: n, rightOffset: o, tailSpineClassName: a, tailTargetInnerClassName: i } = e;
        return (0, r.jsxs)('div', {
            className: s()(O.tail, t ? O.tailPositionInverted : O.tailPositionNormal),
            style: {
                left: n,
                right: o
            },
            children: [
                (0, r.jsx)('div', { className: s()(O.tailSpine, a) }),
                (0, r.jsx)('div', {
                    className: s()(O.tailTargetOuter, t ? O.tailTargetPositionInverted : O.tailTargetPositionNormal),
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
                            className: s()(O.tailTargetInner, i)
                        })
                    })
                })
            ]
        });
    },
    I = (e) => {
        let { customIconSrcs: t } = e,
            n = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
            o = void 0 !== t ? t.animated : x.Z,
            a = void 0 !== t ? t.static : g.Z;
        return n || null == o
            ? (0, r.jsx)('img', {
                  src: a,
                  className: O.orbAsset,
                  alt: 'Orb'
              })
            : (0, r.jsxs)(u.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: O.orbAsset,
                  children: [
                      (0, r.jsx)('source', {
                          src: x.Z,
                          type: 'video/webm'
                      }),
                      (0, r.jsx)('img', {
                          src: g.Z,
                          className: O.orbAsset,
                          alt: 'Orb'
                      })
                  ]
              });
    },
    P = (e) => {
        let { titleText: t, descriptionText: n, onClose: o, onCtaClick: a, ctaText: s, iconComponent: i, tailLeftOffset: c = 22, renderTail: d, invertCoachmark: u = !1, coachmarkRef: b } = e;
        return (0, r.jsxs)('div', {
            className: O.container,
            ref: b,
            children: [
                (0, r.jsx)(T, { onClick: o }),
                i,
                (0, r.jsxs)('div', {
                    className: O.content,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            className: O.title,
                            variant: 'heading-md/bold',
                            children: t
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            className: O.description,
                            children: n
                        })
                    ]
                }),
                void 0 !== s &&
                    (0, r.jsx)(l.zxk, {
                        className: O.ctaButton,
                        color: l.zxk.Colors.BRAND,
                        look: l.zxk.Looks.FILLED,
                        onClick: a,
                        fullWidth: !0,
                        children: s
                    }),
                d &&
                    (0, r.jsx)(w, {
                        leftOffset: c,
                        invertTail: u
                    })
            ]
        });
    },
    E = (e) => {
        var t = C(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
        return (0, r.jsx)(P, j({ iconComponent: (0, r.jsx)(I, { customIconSrcs: t.customIconSrcs }) }, t));
    };
function A(e) {
    let { calculateVisibility: t, backgroundElementRef: n, calculateBaseOffsets: a, offsetControlRef: s, children: i, key: c, coachmarkRef: l, onGetBackgroundElementDimensions: d } = e,
        [u, b] = o.useState(!1),
        [f, m] = o.useState(!0),
        h = o.useCallback(
            (e) => {
                let n = t(e);
                n !== f && m(n);
            },
            [f, t]
        ),
        _ = o.useCallback(
            (e) => {
                h(e);
                let t = e.top < window.innerHeight / 2;
                t !== u && b(t);
            },
            [u, h]
        ),
        O = o.useCallback(
            (e) => {
                let t = a(e, u),
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
                return (void 0 !== d && d(e), u) ? k(j({}, r), { top: e.height + n }) : void 0 !== l && null !== l.current ? k(j({}, r), { top: -l.current.offsetHeight - n }) : k(j({}, r), { bottom: e.height + n });
            },
            [u, a, d, l]
        );
    return (0, r.jsx)(
        p.E,
        {
            backgroundElementRef: n,
            offsetControlRef: s,
            style: { visibility: f ? 'visible' : 'hidden' },
            getOffsetsRelativeToElement: O,
            fallbackAbsoluteOffsets: {
                top: 0,
                left: 0
            },
            onGetBoundingRect: _,
            children: o.Children.map(i, (e) => o.cloneElement(e, { invertCoachmark: u }))
        },
        c
    );
}
