n.d(t, { x: () => l }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(15127),
    s = n(512983),
    o = n(70185);
let l = r.forwardRef(function (e, t) {
    var n;
    let { children: l, disabled: u = !1, className: c, titleClassName: d, tag: f = 'h5', required: _ = !1, style: p, title: h, error: m, titleId: g, ...E } = e,
        v = r.useId(),
        y = r.useId(),
        I = null != g ? g : v,
        T = null != m ? (null !== (n = E.errorId) && void 0 !== n ? n : y) : void 0,
        [b, S] = r.useState(void 0),
        [A, N] = r.useState(void 0),
        C = void 0 !== A;
    return (0, i.jsx)('div', {
        ref: t,
        className: null != c ? c : void 0,
        style: null != p ? p : void 0,
        children: (0, i.jsx)(a.ol, {
            titleId: I,
            errorId: T,
            error: null != m ? m : void 0,
            isFocused: b,
            setIsFocused: S,
            hasValue: A,
            setHasValue: N,
            children: (0, i.jsxs)('div', {
                className: C ? o.fieldWrapper : void 0,
                children: [
                    null != h || null != m
                        ? (0, i.jsx)(s.v, {
                              tag: f,
                              disabled: u,
                              required: _,
                              error: m,
                              className: d,
                              id: I,
                              errorId: T,
                              ...E,
                              children: h
                          })
                        : null,
                    l
                ]
            })
        })
    });
});
