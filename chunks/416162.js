s.d(t, { Z: () => m }), s(47120);
var i = s(200651),
    n = s(192379),
    l = s(120356),
    a = s.n(l),
    r = s(481060),
    o = s(313201),
    c = s(388032),
    d = s(598014);
let u = (e) => {
        let { index: t, title: s, selected: n } = e;
        return (0, i.jsxs)('div', {
            className: a()(d.overviewStep, { [d.selected]: n }),
            children: [
                (0, i.jsx)(r.Text, {
                    className: d.stepIndex,
                    variant: 'text-sm/normal',
                    children: t + 1
                }),
                (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    className: d.stepTitle,
                    children: s
                })
            ]
        });
    },
    m = (e) => {
        let { className: t, title: s, stepData: l, transitionState: m, onClose: x, completeButtonText: N, overviewFooter: f, onNextPressed: p, onPrevPressed: h, onComplete: b, sequencerClassName: v, initialStep: g = 0, forceStep: j, submitting: C = !1, autoCloseOnComplete: _ = !0 } = e,
            [S, I] = n.useState([]),
            [E, W] = n.useState(g),
            O = (0, o.Dt)();
        n.useEffect(() => {
            I([...Array(l.length).keys()]);
        }, [l.length]);
        let T = null != j ? j : E,
            w = l[T],
            y = 0 === T,
            R = T === l.length - 1,
            L = null != N ? N : c.NW.string(c.t.i4jeWV),
            M = n.useCallback(() => {
                null == h || h(), W(T - 1);
            }, [h, T, W]);
        return (0, i.jsxs)(r.Y0X, {
            size: r.CgR.MEDIUM,
            className: a()(d.container, t),
            transitionState: m,
            'aria-labelledby': O,
            children: [
                (0, i.jsxs)('div', {
                    className: d.overviewSidebar,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            id: O,
                            variant: 'heading-xl/semibold',
                            className: d.header,
                            children: s
                        }),
                        (0, i.jsx)('div', {
                            className: d.overviewSteps,
                            children: l.map((e, t) =>
                                (0, i.jsx)(
                                    u,
                                    {
                                        index: t,
                                        title: e.overviewTitle,
                                        selected: t === T
                                    },
                                    t
                                )
                            )
                        }),
                        f
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: d.modal,
                    children: [
                        (0, i.jsxs)(r.hzk, {
                            children: [
                                (0, i.jsx)(r.olH, {
                                    focusProps: {
                                        offset: {
                                            top: 4,
                                            right: 4,
                                            left: 4
                                        }
                                    },
                                    onClick: x,
                                    className: d.closeButton
                                }),
                                (0, i.jsx)(r.qBt, {
                                    step: T,
                                    steps: S,
                                    sideMargin: 24,
                                    verticalMargin: 24,
                                    className: a()(d.sequencer, v),
                                    innerClassName: d.innerSequencer,
                                    children: w.modalContent
                                })
                            ]
                        }),
                        (0, i.jsxs)(r.mzw, {
                            className: d.footer,
                            children: [
                                (0, i.jsx)(r.zxk, {
                                    type: 'submit',
                                    submitting: C,
                                    onClick: () => {
                                        R ? (b(), _ && x()) : (null == p || p(), W(T + 1));
                                    },
                                    color: r.zxk.Colors.GREEN,
                                    disabled: w.disableNextStep,
                                    children: R ? L : c.NW.string(c.t.PDTjLC)
                                }),
                                y
                                    ? null
                                    : (0, i.jsx)(r.zxk, {
                                          look: r.zxk.Looks.LINK,
                                          color: r.zxk.Colors.PRIMARY,
                                          size: r.zxk.Sizes.MIN,
                                          onClick: M,
                                          children: c.NW.string(c.t['13/7kZ'])
                                      })
                            ]
                        })
                    ]
                })
            ]
        });
    };
