i.d(t, {
    A: () => m,
}),
    i(896048);
var s = i(627968),
    l = i(64700),
    n = i(503698),
    a = i.n(n),
    r = i(421380),
    c = i(397927),
    d = i(915089),
    o = i(985018),
    x = i(65943);
let u = (e) => {
        let { index: t, title: i, selected: l } = e;
        return (0, s.jsxs)("div", {
            className: a()(x.wJ, {
                [x.wH]: l,
            }),
            children: [
                (0, s.jsx)(c.Text, {
                    className: x.BM,
                    variant: "text-sm/normal",
                    children: t + 1,
                }),
                (0, s.jsx)(c.Text, {
                    variant: "text-md/normal",
                    className: x.Fb,
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
                onClose: b,
                completeButtonText: f,
                overviewFooter: h,
                onNextPressed: p,
                onPrevPressed: g,
                onComplete: j,
                sequencerClassName: v,
                initialStep: N = 0,
                forceStep: C,
                submitting: _ = !1,
                autoCloseOnComplete: A = !0,
            } = e,
            [E, S] = l.useState([]),
            [I, M] = l.useState(N),
            L = (0, d.GV)();
        l.useEffect(() => {
            S([...Array(n.length).keys()]);
        }, [n.length]);
        let y = null != C ? C : I,
            O = n[y],
            w = 0 === y,
            P = y === n.length - 1,
            k = null != f ? f : o.intl.string(o.t.i4jeWR),
            G = l.useCallback(() => {
                null == g || g(), M(y - 1);
            }, [g, y, M]);
        return (0, s.jsxs)(c.EOs, {
            size: c.rIJ.MEDIUM,
            className: a()(x.kL, t),
            transitionState: m,
            "aria-labelledby": L,
            parentComponent: "MultiStepModal",
            children: [
                (0, s.jsxs)("div", {
                    className: x.A0,
                    children: [
                        (0, s.jsx)(c.Heading, {
                            id: L,
                            variant: "heading-xl/semibold",
                            className: x.wx,
                            children: i,
                        }),
                        (0, s.jsx)("div", {
                            className: x.Ji,
                            children: n.map((e, t) =>
                                (0, s.jsx)(
                                    u,
                                    {
                                        index: t,
                                        title: e.overviewTitle,
                                        selected: t === y,
                                    },
                                    t,
                                ),
                            ),
                        }),
                        h,
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: x.yl,
                    children: [
                        (0, s.jsxs)(c.$mQ, {
                            children: [
                                (0, s.jsx)(c.s_y, {
                                    focusProps: {
                                        offset: {
                                            top: 4,
                                            right: 4,
                                            left: 4,
                                        },
                                    },
                                    onClick: b,
                                    className: x.b,
                                }),
                                (0, s.jsx)(c.YC2, {
                                    step: y,
                                    steps: E,
                                    sideMargin: 24,
                                    verticalMargin: 24,
                                    className: a()(x.C9, v),
                                    innerClassName: x.C,
                                    children: O.modalContent,
                                }),
                            ],
                        }),
                        (0, s.jsxs)(c.jlY, {
                            className: x.qr,
                            children: [
                                (0, s.jsx)(c.Button, {
                                    variant: "active",
                                    text: P ? k : o.intl.string(o.t.PDTjLN),
                                    type: "submit",
                                    loading: _,
                                    onClick: () => {
                                        P ? (j(), A && b()) : (null == p || p(), M(y + 1));
                                    },
                                    disabled: O.disableNextStep,
                                }),
                                w
                                    ? null
                                    : (0, s.jsx)(r.$n, {
                                          look: r.$n.Looks.LINK,
                                          color: r.$n.Colors.PRIMARY,
                                          size: r.$n.Sizes.MIN,
                                          onClick: G,
                                          children: o.intl.string(o.t["13/7kX"]),
                                      }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
