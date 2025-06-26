r.d(t, { Z: () => O }), r(388685), r(35282), r(642613), r(539854);
var n = r(255367),
    l = r(73800),
    a = r(120356),
    o = r.n(a),
    i = r(913527),
    c = r.n(i),
    s = r(481060),
    u = r(493773),
    d = r(285888),
    p = r(388032),
    h = r(65546);
let f = c()().localeData().months(),
    v = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: ''.concat(e + 1)
    })),
    b = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: f[e]
    })),
    m = /[a-zA-Z0-9]/;
function y(e) {
    let { options: t, selectOption: r, children: a } = e,
        [o, i] = l.useState('');
    l.useEffect(() => {
        if ('' !== o) {
            let e = setTimeout(() => i(''), 1000);
            return () => clearTimeout(e);
        }
    }, [o, i]);
    let c = l.useCallback(
        (e) => {
            if (m.test(e.key)) {
                let n = ''.concat(o).concat(e.key.toLowerCase()),
                    l = t.find((e) => e.label.toLowerCase().startsWith(n));
                null != l && r(l.value), i(n);
            }
        },
        [r, i, o, t]
    );
    return (0, n.jsx)('div', {
        onKeyDown: c,
        children: a
    });
}
function g() {
    let e = c()().localeData().longDateFormat('L'),
        t = e.indexOf('D'),
        r = e.indexOf('M'),
        n = e.indexOf('Y');
    return (
        (-1 === t || -1 === r || -1 === n) && ((t = 0), (r = 1), (n = 2)),
        [
            {
                index: t,
                type: 'day'
            },
            {
                index: r,
                type: 'month'
            },
            {
                index: n,
                type: 'year'
            }
        ].sort((e, t) => (e.index < t.index ? -1 : 1))
    );
}
let O = l.forwardRef(function (e, t) {
    let { value: r, wrapperClassName: a, onChange: i, onPopulated: f, error: m, autoFocus: O, required: E, onFocus: x, onBlur: _, name: k, labelTag: A } = e,
        {
            day: j,
            setDay: T,
            month: w,
            setMonth: C,
            year: M,
            setYear: R
        } = (function (e) {
            let t = null,
                r = null,
                n = null;
            null != e && ((t = e.date()), (r = e.month() + 1), (n = e.year()));
            let [a, o] = l.useState(t),
                [i, c] = l.useState(r),
                [s, u] = l.useState(n);
            return {
                day: a,
                setDay: o,
                month: i,
                setMonth: c,
                year: s,
                setYear: u
            };
        })(r),
        S = l.useMemo(() => (null != j && null != w && null != M ? c()(''.concat(j, '/').concat(w, '/').concat(M), 'DD/MM/YYYY') : null), [j, w, M]);
    l.useEffect(() => {
        i((null == S ? void 0 : S.isValid()) ? S : null);
    }, [S, i]);
    let N = m;
    null == S || S.isValid() || (N = p.intl.string(p.t.udnqh4));
    let P = (function () {
            let e = new Date().getFullYear(),
                t = l.useRef(
                    Array.from(Array(150).keys()).map((t) => ({
                        value: e - t - 3,
                        label: ''.concat(e - t - 3)
                    }))
                );
            return (
                l.useEffect(() => {
                    t.current = Array.from(Array(150).keys()).map((t) => ({
                        value: e - t - 3,
                        label: ''.concat(e - t - 3)
                    }));
                }, [e]),
                t.current
            );
        })(),
        [G, D] = l.useState(O ? 0 : -1),
        F = l.useRef(null),
        Z = l.useRef(null),
        I = l.useRef(null),
        U = l.useMemo(g, []),
        Y = l.useCallback(() => {
            var e, t, r, n;
            switch (null == (e = U[G]) ? void 0 : e.type) {
                case 'day':
                    null == (t = F.current) || t.focus();
                    break;
                case 'month':
                    null == (r = Z.current) || r.focus();
                    break;
                case 'year':
                    null == (n = I.current) || n.focus();
            }
        }, [G, F, Z, I, U]);
    (0, u.ZP)(() => {
        let e = setTimeout(Y, 500);
        return () => {
            clearTimeout(e);
        };
    });
    let V = {
            onPopulated: f,
            sortedInputs: U
        },
        B = l.useRef(V);
    l.useEffect(() => {
        B.current = V;
    }),
        l.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = B.current;
            if (G >= t.length) {
                null == e || e();
                return;
            }
            Y();
        }, [G, Y]);
    let W = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = U[e];
        switch (t) {
            case 'day':
                W.push({
                    key: 'day',
                    input: (0, n.jsx)(y, {
                        options: v,
                        selectOption: T,
                        children: (0, n.jsx)(d.Z, {
                            ref: F,
                            className: h.__invalid_inputDay,
                            'aria-label': p.intl.string(p.t.Voklra),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, n.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.intl.string(p.t.Voklra)
                            }),
                            options: v,
                            value: j,
                            onChange: (t) => {
                                let { value: r } = t;
                                T(r), D(e + 1);
                            },
                            maxMenuHeight: 215,
                            onFocus: () => (null == x ? void 0 : x(''.concat(k, '_').concat(t))),
                            onBlur: () => (null == _ ? void 0 : _(''.concat(k, '_').concat(t)))
                        })
                    })
                });
                break;
            case 'month':
                W.push({
                    key: 'month',
                    input: (0, n.jsx)(y, {
                        options: b,
                        selectOption: C,
                        children: (0, n.jsx)(d.Z, {
                            ref: Z,
                            className: h.__invalid_inputMonth,
                            'aria-label': p.intl.string(p.t.UDlN8f),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, n.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.intl.string(p.t.UDlN8f)
                            }),
                            options: b,
                            value: w,
                            onChange: (t) => {
                                let { value: r } = t;
                                C(r), D(e + 1);
                            },
                            maxMenuHeight: 215,
                            onFocus: () => (null == x ? void 0 : x(''.concat(k, '_').concat(t))),
                            onBlur: () => (null == _ ? void 0 : _(''.concat(k, '_').concat(t)))
                        })
                    })
                });
                break;
            case 'year':
                W.push({
                    key: 'year',
                    input: (0, n.jsx)(y, {
                        options: P,
                        selectOption: R,
                        children: (0, n.jsx)(d.Z, {
                            ref: I,
                            className: h.__invalid_inputYear,
                            'aria-label': p.intl.string(p.t.ZWr5WF),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, n.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.intl.string(p.t.ZWr5WF)
                            }),
                            options: P,
                            value: M,
                            onChange: (t) => {
                                let { value: r } = t;
                                R(r), D(e + 1);
                            },
                            maxMenuHeight: 215,
                            onFocus: () => (null == x ? void 0 : x(''.concat(k, '_').concat(t))),
                            onBlur: () => (null == _ ? void 0 : _(''.concat(k, '_').concat(t)))
                        })
                    })
                });
        }
    }
    return (0, n.jsxs)('fieldset', {
        className: o()(h.container, a),
        children: [
            (0, n.jsx)(s.vwX, {
                tag: null != A ? A : 'legend',
                required: E,
                error: N,
                children: p.intl.string(p.t.xNpFJy)
            }),
            (0, n.jsx)('div', {
                className: h.inputs,
                children: W.map((e, t) => {
                    let { key: r, input: l } = e;
                    return (0, n.jsx)(
                        'div',
                        {
                            tabIndex: t + 1,
                            className: h[r],
                            children: l
                        },
                        r
                    );
                })
            })
        ]
    });
});
