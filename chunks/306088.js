l.d(e, { default: () => O }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(158954),
    r = l(397927),
    u = l(145331),
    s = l(472715),
    d = l(191485),
    b = l(670455),
    E = l(985018);
function v(t) {
    let {
            title: e,
            options: l,
            selectedOption: i,
            freeformText: u,
            isFreeformEnabled: d,
            selectOption: v,
            onFreeformTextChange: O,
        } = t,
        g = a.useMemo(() => l.map(s.zS), [l]),
        f = a.useCallback(
            (t) => {
                let e = (0, s.MA)(t, l);
                null != e && v(e);
            },
            [v, l],
        );
    return (0, n.jsxs)(r.BJc, {
        gap: 24,
        children: [
            (0, n.jsxs)(r.BJc, {
                gap: 16,
                children: [
                    (0, n.jsx)(r.Heading, { variant: "heading-lg/semibold", color: "text-strong", children: e }),
                    (0, n.jsx)(r.z6M, { options: g, value: i?.value, onChange: f }),
                ],
            }),
            (0, n.jsxs)(r.BJc, {
                gap: 16,
                children: [
                    (0, n.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: E.intl.string(E.t.oV10fv),
                    }),
                    (0, n.jsx)(r.fs1, { value: u, maxLength: b.u0, onChange: O, disabled: !d }),
                ],
            }),
        ],
    });
}
let O = function (t) {
    let { searchContext: e, rating: l, transitionState: r, onClose: O } = t,
        g = (0, d.L)({ getOptions: s.aK }),
        f = (0, d.L)({ getOptions: s.mX }),
        _ = l === b.P0.BAD,
        { questionItems: o, questionTitles: U } = a.useMemo(() => {
            let t = [],
                e = [];
            return (
                _ && (t.push(g), e.push(E.intl.string(E.t.UyBQF7))),
                t.push(f),
                e.push(E.intl.string(E.t.LhMLCk)),
                { questionItems: t, questionTitles: e }
            );
        }, [_, f, g]);
    a.useEffect(() => {
        (0, u.wU)({ rating: l, searchContext: e });
    }, [l, e]);
    let [S, h] = a.useState(0),
        c = 0 === S,
        N = S === o.length - 1,
        L = a.useMemo(() => {
            let t = o[S],
                e = U[S];
            return (0, n.jsx)(v, { title: e, ...t });
        }, [o, U, S]),
        C = a.useMemo(() => o.every(s.GP), [o]),
        D = a.useMemo(() => {
            let t = o[S];
            return (0, s.GP)(t);
        }, [o, S]),
        I = a.useCallback(() => {
            C &&
                ((0, u.uZ)({
                    rating: l,
                    searchContext: e,
                    unsatisfiedQuestionOption: _ ? (0, s.De)(g) : null,
                    unsatisfiedQuestionText: _ ? (0, s.mq)(g) : null,
                    describeSearchQuestionOption: (0, s.De)(f),
                    describeSearchQuestionText: (0, s.mq)(f),
                }),
                O());
        }, [C, l, e, _, g, f, O]),
        V = a.useCallback(() => {
            c ? O() : h(S - 1);
        }, [c, S, O]),
        T = a.useCallback(() => {
            h(S + 1);
        }, [S]),
        p = a.useMemo(() => {
            let t = [];
            return (
                c
                    ? t.push({ variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: O })
                    : t.push({ variant: "secondary", text: E.intl.string(E.t["13/7kX"]), onClick: V }),
                N
                    ? t.push({ variant: "primary", text: E.intl.string(E.t["4Zpxtl"]), onClick: I, disabled: !C })
                    : t.push({ variant: "primary", text: E.intl.string(E.t.PDTjLN), onClick: T, disabled: !D }),
                t
            );
        }, [c, N, C, D, O, V, I, T]);
    return (0, n.jsx)(i.Modal, {
        title: E.intl.string(E.t.LRGdVy),
        actions: p,
        onClose: O,
        transitionState: r,
        children: L,
    });
};
