n.d(t, {
    QM: () => N,
    ds: () => A,
    mG: () => p
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    u = n(664915),
    d = n(751648),
    c = n(479766),
    E = n(741808),
    C = n(981631),
    h = n(642145),
    _ = n(388032),
    I = n(194733),
    g = n(33461);
let T = () =>
        (0, l.jsx)('div', {
            className: g.svgContainer,
            children: (0, l.jsx)('img', {
                src: n(39017),
                className: g.svg,
                alt: 'Quests Icon'
            })
        }),
    S = (e) =>
        (0, l.jsx)(o.zxk, {
            ...e,
            'aria-label': _.intl.string(_.t.cpT0Cg),
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
    f = (e) => {
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
    A = (e) => {
        let { onClose: t, backgroundElementRef: n, renderTail: a = !1 } = e,
            [r, o] = i.useState(Date.now()),
            [d, c] = i.useState(!1),
            C = i.useCallback(
                (e) => {
                    let t = e.top < window.innerHeight / 2;
                    t !== d && c(t);
                },
                [d]
            ),
            h = (0, s.e7)([u.Z], () => u.Z.getExpandedFolders().size > 0);
        return (
            i.useEffect(() => {
                o(Date.now());
            }, [h]),
            (0, l.jsx)(
                E.X,
                {
                    backgroundElementRef: n,
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
                    onGetBoundingRect: C,
                    children: (0, l.jsx)(p, {
                        onClose: t,
                        renderTail: a,
                        invertTail: d
                    })
                },
                r
            )
        );
    },
    N = (e) => {
        let { isVirtualCurrencyEnabled: t, discoveryButtonRef: n } = e,
            [l, a] = i.useState(!1),
            { shouldOpenCoachmark: r, shouldSkipCoachmark: o } = (0, s.cj)([c.Z], () => {
                let { shouldOpen: e, shouldSkip: t } = c.Z.onboardingCoachmark;
                return {
                    shouldOpenCoachmark: e,
                    shouldSkipCoachmark: t
                };
            }),
            u = i.useCallback(() => {
                r && (0, d.l)();
            }, [r]);
        return (i.useEffect(() => {
            null !== n && a(r && !o);
        }, [n, r, o]),
        t)
            ? {
                  shouldShowOnboardingCoachmark: l,
                  closeOnboardingCoachmarkIfOpen: u,
                  questId: h.V
              }
            : {
                  shouldShowOnboardingCoachmark: !1,
                  closeOnboardingCoachmarkIfOpen: C.dG4,
                  questId: void 0
              };
    },
    p = (e) => {
        let { onClose: t, renderTail: n, invertTail: i = !1 } = e;
        return (0, l.jsxs)('div', {
            className: r()(I.baseCardOutline, g.container),
            children: [
                (0, l.jsx)(S, { onClick: t }),
                (0, l.jsx)(T, {}),
                (0, l.jsxs)('div', {
                    className: g.content,
                    children: [
                        (0, l.jsx)('div', {
                            className: I.coachmarkTitle,
                            children: _.intl.string(_.t['3B4+wM'])
                        }),
                        (0, l.jsx)('div', {
                            className: I.coachmarkDescription,
                            children: _.intl.format(_.t.V6DQX1, { quantity: 200 })
                        })
                    ]
                }),
                n && (0, l.jsx)(f, { invertTail: i })
            ]
        });
    };
