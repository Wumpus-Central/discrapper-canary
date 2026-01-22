l.d(t, { default: () => v }), l(321073), l(896048);
var n = l(627968),
    a = l(64700),
    i = l(158954),
    r = l(397927),
    u = l(145331),
    s = l(472715),
    d = l(191485),
    b = l(670455),
    O = l(985018);
function o(e) {
    let {
            title: t,
            options: l,
            selectedOption: i,
            freeformText: u,
            isFreeformEnabled: d,
            selectOption: o,
            onFreeformTextChange: v,
        } = e,
        E = a.useMemo(() => l.map(s.zS), [l]),
        f = a.useCallback(
            (e) => {
                let t = (0, s.MA)(e, l);
                null != t && o(t);
            },
            [o, l],
        );
    return (0, n.jsxs)(r.BJc, {
        gap: 24,
        children: [
            (0, n.jsxs)(r.BJc, {
                gap: 16,
                children: [
                    (0, n.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: t,
                    }),
                    (0, n.jsx)(r.z6M, {
                        options: E,
                        value: null == i ? void 0 : i.value,
                        onChange: f,
                    }),
                ],
            }),
            (0, n.jsxs)(r.BJc, {
                gap: 16,
                children: [
                    (0, n.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: O.intl.string(O.t.oV10fv),
                    }),
                    (0, n.jsx)(r.fs1, {
                        value: u,
                        maxLength: b.u0,
                        onChange: v,
                        disabled: !d,
                    }),
                ],
            }),
        ],
    });
}
let v = function (e) {
    let { searchContext: t, rating: l, transitionState: r, onClose: v } = e,
        E = (0, d.L)({ getOptions: s.aK }),
        f = (0, d.L)({ getOptions: s.mX }),
        c = l === b.P0.BAD,
        { questionItems: g, questionTitles: _ } = a.useMemo(() => {
            let e = [],
                t = [];
            return (
                c && (e.push(E), t.push(O.intl.string(O.t.UyBQF7))),
                e.push(f),
                t.push(O.intl.string(O.t.LhMLCk)),
                {
                    questionItems: e,
                    questionTitles: t,
                }
            );
        }, [c, f, E]);
    a.useEffect(() => {
        (0, u.wU)({
            rating: l,
            searchContext: t,
        });
    }, [l, t]);
    let [p, h] = a.useState(0),
        S = 0 === p,
        U = p === g.length - 1,
        N = a.useMemo(() => {
            let e = g[p],
                t = _[p];
            return (0, n.jsx)(
                o,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(l);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = l[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({ title: t }, e),
            );
        }, [g, _, p]),
        D = a.useMemo(() => g.every(s.GP), [g]),
        L = a.useMemo(() => {
            let e = g[p];
            return (0, s.GP)(e);
        }, [g, p]),
        I = a.useCallback(() => {
            D &&
                ((0, u.uZ)({
                    rating: l,
                    searchContext: t,
                    unsatisfiedQuestionOption: c ? (0, s.De)(E) : null,
                    unsatisfiedQuestionText: c ? (0, s.mq)(E) : null,
                    describeSearchQuestionOption: (0, s.De)(f),
                    describeSearchQuestionText: (0, s.mq)(f),
                }),
                v());
        }, [D, l, t, c, E, f, v]),
        j = a.useCallback(() => {
            S ? v() : h(p - 1);
        }, [S, p, v]),
        C = a.useCallback(() => {
            h(p + 1);
        }, [p]),
        y = a.useMemo(() => {
            let e = [];
            return (
                S
                    ? e.push({
                          variant: "secondary",
                          text: O.intl.string(O.t["ETE/oC"]),
                          onClick: v,
                      })
                    : e.push({
                          variant: "secondary",
                          text: O.intl.string(O.t["13/7kX"]),
                          onClick: j,
                      }),
                U
                    ? e.push({
                          variant: "primary",
                          text: O.intl.string(O.t["4Zpxtl"]),
                          onClick: I,
                          disabled: !D,
                      })
                    : e.push({
                          variant: "primary",
                          text: O.intl.string(O.t.PDTjLN),
                          onClick: C,
                          disabled: !L,
                      }),
                e
            );
        }, [S, U, D, L, v, j, I, C]);
    return (0, n.jsx)(i.Modal, {
        title: O.intl.string(O.t.LRGdVy),
        actions: y,
        onClose: v,
        transitionState: r,
        children: N,
    });
};
