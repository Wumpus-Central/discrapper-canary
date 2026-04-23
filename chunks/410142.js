"use strict";
n.d(t, { f: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(900283),
    l = n(563014),
    u = n(834730),
    c = n(243721),
    d = n(885621),
    _ = n(32271);
function f(e) {
    let {
            color: t = "default",
            label: n,
            subtext: s,
            subtextLineClamp: f,
            checked: p,
            disabled: h = !1,
            isFocused: E,
            menuItemProps: m,
            action: g,
            className: A,
        } = e,
        { onInteraction: I } = i.useContext(o.x),
        T = i.useRef(null),
        S = i.useId();
    i.useEffect(() => {
        E && (0, l.Y)(T);
    }, [E]);
    let y = i.useCallback(
        (e) => {
            g(e), I?.({ type: o.Q.SWITCH });
        },
        [g, I],
    );
    return (0, r.jsxs)("div", {
        ref: T,
        className: a()(_.item, _.switchItem, _.hideInteraction, d.jV[t], A, { [_.disabled]: h }),
        "aria-checked": p,
        "aria-disabled": h,
        ...m,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: _.labelContainer,
                      children: (0, r.jsxs)("div", {
                          className: _.label,
                          children: [
                              (0, r.jsx)("label", { htmlFor: S, children: n }),
                              null != s &&
                                  (0, r.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      className: a()(_.subtext, { [_.subtextLineClamp]: null != f }),
                                      lineClamp: f,
                                      children: s,
                                  }),
                          ],
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: _.switchContainer,
                children: (0, r.jsx)(c.d, { id: S, checked: p, onChange: y, disabled: h }),
            }),
        ],
    });
}
