n.d(t, {
    M: () => k,
    U_: () => I,
    VK: () => A,
    t4: () => y,
    tE: () => T
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
    b = n(607070),
    u = n(70097),
    d = n(605236),
    f = n(930153),
    m = n(822857),
    p = n(622562),
    O = n(921944),
    h = n(388032),
    _ = n(175722),
    g = n(447489),
    j = n(484885);
function x() {
    return (x =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function C(e) {
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
let y = () => (0, f.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    N = {
        discover: c.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: c.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    k = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: r } = e,
            a = (0, d.wE)(c.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: s } = (0, m.W)({ location: 'virtual_currency_onboarding_coachmark' }),
            i = (0, d.wE)(N[t]),
            l = s && a && n && !i,
            b = o.useCallback(() => {
                i ||
                    (0, d.EW)(N[t], {
                        forceTrack: !0,
                        dismissAction: O.L.USER_DISMISS
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
    w = (e) =>
        (0, r.jsx)(
            l.zxk,
            v(C({}, e), {
                'aria-label': h.NW.string(h.t.cpT0Cg),
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
    A = (e) => {
        let { invertTail: t, leftOffset: n, rightOffset: o } = e;
        return (0, r.jsxs)('div', {
            className: s()(_.tail, t ? _.tailPositionInverted : _.tailPositionNormal),
            style: {
                left: n,
                right: o
            },
            children: [
                (0, r.jsx)('div', { className: _.tailSpine }),
                (0, r.jsx)('div', {
                    className: s()(_.tailTargetOuter, t ? _.tailTargetPositionInverted : _.tailTargetPositionNormal),
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
    P = () =>
        (0, i.e7)([b.Z], () => b.Z.useReducedMotion)
            ? (0, r.jsx)('img', {
                  src: g.Z,
                  className: _.orbAsset,
                  alt: 'Orb'
              })
            : (0, r.jsxs)(u.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: _.orbAsset,
                  children: [
                      (0, r.jsx)('source', {
                          src: j.Z,
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
        let { titleText: t, descriptionText: n, onClose: o, tailLeftOffset: a = 22, renderTail: s, invertCoachmark: i = !1, iconComponent: c, coachmarkRef: b } = e;
        return (0, r.jsxs)('div', {
            className: _.container,
            ref: b,
            children: [
                (0, r.jsx)(w, { onClick: o }),
                c,
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
                s &&
                    (0, r.jsx)(A, {
                        leftOffset: a,
                        invertTail: i
                    })
            ]
        });
    },
    T = (e) => {
        var t = x(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
        return (0, r.jsx)(E, C({ iconComponent: (0, r.jsx)(P, {}) }, t));
    };
function I(e) {
    let { calculateVisibility: t, backgroundElementRef: n, calculateBaseOffsets: a, offsetControlRef: s, children: i, key: c, coachmarkRef: l, onGetBackgroundElementDimensions: b } = e,
        [u, d] = o.useState(!1),
        [f, m] = o.useState(!0),
        O = o.useCallback(
            (e) => {
                let n = t(e);
                n !== f && m(n);
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
                return (void 0 !== b && b(e), u) ? v(C({}, r), { top: e.height + n }) : void 0 !== l && null !== l.current ? v(C({}, r), { top: -l.current.offsetHeight - n }) : v(C({}, r), { bottom: e.height + n });
            },
            [u, a, b, l]
        );
    return (0, r.jsx)(
        p.E,
        {
            backgroundElementRef: n,
            offsetControlRef: s,
            style: { visibility: f ? 'visible' : 'hidden' },
            getOffsetsRelativeToElement: _,
            fallbackAbsoluteOffsets: {
                top: 0,
                left: 0
            },
            onGetBoundingRect: h,
            children: o.Children.map(i, (e) => o.cloneElement(e, { invertCoachmark: u }))
        },
        c
    );
}
