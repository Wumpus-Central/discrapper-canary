"use strict";
n.d(t, { a: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(900283),
    l = n(563014),
    u = n(885621),
    d = n(32271);
function c(e) {
    let {
            color: t = "default",
            label: n,
            control: s,
            disabled: c,
            isFocused: _,
            showDefaultFocus: f = !1,
            interactive: E = !0,
            menuItemProps: h,
            onClose: p,
        } = e,
        { onInteraction: m } = i.useContext(o.x),
        g = i.useRef(null),
        A = i.useRef(null);
    i.useLayoutEffect(() => {
        _ ? ((0, l.Y)(g), A.current?.focus()) : A.current?.blur?.();
    }, [_]);
    let I = i.useCallback(() => {
            A.current?.activate?.() && p();
        }, [p]),
        T = s(
            {
                onClose: p,
                disabled: c,
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
        className: a()(d.item, u.jV[t], {
            [d.disabled]: c,
            [d.focused]: f && _,
            [d.hideInteraction]: !f,
            [d.nonInteractive]: !E,
        }),
        "aria-disabled": c,
        ...h,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: d.labelContainer,
                      children: (0, r.jsx)("div", { className: d.label, children: n }),
                  })
                : null,
            T,
        ],
    });
}
