"use strict";
n.d(t, { e: () => l });
var r = n(627968),
    i = n(64700),
    a = n(504345),
    s = n(742158),
    o = n(463807);
let l = i.forwardRef(function (e, t) {
    let {
            children: n,
            disabled: l = !1,
            className: u,
            titleClassName: c,
            tag: d = "h5",
            required: _ = !1,
            style: f,
            title: p,
            error: h,
            titleId: m,
            ...g
        } = e,
        E = i.useId(),
        A = i.useId(),
        I = m ?? E,
        T = null != h ? A : void 0,
        [y, S] = i.useState(void 0),
        [v, C] = i.useState(void 0),
        b = void 0 !== v;
    return (0, r.jsx)("div", {
        ref: t,
        className: u ?? void 0,
        style: f ?? void 0,
        children: (0, r.jsx)(a.hN, {
            "data-migration-pending": !0,
            titleId: I,
            errorId: T,
            error: h ?? void 0,
            isFocused: y,
            setIsFocused: S,
            hasValue: v,
            setHasValue: C,
            children: (0, r.jsxs)("div", {
                className: b ? o.G : void 0,
                children: [
                    null != p || null != h
                        ? (0, r.jsx)(s.z, {
                              "data-migration-pending": !0,
                              tag: d,
                              disabled: l,
                              required: _,
                              error: h,
                              className: c,
                              id: I,
                              errorId: T,
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
