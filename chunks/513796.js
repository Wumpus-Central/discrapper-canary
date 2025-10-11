i.d(t, { Z: () => m }), i(388685);
var s = i(951288),
    l = i(647438),
    n = i(120356),
    a = i.n(n),
    r = i(755721),
    o = i(481060),
    c = i(313201),
    d = i(388032),
    u = i(918587);
let x = (e) => {
        let { index: t, title: i, selected: l } = e;
        return (0, s.jsxs)("div", {
            className: a()(u.overviewStep, { [u.selected]: l }),
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
    m = (e) => {
        let {
                className: t,
                title: i,
                stepData: n,
                transitionState: m,
                onClose: h,
                completeButtonText: g,
                overviewFooter: p,
                onNextPressed: f,
                onPrevPressed: v,
                onComplete: N,
                sequencerClassName: j,
                initialStep: b = 0,
                forceStep: C,
                submitting: S = !1,
                autoCloseOnComplete: E = !0,
            } = e,
            [I, O] = l.useState([]),
            [M, L] = l.useState(b),
            w = (0, c.Dt)();
        l.useEffect(() => {
            O([...Array(n.length).keys()]);
        }, [n.length]);
        let y = null != C ? C : M,
            _ = n[y],
            P = 0 === y,
            T = y === n.length - 1,
            k = null != g ? g : d.intl.string(d.t.i4jeWV),
            A = l.useCallback(() => {
                null == v || v(), L(y - 1);
            }, [v, y, L]);
        return (0, s.jsxs)(o.Y0X, {
            size: o.CgR.MEDIUM,
            className: a()(u.container, t),
            transitionState: m,
            "aria-labelledby": w,
            parentComponent: "MultiStepModal",
            children: [
                (0, s.jsxs)("div", {
                    className: u.overviewSidebar,
                    children: [
                        (0, s.jsx)(o.Heading, {
                            id: w,
                            variant: "heading-xl/semibold",
                            className: u.header,
                            children: i,
                        }),
                        (0, s.jsx)("div", {
                            className: u.overviewSteps,
                            children: n.map((e, t) =>
                                (0, s.jsx)(
                                    x,
                                    {
                                        index: t,
                                        title: e.overviewTitle,
                                        selected: t === y,
                                    },
                                    t,
                                ),
                            ),
                        }),
                        p,
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
                                    onClick: h,
                                    className: u.closeButton,
                                }),
                                (0, s.jsx)(o.qBt, {
                                    step: y,
                                    steps: I,
                                    sideMargin: 24,
                                    verticalMargin: 24,
                                    className: a()(u.sequencer, j),
                                    innerClassName: u.innerSequencer,
                                    children: _.modalContent,
                                }),
                            ],
                        }),
                        (0, s.jsxs)(o.mzw, {
                            className: u.footer,
                            children: [
                                (0, s.jsx)(o.Button, {
                                    variant: "active",
                                    text: T ? k : d.intl.string(d.t.PDTjLC),
                                    type: "submit",
                                    loading: S,
                                    onClick: () => {
                                        T ? (N(), E && h()) : (null == f || f(), L(y + 1));
                                    },
                                    disabled: _.disableNextStep,
                                }),
                                P
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
