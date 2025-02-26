n.d(t, {
    M: () => S,
    U_: () => P,
    t4: () => I,
    tE: () => A
}),
    n(47120),
    n(266796);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(930153),
    E = n(751648),
    f = n(479766),
    h = n(960919),
    p = n(622562),
    C = n(388032),
    _ = n(953833);
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
function O(e) {
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
function T(e, t) {
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
let I = () => (0, d.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    S = (e) => {
        let { onboardingCoachmarkType: t, onShowCoachmarkHandler: n } = e,
            [r, i] = l.useState(!1),
            { shouldOpenCoachmark: o, shouldSkipCoachmark: s } = (0, a.cj)([f.Z], () => {
                let { shouldOpenCoachmarkTypes: e, shouldSkip: n } = f.Z.onboardingCoachmark;
                return {
                    shouldOpenCoachmark: e.includes(t),
                    shouldSkipCoachmark: n
                };
            }),
            c = l.useCallback(() => {
                o && (0, E.l)([t]);
            }, [o, t]);
        return (
            l.useEffect(() => {
                o && !s ? r || (void 0 !== n && n(), i(!0)) : r && i(!1);
            }, [o, s, n, r]),
            {
                shouldShow: r,
                closeCoachmarkIfOpen: c
            }
        );
    },
    N = (e) =>
        (0, r.jsx)(
            c.zxk,
            T(O({}, e), {
                'aria-label': C.NW.string(C.t.cpT0Cg),
                look: c.zxk.Looks.BLANK,
                size: c.zxk.Sizes.NONE,
                wrapperClassName: _.closeButton,
                innerClassName: _.closeButtonInner,
                children: (0, r.jsx)(c.Dio, {
                    size: 'refresh_sm',
                    className: _.closeButtonIcon
                })
            })
        ),
    b = (e) => {
        let { invertTail: t, leftOffset: n } = e;
        return (0, r.jsxs)('div', {
            className: o()(_.tail, t ? _.tailPositionInverted : _.tailPositionNormal),
            style: { left: n },
            children: [
                (0, r.jsx)('div', { className: _.tailSpine }),
                (0, r.jsx)('div', {
                    className: o()(_.tailTargetOuter, t ? _.tailTargetPositionInverted : _.tailTargetPositionNormal),
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
    v = () => {
        let e = (0, u.ZP)(),
            t = (0, s.wj)(e);
        return (0, r.jsx)(h.M, {
            className: _.orbIcon,
            iconMode: t ? 'light' : 'dark',
            imgClassName: _.orbIconImg
        });
    },
    m = (e) => {
        let { titleText: t, descriptionText: n, onClose: l, tailLeftOffset: i = 22, renderTail: a, invertCoachmark: s = !1, iconComponent: u, coachmarkRef: d } = e;
        return (0, r.jsxs)('div', {
            className: o()(_.container),
            ref: d,
            children: [
                (0, r.jsx)(N, { onClick: l }),
                u,
                (0, r.jsxs)('div', {
                    className: _.content,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            className: _.title,
                            variant: 'heading-md/bold',
                            children: t
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            className: _.description,
                            children: n
                        })
                    ]
                }),
                a &&
                    (0, r.jsx)(b, {
                        leftOffset: i,
                        invertTail: s
                    })
            ]
        });
    },
    A = (e) => {
        var t = g(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
        return (0, r.jsx)(m, O({ iconComponent: (0, r.jsx)(v, {}) }, t));
    };
function P(e) {
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
        _ = l.useCallback(
            (e) => {
                C(e);
                let t = e.top < window.innerHeight / 2;
                t !== d && E(t);
            },
            [d, C]
        ),
        g = l.useCallback(
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
                return (void 0 !== u && u(e), d) ? T(O({}, r), { top: e.height + n }) : void 0 !== c && null !== c.current ? T(O({}, r), { top: -c.current.offsetHeight - n }) : T(O({}, r), { bottom: e.height + n });
            },
            [d, i, u, c]
        );
    return (0, r.jsx)(
        p.E,
        {
            backgroundElementRef: n,
            offsetControlRef: o,
            style: { visibility: f ? 'visible' : 'hidden' },
            getOffsetsRelativeToElement: g,
            fallbackAbsoluteOffsets: {
                top: 0,
                left: 0
            },
            onGetBoundingRect: _,
            children: l.Children.map(a, (e) => l.cloneElement(e, { invertCoachmark: d }))
        },
        s
    );
}
