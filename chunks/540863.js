r.d(n, {
    x: function () {
        return c;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(15127),
    l = r(512983),
    u = r(70185);
let c = s.forwardRef(function (e, n) {
    var r, i;
    let { children: c, disabled: d = !1, className: f, titleClassName: _, tag: h = 'h5', required: p = !1, style: m, title: g, error: E, ...v } = e,
        I = s.useId(),
        T = s.useId(),
        b = null !== (r = v.titleId) && void 0 !== r ? r : I,
        y = null != E ? (null !== (i = v.errorId) && void 0 !== i ? i : T) : void 0,
        [S, A] = s.useState(void 0),
        [N, C] = s.useState(void 0),
        R = void 0 !== N;
    return (0, a.jsx)('div', {
        ref: n,
        className: null != f ? f : void 0,
        style: null != m ? m : void 0,
        children: (0, a.jsx)(o.ol, {
            titleId: b,
            errorId: y,
            error: null != E ? E : void 0,
            isFocused: S,
            setIsFocused: A,
            hasValue: N,
            setHasValue: C,
            children: (0, a.jsxs)('div', {
                className: R ? u.fieldWrapper : void 0,
                children: [
                    null != g || null != E
                        ? (0, a.jsx)(l.v, {
                              tag: h,
                              disabled: d,
                              required: p,
                              error: E,
                              className: _,
                              id: b,
                              errorId: y,
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
