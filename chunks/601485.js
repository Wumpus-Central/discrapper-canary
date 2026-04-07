"use strict";
n.d(t, { a: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(900283),
    l = n(563014),
    u = n(885621),
    c = n(945375);
function d(e) {
    let {
            color: t = "default",
            label: n,
            control: s,
            disabled: d,
            isFocused: _,
            showDefaultFocus: f = !1,
            interactive: p = !0,
            menuItemProps: h,
            onClose: m,
        } = e,
        { onInteraction: E } = i.useContext(o.x),
        g = i.useRef(null),
        A = i.useRef(null);
    i.useLayoutEffect(() => {
        _ ? ((0, l.Y)(g), A.current?.focus()) : A.current?.blur?.();
    }, [_]);
    let I = i.useCallback(() => {
            A.current?.activate?.() && m();
        }, [m]),
        T = s(
            {
                onClose: m,
                disabled: d,
                isFocused: _,
                onInteraction: i.useCallback(
                    (e) => {
                        E?.({ type: e ?? o.Q.DEFAULT });
                    },
                    [E],
                ),
            },
            A,
        );
    return (0, r.jsxs)("div", {
        onClick: I,
        className: a()(c.item, u.jV[t], {
            [c.disabled]: d,
            [c.focused]: f && _,
            [c.hideInteraction]: !f,
            [c.interactive]: p,
        }),
        "aria-disabled": d,
        ...h,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: c.labelContainer,
                      children: (0, r.jsx)("div", { className: c.label, children: n }),
                  })
                : null,
            T,
        ],
    });
}
