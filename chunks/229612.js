(n.d(t, { default: () => g }), n(539854), n(388685));
var l = n(255367),
    a = n(73800),
    i = n(120356),
    r = n.n(i),
    u = n(481060),
    s = n(600164),
    b = n(313201),
    d = n(315322),
    o = n(257126),
    c = n(731220),
    f = n(531578),
    v = n(388032),
    O = n(925126);
function E(e) {
    let { title: t, options: n, selectedOption: i, freeformText: s, isFreeformEnabled: b, selectOption: d, onFreeformTextChange: c } = e,
        E = a.useMemo(() => n.map(o.Wo), [n]),
        g = a.useCallback(
            (e) => {
                let t = (0, o.xx)(e, n);
                null != t && d(t);
            },
            [d, n]
        );
    return (0, l.jsxs)('div', {
        className: O.question,
        children: [
            (0, l.jsx)(u.X6q, {
                variant: 'heading-lg/semibold',
                color: 'text-primary',
                className: O.questionTitle,
                children: t
            }),
            (0, l.jsx)(u.FXm, {
                options: E,
                value: null == i ? void 0 : i.value,
                onChange: g
            }),
            (0, l.jsx)(u.X6q, {
                variant: 'heading-lg/semibold',
                color: 'text-primary',
                className: O.textAreaTitle,
                children: v.intl.string(v.t.oV10fn)
            }),
            (0, l.jsx)(u.Kx8, {
                className: r()(O.freeformTextArea, { [O.freeformTextAreaDisabled]: !b }),
                value: s,
                maxLength: f.iF,
                onChange: c,
                disabled: !b
            })
        ]
    });
}
let g = function (e) {
    let { searchContext: t, rating: n, transitionState: i, onClose: r } = e,
        g = (0, b.Dt)(),
        _ = (0, c.e)({ getOptions: o.bM }),
        h = (0, c.e)({ getOptions: o.cc }),
        S = n === f.aZ.BAD,
        { questionItems: p, questionTitles: N } = a.useMemo(() => {
            let e = [],
                t = [];
            return (
                S && (e.push(_), t.push(v.intl.string(v.t.UyBQFx))),
                e.push(h),
                t.push(v.intl.string(v.t.LhMLCg)),
                {
                    questionItems: e,
                    questionTitles: t
                }
            );
        }, [S, h, _]);
    a.useEffect(() => {
        (0, d.Yc)({
            rating: n,
            searchContext: t
        });
    }, [n, t]);
    let [T, D] = a.useState(0),
        m = 0 === T,
        x = T === p.length - 1,
        C = a.useMemo(() => {
            let e = p[T],
                t = N[T];
            return (0, l.jsx)(
                E,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            l.forEach(function (t) {
                                var l;
                                ((l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = l));
                            }));
                    }
                    return e;
                })({ title: t }, e)
            );
        }, [p, N, T]),
        I = a.useMemo(() => p.every(o.cp), [p]),
        L = a.useMemo(() => {
            let e = p[T];
            return (0, o.cp)(e);
        }, [p, T]),
        M = a.useCallback(() => {
            I &&
                ((0, d.z4)({
                    rating: n,
                    searchContext: t,
                    unsatisfiedQuestionOption: S ? (0, o.HO)(_) : null,
                    unsatisfiedQuestionText: S ? (0, o.sG)(_) : null,
                    describeSearchQuestionOption: (0, o.HO)(h),
                    describeSearchQuestionText: (0, o.sG)(h)
                }),
                r());
        }, [I, n, t, S, _, h, r]),
        y = a.useCallback(() => {
            if (m) return void r();
            D(T - 1);
        }, [m, T, r]),
        A = a.useCallback(() => {
            D(T + 1);
        }, [T]);
    return (0, l.jsxs)(u.Y0X, {
        size: u.CgR.MEDIUM,
        transitionState: i,
        'aria-labelledby': g,
        parentComponent: 'SearchResultsFeedbackModal',
        children: [
            (0, l.jsxs)(u.xBx, {
                separator: !1,
                className: O.header,
                children: [
                    (0, l.jsx)(u.X6q, {
                        id: g,
                        variant: 'heading-xl/semibold',
                        color: 'text-primary',
                        children: v.intl.string(v.t.LRGdV1)
                    }),
                    (0, l.jsx)(u.olH, { onClick: r })
                ]
            }),
            (0, l.jsx)(u.hzk, {
                className: O.content,
                children: C
            }),
            (0, l.jsxs)(u.mzw, {
                separator: !0,
                className: O.footer,
                direction: s.Z.Direction.HORIZONTAL,
                justify: s.Z.Justify.END,
                children: [
                    (0, l.jsx)(u.zxk, {
                        variant: 'secondary',
                        text: m ? v.intl.string(v.t['ETE/oK']) : v.intl.string(v.t['13/7kZ']),
                        onClick: y
                    }),
                    x
                        ? (0, l.jsx)(u.zxk, {
                              variant: 'primary',
                              text: v.intl.string(v.t['4Zpxtr']),
                              onClick: M,
                              disabled: !I
                          })
                        : (0, l.jsx)(u.zxk, {
                              variant: 'primary',
                              text: v.intl.string(v.t.PDTjLC),
                              onClick: A,
                              disabled: !L
                          })
                ]
            })
        ]
    });
};
