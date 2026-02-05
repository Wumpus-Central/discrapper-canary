"use strict";
n.d(t, { a: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(900283),
    l = n(563014),
    u = n(885621),
    c = n(658122);
function d(e) {
    let {
            color: t = "default",
            label: n,
            control: a,
            disabled: d,
            isFocused: _,
            showDefaultFocus: f = !1,
            menuItemProps: p,
            onClose: h,
        } = e,
        { onInteraction: m } = i.useContext(o.x),
        g = i.useRef(null),
        E = i.useRef(null);
    i.useLayoutEffect(() => {
        _ ? ((0, l.Y)(g), E.current?.focus()) : E.current?.blur?.();
    }, [_]);
    let A = i.useCallback(() => {
            E.current?.activate?.() && h();
        }, [h]),
        I = a(
            {
                onClose: h,
                disabled: d,
                isFocused: _,
                onInteraction: i.useCallback(
                    (e) => {
                        m?.({ type: e ?? o.Q.DEFAULT });
                    },
                    [m],
                ),
            },
            E,
        );
    return (0, r.jsxs)("div", {
        onClick: A,
        className: s()(c.item, u.jV[t], { [c.disabled]: d, [c.focused]: f && _, [c.hideInteraction]: !f }),
        "aria-disabled": d,
        ...p,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: c.labelContainer,
                      children: (0, r.jsx)("div", { className: c.label, children: n }),
                  })
                : null,
            I,
        ],
    });
}
