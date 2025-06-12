n.d(t, { default: () => h }), n(539854);
var l = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    u = n(481060),
    s = n(367907),
    o = n(600164),
    b = n(313201),
    c = n(257126),
    d = n(731220),
    f = n(981631),
    O = n(531578),
    v = n(388032),
    _ = n(925126);
function E(e) {
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
}
function g(e) {
    let { title: t, options: n, selectedOption: r, freeformText: s, isFreeformEnabled: o, selectOption: b, onFreeformTextChange: d } = e,
        f = i.useMemo(() => n.map(c.Wo), [n]),
        v = i.useCallback(
            (e) => {
                let t = (0, c.xx)(e, n);
                null != t && b(t);
            },
            [b, n]
        ),
        E = i.useCallback(() => {
            let e = n.find(c.A6);
            null != e && b(e);
        }, [n, b]);
    return (0, l.jsxs)('div', {
        className: _.question,
        children: [
            (0, l.jsx)(u.X6q, {
                variant: 'heading-lg/semibold',
                color: 'text-primary',
                className: _.questionTitle,
                children: t
            }),
            (0, l.jsx)(u.FXm, {
                options: f,
                value: null == r ? void 0 : r.value,
                onChange: v
            }),
            (0, l.jsx)(u.Kx8, {
                className: a()(_.freeformTextArea, { [_.freeformTextAreaDisabled]: !o }),
                value: s,
                maxLength: O.iF,
                onChange: d,
                onFocus: E
            })
        ]
    });
}
let h = function (e) {
    let { rating: t, transitionState: n, onClose: r } = e,
        a = (0, b.Dt)(),
        h = (0, d.e)({ getOptions: c.bM }),
        p = (0, d.e)({ getOptions: c.cc }),
        S = t === O.aZ.BAD,
        x = i.useMemo(() => {
            let e = [];
            return S && e.push(h), e.push(p), e.every(c.cp);
        }, [S, p, h]),
        T = i.useCallback(() => {
            x &&
                (s.ZP.trackWithMetadata(f.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
                    rating: t,
                    unsatisfied_question_option: S ? (0, c.HO)(h) : null,
                    unsatisfied_question_text: S ? (0, c.sG)(h) : null,
                    describe_search_question_option: (0, c.HO)(p),
                    describe_search_question_text: (0, c.sG)(p)
                }),
                r());
        }, [h, S, x, r, t, p]);
    return (0, l.jsxs)(u.Y0X, {
        size: u.CgR.MEDIUM,
        transitionState: n,
        'aria-labelledby': a,
        parentComponent: 'SearchResultsFeedbackModal',
        children: [
            (0, l.jsxs)(u.xBx, {
                separator: !1,
                className: _.header,
                children: [
                    (0, l.jsx)(u.X6q, {
                        id: a,
                        variant: 'heading-xl/semibold',
                        color: 'text-primary',
                        children: v.intl.string(v.t.LRGdV1)
                    }),
                    (0, l.jsx)(u.olH, { onClick: r })
                ]
            }),
            (0, l.jsxs)(u.hzk, {
                className: _.content,
                children: [S && (0, l.jsx)(g, E({ title: v.intl.string(v.t.UyBQFx) }, h)), (0, l.jsx)(g, E({ title: v.intl.string(v.t.LhMLCg) }, p))]
            }),
            (0, l.jsxs)(u.mzw, {
                separator: !0,
                className: _.footer,
                direction: o.Z.Direction.HORIZONTAL,
                justify: o.Z.Justify.END,
                children: [
                    (0, l.jsx)(u.zxk, {
                        size: u.zxk.Sizes.MEDIUM,
                        look: u.zxk.Looks.FILLED,
                        color: u.zxk.Colors.PRIMARY,
                        onClick: r,
                        children: v.intl.string(v.t['13/7kZ'])
                    }),
                    (0, l.jsx)(u.zxk, {
                        size: u.zxk.Sizes.MEDIUM,
                        onClick: T,
                        disabled: !x,
                        children: v.intl.string(v.t['4Zpxtr'])
                    })
                ]
            })
        ]
    });
};
