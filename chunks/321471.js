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
            error: p,
            titleId: x,
            ref: g,
            ...C
        } = e,
        f = r.useId(),
        j = r.useId(),
        v = x ?? f,
        A = null != p ? j : void 0,
        [N, I] = r.useState(void 0),
        [E, y] = r.useState(void 0),
        S = void 0 !== E;
    return (0, l.jsx)("div", {
        ref: g,
        className: o ?? void 0,
        style: m ?? void 0,
        children: (0, l.jsx)(a.hN, {
            "data-migration-pending": !0,
            titleId: v,
            errorId: A,
            error: p ?? void 0,
            isFocused: N,
            setIsFocused: I,
            hasValue: E,
            setHasValue: y,
            children: (0, l.jsxs)("div", {
                className: S ? s.G : void 0,
                children: [
                    null != h || null != p
                        ? (0, l.jsx)(i.z, {
                              "data-migration-pending": !0,
                              tag: u,
                              disabled: n,
                              required: d,
                              error: p,
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
