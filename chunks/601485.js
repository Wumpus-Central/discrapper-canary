"use strict";
n.d(t, { a: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(900283),
    l = n(563014),
    u = n(885621),
    c = n(32271);
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
            onClose: E,
        } = e,
        { onInteraction: m } = i.useContext(o.x),
        g = i.useRef(null),
        A = i.useRef(null);
    i.useLayoutEffect(() => {
        _ ? ((0, l.Y)(g), A.current?.focus()) : A.current?.blur?.();
    }, [_]);
    let I = i.useCallback(() => {
            A.current?.activate?.() && E();
        }, [E]),
        T = s(
            {
                onClose: E,
                disabled: d,
                isFocused: _,
                onInteraction: i.useCallback(
                    (e) => {
                        m?.({ type: e ?? o.Q.DEFAULT });
                    },
                    [m],
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
            [c.nonInteractive]: !p,
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
