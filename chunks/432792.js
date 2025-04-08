n.d(t, {
    M: () => A,
    VK: () => b,
    WS: () => L,
    t4: () => N,
    tE: () => y
}),
    n(388685),
    n(953529);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(350810),
    d = n(607070),
    E = n(70097),
    f = n(605236),
    C = n(930153),
    p = n(822857),
    h = n(622562),
    _ = n(937860),
    g = n(921944),
    O = n(973792),
    S = n(447489),
    T = n(484885);
function I() {
    return (I =
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
    m = {
        discover: s.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: s.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    A = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: l } = e,
            i = (0, f.wE)(s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: o } = (0, p.W)({ location: 'virtual_currency_onboarding_coachmark' }),
            a = m[t],
            c = (0, f.wE)(a),
            u = o && i && n && !c,
            d = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'CLOSE';
                    c ||
                        (0, f.EW)(m[t], {
                            forceTrack: !0,
                            dismissAction: 'CTA_CLICK' === e ? g.L.TAKE_ACTION : g.L.USER_DISMISS,
                            groupName: g.R.VIRTUAL_CURRENCY_ONBOARDING
                        });
                },
                [c, t]
            ),
            [E, C] = r.useState(!1);
        return (
            r.useEffect(() => {
                u ? E || ((0, f.kk)(a, { groupName: g.R.VIRTUAL_CURRENCY_ONBOARDING }), void 0 !== l && l(), C(!0)) : E && C(!1);
            }, [u, l, E, a]),
            {
                shouldShow: E,
                closeCoachmarkIfOpen: d
            }
        );
    },
    b = (e) => {
        let { invertTail: t, leftOffset: n, rightOffset: r, tailSpineClassName: i, tailTargetInnerClassName: a } = e;
        return (0, l.jsxs)('div', {
            className: o()(O.tail, t ? O.tailPositionInverted : O.tailPositionNormal),
            style: {
                left: n,
                right: r
            },
            children: [
                (0, l.jsx)('div', { className: o()(O.tailSpine, i) }),
                (0, l.jsx)('div', {
                    className: o()(O.tailTargetOuter, t ? O.tailTargetPositionInverted : O.tailTargetPositionNormal),
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
                            className: o()(O.tailTargetInner, a)
                        })
                    })
                })
            ]
        });
    },
    P = (e) => {
        let { customIconSrcs: t } = e,
            n = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
            r = void 0 !== t ? t.animated : T.Z,
            i = void 0 !== t ? t.static : S.Z;
        return n || null == r
            ? (0, l.jsx)('img', {
                  src: i,
                  className: O.orbAsset,
                  alt: 'Orb'
              })
            : (0, l.jsxs)(E.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: O.orbAsset,
                  children: [
                      (0, l.jsx)('source', {
                          src: T.Z,
                          type: 'video/webm'
                      }),
                      (0, l.jsx)('img', {
                          src: S.Z,
                          className: O.orbAsset,
                          alt: 'Orb'
                      })
                  ]
              });
    },
    v = (e) => {
        let { titleText: t, descriptionText: n, onClose: r, onCtaClick: i, ctaText: o, iconComponent: a, tailLeftOffset: s = 22, renderTail: u, invertCoachmark: d = !1, coachmarkRef: E } = e;
        return (0, l.jsxs)('div', {
            className: O.container,
            ref: E,
            children: [
                (0, l.jsx)(_.s, { onClick: r }),
                a,
                (0, l.jsxs)('div', {
                    className: O.content,
                    children: [
                        (0, l.jsx)(c.X6q, {
                            className: O.title,
                            variant: 'heading-md/bold',
                            children: t
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            className: O.description,
                            children: n
                        })
                    ]
                }),
                void 0 !== o &&
                    (0, l.jsx)(c.zxk, {
                        className: O.ctaButton,
                        color: c.zxk.Colors.BRAND,
                        look: c.zxk.Looks.FILLED,
                        onClick: i,
                        fullWidth: !0,
                        children: o
                    }),
                u &&
                    (0, l.jsx)(b, {
                        leftOffset: s,
                        invertTail: d
                    })
            ]
        });
    },
    y = (e) => {
        var t = I(
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
            })({ iconComponent: (0, l.jsx)(P, { customIconSrcs: t.customIconSrcs }) }, t)
        );
    };
function L(e) {
    let { calculateVisibility: t, children: n, popoutElement: i, positionControlRef: o, targetElementRef: a, defaultCoachmarkPosition: s, disableAutoInvert: d, onGetTargetElementDimensions: E, spacing: f } = e,
        [C, p] = r.useState('bottom' === s),
        [_, g] = r.useState(!0),
        [O, S] = r.useState(String(Date.now())),
        T = (0, u.Z)(),
        I = r.useCallback(
            (e) => {
                let n = t(e);
                n !== _ && g(n);
            },
            [_, t]
        ),
        N = a.current,
        m = r.useCallback(() => {
            null != o && null != o.current && o.current.updateElementPosition();
        }, [o]);
    r.useEffect(
        () => (
            null != N && N.ownerDocument.addEventListener('scroll', m, !0),
            () => {
                null != N && N.ownerDocument.removeEventListener('scroll', m, !0);
            }
        ),
        [N, m]
    );
    let A = r.useCallback(
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
                if ((I(l), r && S(String(Date.now())), d)) return;
                let e = l.top < window.innerHeight / 2;
                if (e === C) return;
                p(e), S(String(Date.now()));
            }
        },
        [C, I, E, d]
    );
    (0, h.fu)({
        onGetElementDimensionsAndBoundingRect: A,
        positionControlRef: o,
        shouldPollPositionOnMount: !0,
        targetElementRef: a
    });
    let b = r.Children.map(i, (e) => r.cloneElement(e, { invertCoachmark: C })),
        P = r.useMemo(() => (d ? (null != s ? s : 'bottom') : C ? 'bottom' : 'top'), [d, s, C]),
        v = _ && !T;
    return (0, l.jsx)(c.yRy, {
        autoInvert: !1,
        renderPopout: () => b,
        position: P,
        align: 'left',
        shouldShow: v,
        spacing: f,
        positionKey: O,
        animation: c.yRy.Animation.TRANSLATE,
        targetElementRef: a,
        children: () => n
    });
}
