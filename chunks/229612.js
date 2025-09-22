n.d(e, { default: () => f }), n(539854), n(388685);
var l = n(951288),
    a = n(647438),
    i = n(481060),
    r = n(600164),
    u = n(313201),
    s = n(315322),
    b = n(257126),
    d = n(731220),
    o = n(531578),
    O = n(388032),
    v = n(485525);
function c(t) {
    let {
            title: e,
            options: n,
            selectedOption: r,
            freeformText: u,
            isFreeformEnabled: s,
            selectOption: d,
            onFreeformTextChange: v,
        } = t,
        c = a.useMemo(() => n.map(b.Wo), [n]),
        f = a.useCallback(
            (t) => {
                let e = (0, b.xx)(t, n);
                null != e && d(e);
            },
            [d, n],
        );
    return (0, l.jsxs)(i.Kqy, {
        gap: 24,
        children: [
            (0, l.jsxs)(i.Kqy, {
                gap: 16,
                children: [
                    (0, l.jsx)(i.X6q, {
                        variant: "heading-lg/semibold",
                        color: "text-primary",
                        children: e,
                    }),
                    (0, l.jsx)(i.FXm, {
                        options: c,
                        value: null == r ? void 0 : r.value,
                        onChange: f,
                    }),
                ],
            }),
            (0, l.jsxs)(i.Kqy, {
                gap: 16,
                children: [
                    (0, l.jsx)(i.X6q, {
                        variant: "heading-lg/semibold",
                        color: "text-primary",
                        children: O.intl.string(O.t.oV10fn),
                    }),
                    (0, l.jsx)(i.Kx8, {
                        value: u,
                        maxLength: o.iF,
                        onChange: v,
                        disabled: !s,
                    }),
                ],
            }),
        ],
    });
}
let f = function (t) {
    let { searchContext: e, rating: n, transitionState: f, onClose: E } = t,
        g = (0, u.Dt)(),
        _ = (0, d.e)({ getOptions: b.bM }),
        h = (0, d.e)({ getOptions: b.cc }),
        p = n === o.aZ.BAD,
        { questionItems: S, questionTitles: N } = a.useMemo(() => {
            let t = [],
                e = [];
            return (
                p && (t.push(_), e.push(O.intl.string(O.t.UyBQFx))),
                t.push(h),
                e.push(O.intl.string(O.t.LhMLCg)),
                {
                    questionItems: t,
                    questionTitles: e,
                }
            );
        }, [p, h, _]);
    a.useEffect(() => {
        (0, s.Yc)({
            rating: n,
            searchContext: e,
        });
    }, [n, e]);
    let [D, I] = a.useState(0),
        C = 0 === D,
        T = D === S.length - 1,
        L = a.useMemo(() => {
            let t = S[D],
                e = N[D];
            return (0, l.jsx)(
                c,
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
        }, [S, N, D]),
        M = a.useMemo(() => S.every(b.cp), [S]),
        y = a.useMemo(() => {
            let t = S[D];
            return (0, b.cp)(t);
        }, [S, D]),
        x = a.useCallback(() => {
            M &&
                ((0, s.z4)({
                    rating: n,
                    searchContext: e,
                    unsatisfiedQuestionOption: p ? (0, b.HO)(_) : null,
                    unsatisfiedQuestionText: p ? (0, b.sG)(_) : null,
                    describeSearchQuestionOption: (0, b.HO)(h),
                    describeSearchQuestionText: (0, b.sG)(h),
                }),
                E());
        }, [M, n, e, p, _, h, E]),
        m = a.useCallback(() => {
            if (C) return void E();
            I(D - 1);
        }, [C, D, E]),
        R = a.useCallback(() => {
            I(D + 1);
        }, [D]);
    return (0, l.jsxs)(i.Y0X, {
        size: i.CgR.MEDIUM,
        transitionState: f,
        "aria-labelledby": g,
        parentComponent: "SearchResultsFeedbackModal",
        children: [
            (0, l.jsxs)(i.xBx, {
                separator: !1,
                className: v.header,
                children: [
                    (0, l.jsx)(i.X6q, {
                        id: g,
                        variant: "heading-xl/semibold",
                        color: "text-primary",
                        children: O.intl.string(O.t.LRGdV1),
                    }),
                    (0, l.jsx)(i.olH, { onClick: E }),
                ],
            }),
            (0, l.jsx)(i.hzk, {
                className: v.content,
                children: L,
            }),
            (0, l.jsxs)(i.mzw, {
                separator: !0,
                className: v.footer,
                direction: r.Z.Direction.HORIZONTAL,
                justify: r.Z.Justify.END,
                children: [
                    (0, l.jsx)(i.zxk, {
                        variant: "secondary",
                        text: C ? O.intl.string(O.t["ETE/oK"]) : O.intl.string(O.t["13/7kZ"]),
                        onClick: m,
                    }),
                    T
                        ? (0, l.jsx)(i.zxk, {
                              variant: "primary",
                              text: O.intl.string(O.t["4Zpxtr"]),
                              onClick: x,
                              disabled: !M,
                          })
                        : (0, l.jsx)(i.zxk, {
                              variant: "primary",
                              text: O.intl.string(O.t.PDTjLC),
                              onClick: R,
                              disabled: !y,
                          }),
                ],
            }),
        ],
    });
};
