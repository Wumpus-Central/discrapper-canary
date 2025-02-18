n.d(t, {
    QM: () => L,
    ds: () => N,
    mG: () => v
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    u = n(540059),
    d = n(664915),
    c = n(751648),
    E = n(479766),
    _ = n(741808),
    h = n(981631),
    C = n(642145),
    T = n(388032),
    I = n(194733),
    g = n(33461);
let S = () =>
        (0, l.jsx)('div', {
            className: g.svgContainer,
            children: (0, l.jsx)('img', {
                src: n(39017),
                className: g.svg,
                alt: 'Quests Icon'
            })
        }),
    f = (e) =>
        (0, l.jsx)(o.zxk, {
            ...e,
            'aria-label': T.intl.string(T.t.cpT0Cg),
            look: o.zxk.Looks.BLANK,
            size: o.zxk.Sizes.NONE,
            wrapperClassName: g.closeButton,
            innerClassName: g.closeButtonInner,
            children: (0, l.jsx)(o.Dio, {
                size: 'refresh_sm',
                color: 'currentColor',
                className: g.closeButtonIcon
            })
        }),
    p = (e) => {
        let { invertTail: t } = e;
        return (0, l.jsxs)('div', {
            className: r()(g.tail, t ? g.tailPositionInverted : g.tailPositionNormal),
            children: [
                (0, l.jsx)('div', { className: g.tailSpine }),
                (0, l.jsx)('div', {
                    className: r()(g.tailTargetOuter, t ? g.tailTargetPositionInverted : g.tailTargetPositionNormal),
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
    A = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return parseInt(document.body.style.getPropertyValue('--custom-app-panels-height'), 10) + (e ? 18 : 8);
    },
    N = (e) => {
        let { onClose: t, backgroundElementRef: n, renderTail: a = !1 } = e,
            [r, o] = i.useState(Date.now()),
            [c, E] = i.useState(!1),
            [h, C] = i.useState(!0),
            T = (0, u.Q3)('VirtualCurrencyOnboardingCoachmark'),
            I = i.useCallback(
                (e) => {
                    if (T) {
                        let t = window.innerHeight - A(!0),
                            n = e.top <= t;
                        h !== n && C(n);
                    }
                },
                [h, T]
            ),
            g = i.useCallback(
                (e) => {
                    I(e);
                    let t = e.top < window.innerHeight / 2;
                    t !== c && E(t);
                },
                [c, I]
            ),
            S = (0, s.e7)([d.Z], () => d.Z.getExpandedFolders().size);
        return (
            i.useEffect(() => {
                o(Date.now());
            }, [S]),
            (0, l.jsx)(
                _.X,
                {
                    backgroundElementRef: n,
                    style: { visibility: h ? 'visible' : 'hidden' },
                    getOffsetsRelativeToElement: c
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
                        renderTail: a,
                        invertTail: c
                    })
                },
                r
            )
        );
    },
    L = (e) => {
        let { isVirtualCurrencyEnabled: t, discoveryButtonRef: n, scrollToBottom: l } = e,
            a = (0, u.Q3)('VirtualCurrencyOnboardingCoachmark hook'),
            [r, o] = i.useState(!1),
            { shouldOpenCoachmark: d, shouldSkipCoachmark: _ } = (0, s.cj)([E.Z], () => {
                let { shouldOpen: e, shouldSkip: t } = E.Z.onboardingCoachmark;
                return {
                    shouldOpenCoachmark: e,
                    shouldSkipCoachmark: t
                };
            }),
            T = i.useCallback(() => {
                d && (0, c.l)();
            }, [d]),
            I = i.useCallback(() => {
                if (a && null !== n.current) {
                    let e = A();
                    n.current.getBoundingClientRect().bottom > window.innerHeight - e && l();
                }
            }, [a, n, l]);
        return (i.useEffect(() => {
            null !== n && (d && !_ ? r || (I(), o(!0)) : r && o(!1));
        }, [n, d, _, I, r, l]),
        t)
            ? {
                  shouldShowOnboardingCoachmark: r,
                  closeOnboardingCoachmarkIfOpen: T,
                  questId: C.V
              }
            : {
                  shouldShowOnboardingCoachmark: !1,
                  closeOnboardingCoachmarkIfOpen: h.dG4,
                  questId: void 0
              };
    },
    v = (e) => {
        let { onClose: t, renderTail: n, invertTail: i = !1 } = e;
        return (0, l.jsxs)('div', {
            className: r()(I.baseCardOutline, g.container),
            children: [
                (0, l.jsx)(f, { onClick: t }),
                (0, l.jsx)(S, {}),
                (0, l.jsxs)('div', {
                    className: g.content,
                    children: [
                        (0, l.jsx)('div', {
                            className: I.coachmarkTitle,
                            children: T.intl.string(T.t['3B4+wM'])
                        }),
                        (0, l.jsx)('div', {
                            className: I.coachmarkDescription,
                            children: T.intl.format(T.t.V6DQX1, { quantity: 200 })
                        })
                    ]
                }),
                n && (0, l.jsx)(p, { invertTail: i })
            ]
        });
    };
