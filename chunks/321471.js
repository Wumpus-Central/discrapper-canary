n.d(t, { e: () => o });
var l = n(477900),
    r = n(582128),
    a = n(668639),
    i = n(742158),
    s = n(718925);
let o = r.forwardRef(function (e, t) {
    let {
            children: n,
            disabled: o = !1,
            className: u,
            titleClassName: c,
            tag: d = "h5",
            required: m = !1,
            style: h,
            title: p,
            error: x,
            titleId: f,
            ...g
        } = e,
        j = r.useId(),
        C = r.useId(),
        v = f ?? j,
        N = null != x ? C : void 0,
        [A, I] = r.useState(void 0),
        [E, y] = r.useState(void 0),
        S = void 0 !== E;
    return (0, l.jsx)("div", {
        ref: t,
        className: u ?? void 0,
        style: h ?? void 0,
        children: (0, l.jsx)(a.hN, {
            "data-migration-pending": !0,
            titleId: v,
            errorId: N,
            error: x ?? void 0,
            isFocused: A,
            setIsFocused: I,
            hasValue: E,
            setHasValue: y,
            children: (0, l.jsxs)("div", {
                className: S ? s.G : void 0,
                children: [
                    null != p || null != x
                        ? (0, l.jsx)(i.z, {
                              "data-migration-pending": !0,
                              tag: d,
                              disabled: o,
                              required: m,
                              error: x,
                              className: c,
                              id: v,
                              errorId: N,
                              ...g,
                              children: p,
                          })
                        : null,
                    n,
                ],
            }),
        }),
    });
});
