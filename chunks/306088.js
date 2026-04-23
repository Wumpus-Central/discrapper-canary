l.d(e, { default: () => _ }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(189213),
    r = l(331322),
    u = l(534514),
    s = l(954197),
    d = l(260598),
    b = l(145331),
    E = l(472715),
    v = l(191485),
    O = l(670455),
    f = l(985018);
function g(t) {
    let {
            title: e,
            options: l,
            selectedOption: i,
            freeformText: b,
            isFreeformEnabled: v,
            selectOption: g,
            onFreeformTextChange: _,
        } = t,
        o = a.useMemo(() => l.map(E.zS), [l]),
        U = a.useCallback(
            (t) => {
                let e = (0, E.MA)(t, l);
                null != e && g(e);
            },
            [g, l],
        );
    return (0, n.jsxs)(r.B, {
        gap: 24,
        children: [
            (0, n.jsxs)(r.B, {
                gap: 16,
                children: [
                    (0, n.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: e }),
                    (0, n.jsx)(s.z, { options: o, value: i?.value, onChange: U }),
                ],
            }),
            (0, n.jsxs)(r.B, {
                gap: 16,
                children: [
                    (0, n.jsx)(u.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: f.intl.string(f.t.oV10fv),
                    }),
                    (0, n.jsx)(d.f, { value: b, maxLength: O.u0, onChange: _, disabled: !v }),
                ],
            }),
        ],
    });
}
let _ = function (t) {
    let { searchContext: e, rating: l, transitionState: r, onClose: u } = t,
        s = (0, v.L)({ getOptions: E.aK }),
        d = (0, v.L)({ getOptions: E.mX }),
        _ = l === O.P0.BAD,
        { questionItems: o, questionTitles: U } = a.useMemo(() => {
            let t = [],
                e = [];
            return (
                _ && (t.push(s), e.push(f.intl.string(f.t.UyBQF7))),
                t.push(d),
                e.push(f.intl.string(f.t.LhMLCk)),
                { questionItems: t, questionTitles: e }
            );
        }, [_, d, s]);
    a.useEffect(() => {
        (0, b.wU)({ rating: l, searchContext: e });
    }, [l, e]);
    let [S, h] = a.useState(0),
        N = 0 === S,
        c = S === o.length - 1,
        L = a.useMemo(() => {
            let t = o[S],
                e = U[S];
            return (0, n.jsx)(g, { title: e, ...t });
        }, [o, U, S]),
        D = a.useMemo(() => o.every(E.GP), [o]),
        C = a.useMemo(() => {
            let t = o[S];
            return (0, E.GP)(t);
        }, [o, S]),
        I = a.useCallback(() => {
            D &&
                ((0, b.uZ)({
                    rating: l,
                    searchContext: e,
                    unsatisfiedQuestionOption: _ ? (0, E.De)(s) : null,
                    unsatisfiedQuestionText: _ ? (0, E.mq)(s) : null,
                    describeSearchQuestionOption: (0, E.De)(d),
                    describeSearchQuestionText: (0, E.mq)(d),
                }),
                u());
        }, [D, l, e, _, s, d, u]),
        V = a.useCallback(() => {
            N ? u() : h(S - 1);
        }, [N, S, u]),
        T = a.useCallback(() => {
            h(S + 1);
        }, [S]),
        p = a.useMemo(() => {
            let t = [];
            return (
                N
                    ? t.push({ variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: u })
                    : t.push({ variant: "secondary", text: f.intl.string(f.t["13/7kX"]), onClick: V }),
                c
                    ? t.push({ variant: "primary", text: f.intl.string(f.t["4Zpxtl"]), onClick: I, disabled: !D })
                    : t.push({ variant: "primary", text: f.intl.string(f.t.PDTjLN), onClick: T, disabled: !C }),
                t
            );
        }, [N, c, D, C, u, V, I, T]);
    return (0, n.jsx)(i.Modal, {
        title: f.intl.string(f.t.LRGdVy),
        actions: p,
        onClose: u,
        transitionState: r,
        children: L,
    });
};
