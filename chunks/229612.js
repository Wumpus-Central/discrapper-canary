n.d(e, { default: () => O }), n(539854), n(388685);
var l = n(54381),
    a = n(473749),
    i = n(793030),
    r = n(481060),
    u = n(315322),
    s = n(257126),
    b = n(124653),
    d = n(531578),
    o = n(388032);
function v(t) {
    let {
            title: e,
            options: n,
            selectedOption: i,
            freeformText: u,
            isFreeformEnabled: b,
            selectOption: v,
            onFreeformTextChange: O,
        } = t,
        E = a.useMemo(() => n.map(s.Wo), [n]),
        f = a.useCallback(
            (t) => {
                let e = (0, s.xx)(t, n);
                null != e && v(e);
            },
            [v, n],
        );
    return (0, l.jsxs)(r.Kqy, {
        gap: 24,
        children: [
            (0, l.jsxs)(r.Kqy, {
                gap: 16,
                children: [
                    (0, l.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: e,
                    }),
                    (0, l.jsx)(r.FXm, {
                        options: E,
                        value: null == i ? void 0 : i.value,
                        onChange: f,
                    }),
                ],
            }),
            (0, l.jsxs)(r.Kqy, {
                gap: 16,
                children: [
                    (0, l.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: o.intl.string(o.t.oV10fv),
                    }),
                    (0, l.jsx)(r.Kx8, {
                        value: u,
                        maxLength: d.iF,
                        onChange: O,
                        disabled: !b,
                    }),
                ],
            }),
        ],
    });
}
let O = function (t) {
    let { searchContext: e, rating: n, transitionState: r, onClose: O } = t,
        E = (0, b.e)({ getOptions: s.bM }),
        f = (0, b.e)({ getOptions: s.cc }),
        c = n === d.aZ.BAD,
        { questionItems: g, questionTitles: _ } = a.useMemo(() => {
            let t = [],
                e = [];
            return (
                c && (t.push(E), e.push(o.intl.string(o.t.UyBQF7))),
                t.push(f),
                e.push(o.intl.string(o.t.LhMLCk)),
                {
                    questionItems: t,
                    questionTitles: e,
                }
            );
        }, [c, f, E]);
    a.useEffect(() => {
        (0, u.Yc)({
            rating: n,
            searchContext: e,
        });
    }, [n, e]);
    let [h, S] = a.useState(0),
        p = 0 === h,
        N = h === g.length - 1,
        D = a.useMemo(() => {
            let t = g[h],
                e = _[h];
            return (0, l.jsx)(
                v,
                (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                }),
                            )),
                            l.forEach(function (e) {
                                var l;
                                (l = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = l);
                            });
                    }
                    return t;
                })({ title: e }, t),
            );
        }, [g, _, h]),
        L = a.useMemo(() => g.every(s.cp), [g]),
        I = a.useMemo(() => {
            let t = g[h];
            return (0, s.cp)(t);
        }, [g, h]),
        C = a.useCallback(() => {
            L &&
                ((0, u.z4)({
                    rating: n,
                    searchContext: e,
                    unsatisfiedQuestionOption: c ? (0, s.HO)(E) : null,
                    unsatisfiedQuestionText: c ? (0, s.sG)(E) : null,
                    describeSearchQuestionOption: (0, s.HO)(f),
                    describeSearchQuestionText: (0, s.sG)(f),
                }),
                O());
        }, [L, n, e, c, E, f, O]),
        T = a.useCallback(() => {
            if (p) return void O();
            S(h - 1);
        }, [p, h, O]),
        M = a.useCallback(() => {
            S(h + 1);
        }, [h]),
        y = a.useMemo(() => {
            let t = [];
            return (
                p
                    ? t.push({
                          variant: "secondary",
                          text: o.intl.string(o.t["ETE/oC"]),
                          onClick: O,
                      })
                    : t.push({
                          variant: "secondary",
                          text: o.intl.string(o.t["13/7kX"]),
                          onClick: T,
                      }),
                N
                    ? t.push({
                          variant: "primary",
                          text: o.intl.string(o.t["4Zpxtl"]),
                          onClick: C,
                          disabled: !L,
                      })
                    : t.push({
                          variant: "primary",
                          text: o.intl.string(o.t.PDTjLN),
                          onClick: M,
                          disabled: !I,
                      }),
                t
            );
        }, [p, N, L, I, O, T, C, M]);
    return (0, l.jsx)(i.Modal, {
        title: o.intl.string(o.t.LRGdVy),
        actions: y,
        onClose: O,
        transitionState: r,
        children: D,
    });
};
