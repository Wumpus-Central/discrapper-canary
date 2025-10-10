i.d(t, { Z: () => x }), i(388685);
var n = i(951288),
    l = i(647438),
    s = i(120356),
    a = i.n(s),
    r = i(755721),
    o = i(481060),
    c = i(313201),
    d = i(388032),
    u = i(918587);
let m = (e) => {
        let { index: t, title: i, selected: l } = e;
        return (0, n.jsxs)("div", {
            className: a()(u.overviewStep, { [u.selected]: l }),
            children: [
                (0, n.jsx)(o.Text, {
                    className: u.stepIndex,
                    variant: "text-sm/normal",
                    children: t + 1,
                }),
                (0, n.jsx)(o.Text, {
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
                stepData: s,
                transitionState: x,
                onClose: p,
                completeButtonText: h,
                overviewFooter: f,
                onNextPressed: b,
                onPrevPressed: g,
                onComplete: v,
                sequencerClassName: N,
                initialStep: j = 0,
                forceStep: _,
                submitting: C = !1,
                autoCloseOnComplete: S = !0,
            } = e,
            [I, E] = l.useState([]),
            [O, w] = l.useState(j),
            M = (0, c.Dt)();
        l.useEffect(() => {
            E([...Array(s.length).keys()]);
        }, [s.length]);
        let L = null != _ ? _ : O,
            y = s[L],
            T = 0 === L,
            P = L === s.length - 1,
            R = null != h ? h : d.intl.string(d.t.i4jeWV),
            A = l.useCallback(() => {
                null == g || g(), w(L - 1);
            }, [g, L, w]);
        return (0, n.jsxs)(o.Y0X, {
            size: o.CgR.MEDIUM,
            className: a()(u.container, t),
            transitionState: x,
            "aria-labelledby": M,
            parentComponent: "MultiStepModal",
            children: [
                (0, n.jsxs)("div", {
                    className: u.overviewSidebar,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            id: M,
                            variant: "heading-xl/semibold",
                            className: u.header,
                            children: i,
                        }),
                        (0, n.jsx)("div", {
                            className: u.overviewSteps,
                            children: s.map((e, t) =>
                                (0, n.jsx)(
                                    m,
                                    {
                                        index: t,
                                        title: e.overviewTitle,
                                        selected: t === L,
                                    },
                                    t,
                                ),
                            ),
                        }),
                        f,
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: u.modal,
                    children: [
                        (0, n.jsxs)(o.hzk, {
                            children: [
                                (0, n.jsx)(o.olH, {
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
                                (0, n.jsx)(o.qBt, {
                                    step: L,
                                    steps: I,
                                    sideMargin: 24,
                                    verticalMargin: 24,
                                    className: a()(u.sequencer, N),
                                    innerClassName: u.innerSequencer,
                                    children: y.modalContent,
                                }),
                            ],
                        }),
                        (0, n.jsxs)(o.mzw, {
                            className: u.footer,
                            children: [
                                (0, n.jsx)(o.zxk, {
                                    variant: "active",
                                    text: P ? R : d.intl.string(d.t.PDTjLC),
                                    type: "submit",
                                    loading: C,
                                    onClick: () => {
                                        P ? (v(), S && p()) : (null == b || b(), w(L + 1));
                                    },
                                    disabled: y.disableNextStep,
                                }),
                                T
                                    ? null
                                    : (0, n.jsx)(r.zx, {
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
