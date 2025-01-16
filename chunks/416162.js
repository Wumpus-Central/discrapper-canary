i(47120);
var s = i(200651),
    l = i(192379),
    n = i(120356),
    a = i.n(n),
    r = i(481060),
    o = i(313201),
    c = i(388032),
    d = i(733424);
let m = (e) => {
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
};
t.Z = (e) => {
    let { className: t, title: i, stepData: n, transitionState: x, onClose: u, completeButtonText: h, overviewFooter: p, onNextPressed: f, onPrevPressed: g, onComplete: v, sequencerClassName: N, initialStep: b = 0, forceStep: j, submitting: C = !1, autoCloseOnComplete: T = !0 } = e,
        [I, S] = l.useState([]),
        [_, E] = l.useState(b),
        M = (0, o.Dt)();
    l.useEffect(() => {
        S([...Array(n.length).keys()]);
    }, [n.length]);
    let L = null != j ? j : _,
        R = n[L],
        y = 0 === L,
        O = L === n.length - 1,
        F = null != h ? h : c.intl.string(c.t.i4jeWV),
        k = l.useCallback(() => {
            null == g || g(), E(L - 1);
        }, [g, L, E]);
    return (0, s.jsxs)(r.ModalRoot, {
        size: r.ModalSize.MEDIUM,
        className: a()(d.container, t),
        transitionState: x,
        'aria-labelledby': M,
        children: [
            (0, s.jsxs)('div', {
                className: d.overviewSidebar,
                children: [
                    (0, s.jsx)(r.Heading, {
                        id: M,
                        variant: 'heading-xl/semibold',
                        className: d.header,
                        children: i
                    }),
                    (0, s.jsx)('div', {
                        className: d.overviewSteps,
                        children: n.map((e, t) =>
                            (0, s.jsx)(
                                m,
                                {
                                    index: t,
                                    title: e.overviewTitle,
                                    selected: t === L
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
                    (0, s.jsxs)(r.ModalContent, {
                        children: [
                            (0, s.jsx)(r.ModalCloseButton, {
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        right: 4,
                                        left: 4
                                    }
                                },
                                onClick: u,
                                className: d.closeButton
                            }),
                            (0, s.jsx)(r.Sequencer, {
                                step: L,
                                steps: I,
                                sideMargin: 24,
                                verticalMargin: 24,
                                className: a()(d.sequencer, N),
                                innerClassName: d.innerSequencer,
                                children: R.modalContent
                            })
                        ]
                    }),
                    (0, s.jsxs)(r.ModalFooter, {
                        className: d.footer,
                        children: [
                            (0, s.jsx)(r.Button, {
                                type: 'submit',
                                submitting: C,
                                onClick: () => {
                                    O ? (v(), T && u()) : (null == f || f(), E(L + 1));
                                },
                                color: r.Button.Colors.GREEN,
                                disabled: R.disableNextStep,
                                children: O ? F : c.intl.string(c.t.PDTjLC)
                            }),
                            y
                                ? null
                                : (0, s.jsx)(r.Button, {
                                      look: r.Button.Looks.LINK,
                                      color: r.Button.Colors.PRIMARY,
                                      size: r.Button.Sizes.MIN,
                                      onClick: k,
                                      children: c.intl.string(c.t['13/7kZ'])
                                  })
                        ]
                    })
                ]
            })
        ]
    });
};
