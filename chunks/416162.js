i.d(t, { Z: () => m }), i(47120);
var s = i(200651),
    l = i(192379),
    n = i(120356),
    a = i.n(n),
    r = i(481060),
    o = i(313201),
    c = i(388032),
    d = i(708335);
let u = (e) => {
        let { index: t, title: i, selected: l } = e;
        return (0, s.jsxs)('div', {
            className: a()(d.overviewStep, { [d.selected]: l }),
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
        let { className: t, title: i, stepData: n, transitionState: m, onClose: x, completeButtonText: h, overviewFooter: f, onNextPressed: p, onPrevPressed: v, onComplete: b, sequencerClassName: g, initialStep: N = 0, forceStep: j, submitting: C = !1, autoCloseOnComplete: _ = !0 } = e,
            [I, S] = l.useState([]),
            [E, T] = l.useState(N),
            R = (0, o.Dt)();
        l.useEffect(() => {
            S([...Array(n.length).keys()]);
        }, [n.length]);
        let w = null != j ? j : E,
            L = n[w],
            M = 0 === w,
            O = w === n.length - 1,
            y = null != h ? h : c.intl.string(c.t.i4jeWV),
            Z = l.useCallback(() => {
                null == v || v(), T(w - 1);
            }, [v, w, T]);
        return (0, s.jsxs)(r.Y0X, {
            size: r.CgR.MEDIUM,
            className: a()(d.container, t),
            transitionState: m,
            'aria-labelledby': R,
            children: [
                (0, s.jsxs)('div', {
                    className: d.overviewSidebar,
                    children: [
                        (0, s.jsx)(r.X6q, {
                            id: R,
                            variant: 'heading-xl/semibold',
                            className: d.header,
                            children: i
                        }),
                        (0, s.jsx)('div', {
                            className: d.overviewSteps,
                            children: n.map((e, t) =>
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
                        f
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
                                    steps: I,
                                    sideMargin: 24,
                                    verticalMargin: 24,
                                    className: a()(d.sequencer, g),
                                    innerClassName: d.innerSequencer,
                                    children: L.modalContent
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
                                        O ? (b(), _ && x()) : (null == p || p(), T(w + 1));
                                    },
                                    color: r.zxk.Colors.GREEN,
                                    disabled: L.disableNextStep,
                                    children: O ? y : c.intl.string(c.t.PDTjLC)
                                }),
                                M
                                    ? null
                                    : (0, s.jsx)(r.zxk, {
                                          look: r.zxk.Looks.LINK,
                                          color: r.zxk.Colors.PRIMARY,
                                          size: r.zxk.Sizes.MIN,
                                          onClick: Z,
                                          children: c.intl.string(c.t['13/7kZ'])
                                      })
                            ]
                        })
                    ]
                })
            ]
        });
    };
