n.d(t, { e: () => o });
var l = n(477900),
    r = n(582128),
    a = n(668639),
    s = n(742158),
    i = n(718925);
let o = function (e) {
    let {
            children: t,
            disabled: n = !1,
            className: o,
            titleClassName: c,
            tag: d = "h5",
            required: u = !1,
            style: m,
            title: p,
            error: h,
            titleId: x,
            ref: f,
            ...g
        } = e,
        C = r.useId(),
        j = r.useId(),
        v = x ?? C,
        A = null != h ? j : void 0,
        [N, I] = r.useState(void 0),
        [y, E] = r.useState(void 0),
        b = void 0 !== y;
    return (0, l.jsx)("div", {
        ref: f,
        className: o ?? void 0,
        style: m ?? void 0,
        children: (0, l.jsx)(a.hN, {
            "data-migration-pending": !0,
            titleId: v,
            errorId: A,
            error: h ?? void 0,
            isFocused: N,
            setIsFocused: I,
            hasValue: y,
            setHasValue: E,
            children: (0, l.jsxs)("div", {
                className: b ? i.G : void 0,
                children: [
                    null != p || null != h
                        ? (0, l.jsx)(s.z, {
                              "data-migration-pending": !0,
                              tag: d,
                              disabled: n,
                              required: u,
                              error: h,
                              className: c,
                              id: v,
                              errorId: A,
                              ...g,
                              children: p,
                          })
                        : null,
                    t,
                ],
            }),
        }),
    });
};
