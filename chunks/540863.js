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
    var r;
    let { children: i, disabled: c = !1, className: d, titleClassName: f, tag: p = 'h5', required: h = !1, style: _, title: m, error: g, titleId: E, ...v } = e,
        y = o.useId(),
        b = o.useId(),
        I = null != E ? E : y,
        T = null != g ? (null !== (r = v.errorId) && void 0 !== r ? r : b) : void 0,
        [S, A] = o.useState(void 0),
        [C, N] = o.useState(void 0),
        R = void 0 !== C;
    return (0, a.jsx)('div', {
        ref: n,
        className: null != d ? d : void 0,
        style: null != _ ? _ : void 0,
        children: (0, a.jsx)(s.ol, {
            titleId: I,
            errorId: T,
            error: null != g ? g : void 0,
            isFocused: S,
            setIsFocused: A,
            hasValue: C,
            setHasValue: N,
            children: (0, a.jsxs)('div', {
                className: R ? u.fieldWrapper : void 0,
                children: [
                    null != m || null != g
                        ? (0, a.jsx)(l.v, {
                              tag: p,
                              disabled: c,
                              required: h,
                              error: g,
                              className: f,
                              id: I,
                              errorId: T,
                              ...v,
                              children: m
                          })
                        : null,
                    i
                ]
            })
        })
    });
});
