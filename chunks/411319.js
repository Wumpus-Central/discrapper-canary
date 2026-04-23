i.d(t, { A: () => b });
var s = i(627968),
    l = i(64700),
    n = i(503698),
    a = i.n(n),
    r = i(862482),
    d = i(834730),
    o = i(935462),
    c = i(534514),
    x = i(685094),
    m = i(821609),
    u = i(915089),
    h = i(985018),
    p = i(821406);
let g = (e) => {
        let { index: t, title: i, selected: l } = e;
        return (0, s.jsxs)("div", {
            className: a()(p.wJ, { [p.wH]: l }),
            children: [
                (0, s.jsx)(d.E, { className: p.BM, variant: "text-sm/normal", children: t + 1 }),
                (0, s.jsx)(d.E, { variant: "text-md/normal", className: p.Fb, children: i }),
            ],
        });
    },
    b = (e) => {
        let {
                className: t,
                title: i,
                stepData: n,
                transitionState: d,
                onClose: b,
                completeButtonText: N,
                overviewFooter: v,
                onNextPressed: j,
                onPrevPressed: _,
                onComplete: f,
                sequencerClassName: E,
                initialStep: C = 0,
                forceStep: S,
                submitting: A = !1,
                autoCloseOnComplete: I = !0,
            } = e,
            [M, L] = l.useState([]),
            [w, G] = l.useState(C),
            k = (0, u.GV)();
        l.useEffect(() => {
            L([...Array(n.length).keys()]);
        }, [n.length]);
        let D = S ?? w,
            y = n[D],
            P = 0 === D,
            R = D === n.length - 1,
            O = N ?? h.intl.string(h.t.i4jeWR),
            T = l.useCallback(() => {
                _?.(), G(D - 1);
            }, [_, D, G]);
        return (0, s.jsxs)(o.EO, {
            size: o.rI.MEDIUM,
            className: a()(p.kL, t),
            transitionState: d,
            "aria-labelledby": k,
            parentComponent: "MultiStepModal",
            children: [
                (0, s.jsxs)("div", {
                    className: p.A0,
                    children: [
                        (0, s.jsx)(c.D, { id: k, variant: "heading-xl/semibold", className: p.wx, children: i }),
                        (0, s.jsx)("div", {
                            className: p.Ji,
                            children: n.map((e, t) =>
                                (0, s.jsx)(g, { index: t, title: e.overviewTitle, selected: t === D }, t),
                            ),
                        }),
                        v,
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: p.yl,
                    children: [
                        (0, s.jsxs)(o.$m, {
                            children: [
                                (0, s.jsx)(o.s_, {
                                    focusProps: { offset: { top: 4, right: 4, left: 4 } },
                                    onClick: b,
                                    className: p.b,
                                }),
                                (0, s.jsx)(x.Y, {
                                    step: D,
                                    steps: M,
                                    sideMargin: 24,
                                    verticalMargin: 24,
                                    className: a()(p.C9, E),
                                    innerClassName: p.C,
                                    children: y.modalContent,
                                }),
                            ],
                        }),
                        (0, s.jsxs)(o.jl, {
                            className: p.qr,
                            children: [
                                (0, s.jsx)(m.$, {
                                    variant: "active",
                                    text: R ? O : h.intl.string(h.t.PDTjLN),
                                    type: "submit",
                                    loading: A,
                                    onClick: () => {
                                        R ? (f(), I && b()) : (j?.(), G(D + 1));
                                    },
                                    disabled: y.disableNextStep,
                                }),
                                P
                                    ? null
                                    : (0, s.jsx)(r.$n, {
                                          look: r.$n.Looks.LINK,
                                          color: r.$n.Colors.PRIMARY,
                                          size: r.$n.Sizes.MIN,
                                          onClick: T,
                                          children: h.intl.string(h.t["13/7kX"]),
                                      }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
