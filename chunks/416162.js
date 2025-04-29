i.d(t, { Z: () => m }), i(388685);
var s = i(255367),
    n = i(73800),
    l = i(120356),
    a = i.n(l),
    r = i(481060),
    o = i(313201),
    c = i(388032),
    d = i(807201);
let u = (e) => {
        let { index: t, title: i, selected: n } = e;
        return (0, s.jsxs)('div', {
            className: a()(d.overviewStep, { [d.selected]: n }),
            children: [
                (0, s.jsx)(r.Text, {
                    className: d.stepIndex,
                    variant: 'text-sm/normal',
                    children: t + 1
                }),
                (0, s.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    className: d.stepTitle,
                    children: i
                })
            ]
        });
    },
    m = (e) => {
        let { className: t, title: i, stepData: l, transitionState: m, onClose: x, completeButtonText: f, overviewFooter: p, onNextPressed: h, onPrevPressed: b, onComplete: v, sequencerClassName: g, initialStep: N = 0, forceStep: j, submitting: C = !1, autoCloseOnComplete: _ = !0 } = e,
            [S, I] = n.useState([]),
            [E, O] = n.useState(N),
            T = (0, o.Dt)();
        n.useEffect(() => {
            I([...Array(l.length).keys()]);
        }, [l.length]);
        let w = null != j ? j : E,
            y = l[w],
            R = 0 === w,
            L = w === l.length - 1,
            M = null != f ? f : c.intl.string(c.t.i4jeWV),
            P = n.useCallback(() => {
                null == b || b(), O(w - 1);
            }, [b, w, O]);
        return (0, s.jsxs)(r.Y0X, {
            size: r.CgR.MEDIUM,
            className: a()(d.container, t),
            transitionState: m,
            'aria-labelledby': T,
            children: [
                (0, s.jsxs)('div', {
                    className: d.overviewSidebar,
                    children: [
                        (0, s.jsx)(r.X6q, {
                            id: T,
                            variant: 'heading-xl/semibold',
                            className: d.header,
                            children: i
                        }),
                        (0, s.jsx)('div', {
                            className: d.overviewSteps,
                            children: l.map((e, t) =>
                                (0, s.jsx)(
                                    u,
                                    {
                                        index: t,
                                        title: e.overviewTitle,
                                        selected: t === w
                                    },
                                    t
                                )
                            )
                        }),
                        p
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: d.modal,
                    children: [
                        (0, s.jsxs)(r.hzk, {
                            children: [
                                (0, s.jsx)(r.olH, {
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
                                (0, s.jsx)(r.qBt, {
                                    step: w,
                                    steps: S,
                                    sideMargin: 24,
                                    verticalMargin: 24,
                                    className: a()(d.sequencer, g),
                                    innerClassName: d.innerSequencer,
                                    children: y.modalContent
                                })
                            ]
                        }),
                        (0, s.jsxs)(r.mzw, {
                            className: d.footer,
                            children: [
                                (0, s.jsx)(r.zxk, {
                                    type: 'submit',
                                    submitting: C,
                                    onClick: () => {
                                        L ? (v(), _ && x()) : (null == h || h(), O(w + 1));
                                    },
                                    color: r.zxk.Colors.GREEN,
                                    disabled: y.disableNextStep,
                                    children: L ? M : c.intl.string(c.t.PDTjLC)
                                }),
                                R
                                    ? null
                                    : (0, s.jsx)(r.zxk, {
                                          look: r.zxk.Looks.LINK,
                                          color: r.zxk.Colors.PRIMARY,
                                          size: r.zxk.Sizes.MIN,
                                          onClick: P,
                                          children: c.intl.string(c.t['13/7kZ'])
                                      })
                            ]
                        })
                    ]
                })
            ]
        });
    };
