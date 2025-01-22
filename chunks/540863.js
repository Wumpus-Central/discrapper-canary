r.d(n, {
    x: function () {
        return c;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(15127),
    l = r(512983),
    u = r(70185);
let c = o.forwardRef(function (e, n) {
    var r, i;
    let { children: c, disabled: d = !1, className: f, titleClassName: p, tag: h = 'h5', required: _ = !1, style: m, title: g, error: E, ...v } = e,
        y = o.useId(),
        b = o.useId(),
        I = null !== (r = v.titleId) && void 0 !== r ? r : y,
        T = null != E ? (null !== (i = v.errorId) && void 0 !== i ? i : b) : void 0,
        [S, A] = o.useState(void 0),
        [C, N] = o.useState(void 0),
        R = void 0 !== C;
    return (0, a.jsx)('div', {
        ref: n,
        className: null != f ? f : void 0,
        style: null != m ? m : void 0,
        children: (0, a.jsx)(s.ol, {
            titleId: I,
            errorId: T,
            error: null != E ? E : void 0,
            isFocused: S,
            setIsFocused: A,
            hasValue: C,
            setHasValue: N,
            children: (0, a.jsxs)('div', {
                className: R ? u.fieldWrapper : void 0,
                children: [
                    null != g || null != E
                        ? (0, a.jsx)(l.v, {
                              tag: h,
                              disabled: d,
                              required: _,
                              error: E,
                              className: p,
                              id: I,
                              errorId: T,
                              ...v,
                              children: g
                          })
                        : null,
                    c
                ]
            })
        })
    });
});
