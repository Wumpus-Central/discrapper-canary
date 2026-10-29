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
            titleClassName: u,
            tag: c = "h5",
            required: d = !1,
            style: m,
            title: h,
            error: p,
            titleId: x,
            ref: f,
            ...g
        } = e,
        C = r.useId(),
        j = r.useId(),
        v = x ?? C,
        N = null != p ? j : void 0,
        [A, I] = r.useState(void 0),
        [E, y] = r.useState(void 0),
        S = void 0 !== E;
    return (0, l.jsx)("div", {
        ref: f,
        className: o ?? void 0,
        style: m ?? void 0,
        children: (0, l.jsx)(a.hN, {
            "data-migration-pending": !0,
            titleId: v,
            errorId: N,
            error: p ?? void 0,
            isFocused: A,
            setIsFocused: I,
            hasValue: E,
            setHasValue: y,
            children: (0, l.jsxs)("div", {
                className: S ? s.G : void 0,
                children: [
                    null != h || null != p
                        ? (0, l.jsx)(i.z, {
                              "data-migration-pending": !0,
                              tag: c,
                              disabled: n,
                              required: d,
                              error: p,
                              className: u,
                              id: v,
                              errorId: N,
                              ...g,
                              children: h,
                          })
                        : null,
                    t,
                ],
            }),
        }),
    });
};
