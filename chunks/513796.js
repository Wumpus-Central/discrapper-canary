i.d(t, { Z: () => x }), i(388685);
var s = i(951288),
    n = i(647438),
    l = i(120356),
    a = i.n(l),
    r = i(755721),
    o = i(481060),
    c = i(313201),
    d = i(388032),
    u = i(918587);
let m = (e) => {
        let { index: t, title: i, selected: n } = e;
        return (0, s.jsxs)("div", {
            className: a()(u.overviewStep, { [u.selected]: n }),
            children: [
                (0, s.jsx)(o.Text, {
                    className: u.stepIndex,
                    variant: "text-sm/normal",
                    children: t + 1,
                }),
                (0, s.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: u.stepTitle,
                    children: i,
                }),
            ],
        });
    },
    x = (e) => {
        let {
                className: t,
                title: i,
                stepData: l,
                transitionState: x,
                onClose: p,
                completeButtonText: h,
                overviewFooter: f,
                onNextPressed: v,
                onPrevPressed: b,
                onComplete: g,
                sequencerClassName: N,
                initialStep: j = 0,
                forceStep: _,
                submitting: C = !1,
                autoCloseOnComplete: S = !0,
            } = e,
            [I, E] = n.useState([]),
            [O, w] = n.useState(j),
            T = (0, c.Dt)();
        n.useEffect(() => {
            E([...Array(l.length).keys()]);
        }, [l.length]);
        let M = null != _ ? _ : O,
            y = l[M],
            L = 0 === M,
            R = M === l.length - 1,
            P = null != h ? h : d.intl.string(d.t.i4jeWV),
            A = n.useCallback(() => {
                null == b || b(), w(M - 1);
            }, [b, M, w]);
        return (0, s.jsxs)(o.Y0X, {
            size: o.CgR.MEDIUM,
            className: a()(u.container, t),
            transitionState: x,
            "aria-labelledby": T,
            parentComponent: "MultiStepModal",
            children: [
                (0, s.jsxs)("div", {
                    className: u.overviewSidebar,
                    children: [
                        (0, s.jsx)(o.X6q, {
                            id: T,
                            variant: "heading-xl/semibold",
                            className: u.header,
                            children: i,
                        }),
                        (0, s.jsx)("div", {
                            className: u.overviewSteps,
                            children: l.map((e, t) =>
                                (0, s.jsx)(
                                    m,
                                    {
                                        index: t,
                                        title: e.overviewTitle,
                                        selected: t === M,
                                    },
                                    t,
                                ),
                            ),
                        }),
                        f,
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: u.modal,
                    children: [
                        (0, s.jsxs)(o.hzk, {
                            children: [
                                (0, s.jsx)(o.olH, {
                                    focusProps: {
                                        offset: {
                                            top: 4,
                                            right: 4,
                                            left: 4,
                                        },
                                    },
                                    onClick: p,
                                    className: u.closeButton,
                                }),
                                (0, s.jsx)(o.qBt, {
                                    step: M,
                                    steps: I,
                                    sideMargin: 24,
                                    verticalMargin: 24,
                                    className: a()(u.sequencer, N),
                                    innerClassName: u.innerSequencer,
                                    children: y.modalContent,
                                }),
                            ],
                        }),
                        (0, s.jsxs)(o.mzw, {
                            className: u.footer,
                            children: [
                                (0, s.jsx)(o.zxk, {
                                    variant: "active",
                                    text: R ? P : d.intl.string(d.t.PDTjLC),
                                    type: "submit",
                                    loading: C,
                                    onClick: () => {
                                        R ? (g(), S && p()) : (null == v || v(), w(M + 1));
                                    },
                                    disabled: y.disableNextStep,
                                }),
                                L
                                    ? null
                                    : (0, s.jsx)(r.zx, {
                                          look: r.zx.Looks.LINK,
                                          color: r.zx.Colors.PRIMARY,
                                          size: r.zx.Sizes.MIN,
                                          onClick: A,
                                          children: d.intl.string(d.t["13/7kZ"]),
                                      }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
