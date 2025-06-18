n.d(t, { default: () => h }), n(539854), n(388685);
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
    O = n(388032),
    v = n(925126);
function E(e) {
    let { title: t, options: n, selectedOption: r, freeformText: s, isFreeformEnabled: o, selectOption: b, onFreeformTextChange: d } = e,
        O = i.useMemo(() => n.map(c.Wo), [n]),
        E = i.useCallback(
            (e) => {
                let t = (0, c.xx)(e, n);
                null != t && b(t);
            },
            [b, n]
        ),
        h = i.useCallback(() => {
            let e = n.find(c.A6);
            null != e && b(e);
        }, [n, b]);
    return (0, l.jsxs)('div', {
        className: v.question,
        children: [
            (0, l.jsx)(u.X6q, {
                variant: 'heading-lg/semibold',
                color: 'text-primary',
                className: v.questionTitle,
                children: t
            }),
            (0, l.jsx)(u.FXm, {
                options: O,
                value: null == r ? void 0 : r.value,
                onChange: E
            }),
            (0, l.jsx)(u.Kx8, {
                className: a()(v.freeformTextArea, { [v.freeformTextAreaDisabled]: !o }),
                value: s,
                maxLength: f.iF,
                onChange: d,
                onFocus: h
            })
        ]
    });
}
let h = function (e) {
    let { searchId: t, searchType: n, rating: r, transitionState: a, onClose: h } = e,
        g = (0, o.Dt)(),
        _ = (0, d.e)({ getOptions: c.bM }),
        p = (0, d.e)({ getOptions: c.cc }),
        S = r === f.aZ.BAD,
        { questionItems: m, questionTitles: T } = i.useMemo(() => {
            let e = [],
                t = [];
            return (
                S && (e.push(_), t.push(O.intl.string(O.t.UyBQFx))),
                e.push(p),
                t.push(O.intl.string(O.t.LhMLCg)),
                {
                    questionItems: e,
                    questionTitles: t
                }
            );
        }, [S, p, _]);
    i.useEffect(() => {
        (0, b.Yc)({
            rating: r,
            searchId: t,
            searchType: n
        });
    }, [r, t, n]);
    let [x, N] = i.useState(0),
        y = i.useMemo(() => x === m.length - 1, [x, m.length]),
        D = i.useMemo(() => {
            let e = m[x],
                t = T[x];
            return (0, l.jsx)(
                E,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({ title: t }, e)
            );
        }, [m, T, x]),
        I = i.useMemo(() => m.every(c.cp), [m]),
        C = i.useMemo(() => {
            let e = m[x];
            return (0, c.cp)(e);
        }, [m, x]),
        k = i.useCallback(() => {
            I &&
                ((0, b.z4)({
                    rating: r,
                    searchId: t,
                    searchType: n,
                    unsatisfiedQuestionOption: S ? (0, c.HO)(_) : null,
                    unsatisfiedQuestionText: S ? (0, c.sG)(_) : null,
                    describeSearchQuestionOption: (0, c.HO)(p),
                    describeSearchQuestionText: (0, c.sG)(p)
                }),
                h());
        }, [_, S, I, h, r, p, t, n]),
        j = i.useCallback(() => {
            if (0 === x) return void h();
            N(x - 1);
        }, [x, h]),
        L = i.useCallback(() => {
            N(x + 1);
        }, [x]);
    return (0, l.jsxs)(u.Y0X, {
        size: u.CgR.MEDIUM,
        transitionState: a,
        'aria-labelledby': g,
        parentComponent: 'SearchResultsFeedbackModal',
        children: [
            (0, l.jsxs)(u.xBx, {
                separator: !1,
                className: v.header,
                children: [
                    (0, l.jsx)(u.X6q, {
                        id: g,
                        variant: 'heading-xl/semibold',
                        color: 'text-primary',
                        children: O.intl.string(O.t.LRGdV1)
                    }),
                    (0, l.jsx)(u.olH, { onClick: h })
                ]
            }),
            (0, l.jsx)(u.hzk, {
                className: v.content,
                children: D
            }),
            (0, l.jsxs)(u.mzw, {
                separator: !0,
                className: v.footer,
                direction: s.Z.Direction.HORIZONTAL,
                justify: s.Z.Justify.END,
                children: [
                    (0, l.jsx)(u.zxk, {
                        size: u.zxk.Sizes.MEDIUM,
                        look: u.zxk.Looks.FILLED,
                        color: u.zxk.Colors.PRIMARY,
                        onClick: j,
                        children: O.intl.string(O.t['13/7kZ'])
                    }),
                    y
                        ? (0, l.jsx)(u.zxk, {
                              size: u.zxk.Sizes.MEDIUM,
                              onClick: k,
                              disabled: !I,
                              children: O.intl.string(O.t['4Zpxtr'])
                          })
                        : (0, l.jsx)(u.zxk, {
                              size: u.zxk.Sizes.MEDIUM,
                              onClick: L,
                              disabled: !C,
                              children: O.intl.string(O.t.PDTjLC)
                          })
                ]
            })
        ]
    });
};
