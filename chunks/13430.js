n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    i = n(913527),
    s = n.n(i),
    c = n(481060),
    u = n(493773),
    d = n(285888),
    p = n(388032),
    h = n(234293);
let f = s()().localeData().months(),
    v = Array.from(Array(31).keys()).map((e) => ({
        value: e + 1,
        label: ''.concat(e + 1)
    })),
    m = Array.from(Array(12).keys()).map((e) => ({
        value: e + 1,
        label: f[e]
    })),
    b = /[a-zA-Z0-9]/;
function g(e) {
    let { options: t, selectOption: n, children: l } = e,
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
                let r = ''.concat(o).concat(e.key.toLowerCase()),
                    a = t.find((e) => e.label.toLowerCase().startsWith(r));
                null != a && n(a.value), i(r);
            }
        },
        [n, i, o, t]
    );
    return (0, r.jsx)('div', {
        onKeyDown: s,
        children: l
    });
}
function x() {
    let e = s()().localeData().longDateFormat('L'),
        t = e.indexOf('D'),
        n = e.indexOf('M'),
        r = e.indexOf('Y');
    return (
        (-1 === t || -1 === n || -1 === r) && ((t = 0), (n = 1), (r = 2)),
        [
            {
                index: t,
                type: 'day'
            },
            {
                index: n,
                type: 'month'
            },
            {
                index: r,
                type: 'year'
            }
        ].sort((e, t) => (e.index < t.index ? -1 : 1))
    );
}
let E = a.forwardRef(function (e, t) {
    let { value: n, wrapperClassName: l, onChange: i, onPopulated: f, error: b, autoFocus: E, required: y } = e,
        {
            day: _,
            setDay: A,
            month: k,
            setMonth: T,
            year: M,
            setYear: C
        } = (function (e) {
            let t = null,
                n = null,
                r = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (r = e.year()));
            let [l, o] = a.useState(t),
                [i, s] = a.useState(n),
                [c, u] = a.useState(r);
            return {
                day: l,
                setDay: o,
                month: i,
                setMonth: s,
                year: c,
                setYear: u
            };
        })(n),
        O = a.useMemo(() => (null != _ && null != k && null != M ? s()(''.concat(_, '/').concat(k, '/').concat(M), 'DD/MM/YYYY') : null), [_, k, M]);
    a.useEffect(() => {
        i((null == O ? void 0 : O.isValid()) ? O : null);
    }, [O, i]);
    let R = b;
    null != O && !O.isValid() && (R = p.intl.string(p.t.udnqh4));
    let G = (function () {
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
        [N, S] = a.useState(E ? 0 : -1),
        w = a.useRef(null),
        D = a.useRef(null),
        j = a.useRef(null),
        P = a.useMemo(x, []),
        Z = a.useCallback(() => {
            var e, t, n, r;
            switch (null === (e = P[N]) || void 0 === e ? void 0 : e.type) {
                case 'day':
                    null === (t = w.current) || void 0 === t || t.focus();
                    break;
                case 'month':
                    null === (n = D.current) || void 0 === n || n.focus();
                    break;
                case 'year':
                    null === (r = j.current) || void 0 === r || r.focus();
            }
        }, [N, w, D, j, P]);
    (0, u.Z)(() => {
        let e = setTimeout(Z, 500);
        return () => {
            clearTimeout(e);
        };
    });
    let F = {
            onPopulated: f,
            sortedInputs: P
        },
        I = a.useRef(F);
    a.useEffect(() => {
        I.current = F;
    }),
        a.useEffect(() => {
            let { onPopulated: e, sortedInputs: t } = I.current;
            if (N >= t.length) {
                null == e || e();
                return;
            }
            Z();
        }, [N, Z]);
    let U = [];
    for (let e = 0; e < 3; e++) {
        let { type: t } = P[e];
        switch (t) {
            case 'day':
                U.push({
                    key: 'day',
                    input: (0, r.jsx)(g, {
                        options: v,
                        selectOption: A,
                        children: (0, r.jsx)(d.Z, {
                            ref: w,
                            className: h.__invalid_inputDay,
                            'aria-label': p.intl.string(p.t.Voklra),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, r.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.intl.string(p.t.Voklra)
                            }),
                            options: v,
                            value: _,
                            onChange: (t) => {
                                let { value: n } = t;
                                A(n), S(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'month':
                U.push({
                    key: 'month',
                    input: (0, r.jsx)(g, {
                        options: m,
                        selectOption: T,
                        children: (0, r.jsx)(d.Z, {
                            ref: D,
                            className: h.__invalid_inputMonth,
                            'aria-label': p.intl.string(p.t.UDlN8f),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, r.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.intl.string(p.t.UDlN8f)
                            }),
                            options: m,
                            value: k,
                            onChange: (t) => {
                                let { value: n } = t;
                                T(n), S(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
                break;
            case 'year':
                U.push({
                    key: 'year',
                    input: (0, r.jsx)(g, {
                        options: G,
                        selectOption: C,
                        children: (0, r.jsx)(d.Z, {
                            ref: j,
                            className: h.__invalid_inputYear,
                            'aria-label': p.intl.string(p.t.ZWr5WF),
                            menuPlacement: d.Z.MenuPlacements.TOP,
                            placeholder: (0, r.jsx)('span', {
                                'aria-hidden': !0,
                                children: p.intl.string(p.t.ZWr5WF)
                            }),
                            options: G,
                            value: M,
                            onChange: (t) => {
                                let { value: n } = t;
                                C(n), S(e + 1);
                            },
                            maxMenuHeight: 215
                        })
                    })
                });
        }
    }
    return (0, r.jsxs)('fieldset', {
        className: o()(h.container, l),
        children: [
            (0, r.jsx)(c.FormTitle, {
                tag: 'legend',
                required: y,
                error: R,
                children: p.intl.string(p.t.xNpFJy)
            }),
            (0, r.jsx)('div', {
                className: h.inputs,
                children: U.map((e, t) => {
                    let { key: n, input: a } = e;
                    return (0, r.jsx)(
                        'div',
                        {
                            tabIndex: t + 1,
                            className: h[n],
                            children: a
                        },
                        n
                    );
                })
            })
        ]
    });
});
t.Z = E;
