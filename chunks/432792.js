n.d(t, {
    M: () => A,
    U_: () => L,
    t4: () => S,
    tE: () => y
}),
    n(47120),
    n(266796);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(704215),
    s = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(605236),
    E = n(930153),
    f = n(822857),
    h = n(960919),
    _ = n(622562),
    C = n(921944),
    p = n(388032),
    O = n(953833);
function g() {
    return (g =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function T(e) {
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
function I(e, t) {
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
let S = () => (0, E.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    N = {
        discover: a.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: a.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    A = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: r } = e,
            i = (0, d.wE)(a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: o } = (0, f.W)({ location: 'virtual_currency_onboarding_coachmark' }),
            s = (0, d.wE)(N[t]),
            c = o && i && n && !s,
            u = l.useCallback(() => {
                s ||
                    (0, d.EW)(N[t], {
                        forceTrack: !0,
                        dismissAction: C.L.USER_DISMISS
                    });
            }, [s, t]),
            [E, h] = l.useState(!1);
        return (
            l.useEffect(() => {
                c ? E || (void 0 !== r && r(), h(!0)) : E && h(!1);
            }, [c, r, E]),
            {
                shouldShow: E,
                closeCoachmarkIfOpen: u
            }
        );
    },
    b = (e) =>
        (0, r.jsx)(
            c.zxk,
            I(T({}, e), {
                'aria-label': p.NW.string(p.t.cpT0Cg),
                look: c.zxk.Looks.BLANK,
                size: c.zxk.Sizes.NONE,
                wrapperClassName: O.closeButton,
                innerClassName: O.closeButtonInner,
                children: (0, r.jsx)(c.Dio, {
                    size: 'refresh_sm',
                    className: O.closeButtonIcon
                })
            })
        ),
    v = (e) => {
        let { invertTail: t, leftOffset: n } = e;
        return (0, r.jsxs)('div', {
            className: o()(O.tail, t ? O.tailPositionInverted : O.tailPositionNormal),
            style: { left: n },
            children: [
                (0, r.jsx)('div', { className: O.tailSpine }),
                (0, r.jsx)('div', {
                    className: o()(O.tailTargetOuter, t ? O.tailTargetPositionInverted : O.tailTargetPositionNormal),
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
                            className: O.tailTargetInner
                        })
                    })
                })
            ]
        });
    },
    m = () => {
        let e = (0, u.ZP)(),
            t = (0, s.wj)(e);
        return (0, r.jsx)(h.M, {
            className: O.orbIcon,
            iconMode: t ? 'light' : 'dark',
            imgClassName: O.orbIconImg
        });
    },
    P = (e) => {
        let { titleText: t, descriptionText: n, onClose: l, tailLeftOffset: i = 22, renderTail: a, invertCoachmark: s = !1, iconComponent: u, coachmarkRef: d } = e;
        return (0, r.jsxs)('div', {
            className: o()(O.container),
            ref: d,
            children: [
                (0, r.jsx)(b, { onClick: l }),
                u,
                (0, r.jsxs)('div', {
                    className: O.content,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            className: O.title,
                            variant: 'heading-md/bold',
                            children: t
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            className: O.description,
                            children: n
                        })
                    ]
                }),
                a &&
                    (0, r.jsx)(v, {
                        leftOffset: i,
                        invertTail: s
                    })
            ]
        });
    },
    y = (e) => {
        var t = g(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
        return (0, r.jsx)(P, T({ iconComponent: (0, r.jsx)(m, {}) }, t));
    };
function L(e) {
    let { calculateVisibility: t, backgroundElementRef: n, calculateBaseOffsets: i, offsetControlRef: o, children: a, key: s, coachmarkRef: c, onGetBackgroundElementDimensions: u } = e,
        [d, E] = l.useState(!1),
        [f, h] = l.useState(!0),
        C = l.useCallback(
            (e) => {
                let n = t(e);
                n !== f && h(n);
            },
            [f, t]
        ),
        p = l.useCallback(
            (e) => {
                C(e);
                let t = e.top < window.innerHeight / 2;
                t !== d && E(t);
            },
            [d, C]
        ),
        O = l.useCallback(
            (e) => {
                let t = i(e),
                    { verticalOffset: n } = t,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    l = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                return l;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                        }
                        return l;
                    })(t, ['verticalOffset']);
                return (void 0 !== u && u(e), d) ? I(T({}, r), { top: e.height + n }) : void 0 !== c && null !== c.current ? I(T({}, r), { top: -c.current.offsetHeight - n }) : I(T({}, r), { bottom: e.height + n });
            },
            [d, i, u, c]
        );
    return (0, r.jsx)(
        _.E,
        {
            backgroundElementRef: n,
            offsetControlRef: o,
            style: { visibility: f ? 'visible' : 'hidden' },
            getOffsetsRelativeToElement: O,
            fallbackAbsoluteOffsets: {
                top: 0,
                left: 0
            },
            onGetBoundingRect: p,
            children: l.Children.map(a, (e) => l.cloneElement(e, { invertCoachmark: d }))
        },
        s
    );
}
