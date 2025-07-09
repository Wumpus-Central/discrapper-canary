(n.d(t, { default: () => E }), n(539854), n(388685));
var l = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    u = n(481060),
    s = n(600164),
    o = n(313201),
    b = n(652399),
    c = n(257126),
    d = n(731220),
    f = n(531578),
    v = n(388032),
    O = n(925126);
function g(e) {
    let { title: t, options: n, selectedOption: r, freeformText: s, isFreeformEnabled: o, selectOption: b, onFreeformTextChange: d } = e,
        g = i.useMemo(() => n.map(c.Wo), [n]),
        E = i.useCallback(
            (e) => {
                let t = (0, c.xx)(e, n);
                null != t && b(t);
            },
            [b, n]
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
                options: g,
                value: null == r ? void 0 : r.value,
                onChange: E
            }),
            (0, l.jsx)(u.X6q, {
                variant: 'heading-lg/semibold',
                color: 'text-primary',
                className: O.textAreaTitle,
                children: v.intl.string(v.t.oV10fn)
            }),
            (0, l.jsx)(u.Kx8, {
                className: a()(O.freeformTextArea, { [O.freeformTextAreaDisabled]: !o }),
                value: s,
                maxLength: f.iF,
                onChange: d,
                disabled: !o
            })
        ]
    });
}
let E = function (e) {
    let { searchId: t, searchType: n, rating: r, transitionState: a, onClose: E } = e,
        _ = (0, o.Dt)(),
        h = (0, d.e)({ getOptions: c.bM }),
        p = (0, d.e)({ getOptions: c.cc }),
        m = r === f.aZ.BAD,
        { questionItems: T, questionTitles: x } = i.useMemo(() => {
            let e = [],
                t = [];
            return (
                m && (e.push(h), t.push(v.intl.string(v.t.UyBQFx))),
                e.push(p),
                t.push(v.intl.string(v.t.LhMLCg)),
                {
                    questionItems: e,
                    questionTitles: t
                }
            );
        }, [m, p, h]);
    i.useEffect(() => {
        (0, b.Yc)({
            rating: r,
            searchId: t,
            searchType: n
        });
    }, [r, t, n]);
    let [S, y] = i.useState(0),
        N = 0 === S,
        C = S === T.length - 1,
        D = i.useMemo(() => {
            let e = T[S],
                t = x[S];
            return (0, l.jsx)(
                g,
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
        }, [T, x, S]),
        I = i.useMemo(() => T.every(c.cp), [T]),
        j = i.useMemo(() => {
            let e = T[S];
            return (0, c.cp)(e);
        }, [T, S]),
        k = i.useCallback(() => {
            I &&
                ((0, b.z4)({
                    rating: r,
                    searchId: t,
                    searchType: n,
                    unsatisfiedQuestionOption: m ? (0, c.HO)(h) : null,
                    unsatisfiedQuestionText: m ? (0, c.sG)(h) : null,
                    describeSearchQuestionOption: (0, c.HO)(p),
                    describeSearchQuestionText: (0, c.sG)(p)
                }),
                E());
        }, [h, m, I, E, r, p, t, n]),
        P = i.useCallback(() => {
            if (N) return void E();
            y(S - 1);
        }, [N, S, E]),
        R = i.useCallback(() => {
            y(S + 1);
        }, [S]);
    return (0, l.jsxs)(u.Y0X, {
        size: u.CgR.MEDIUM,
        transitionState: a,
        'aria-labelledby': _,
        parentComponent: 'SearchResultsFeedbackModal',
        children: [
            (0, l.jsxs)(u.xBx, {
                separator: !1,
                className: O.header,
                children: [
                    (0, l.jsx)(u.X6q, {
                        id: _,
                        variant: 'heading-xl/semibold',
                        color: 'text-primary',
                        children: v.intl.string(v.t.LRGdV1)
                    }),
                    (0, l.jsx)(u.olH, { onClick: E })
                ]
            }),
            (0, l.jsx)(u.hzk, {
                className: O.content,
                children: D
            }),
            (0, l.jsxs)(u.mzw, {
                separator: !0,
                className: O.footer,
                direction: s.Z.Direction.HORIZONTAL,
                justify: s.Z.Justify.END,
                children: [
                    (0, l.jsx)(u.zxk, {
                        variant: 'secondary',
                        text: N ? v.intl.string(v.t['ETE/oK']) : v.intl.string(v.t['13/7kZ']),
                        onClick: P
                    }),
                    C
                        ? (0, l.jsx)(u.zxk, {
                              variant: 'primary',
                              text: v.intl.string(v.t['4Zpxtr']),
                              onClick: k,
                              disabled: !I
                          })
                        : (0, l.jsx)(u.zxk, {
                              variant: 'primary',
                              text: v.intl.string(v.t.PDTjLC),
                              onClick: R,
                              disabled: !j
                          })
                ]
            })
        ]
    });
};
