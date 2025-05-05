r.d(t, { Z: () => O }), r(388685), r(35282), r(642613), r(539854);
var n = r(255367),
    a = r(73800),
    l = r(120356),
    o = r.n(l),
    i = r(913527),
    s = r.n(i),
    c = r(481060),
    u = r(493773),
    d = r(285888),
    p = r(388032),
    h = r(65546);
let f = s()().localeData().months(),
    b = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: ''.concat(e + 1)
    })),
    v = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: f[e]
    })),
    m = /[a-zA-Z0-9]/;
function y(e) {
    let { options: t, selectOption: r, children: l } = e,
        [o, i] = a.useState('');
    a.useEffect(() => {
        if ('' !== o) {
            let e = setTimeout(() => i(''), 1000);
            return () => clearTimeout(e);
        }
    }, [o, i]);
    let s = a.useCallback(
        (e) => {
            if (m.test(e.key)) {
                let n = ''.concat(o).concat(e.key.toLowerCase()),
                    a = t.find((e) => e.label.toLowerCase().startsWith(n));
                null != a && r(a.value), i(n);
            }
        },
        [r, i, o, t]
    );
    return (0, n.jsx)('div', {
        onKeyDown: s,
        children: l
    });
}
function g() {
    let e = s()().localeData().longDateFormat('L'),
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
let O = a.forwardRef(function (e, t) {
    let { value: r, wrapperClassName: l, onChange: i, onPopulated: f, error: m, autoFocus: O, required: E } = e,
        {
            day: x,
            setDay: _,
            month: k,
            setMonth: A,
            year: j,
            setYear: T
        } = (function (e) {
            let t = null,
                r = null,
                n = null;
            null != e && ((t = e.date()), (r = e.month() + 1), (n = e.year()));
            let [l, o] = a.useState(t),
                [i, s] = a.useState(r),
                [c, u] = a.useState(n);
            return {
                day: l,
                setDay: o,
                month: i,
                setMonth: s,
                year: c,
                setYear: u
            };
        })(r),
        C = a.useMemo(() => (null != x && null != k && null != j ? s()(''.concat(x, '/').concat(k, '/').concat(j), 'DD/MM/YYYY') : null), [x, k, j]);
    a.useEffect(() => {
        i((null == C ? void 0 : C.isValid()) ? C : null);
    }, [C, i]);
    let M = m;
    null == C || C.isValid() || (M = p.intl.string(p.t.udnqh4));
    let w = (function () {
            let e = new Date().getFullYear(),
                t = a.useRef(
                    Array.from(Array(150).keys()).map((t) => ({
                        value: e - t - 3,
                        label: ''.concat(e - t - 3)
                    }))
                );
            return (
                a.useEffect(() => {
                    t.current = Array.from(Array(150).keys()).map((t) => ({
                        value: e - t - 3,
                        label: ''.concat(e - t - 3)
                    }));
                }, [e]),
                t.current
            );
        })(),
        [R, S] = a.useState(O ? 0 : -1),
        N = a.useRef(null),
        P = a.useRef(null),
        G = a.useRef(null),
        D = a.useMemo(g, []),
        Z = a.useCallback(() => {
            var e, t, r, n;
            switch (null == (e = D[R]) ? void 0 : e.type) {
                case 'day':
                    null == (t = N.current) || t.focus();
                    break;
                case 'month':
                    null == (r = P.current) || r.focus();
                    break;
                case 'year':
                    null == (n = G.current) || n.focus();
            }
        }, [R, N, P, G, D]);
    (0, u.ZP)(() => {
        let e = setTimeout(Z, 500);
        return () => {
            clearTimeout(e);
        };
    });
    let I = {
            onPopulated: f,
            sortedInputs: D
        },
        F = a.useRef(I);
    a.useEffect(() => {
        F.current = I;
    }),
        a.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = F.current;
            if (R >= t.length) {
                null == e || e();
                return;
            }
            Z();
        }, [R, Z]);
    let U = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = D[e];
        switch (t) {
            case 'day':
                U.push({
                    key: 'day',
                    input: (0, n.jsx)(y, {
                        options: b,
                        selectOption: _,
                        children: (0, n.jsx)(d.Z, {
                            ref: N,
                            className: h.__invalid_inputDay,
                            'aria-label': p.intl.string(p.t.Voklra),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, n.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.intl.string(p.t.Voklra)
                            }),
                            options: b,
                            value: x,
                            onChange: (t) => {
                                let { value: r } = t;
                                _(r), S(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'month':
                U.push({
                    key: 'month',
                    input: (0, n.jsx)(y, {
                        options: v,
                        selectOption: A,
                        children: (0, n.jsx)(d.Z, {
                            ref: P,
                            className: h.__invalid_inputMonth,
                            'aria-label': p.intl.string(p.t.UDlN8f),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, n.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.intl.string(p.t.UDlN8f)
                            }),
                            options: v,
                            value: k,
                            onChange: (t) => {
                                let { value: r } = t;
                                A(r), S(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'year':
                U.push({
                    key: 'year',
                    input: (0, n.jsx)(y, {
                        options: w,
                        selectOption: T,
                        children: (0, n.jsx)(d.Z, {
                            ref: G,
                            className: h.__invalid_inputYear,
                            'aria-label': p.intl.string(p.t.ZWr5WF),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, n.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.intl.string(p.t.ZWr5WF)
                            }),
                            options: w,
                            value: j,
                            onChange: (t) => {
                                let { value: r } = t;
                                T(r), S(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
        }
    }
    return (0, n.jsxs)('fieldset', {
        className: o()(h.container, l),
        children: [
            (0, n.jsx)(c.vwX, {
                tag: 'legend',
                required: E,
                error: M,
                children: p.intl.string(p.t.xNpFJy)
            }),
            (0, n.jsx)('div', {
                className: h.inputs,
                children: U.map((e, t) => {
                    let { key: r, input: a } = e;
                    return (0, n.jsx)(
                        'div',
                        {
                            tabIndex: t + 1,
                            className: h[r],
                            children: a
                        },
                        r
                    );
                })
            })
        ]
    });
});
