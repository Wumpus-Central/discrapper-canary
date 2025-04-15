n.d(t, {
    M: () => R,
    VK: () => k,
    WS: () => T,
    t4: () => j,
    tE: () => w
}),
    n(388685),
    n(953529);
var r = n(200651),
    a = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    i = n(704215),
    c = n(481060),
    u = n(350810),
    d = n(607070),
    m = n(70097),
    f = n(605236),
    h = n(930153),
    b = n(822857),
    p = n(622562),
    g = n(937860),
    N = n(921944),
    C = n(973792),
    O = n(447489),
    v = n(484885);
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
let j = () => (0, h.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    y = {
        discover: i.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: i.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    R = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: r } = e,
            s = (0, f.wE)(i.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: l } = (0, b.W)({ location: 'virtual_currency_onboarding_coachmark' }),
            o = y[t],
            c = (0, f.wE)(o),
            u = l && s && n && !c,
            d = a.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'CLOSE';
                    c ||
                        (0, f.EW)(y[t], {
                            forceTrack: !0,
                            dismissAction: 'CTA_CLICK' === e ? N.L.TAKE_ACTION : N.L.USER_DISMISS,
                            groupName: N.R.VIRTUAL_CURRENCY_ONBOARDING
                        });
                },
                [c, t]
            ),
            [m, h] = a.useState(!1);
        return (
            a.useEffect(() => {
                u ? m || ((0, f.kk)(o, { groupName: N.R.VIRTUAL_CURRENCY_ONBOARDING }), void 0 !== r && r(), h(!0)) : m && h(!1);
            }, [u, r, m, o]),
            {
                shouldShow: m,
                closeCoachmarkIfOpen: d
            }
        );
    },
    k = (e) => {
        let { invertTail: t, leftOffset: n, rightOffset: a, tailSpineClassName: s, tailTargetInnerClassName: o } = e;
        return (0, r.jsxs)('div', {
            className: l()(C.tail, t ? C.tailPositionInverted : C.tailPositionNormal),
            style: {
                left: n,
                right: a
            },
            children: [
                (0, r.jsx)('div', { className: l()(C.tailSpine, s) }),
                (0, r.jsx)('div', {
                    className: l()(C.tailTargetOuter, t ? C.tailTargetPositionInverted : C.tailTargetPositionNormal),
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
                            className: l()(C.tailTargetInner, o)
                        })
                    })
                })
            ]
        });
    },
    A = (e) => {
        let { customIconSrcs: t } = e,
            n = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
            a = void 0 !== t ? t.animated : v.Z,
            s = void 0 !== t ? t.static : O.Z;
        return n || null == a
            ? (0, r.jsx)('img', {
                  src: s,
                  className: C.orbAsset,
                  alt: 'Orb'
              })
            : (0, r.jsxs)(m.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: C.orbAsset,
                  children: [
                      (0, r.jsx)('source', {
                          src: v.Z,
                          type: 'video/webm'
                      }),
                      (0, r.jsx)('img', {
                          src: O.Z,
                          className: C.orbAsset,
                          alt: 'Orb'
                      })
                  ]
              });
    },
    E = (e) => {
        let { titleText: t, descriptionText: n, onClose: a, onCtaClick: s, ctaText: l, iconComponent: o, tailLeftOffset: i = 22, renderTail: u, invertCoachmark: d = !1, coachmarkRef: m } = e;
        return (0, r.jsxs)('div', {
            className: C.container,
            ref: m,
            children: [
                (0, r.jsx)(g.s, { onClick: a }),
                o,
                (0, r.jsxs)('div', {
                    className: C.content,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            className: C.title,
                            variant: 'heading-md/bold',
                            children: t
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            className: C.description,
                            children: n
                        })
                    ]
                }),
                void 0 !== l &&
                    (0, r.jsx)(c.zxk, {
                        className: C.ctaButton,
                        color: c.zxk.Colors.BRAND,
                        look: c.zxk.Looks.FILLED,
                        onClick: s,
                        fullWidth: !0,
                        children: l
                    }),
                u &&
                    (0, r.jsx)(k, {
                        leftOffset: i,
                        invertTail: d
                    })
            ]
        });
    },
    w = (e) => {
        var t = x(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
        return (0, r.jsx)(
            E,
            (function (e) {
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
            })({ iconComponent: (0, r.jsx)(A, { customIconSrcs: t.customIconSrcs }) }, t)
        );
    };
function T(e) {
    let { calculateVisibility: t, children: n, popoutElement: s, positionControlRef: l, targetElementRef: o, defaultCoachmarkPosition: i, disableAutoInvert: d, onGetTargetElementDimensions: m, spacing: f } = e,
        [h, b] = a.useState('bottom' === i),
        [g, N] = a.useState(!0),
        [C, O] = a.useState(String(Date.now())),
        v = (0, u.Z)(),
        x = a.useCallback(
            (e) => {
                let n = t(e);
                n !== g && N(n);
            },
            [g, t]
        ),
        j = o.current,
        y = a.useCallback(() => {
            null != l && null != l.current && l.current.updateElementPosition();
        }, [l]);
    a.useEffect(
        () => (
            null != j && j.ownerDocument.addEventListener('scroll', y, !0),
            () => {
                null != j && j.ownerDocument.removeEventListener('scroll', y, !0);
            }
        ),
        [j, y]
    );
    let R = a.useCallback(
        (e) => {
            let { height: t, width: n, elementBoundingRect: r, hasElementPositionChanged: a } = e;
            if (
                (null != m &&
                    m({
                        height: t,
                        width: n
                    }),
                null != r)
            ) {
                if ((x(r), a && O(String(Date.now())), d)) return;
                let e = r.top < window.innerHeight / 2;
                if (e === h) return;
                b(e), O(String(Date.now()));
            }
        },
        [h, x, m, d]
    );
    (0, p.fu)({
        onGetElementDimensionsAndBoundingRect: R,
        positionControlRef: l,
        shouldPollPositionOnMount: !0,
        targetElementRef: o
    });
    let k = a.Children.map(s, (e) => a.cloneElement(e, { invertCoachmark: h })),
        A = a.useMemo(() => (d ? (null != i ? i : 'bottom') : h ? 'bottom' : 'top'), [d, i, h]),
        E = g && !v;
    return (0, r.jsx)(c.yRy, {
        autoInvert: !1,
        renderPopout: () => k,
        position: A,
        align: 'left',
        shouldShow: E,
        spacing: f,
        positionKey: C,
        animation: c.yRy.Animation.TRANSLATE,
        targetElementRef: o,
        children: () => n
    });
}
