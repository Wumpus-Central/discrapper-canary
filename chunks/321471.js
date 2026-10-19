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
            ref: g,
            ...C
        } = e,
        j = r.useId(),
        f = r.useId(),
        v = p ?? j,
        A = null != x ? f : void 0,
        [N, I] = r.useState(void 0),
        [y, E] = r.useState(void 0),
        S = void 0 !== y;
    return (0, l.jsx)("div", {
        ref: g,
        className: o ?? void 0,
        style: m ?? void 0,
        children: (0, l.jsx)(a.hN, {
            "data-migration-pending": !0,
            titleId: v,
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
                              id: v,
                              errorId: A,
                              ...C,
                              children: h,
                          })
                        : null,
                    t,
                ],
            }),
        }),
    });
};
