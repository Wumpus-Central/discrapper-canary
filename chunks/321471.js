n.d(t, { e: () => o });
var a = n(627968),
    l = n(64700),
    r = n(504345),
    i = n(742158),
    s = n(105898);
let o = l.forwardRef(function (e, t) {
    let {
            children: n,
            disabled: o = !1,
            className: d,
            titleClassName: c,
            tag: u = "h5",
            required: m = !1,
            style: _,
            title: p,
            error: h,
            titleId: A,
            ...C
        } = e,
        x = l.useId(),
        f = l.useId(),
        E = A ?? x,
        I = null != h ? f : void 0,
        [N, g] = l.useState(void 0),
        [v, T] = l.useState(void 0),
        b = void 0 !== v;
    return (0, a.jsx)("div", {
        ref: t,
        className: d ?? void 0,
        style: _ ?? void 0,
        children: (0, a.jsx)(r.hN, {
            "data-migration-pending": !0,
            titleId: E,
            errorId: I,
            error: h ?? void 0,
            isFocused: N,
            setIsFocused: g,
            hasValue: v,
            setHasValue: T,
            children: (0, a.jsxs)("div", {
                className: b ? s.G : void 0,
                children: [
                    null != p || null != h
                        ? (0, a.jsx)(i.z, {
                              "data-migration-pending": !0,
                              tag: u,
                              disabled: o,
                              required: m,
                              error: h,
                              className: c,
                              id: E,
                              errorId: I,
                              ...C,
                              children: p,
                          })
                        : null,
                    n,
                ],
            }),
        }),
    });
});
