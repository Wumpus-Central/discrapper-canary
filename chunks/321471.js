n.d(t, { e: () => c });
var l = n(477900),
    r = n(582128),
    a = n(668639),
    s = n(742158),
    i = n(718925);
let c = function (e) {
    let {
            children: t,
            disabled: n = !1,
            className: c,
            titleClassName: o,
            tag: u = "h5",
            required: d = !1,
            style: m,
            title: h,
            error: x,
            titleId: g,
            ref: f,
            ...j
        } = e,
        p = r.useId(),
        v = r.useId(),
        C = g ?? p,
        A = null != x ? v : void 0,
        [E, N] = r.useState(void 0),
        [S, I] = r.useState(void 0),
        b = void 0 !== S;
    return (0, l.jsx)("div", {
        ref: f,
        className: c ?? void 0,
        style: m ?? void 0,
        children: (0, l.jsx)(a.hN, {
            "data-migration-pending": !0,
            titleId: C,
            errorId: A,
            error: x ?? void 0,
            isFocused: E,
            setIsFocused: N,
            hasValue: S,
            setHasValue: I,
            children: (0, l.jsxs)("div", {
                className: b ? i.G : void 0,
                children: [
                    null != h || null != x
                        ? (0, l.jsx)(s.z, {
                              "data-migration-pending": !0,
                              tag: u,
                              disabled: n,
                              required: d,
                              error: x,
                              className: o,
                              id: C,
                              errorId: A,
                              ...j,
                              children: h,
                          })
                        : null,
                    t,
                ],
            }),
        }),
    });
};
