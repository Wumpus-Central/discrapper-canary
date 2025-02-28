n.d(t, {
    M: () => x,
    U_: () => E,
    VK: () => N,
    t4: () => k,
    tE: () => P
}),
    n(47120),
    n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(704215),
    c = n(780384),
    s = n(481060),
    u = n(410030),
    b = n(605236),
    d = n(930153),
    f = n(822857),
    m = n(960919),
    g = n(622562),
    O = n(921944),
    _ = n(388032),
    p = n(175722);
function h() {
    return (h =
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
function j(e, t) {
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
let k = () => (0, d.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    v = {
        discover: l.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: l.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    x = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: r } = e,
            o = (0, b.wE)(l.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: a } = (0, f.W)({ location: 'virtual_currency_onboarding_coachmark' }),
            c = (0, b.wE)(v[t]),
            s = a && o && n && !c,
            u = i.useCallback(() => {
                c ||
                    (0, b.EW)(v[t], {
                        forceTrack: !0,
                        dismissAction: O.L.USER_DISMISS
                    });
            }, [c, t]),
            [d, m] = i.useState(!1);
        return (
            i.useEffect(() => {
                s ? d || (void 0 !== r && r(), m(!0)) : d && m(!1);
            }, [s, r, d]),
            {
                shouldShow: d,
                closeCoachmarkIfOpen: u
            }
        );
    },
    y = (e) =>
        (0, r.jsx)(
            s.zxk,
            j(C({}, e), {
                'aria-label': _.NW.string(_.t.cpT0Cg),
                look: s.zxk.Looks.BLANK,
                size: s.zxk.Sizes.NONE,
                wrapperClassName: p.closeButton,
                innerClassName: p.closeButtonInner,
                children: (0, r.jsx)(s.Dio, {
                    size: 'refresh_sm',
                    className: p.closeButtonIcon
                })
            })
        ),
    N = (e) => {
        let { invertTail: t, leftOffset: n, rightOffset: i } = e;
        return (0, r.jsxs)('div', {
            className: a()(p.tail, t ? p.tailPositionInverted : p.tailPositionNormal),
            style: {
                left: n,
                right: i
            },
            children: [
                (0, r.jsx)('div', { className: p.tailSpine }),
                (0, r.jsx)('div', {
                    className: a()(p.tailTargetOuter, t ? p.tailTargetPositionInverted : p.tailTargetPositionNormal),
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
                            className: p.tailTargetInner
                        })
                    })
                })
            ]
        });
    },
    I = () => {
        let e = (0, u.ZP)(),
            t = (0, c.wj)(e);
        return (0, r.jsx)(m.M, {
            className: p.orbIcon,
            iconMode: t ? 'light' : 'dark',
            imgClassName: p.orbIconImg
        });
    },
    w = (e) => {
        let { titleText: t, descriptionText: n, onClose: i, tailLeftOffset: o = 22, renderTail: l, invertCoachmark: c = !1, iconComponent: u, coachmarkRef: b } = e;
        return (0, r.jsxs)('div', {
            className: a()(p.container),
            ref: b,
            children: [
                (0, r.jsx)(y, { onClick: i }),
                u,
                (0, r.jsxs)('div', {
                    className: p.content,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            className: p.title,
                            variant: 'heading-md/bold',
                            children: t
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            className: p.description,
                            children: n
                        })
                    ]
                }),
                l &&
                    (0, r.jsx)(N, {
                        leftOffset: o,
                        invertTail: c
                    })
            ]
        });
    },
    P = (e) => {
        var t = h(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
        return (0, r.jsx)(w, C({ iconComponent: (0, r.jsx)(I, {}) }, t));
    };
function E(e) {
    let { calculateVisibility: t, backgroundElementRef: n, calculateBaseOffsets: o, offsetControlRef: a, children: l, key: c, coachmarkRef: s, onGetBackgroundElementDimensions: u } = e,
        [b, d] = i.useState(!1),
        [f, m] = i.useState(!0),
        O = i.useCallback(
            (e) => {
                let n = t(e);
                n !== f && m(n);
            },
            [f, t]
        ),
        _ = i.useCallback(
            (e) => {
                O(e);
                let t = e.top < window.innerHeight / 2;
                t !== b && d(t);
            },
            [b, O]
        ),
        p = i.useCallback(
            (e) => {
                let t = o(e),
                    { verticalOffset: n } = t,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(t, ['verticalOffset']);
                return (void 0 !== u && u(e), b) ? j(C({}, r), { top: e.height + n }) : void 0 !== s && null !== s.current ? j(C({}, r), { top: -s.current.offsetHeight - n }) : j(C({}, r), { bottom: e.height + n });
            },
            [b, o, u, s]
        );
    return (0, r.jsx)(
        g.E,
        {
            backgroundElementRef: n,
            offsetControlRef: a,
            style: { visibility: f ? 'visible' : 'hidden' },
            getOffsetsRelativeToElement: p,
            fallbackAbsoluteOffsets: {
                top: 0,
                left: 0
            },
            onGetBoundingRect: _,
            children: i.Children.map(l, (e) => i.cloneElement(e, { invertCoachmark: b }))
        },
        c
    );
}
