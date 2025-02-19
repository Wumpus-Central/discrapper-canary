n.d(t, {
    QM: () => m,
    ds: () => N,
    mG: () => v
}),
    n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(540059),
    u = n(664915),
    d = n(751648),
    E = n(479766),
    h = n(741808),
    f = n(981631),
    p = n(642145),
    C = n(388032),
    _ = n(387987),
    g = n(671892);
let I = () =>
        (0, l.jsx)('div', {
            className: g.svgContainer,
            children: (0, l.jsx)('img', {
                src: n(39017),
                className: g.svg,
                alt: 'Quests Icon'
            })
        }),
    T = (e) => {
        var t, n;
        return (0, l.jsx)(
            s.zxk,
            ((t = (function (e) {
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
            })({}, e)),
            (n = n =
                {
                    'aria-label': C.NW.string(C.t.cpT0Cg),
                    look: s.zxk.Looks.BLANK,
                    size: s.zxk.Sizes.NONE,
                    wrapperClassName: g.closeButton,
                    innerClassName: g.closeButtonInner,
                    children: (0, l.jsx)(s.Dio, {
                        size: 'refresh_sm',
                        color: 'currentColor',
                        className: g.closeButtonIcon
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, l);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
    },
    O = (e) => {
        let { invertTail: t } = e;
        return (0, l.jsxs)('div', {
            className: a()(g.tail, t ? g.tailPositionInverted : g.tailPositionNormal),
            children: [
                (0, l.jsx)('div', { className: g.tailSpine }),
                (0, l.jsx)('div', {
                    className: a()(g.tailTargetOuter, t ? g.tailTargetPositionInverted : g.tailTargetPositionNormal),
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
                            className: g.tailTargetInner
                        })
                    })
                })
            ]
        });
    },
    S = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return parseInt(document.body.style.getPropertyValue('--custom-app-panels-height'), 10) + (e ? 18 : 8);
    },
    N = (e) => {
        let { onClose: t, backgroundElementRef: n, renderTail: i = !1 } = e,
            [a, s] = r.useState(Date.now()),
            [d, E] = r.useState(!1),
            [f, p] = r.useState(!0),
            C = (0, c.Q3)('VirtualCurrencyOnboardingCoachmark'),
            _ = r.useCallback(
                (e) => {
                    if (C) {
                        let t = window.innerHeight - S(!0),
                            n = e.top <= t;
                        f !== n && p(n);
                    }
                },
                [f, C]
            ),
            g = r.useCallback(
                (e) => {
                    _(e);
                    let t = e.top < window.innerHeight / 2;
                    t !== d && E(t);
                },
                [d, _]
            ),
            I = (0, o.e7)([u.Z], () => u.Z.getExpandedFolders().size);
        return (
            r.useEffect(() => {
                s(Date.now());
            }, [I]),
            (0, l.jsx)(
                h.X,
                {
                    backgroundElementRef: n,
                    style: { visibility: f ? 'visible' : 'hidden' },
                    getOffsetsRelativeToElement: d
                        ? (e) => ({
                              left: 0,
                              top: e.height + 10
                          })
                        : (e) => ({
                              left: 0,
                              bottom: e.height + 10
                          }),
                    fallbackAbsoluteOffsets: {
                        top: 0,
                        left: 0
                    },
                    onGetBoundingRect: g,
                    children: (0, l.jsx)(v, {
                        onClose: t,
                        renderTail: i,
                        invertTail: d
                    })
                },
                a
            )
        );
    },
    m = (e) => {
        let { isVirtualCurrencyEnabled: t, discoveryButtonRef: n, scrollToBottom: l } = e,
            i = (0, c.Q3)('VirtualCurrencyOnboardingCoachmark hook'),
            [a, s] = r.useState(!1),
            { shouldOpenCoachmark: u, shouldSkipCoachmark: h } = (0, o.cj)([E.Z], () => {
                let { shouldOpen: e, shouldSkip: t } = E.Z.onboardingCoachmark;
                return {
                    shouldOpenCoachmark: e,
                    shouldSkipCoachmark: t
                };
            }),
            C = r.useCallback(() => {
                u && (0, d.l)();
            }, [u]),
            _ = r.useCallback(() => {
                if (i && null !== n.current) {
                    let e = S();
                    n.current.getBoundingClientRect().bottom > window.innerHeight - e && l();
                }
            }, [i, n, l]);
        return (r.useEffect(() => {
            null !== n && (u && !h ? a || (_(), s(!0)) : a && s(!1));
        }, [n, u, h, _, a, l]),
        t)
            ? {
                  shouldShowOnboardingCoachmark: a,
                  closeOnboardingCoachmarkIfOpen: C,
                  questId: p.V
              }
            : {
                  shouldShowOnboardingCoachmark: !1,
                  closeOnboardingCoachmarkIfOpen: f.dG4,
                  questId: void 0
              };
    },
    v = (e) => {
        let { onClose: t, renderTail: n, invertTail: r = !1 } = e;
        return (0, l.jsxs)('div', {
            className: a()(_.baseCardOutline, g.container),
            children: [
                (0, l.jsx)(T, { onClick: t }),
                (0, l.jsx)(I, {}),
                (0, l.jsxs)('div', {
                    className: g.content,
                    children: [
                        (0, l.jsx)('div', {
                            className: _.coachmarkTitle,
                            children: C.NW.string(C.t['3B4+wM'])
                        }),
                        (0, l.jsx)('div', {
                            className: _.coachmarkDescription,
                            children: C.NW.format(C.t.V6DQX1, { quantity: 200 })
                        })
                    ]
                }),
                n && (0, l.jsx)(O, { invertTail: r })
            ]
        });
    };
