n.d(t, {
    M: () => N,
    U_: () => E,
    VK: () => w,
    t4: () => C,
    tE: () => I
}),
    n(47120),
    n(266796);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    c = n.n(a),
    i = n(442837),
    s = n(704215),
    l = n(481060),
    b = n(607070),
    u = n(70097),
    d = n(605236),
    f = n(930153),
    p = n(822857),
    m = n(622562),
    O = n(937860),
    h = n(921944),
    g = n(973792),
    j = n(447489),
    _ = n(484885);
function y() {
    return (y =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function v(e) {
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
function x(e, t) {
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
    k = {
        discover: s.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: s.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    N = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: r } = e,
            a = (0, d.wE)(s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: c } = (0, p.W)({ location: 'virtual_currency_onboarding_coachmark' }),
            i = (0, d.wE)(k[t]),
            l = c && a && n && !i,
            b = o.useCallback(() => {
                i ||
                    (0, d.EW)(k[t], {
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
                closeCoachmarkIfOpen: b
            }
        );
    },
    w = (e) => {
        let { invertTail: t, leftOffset: n, rightOffset: o, tailSpineClassName: a, tailTargetInnerClassName: i } = e;
        return (0, r.jsxs)('div', {
            className: c()(g.tail, t ? g.tailPositionInverted : g.tailPositionNormal),
            style: {
                left: n,
                right: o
            },
            children: [
                (0, r.jsx)('div', { className: c()(g.tailSpine, a) }),
                (0, r.jsx)('div', {
                    className: c()(g.tailTargetOuter, t ? g.tailTargetPositionInverted : g.tailTargetPositionNormal),
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
                            className: c()(g.tailTargetInner, i)
                        })
                    })
                })
            ]
        });
    },
    P = (e) => {
        let { customIconSrcs: t } = e,
            n = (0, i.e7)([b.Z], () => b.Z.useReducedMotion),
            o = void 0 !== t ? t.animated : _.Z,
            a = void 0 !== t ? t.static : j.Z;
        return n || null == o
            ? (0, r.jsx)('img', {
                  src: a,
                  className: g.orbAsset,
                  alt: 'Orb'
              })
            : (0, r.jsxs)(u.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: g.orbAsset,
                  children: [
                      (0, r.jsx)('source', {
                          src: _.Z,
                          type: 'video/webm'
                      }),
                      (0, r.jsx)('img', {
                          src: j.Z,
                          className: g.orbAsset,
                          alt: 'Orb'
                      })
                  ]
              });
    },
    T = (e) => {
        let { titleText: t, descriptionText: n, onClose: o, onCtaClick: a, ctaText: c, iconComponent: i, tailLeftOffset: s = 22, renderTail: b, invertCoachmark: u = !1, coachmarkRef: d } = e;
        return (0, r.jsxs)('div', {
            className: g.container,
            ref: d,
            children: [
                (0, r.jsx)(O.s, { onClick: o }),
                i,
                (0, r.jsxs)('div', {
                    className: g.content,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            className: g.title,
                            variant: 'heading-md/bold',
                            children: t
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            className: g.description,
                            children: n
                        })
                    ]
                }),
                void 0 !== c &&
                    (0, r.jsx)(l.zxk, {
                        className: g.ctaButton,
                        color: l.zxk.Colors.BRAND,
                        look: l.zxk.Looks.FILLED,
                        onClick: a,
                        fullWidth: !0,
                        children: c
                    }),
                b &&
                    (0, r.jsx)(w, {
                        leftOffset: s,
                        invertTail: u
                    })
            ]
        });
    },
    I = (e) => {
        var t = y(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
        return (0, r.jsx)(T, v({ iconComponent: (0, r.jsx)(P, { customIconSrcs: t.customIconSrcs }) }, t));
    };
function E(e) {
    let { calculateVisibility: t, backgroundElementRef: n, calculateBaseOffsets: a, offsetControlRef: c, children: i, key: s, coachmarkRef: l, onGetBackgroundElementDimensions: b } = e,
        [u, d] = o.useState(!1),
        [f, p] = o.useState(!0),
        O = o.useCallback(
            (e) => {
                let n = t(e);
                n !== f && p(n);
            },
            [f, t]
        ),
        h = o.useCallback(
            (e) => {
                O(e);
                let t = e.top < window.innerHeight / 2;
                t !== u && d(t);
            },
            [u, O]
        ),
        g = o.useCallback(
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
                return (void 0 !== b && b(e), u) ? x(v({}, r), { top: e.height + n }) : void 0 !== l && null !== l.current ? x(v({}, r), { top: -l.current.offsetHeight - n }) : x(v({}, r), { bottom: e.height + n });
            },
            [u, a, b, l]
        );
    return (0, r.jsx)(
        m.E,
        {
            backgroundElementRef: n,
            offsetControlRef: c,
            style: { visibility: f ? 'visible' : 'hidden' },
            getOffsetsRelativeToElement: g,
            fallbackAbsoluteOffsets: {
                top: 0,
                left: 0
            },
            onGetBoundingRect: h,
            children: o.Children.map(i, (e) => o.cloneElement(e, { invertCoachmark: u }))
        },
        s
    );
}
