var l = t(477900),
    r = t(582128),
    a = t(668639),
    i = t(742158),
    s = t(718925);
t.d(
    n,
    {},
    {
        e: function (e) {
            let {
                    children: n,
                    disabled: t = !1,
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
                I = null != p ? j : void 0,
                [N, A] = r.useState(void 0),
                [y, E] = r.useState(void 0),
                S = void 0 !== y;
            return (0, l.jsx)("div", {
                ref: f,
                className: o ?? void 0,
                style: m ?? void 0,
                children: (0, l.jsx)(a.hN, {
                    "data-migration-pending": !0,
                    titleId: v,
                    errorId: I,
                    error: p ?? void 0,
                    isFocused: N,
                    setIsFocused: A,
                    hasValue: y,
                    setHasValue: E,
                    children: (0, l.jsxs)("div", {
                        className: S ? s.G : void 0,
                        children: [
                            null != h || null != p
                                ? (0, l.jsx)(i.z, {
                                      "data-migration-pending": !0,
                                      tag: c,
                                      disabled: t,
                                      required: d,
                                      error: p,
                                      className: u,
                                      id: v,
                                      errorId: I,
                                      ...g,
                                      children: h,
                                  })
                                : null,
                            n,
                        ],
                    }),
                }),
            });
        },
    },
);
