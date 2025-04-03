r.d(t, { Z: () => O }), r(47120), r(301563), r(230036), r(653041);
var n = r(200651),
    a = r(192379),
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
    let { value: r, wrapperClassName: l, onChange: i, onPopulated: f, error: m, autoFocus: O, required: x } = e,
        {
            day: E,
            setDay: _,
            month: k,
            setMonth: A,
            year: N,
            setYear: j
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
        T = a.useMemo(() => (null != E && null != k && null != N ? s()(''.concat(E, '/').concat(k, '/').concat(N), 'DD/MM/YYYY') : null), [E, k, N]);
    a.useEffect(() => {
        i((null == T ? void 0 : T.isValid()) ? T : null);
    }, [T, i]);
    let w = m;
    null == T || T.isValid() || (w = p.NW.string(p.t.udnqh4));
    let C = (function () {
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
        [M, R] = a.useState(O ? 0 : -1),
        S = a.useRef(null),
        P = a.useRef(null),
        G = a.useRef(null),
        D = a.useMemo(g, []),
        W = a.useCallback(() => {
            var e, t, r, n;
            switch (null == (e = D[M]) ? void 0 : e.type) {
                case 'day':
                    null == (t = S.current) || t.focus();
                    break;
                case 'month':
                    null == (r = P.current) || r.focus();
                    break;
                case 'year':
                    null == (n = G.current) || n.focus();
            }
        }, [M, S, P, G, D]);
    (0, u.ZP)(() => {
        let e = setTimeout(W, 500);
        return () => {
            clearTimeout(e);
        };
    });
    let Z = {
            onPopulated: f,
            sortedInputs: D
        },
        I = a.useRef(Z);
    a.useEffect(() => {
        I.current = Z;
    }),
        a.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = I.current;
            if (M >= t.length) {
                null == e || e();
                return;
            }
            W();
        }, [M, W]);
    let F = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = D[e];
        switch (t) {
            case 'day':
                F.push({
                    key: 'day',
                    input: (0, n.jsx)(y, {
                        options: b,
                        selectOption: _,
                        children: (0, n.jsx)(d.Z, {
                            ref: S,
                            className: h.__invalid_inputDay,
                            'aria-label': p.NW.string(p.t.Voklra),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, n.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.NW.string(p.t.Voklra)
                            }),
                            options: b,
                            value: E,
                            onChange: (t) => {
                                let { value: r } = t;
                                _(r), R(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'month':
                F.push({
                    key: 'month',
                    input: (0, n.jsx)(y, {
                        options: v,
                        selectOption: A,
                        children: (0, n.jsx)(d.Z, {
                            ref: P,
                            className: h.__invalid_inputMonth,
                            'aria-label': p.NW.string(p.t.UDlN8f),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, n.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.NW.string(p.t.UDlN8f)
                            }),
                            options: v,
                            value: k,
                            onChange: (t) => {
                                let { value: r } = t;
                                A(r), R(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'year':
                F.push({
                    key: 'year',
                    input: (0, n.jsx)(y, {
                        options: C,
                        selectOption: j,
                        children: (0, n.jsx)(d.Z, {
                            ref: G,
                            className: h.__invalid_inputYear,
                            'aria-label': p.NW.string(p.t.ZWr5WF),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, n.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.NW.string(p.t.ZWr5WF)
                            }),
                            options: C,
                            value: N,
                            onChange: (t) => {
                                let { value: r } = t;
                                j(r), R(e + 1);
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
                required: x,
                error: w,
                children: p.NW.string(p.t.xNpFJy)
            }),
            (0, n.jsx)('div', {
                className: h.inputs,
                children: F.map((e, t) => {
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
