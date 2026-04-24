n.d(t, { e: () => o });
var l = n(627968),
    a = n(64700),
    r = n(504345),
    s = n(742158),
    i = n(105898);
let o = a.forwardRef(function (e, t) {
    let {
            children: n,
            disabled: o = !1,
            className: c,
            titleClassName: d,
            tag: u = "h5",
            required: m = !1,
            style: p,
            title: h,
            error: C,
            titleId: E,
            ...A
        } = e,
        x = a.useId(),
        N = a.useId(),
        I = E ?? x,
        f = null != C ? N : void 0,
        [_, g] = a.useState(void 0),
        [v, T] = a.useState(void 0),
        S = void 0 !== v;
    return (0, l.jsx)("div", {
        ref: t,
        className: c ?? void 0,
        style: p ?? void 0,
        children: (0, l.jsx)(r.hN, {
            "data-migration-pending": !0,
            titleId: I,
            errorId: f,
            error: C ?? void 0,
            isFocused: _,
            setIsFocused: g,
            hasValue: v,
            setHasValue: T,
            children: (0, l.jsxs)("div", {
                className: S ? i.G : void 0,
                children: [
                    null != h || null != C
                        ? (0, l.jsx)(s.z, {
                              "data-migration-pending": !0,
                              tag: u,
                              disabled: o,
                              required: m,
                              error: C,
                              className: d,
                              id: I,
                              errorId: f,
                              ...A,
                              children: h,
                          })
                        : null,
                    n,
                ],
            }),
        }),
    });
});
