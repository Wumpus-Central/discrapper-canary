n.d(t, { default: () => g }), n(539854), n(388685);
var l = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    u = n(481060),
    s = n(367907),
    o = n(600164),
    b = n(313201),
    c = n(652399),
    d = n(257126),
    f = n(731220),
    O = n(981631),
    v = n(531578),
    _ = n(388032),
    E = n(925126);
function h(e) {
    let { title: t, options: n, selectedOption: r, freeformText: s, isFreeformEnabled: o, selectOption: b, onFreeformTextChange: c } = e,
        f = i.useMemo(() => n.map(d.Wo), [n]),
        O = i.useCallback(
            (e) => {
                let t = (0, d.xx)(e, n);
                null != t && b(t);
            },
            [b, n]
        ),
        _ = i.useCallback(() => {
            let e = n.find(d.A6);
            null != e && b(e);
        }, [n, b]);
    return (0, l.jsxs)('div', {
        className: E.question,
        children: [
            (0, l.jsx)(u.X6q, {
                variant: 'heading-lg/semibold',
                color: 'text-primary',
                className: E.questionTitle,
                children: t
            }),
            (0, l.jsx)(u.FXm, {
                options: f,
                value: null == r ? void 0 : r.value,
                onChange: O
            }),
            (0, l.jsx)(u.Kx8, {
                className: a()(E.freeformTextArea, { [E.freeformTextAreaDisabled]: !o }),
                value: s,
                maxLength: v.iF,
                onChange: c,
                onFocus: _
            })
        ]
    });
}
let g = function (e) {
    let { searchId: t, searchType: n, rating: r, transitionState: a, onClose: g } = e,
        p = (0, b.Dt)(),
        S = (0, f.e)({ getOptions: d.bM }),
        T = (0, f.e)({ getOptions: d.cc }),
        m = r === v.aZ.BAD,
        { questionItems: x, questionTitles: D } = i.useMemo(() => {
            let e = [],
                t = [];
            return (
                m && (e.push(S), t.push(_.intl.string(_.t.UyBQFx))),
                e.push(T),
                t.push(_.intl.string(_.t.LhMLCg)),
                {
                    questionItems: e,
                    questionTitles: t
                }
            );
        }, [m, T, S]);
    i.useEffect(() => {
        (0, c.Yc)({
            rating: r,
            searchId: t,
            searchType: n
        });
    }, [r, t, n]);
    let [I, N] = i.useState(0),
        y = i.useMemo(() => I === x.length - 1, [I, x.length]),
        C = i.useMemo(() => {
            let e = x[I],
                t = D[I];
            return (0, l.jsx)(
                h,
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
        }, [x, D, I]),
        k = i.useMemo(() => x.every(d.cp), [x]),
        j = i.useMemo(() => {
            let e = x[I];
            return (0, d.cp)(e);
        }, [x, I]),
        R = i.useCallback(() => {
            k &&
                (s.ZP.trackWithMetadata(O.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
                    rating: r,
                    unsatisfied_question_option: m ? (0, d.HO)(S) : null,
                    unsatisfied_question_text: m ? (0, d.sG)(S) : null,
                    describe_search_question_option: (0, d.HO)(T),
                    describe_search_question_text: (0, d.sG)(T)
                }),
                g());
        }, [S, m, k, g, r, T]),
        L = i.useCallback(() => {
            if (0 === I) return void g();
            N(I - 1);
        }, [I, g]),
        M = i.useCallback(() => {
            N(I + 1);
        }, [I]);
    return (0, l.jsxs)(u.Y0X, {
        size: u.CgR.MEDIUM,
        transitionState: a,
        'aria-labelledby': p,
        parentComponent: 'SearchResultsFeedbackModal',
        children: [
            (0, l.jsxs)(u.xBx, {
                separator: !1,
                className: E.header,
                children: [
                    (0, l.jsx)(u.X6q, {
                        id: p,
                        variant: 'heading-xl/semibold',
                        color: 'text-primary',
                        children: _.intl.string(_.t.LRGdV1)
                    }),
                    (0, l.jsx)(u.olH, { onClick: g })
                ]
            }),
            (0, l.jsx)(u.hzk, {
                className: E.content,
                children: C
            }),
            (0, l.jsxs)(u.mzw, {
                separator: !0,
                className: E.footer,
                direction: o.Z.Direction.HORIZONTAL,
                justify: o.Z.Justify.END,
                children: [
                    (0, l.jsx)(u.zxk, {
                        size: u.zxk.Sizes.MEDIUM,
                        look: u.zxk.Looks.FILLED,
                        color: u.zxk.Colors.PRIMARY,
                        onClick: L,
                        children: _.intl.string(_.t['13/7kZ'])
                    }),
                    y
                        ? (0, l.jsx)(u.zxk, {
                              size: u.zxk.Sizes.MEDIUM,
                              onClick: R,
                              disabled: !k,
                              children: _.intl.string(_.t['4Zpxtr'])
                          })
                        : (0, l.jsx)(u.zxk, {
                              size: u.zxk.Sizes.MEDIUM,
                              onClick: M,
                              disabled: !j,
                              children: _.intl.string(_.t.PDTjLC)
                          })
                ]
            })
        ]
    });
};
