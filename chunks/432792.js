n.d(t, {
    M: () => m,
    VK: () => P,
    WS: () => y,
    t4: () => N,
    tE: () => L
}),
    n(388685),
    n(953529);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(704215),
    u = n(481060),
    c = n(350810),
    d = n(607070),
    E = n(70097),
    f = n(605236),
    C = n(930153),
    _ = n(822857),
    p = n(622562),
    h = n(937860),
    g = n(921944),
    I = n(973792),
    O = n(447489),
    T = n(484885);
function S() {
    return (S =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
            }
            return e;
        }).apply(this, arguments);
}
let N = () => (0, C.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    A = {
        discover: s.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: s.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    m = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: l } = e,
            i = (0, f.wE)(s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: o } = (0, _.W)({ location: 'virtual_currency_onboarding_coachmark' }),
            a = A[t],
            u = (0, f.wE)(a),
            c = o && i && n && !u,
            d = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'CLOSE';
                    u ||
                        (0, f.EW)(A[t], {
                            forceTrack: !0,
                            dismissAction: 'CTA_CLICK' === e ? g.L.TAKE_ACTION : g.L.USER_DISMISS,
                            groupName: g.R.VIRTUAL_CURRENCY_ONBOARDING
                        });
                },
                [u, t]
            ),
            [E, C] = r.useState(!1);
        return (
            r.useEffect(() => {
                c ? E || ((0, f.kk)(a, { groupName: g.R.VIRTUAL_CURRENCY_ONBOARDING }), void 0 !== l && l(), C(!0)) : E && C(!1);
            }, [c, l, E, a]),
            {
                shouldShow: E,
                closeCoachmarkIfOpen: d
            }
        );
    },
    P = (e) => {
        let { invertTail: t, leftOffset: n, rightOffset: r, tailSpineClassName: i, tailTargetInnerClassName: a } = e;
        return (0, l.jsxs)('div', {
            className: o()(I.tail, t ? I.tailPositionInverted : I.tailPositionNormal),
            style: {
                left: n,
                right: r
            },
            children: [
                (0, l.jsx)('div', { className: o()(I.tailSpine, i) }),
                (0, l.jsx)('div', {
                    className: o()(I.tailTargetOuter, t ? I.tailTargetPositionInverted : I.tailTargetPositionNormal),
                    children: (0, l.jsx)('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '8',
                        height: '8',
                        viewBox: '0 0 8 8',
                        fill: 'none',
                        children: (0, l.jsx)('circle', {
                            cx: '50%',
                            cy: '50%',
                            r: '3',
                            className: o()(I.tailTargetInner, a)
                        })
                    })
                })
            ]
        });
    },
    b = (e) => {
        let { customIconSrcs: t } = e,
            n = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
            r = void 0 !== t ? t.animated : T.Z,
            i = void 0 !== t ? t.static : O.Z;
        return n || null == r
            ? (0, l.jsx)('img', {
                  src: i,
                  className: I.orbAsset,
                  alt: 'Orb'
              })
            : (0, l.jsxs)(E.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: I.orbAsset,
                  children: [
                      (0, l.jsx)('source', {
                          src: T.Z,
                          type: 'video/webm'
                      }),
                      (0, l.jsx)('img', {
                          src: O.Z,
                          className: I.orbAsset,
                          alt: 'Orb'
                      })
                  ]
              });
    },
    v = (e) => {
        let { titleText: t, descriptionText: n, onClose: r, onCtaClick: i, ctaText: o, iconComponent: a, tailLeftOffset: s = 22, renderTail: c, invertCoachmark: d = !1, coachmarkRef: E } = e;
        return (0, l.jsxs)('div', {
            className: I.container,
            ref: E,
            children: [
                (0, l.jsx)(h.s, { onClick: r }),
                a,
                (0, l.jsxs)('div', {
                    className: I.content,
                    children: [
                        (0, l.jsx)(u.X6q, {
                            className: I.title,
                            variant: 'heading-md/bold',
                            children: t
                        }),
                        (0, l.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            className: I.description,
                            children: n
                        })
                    ]
                }),
                void 0 !== o &&
                    (0, l.jsx)(u.zxk, {
                        className: I.ctaButton,
                        color: u.zxk.Colors.BRAND,
                        look: u.zxk.Looks.FILLED,
                        onClick: i,
                        fullWidth: !0,
                        children: o
                    }),
                c &&
                    (0, l.jsx)(P, {
                        leftOffset: s,
                        invertTail: d
                    })
            ]
        });
    },
    L = (e) => {
        var t = S(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
        return (0, l.jsx)(
            v,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })({ iconComponent: (0, l.jsx)(b, { customIconSrcs: t.customIconSrcs }) }, t)
        );
    };
function y(e) {
    let { calculateVisibility: t, children: n, popoutElement: i, positionControlRef: o, targetElementRef: a, defaultCoachmarkPosition: s, disableAutoInvert: d, onGetTargetElementDimensions: E, spacing: f } = e,
        [C, _] = r.useState('bottom' === s),
        [h, g] = r.useState(!0),
        [I, O] = r.useState(String(Date.now())),
        T = (0, c.Z)(),
        S = r.useCallback(
            (e) => {
                let n = t(e);
                n !== h && g(n);
            },
            [h, t]
        ),
        N = a.current,
        A = r.useCallback(() => {
            null != o && null != o.current && o.current.updateElementPosition();
        }, [o]);
    r.useEffect(
        () => (
            null != N && N.ownerDocument.addEventListener('scroll', A, !0),
            () => {
                null != N && N.ownerDocument.removeEventListener('scroll', A, !0);
            }
        ),
        [N, A]
    );
    let m = r.useCallback(
        (e) => {
            let { height: t, width: n, elementBoundingRect: l, hasElementPositionChanged: r } = e;
            if (
                (null != E &&
                    E({
                        height: t,
                        width: n
                    }),
                null != l)
            ) {
                if ((S(l), r && O(String(Date.now())), d)) return;
                let e = l.top < window.innerHeight / 2;
                if (e === C) return;
                _(e), O(String(Date.now()));
            }
        },
        [C, S, E, d]
    );
    (0, p.fu)({
        onGetElementDimensionsAndBoundingRect: m,
        positionControlRef: o,
        shouldPollPositionOnMount: !0,
        targetElementRef: a
    });
    let P = r.Children.map(i, (e) => r.cloneElement(e, { invertCoachmark: C })),
        b = r.useMemo(() => (d ? (null != s ? s : 'bottom') : C ? 'bottom' : 'top'), [d, s, C]),
        v = h && !T;
    return (0, l.jsx)(u.yRy, {
        autoInvert: !1,
        renderPopout: () => P,
        position: b,
        align: 'left',
        shouldShow: v,
        spacing: f,
        positionKey: I,
        animation: u.yRy.Animation.TRANSLATE,
        targetElementRef: a,
        children: () => n
    });
}
