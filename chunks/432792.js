n.d(t, {
    M: () => N,
    VK: () => k,
    WS: () => I,
    t4: () => y,
    tE: () => P
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
    u = n(350810),
    d = n(607070),
    b = n(70097),
    m = n(605236),
    f = n(930153),
    p = n(822857),
    h = n(622562),
    g = n(937860),
    _ = n(921944),
    O = n(973792),
    j = n(447489),
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
let y = () => (0, f.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    C = {
        discover: c.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: c.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    N = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: r } = e,
            a = (0, m.wE)(c.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: i } = (0, p.W)({ location: 'virtual_currency_onboarding_coachmark' }),
            s = (0, m.wE)(C[t]),
            l = i && a && n && !s,
            u = o.useCallback(() => {
                s ||
                    (0, m.EW)(C[t], {
                        forceTrack: !0,
                        dismissAction: _.L.USER_DISMISS
                    });
            }, [s, t]),
            [d, b] = o.useState(!1);
        return (
            o.useEffect(() => {
                l ? d || (void 0 !== r && r(), b(!0)) : d && b(!1);
            }, [l, r, d]),
            {
                shouldShow: d,
                closeCoachmarkIfOpen: u
            }
        );
    },
    k = (e) => {
        let { invertTail: t, leftOffset: n, rightOffset: o, tailSpineClassName: a, tailTargetInnerClassName: s } = e;
        return (0, r.jsxs)('div', {
            className: i()(O.tail, t ? O.tailPositionInverted : O.tailPositionNormal),
            style: {
                left: n,
                right: o
            },
            children: [
                (0, r.jsx)('div', { className: i()(O.tailSpine, a) }),
                (0, r.jsx)('div', {
                    className: i()(O.tailTargetOuter, t ? O.tailTargetPositionInverted : O.tailTargetPositionNormal),
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
                            className: i()(O.tailTargetInner, s)
                        })
                    })
                })
            ]
        });
    },
    w = (e) => {
        let { customIconSrcs: t } = e,
            n = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            o = void 0 !== t ? t.animated : v.Z,
            a = void 0 !== t ? t.static : j.Z;
        return n || null == o
            ? (0, r.jsx)('img', {
                  src: a,
                  className: O.orbAsset,
                  alt: 'Orb'
              })
            : (0, r.jsxs)(b.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: O.orbAsset,
                  children: [
                      (0, r.jsx)('source', {
                          src: v.Z,
                          type: 'video/webm'
                      }),
                      (0, r.jsx)('img', {
                          src: j.Z,
                          className: O.orbAsset,
                          alt: 'Orb'
                      })
                  ]
              });
    },
    T = (e) => {
        let { titleText: t, descriptionText: n, onClose: o, onCtaClick: a, ctaText: i, iconComponent: s, tailLeftOffset: c = 22, renderTail: u, invertCoachmark: d = !1, coachmarkRef: b } = e;
        return (0, r.jsxs)('div', {
            className: O.container,
            ref: b,
            children: [
                (0, r.jsx)(g.s, { onClick: o }),
                s,
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
                void 0 !== i &&
                    (0, r.jsx)(l.zxk, {
                        className: O.ctaButton,
                        color: l.zxk.Colors.BRAND,
                        look: l.zxk.Looks.FILLED,
                        onClick: a,
                        fullWidth: !0,
                        children: i
                    }),
                u &&
                    (0, r.jsx)(k, {
                        leftOffset: c,
                        invertTail: d
                    })
            ]
        });
    },
    P = (e) => {
        var t = x(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
        return (0, r.jsx)(
            T,
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
            })({ iconComponent: (0, r.jsx)(w, { customIconSrcs: t.customIconSrcs }) }, t)
        );
    };
function I(e) {
    let { calculateVisibility: t, children: n, popoutElement: a, positionControlRef: i, targetElementRef: s, defaultCoachmarkPosition: c, disableAutoInvert: d, onGetTargetElementDimensions: b, spacing: m } = e,
        [f, p] = o.useState('bottom' === c),
        [g, _] = o.useState(!0),
        [O, j] = o.useState(String(Date.now())),
        v = (0, u.Z)(),
        x = o.useCallback(
            (e) => {
                let n = t(e);
                n !== g && _(n);
            },
            [g, t]
        ),
        y = s.current,
        C = o.useCallback(() => {
            null != i && null != i.current && i.current.updateElementPosition();
        }, [i]);
    o.useEffect(
        () => (
            null != y && y.ownerDocument.addEventListener('scroll', C, !0),
            () => {
                null != y && y.ownerDocument.removeEventListener('scroll', C, !0);
            }
        ),
        [y, C]
    );
    let N = o.useCallback(
        (e) => {
            let { height: t, width: n, elementBoundingRect: r, hasElementPositionChanged: o } = e;
            if (
                (null != b &&
                    b({
                        height: t,
                        width: n
                    }),
                null != r)
            ) {
                if ((x(r), o && j(String(Date.now())), d)) return;
                let e = r.top < window.innerHeight / 2;
                if (e === f) return;
                p(e), j(String(Date.now()));
            }
        },
        [f, x, b, d]
    );
    (0, h.fu)({
        onGetElementDimensionsAndBoundingRect: N,
        positionControlRef: i,
        shouldPollPositionOnMount: !0,
        targetElementRef: s
    });
    let k = o.Children.map(a, (e) => o.cloneElement(e, { invertCoachmark: f })),
        w = o.useMemo(() => (d ? (null != c ? c : 'bottom') : f ? 'bottom' : 'top'), [d, c, f]),
        T = g && !v;
    return (0, r.jsx)(l.yRy, {
        autoInvert: !1,
        renderPopout: () => k,
        position: w,
        align: 'left',
        shouldShow: T,
        spacing: m,
        positionKey: O,
        animation: l.yRy.Animation.TRANSLATE,
        targetElementRef: s,
        children: () => n
    });
}
