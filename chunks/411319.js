i.d(t, { A: () => u });
var s = i(627968),
    l = i(64700),
    n = i(503698),
    a = i.n(n),
    r = i(421380),
    d = i(397927),
    o = i(915089),
    c = i(985018),
    x = i(912366);
let m = (e) => {
        let { index: t, title: i, selected: l } = e;
        return (0, s.jsxs)("div", {
            className: a()(x.wJ, { [x.wH]: l }),
            children: [
                (0, s.jsx)(d.Text, { className: x.BM, variant: "text-sm/normal", children: t + 1 }),
                (0, s.jsx)(d.Text, { variant: "text-md/normal", className: x.Fb, children: i }),
            ],
        });
    },
    u = (e) => {
        let {
                className: t,
                title: i,
                stepData: n,
                transitionState: u,
                onClose: h,
                completeButtonText: p,
                overviewFooter: g,
                onNextPressed: b,
                onPrevPressed: N,
                onComplete: v,
                sequencerClassName: j,
                initialStep: _ = 0,
                forceStep: f,
                submitting: C = !1,
                autoCloseOnComplete: A = !0,
            } = e,
            [S, E] = l.useState([]),
            [I, M] = l.useState(_),
            L = (0, o.GV)();
        l.useEffect(() => {
            E([...Array(n.length).keys()]);
        }, [n.length]);
        let w = f ?? I,
            k = n[w],
            T = 0 === w,
            G = w === n.length - 1,
            y = p ?? c.intl.string(c.t.i4jeWR),
            P = l.useCallback(() => {
                N?.(), M(w - 1);
            }, [N, w, M]);
        return (0, s.jsxs)(d.EOs, {
            size: d.rIJ.MEDIUM,
            className: a()(x.kL, t),
            transitionState: u,
            "aria-labelledby": L,
            parentComponent: "MultiStepModal",
            children: [
                (0, s.jsxs)("div", {
                    className: x.A0,
                    children: [
                        (0, s.jsx)(d.Heading, { id: L, variant: "heading-xl/semibold", className: x.wx, children: i }),
                        (0, s.jsx)("div", {
                            className: x.Ji,
                            children: n.map((e, t) =>
                                (0, s.jsx)(m, { index: t, title: e.overviewTitle, selected: t === w }, t),
                            ),
                        }),
                        g,
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: x.yl,
                    children: [
                        (0, s.jsxs)(d.$mQ, {
                            children: [
                                (0, s.jsx)(d.s_y, {
                                    focusProps: { offset: { top: 4, right: 4, left: 4 } },
                                    onClick: h,
                                    className: x.b,
                                }),
                                (0, s.jsx)(d.YC2, {
                                    step: w,
                                    steps: S,
                                    sideMargin: 24,
                                    verticalMargin: 24,
                                    className: a()(x.C9, j),
                                    innerClassName: x.C,
                                    children: k.modalContent,
                                }),
                            ],
                        }),
                        (0, s.jsxs)(d.jlY, {
                            className: x.qr,
                            children: [
                                (0, s.jsx)(d.Button, {
                                    variant: "active",
                                    text: G ? y : c.intl.string(c.t.PDTjLN),
                                    type: "submit",
                                    loading: C,
                                    onClick: () => {
                                        G ? (v(), A && h()) : (b?.(), M(w + 1));
                                    },
                                    disabled: k.disableNextStep,
                                }),
                                T
                                    ? null
                                    : (0, s.jsx)(r.$n, {
                                          look: r.$n.Looks.LINK,
                                          color: r.$n.Colors.PRIMARY,
                                          size: r.$n.Sizes.MIN,
                                          onClick: P,
                                          children: c.intl.string(c.t["13/7kX"]),
                                      }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
