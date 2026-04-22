"use strict";
n.d(t, { Y: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(900283),
    l = n(563014),
    u = n(292666),
    d = n(885621),
    c = n(359823);
let _ = { position: "absolute", visibility: "hidden", pointerEvents: "none", whiteSpace: "nowrap" };
function f(e) {
    let {
            color: t = "default",
            label: n,
            value: s,
            onChange: f,
            placeholder: E = "",
            maxLength: h,
            disabled: p = !1,
            "aria-label": m,
            isFocused: g,
            menuItemProps: A,
        } = e,
        { onInteraction: I } = i.useContext(o.x),
        T = i.useRef(null),
        S = i.useRef(null),
        y = i.useRef(null),
        [N, O] = i.useState(null);
    i.useLayoutEffect(() => {
        if ("" === E || null == y.current || null == S.current) return void O(null);
        let e = S.current,
            t = window.getComputedStyle(e),
            n = y.current;
        (n.style.font = t.font), (n.style.letterSpacing = t.letterSpacing);
        let r = n.getBoundingClientRect().width,
            i = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight);
        O(Math.ceil(r + (Number.isNaN(i) ? 24 : i) + 2));
    }, [E]),
        i.useEffect(() => {
            g && ((0, l.Y)(T), S.current?.focus());
        }, [g]);
    let R = i.useCallback(
        (e) => {
            f(e), I?.({ type: o.Q.DEFAULT });
        },
        [f, I],
    );
    return (0, r.jsxs)("div", {
        ref: T,
        className: a()(c.item, c.textInputItem, c.hideInteraction, d.jV[t], { [c.disabled]: p }),
        "aria-disabled": p,
        ...A,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: c.labelContainer,
                      children: (0, r.jsx)("div", { className: c.label, children: n }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: c.textInputWrapper,
                style: null != N ? { minWidth: N } : void 0,
                children: [
                    (0, r.jsx)("span", { ref: y, "aria-hidden": !0, style: _, children: E }),
                    (0, r.jsx)(u.k, {
                        inputRef: S,
                        value: s,
                        onChange: R,
                        placeholder: E,
                        maxLength: h,
                        disabled: p,
                        "aria-label": m,
                    }),
                ],
            }),
        ],
    });
}
