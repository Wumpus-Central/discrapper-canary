n.d(t, {
    QM: () => N,
    ds: () => S,
    mG: () => A
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    u = n(664915),
    d = n(890588),
    c = n(479766),
    E = n(741808),
    C = n(388032),
    _ = n(61822),
    h = n(668096);
let I = () =>
        (0, l.jsx)('div', {
            className: h.svgContainer,
            children: (0, l.jsx)('img', {
                src: n(39017),
                className: h.svg,
                alt: 'Quests Icon'
            })
        }),
    g = (e) =>
        (0, l.jsx)(o.zxk, {
            ...e,
            'aria-label': C.intl.string(C.t.cpT0Cg),
            look: o.zxk.Looks.BLANK,
            size: o.zxk.Sizes.NONE,
            wrapperClassName: h.closeButton,
            innerClassName: h.closeButtonInner,
            children: (0, l.jsx)(o.Dio, {
                size: 'refresh_sm',
                color: 'currentColor',
                className: h.closeButtonIcon
            })
        }),
    T = (e) => {
        let { invertTail: t } = e;
        return (0, l.jsxs)('div', {
            className: r()(h.tail, t ? h.tailPositionInverted : h.tailPositionNormal),
            children: [
                (0, l.jsx)('div', { className: h.tailSpine }),
                (0, l.jsx)('div', {
                    className: r()(h.tailTargetOuter, t ? h.tailTargetPositionInverted : h.tailTargetPositionNormal),
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
                            className: h.tailTargetInner
                        })
                    })
                })
            ]
        });
    },
    S = (e) => {
        let { onClose: t, backgroundElementRef: n, renderTail: a = !1 } = e,
            [r, o] = i.useState(Date.now()),
            [c, C] = i.useState(!1),
            _ = i.useCallback(
                (e) => {
                    let t = e.top < window.innerHeight / 2;
                    t !== c && C(t);
                },
                [c]
            );
        (0, d.i)({
            onDOMRectPositionChange: (e, t) => {
                e.top !== t.top && o(Date.now());
            },
            elementRef: n
        });
        let h = (0, s.e7)([u.Z], () => u.Z.getExpandedFolders().size > 0);
        return (
            i.useEffect(() => {
                o(Date.now());
            }, [h]),
            (0, l.jsx)(
                E.X,
                {
                    backgroundElementRef: n,
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
                    onGetBoundingRect: _,
                    children: (0, l.jsx)(A, {
                        onClose: t,
                        renderTail: a,
                        invertTail: c
                    })
                },
                r
            )
        );
    },
    N = (e) => {
        let { discoveryButtonRef: t } = e,
            [n, l] = i.useState(!1),
            { shouldOpenCoachmark: a, shouldSkipCoachmark: r } = (0, s.cj)([c.Z], () => {
                let { shouldOpen: e, shouldSkip: t } = c.Z.onboardingCoachmark;
                return {
                    shouldOpenCoachmark: e,
                    shouldSkipCoachmark: t
                };
            });
        return (
            i.useEffect(() => {
                null !== t && l(a && !r);
            }, [t, a, r]),
            { shouldShowOnboardingCoachmark: n }
        );
    },
    A = (e) => {
        let { onClose: t, renderTail: n, invertTail: i = !1 } = e;
        return (0, l.jsxs)('div', {
            className: r()(_.baseCardOutline, h.container),
            children: [
                (0, l.jsx)(g, { onClick: t }),
                (0, l.jsx)(I, {}),
                (0, l.jsxs)('div', {
                    className: h.content,
                    children: [
                        (0, l.jsx)('div', {
                            className: _.coachmarkTitle,
                            children: C.intl.string(C.t['3B4+wM'])
                        }),
                        (0, l.jsx)('div', {
                            className: _.coachmarkDescription,
                            children: C.intl.format(C.t.V6DQX1, { quantity: 200 })
                        })
                    ]
                }),
                n && (0, l.jsx)(T, { invertTail: i })
            ]
        });
    };
