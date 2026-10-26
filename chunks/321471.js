n.d(t, { e: () => o });
var l = n(477900),
    r = n(582128),
    a = n(668639),
    i = n(742158),
    s = n(718925);
let o = function (e) {
    let {
            children: t,
            disabled: n = !1,
            className: o,
            titleClassName: c,
            tag: u = "h5",
            required: d = !1,
            style: m,
            title: h,
            error: x,
            titleId: p,
            ref: j,
            ...f
        } = e,
        g = r.useId(),
        v = r.useId(),
        C = p ?? g,
        A = null != x ? v : void 0,
        [N, I] = r.useState(void 0),
        [y, E] = r.useState(void 0),
        S = void 0 !== y;
    return (0, l.jsx)("div", {
        ref: j,
        className: o ?? void 0,
        style: m ?? void 0,
        children: (0, l.jsx)(a.hN, {
            "data-migration-pending": !0,
            titleId: C,
            errorId: A,
            error: x ?? void 0,
            isFocused: N,
            setIsFocused: I,
            hasValue: y,
            setHasValue: E,
            children: (0, l.jsxs)("div", {
                className: S ? s.G : void 0,
                children: [
                    null != h || null != x
                        ? (0, l.jsx)(i.z, {
                              "data-migration-pending": !0,
                              tag: u,
                              disabled: n,
                              required: d,
                              error: x,
                              className: c,
                              id: C,
                              errorId: A,
                              ...f,
                              children: h,
                          })
                        : null,
                    t,
                ],
            }),
        }),
    });
};
