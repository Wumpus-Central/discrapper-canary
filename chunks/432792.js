n.d(t, {
    M: () => O,
    U_: () => N,
    t4: () => g,
    tE: () => S
}),
    n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    c = n(930153),
    u = n(751648),
    d = n(479766),
    E = n(622562),
    f = n(388032),
    h = n(387987),
    C = n(953833);
function p(e) {
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
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = () => (0, c.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    O = (e) => {
        let { onboardingCoachmarkType: t, onShowCoachmarkHandler: n } = e,
            [l, i] = r.useState(!1),
            { shouldOpenCoachmark: o, shouldSkipCoachmark: s } = (0, a.cj)([d.Z], () => {
                let { shouldOpenCoachmarkTypes: e, shouldSkip: n } = d.Z.onboardingCoachmark;
                return {
                    shouldOpenCoachmark: e.includes(t),
                    shouldSkipCoachmark: n
                };
            }),
            c = r.useCallback(() => {
                o && (0, u.l)([t]);
            }, [o, t]);
        return (
            r.useEffect(() => {
                o && !s ? l || (void 0 !== n && n(), i(!0)) : l && i(!1);
            }, [o, s, n, l]),
            {
                shouldShow: l,
                closeCoachmarkIfOpen: c
            }
        );
    },
    T = (e) =>
        (0, l.jsx)(
            s.zxk,
            _(p({}, e), {
                'aria-label': f.NW.string(f.t.cpT0Cg),
                look: s.zxk.Looks.BLANK,
                size: s.zxk.Sizes.NONE,
                wrapperClassName: C.closeButton,
                innerClassName: C.closeButtonInner,
                children: (0, l.jsx)(s.Dio, {
                    size: 'refresh_sm',
                    color: 'currentColor',
                    className: C.closeButtonIcon
                })
            })
        ),
    I = (e) => {
        let { invertTail: t, leftOffset: n } = e;
        return (0, l.jsxs)('div', {
            className: o()(C.tail, t ? C.tailPositionInverted : C.tailPositionNormal),
            style: { left: n },
            children: [
                (0, l.jsx)('div', { className: C.tailSpine }),
                (0, l.jsx)('div', {
                    className: o()(C.tailTargetOuter, t ? C.tailTargetPositionInverted : C.tailTargetPositionNormal),
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
                            className: C.tailTargetInner
                        })
                    })
                })
            ]
        });
    },
    S = (e) => {
        let { titleText: t, descriptionText: n, onClose: r, tailLeftOffset: i = 22, renderTail: a, invertCoachmark: s = !1, children: c, coachmarkRef: u } = e;
        return (0, l.jsxs)('div', {
            className: o()(h.baseCardOutline, C.container),
            ref: u,
            children: [
                (0, l.jsx)(T, { onClick: r }),
                c,
                (0, l.jsxs)('div', {
                    className: C.content,
                    children: [
                        (0, l.jsx)('div', {
                            className: h.coachmarkTitle,
                            children: t
                        }),
                        (0, l.jsx)('div', {
                            className: h.coachmarkDescription,
                            children: n
                        })
                    ]
                }),
                a &&
                    (0, l.jsx)(I, {
                        leftOffset: i,
                        invertTail: s
                    })
            ]
        });
    };
function N(e) {
    let { calculateVisibility: t, backgroundElementRef: n, calculateBaseOffsets: i, offsetControlRef: o, children: a, key: s, coachmarkRef: c, onGetBackgroundElementDimensions: u } = e,
        [d, f] = r.useState(!1),
        [h, C] = r.useState(!0),
        g = r.useCallback(
            (e) => {
                let n = t(e);
                n !== h && C(n);
            },
            [h, t]
        ),
        O = r.useCallback(
            (e) => {
                g(e);
                let t = e.top < window.innerHeight / 2;
                t !== d && f(t);
            },
            [d, g]
        ),
        T = r.useCallback(
            (e) => {
                let t = i(e),
                    { verticalOffset: n } = t,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            l,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    l,
                                    r = {},
                                    i = Object.keys(e);
                                for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                        }
                        return r;
                    })(t, ['verticalOffset']);
                return (void 0 !== u && u(e), d) ? _(p({}, l), { top: e.height + n }) : void 0 !== c && null !== c.current ? _(p({}, l), { top: -c.current.offsetHeight - n }) : _(p({}, l), { bottom: e.height + n });
            },
            [d, i, u, c]
        );
    return (0, l.jsx)(
        E.E,
        {
            backgroundElementRef: n,
            offsetControlRef: o,
            style: { visibility: h ? 'visible' : 'hidden' },
            getOffsetsRelativeToElement: T,
            fallbackAbsoluteOffsets: {
                top: 0,
                left: 0
            },
            onGetBoundingRect: O,
            children: r.Children.map(a, (e) => r.cloneElement(e, { invertCoachmark: d }))
        },
        s
    );
}
