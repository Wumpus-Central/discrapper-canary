"use strict";
n.d(t, { Y: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(900283),
    l = n(563014),
    u = n(292666),
    c = n(885621),
    d = n(32271);
let _ = { position: "absolute", visibility: "hidden", pointerEvents: "none", whiteSpace: "nowrap" };
function f(e) {
    let {
            color: t = "default",
            label: n,
            value: s,
            onChange: f,
            placeholder: p = "",
            maxLength: h,
            disabled: E = !1,
            "aria-label": m,
            isFocused: g,
            menuItemProps: A,
        } = e,
        { onInteraction: I } = i.useContext(o.x),
        T = i.useRef(null),
        S = i.useRef(null),
        y = i.useRef(null),
        [N, v] = i.useState(null);
    i.useLayoutEffect(() => {
        if ("" === p || null == y.current || null == S.current) return void v(null);
        let e = S.current,
            t = window.getComputedStyle(e),
            n = y.current;
        (n.style.font = t.font), (n.style.letterSpacing = t.letterSpacing);
        let r = n.getBoundingClientRect().width,
            i = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight);
        v(Math.ceil(r + (Number.isNaN(i) ? 24 : i) + 2));
    }, [p]),
        i.useEffect(() => {
            g && ((0, l.Y)(T), S.current?.focus());
        }, [g]);
    let C = i.useCallback(
        (e) => {
            f(e), I?.({ type: o.Q.DEFAULT });
        },
        [f, I],
    );
    return (0, r.jsxs)("div", {
        ref: T,
        className: a()(d.item, d.textInputItem, d.hideInteraction, c.jV[t], { [d.disabled]: E }),
        "aria-disabled": E,
        ...A,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: d.labelContainer,
                      children: (0, r.jsx)("div", { className: d.label, children: n }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: d.textInputWrapper,
                style: null != N ? { minWidth: N } : void 0,
                children: [
                    (0, r.jsx)("span", { ref: y, "aria-hidden": !0, style: _, children: p }),
                    (0, r.jsx)(u.k, {
                        inputRef: S,
                        value: s,
                        onChange: C,
                        placeholder: p,
                        maxLength: h,
                        disabled: E,
                        "aria-label": m,
                    }),
                ],
            }),
        ],
    });
}
