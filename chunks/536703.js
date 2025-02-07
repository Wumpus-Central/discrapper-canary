n.d(t, {
    QM: () => N,
    ds: () => S,
    mG: () => f
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
    _ = n(388032),
    C = n(588245),
    h = n(772787);
let T = () =>
        (0, l.jsx)('div', {
            className: h.svgContainer,
            children: (0, l.jsx)('img', {
                src: n(39017),
                className: h.svg,
                alt: 'Quests Icon'
            })
        }),
    I = (e) =>
        (0, l.jsx)(o.zxk, {
            ...e,
            'aria-label': _.intl.string(_.t.cpT0Cg),
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
    g = (e) => {
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
            [c, _] = i.useState(!1),
            C = i.useCallback(
                (e) => {
                    let t = e.top < window.innerHeight / 2;
                    t !== c && _(t);
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
                    onGetBoundingRect: C,
                    children: (0, l.jsx)(f, {
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
    f = (e) => {
        let { onClose: t, renderTail: n, invertTail: i = !1 } = e;
        return (0, l.jsxs)('div', {
            className: r()(C.baseCardOutline, h.container),
            children: [
                (0, l.jsx)(I, { onClick: t }),
                (0, l.jsx)(T, {}),
                (0, l.jsxs)('div', {
                    className: h.content,
                    children: [
                        (0, l.jsx)('div', {
                            className: C.coachmarkTitle,
                            children: _.intl.string(_.t['3B4+wM'])
                        }),
                        (0, l.jsx)('div', {
                            className: C.coachmarkDescription,
                            children: _.intl.format(_.t.V6DQX1, { quantity: 200 })
                        })
                    ]
                }),
                n && (0, l.jsx)(g, { invertTail: i })
            ]
        });
    };
