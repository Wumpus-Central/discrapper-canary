r.d(t, { Z: () => E }), r(47120), r(653041);
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
    h = r(258739);
let v = s()().localeData().months(),
    f = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: ''.concat(e + 1)
    })),
    m = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: v[e]
    })),
    b = /[a-zA-Z0-9]/;
function g(e) {
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
            if (b.test(e.key)) {
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
function x() {
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
let E = a.forwardRef(function (e, t) {
    let { value: r, wrapperClassName: l, onChange: i, onPopulated: v, error: b, autoFocus: E, required: y } = e,
        {
            day: _,
            setDay: A,
            month: k,
            setMonth: T,
            year: C,
            setYear: O
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
        M = a.useMemo(() => (null != _ && null != k && null != C ? s()(''.concat(_, '/').concat(k, '/').concat(C), 'DD/MM/YYYY') : null), [_, k, C]);
    a.useEffect(() => {
        i((null == M ? void 0 : M.isValid()) ? M : null);
    }, [M, i]);
    let R = b;
    null == M || M.isValid() || (R = p.intl.string(p.t.udnqh4));
    let N = (function () {
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
        [G, S] = a.useState(E ? 0 : -1),
        w = a.useRef(null),
        D = a.useRef(null),
        j = a.useRef(null),
        P = a.useMemo(x, []),
        Z = a.useCallback(() => {
            var e, t, r, n;
            switch (null === (e = P[G]) || void 0 === e ? void 0 : e.type) {
                case 'day':
                    null === (t = w.current) || void 0 === t || t.focus();
                    break;
                case 'month':
                    null === (r = D.current) || void 0 === r || r.focus();
                    break;
                case 'year':
                    null === (n = j.current) || void 0 === n || n.focus();
            }
        }, [G, w, D, j, P]);
    (0, u.ZP)(() => {
        let e = setTimeout(Z, 500);
        return () => {
            clearTimeout(e);
        };
    });
    let F = {
            onPopulated: v,
            sortedInputs: P
        },
        I = a.useRef(F);
    a.useEffect(() => {
        I.current = F;
    }),
        a.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = I.current;
            if (G >= t.length) {
                null == e || e();
                return;
            }
            Z();
        }, [G, Z]);
    let U = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = P[e];
        switch (t) {
            case 'day':
                U.push({
                    key: 'day',
                    input: (0, n.jsx)(g, {
                        options: f,
                        selectOption: A,
                        children: (0, n.jsx)(d.Z, {
                            ref: w,
                            className: h.__invalid_inputDay,
                            'aria-label': p.intl.string(p.t.Voklra),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, n.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.intl.string(p.t.Voklra)
                            }),
                            options: f,
                            value: _,
                            onChange: (t) => {
                                let { value: r } = t;
                                A(r), S(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'month':
                U.push({
                    key: 'month',
                    input: (0, n.jsx)(g, {
                        options: m,
                        selectOption: T,
                        children: (0, n.jsx)(d.Z, {
                            ref: D,
                            className: h.__invalid_inputMonth,
                            'aria-label': p.intl.string(p.t.UDlN8f),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, n.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.intl.string(p.t.UDlN8f)
                            }),
                            options: m,
                            value: k,
                            onChange: (t) => {
                                let { value: r } = t;
                                T(r), S(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'year':
                U.push({
                    key: 'year',
                    input: (0, n.jsx)(g, {
                        options: N,
                        selectOption: O,
                        children: (0, n.jsx)(d.Z, {
                            ref: j,
                            className: h.__invalid_inputYear,
                            'aria-label': p.intl.string(p.t.ZWr5WF),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, n.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.intl.string(p.t.ZWr5WF)
                            }),
                            options: N,
                            value: C,
                            onChange: (t) => {
                                let { value: r } = t;
                                O(r), S(e + 1);
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
                required: y,
                error: R,
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
