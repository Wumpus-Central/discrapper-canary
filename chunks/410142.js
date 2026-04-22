"use strict";
n.d(t, { f: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(900283),
    l = n(563014),
    u = n(834730),
    d = n(243721),
    c = n(885621),
    _ = n(359823);
function f(e) {
    let {
            color: t = "default",
            label: n,
            subtext: s,
            subtextLineClamp: f,
            checked: E,
            disabled: h = !1,
            isFocused: p,
            menuItemProps: m,
            action: g,
            className: A,
        } = e,
        { onInteraction: I } = i.useContext(o.x),
        T = i.useRef(null),
        S = i.useId();
    i.useEffect(() => {
        p && (0, l.Y)(T);
    }, [p]);
    let y = i.useCallback(
        (e) => {
            g(e), I?.({ type: o.Q.SWITCH });
        },
        [g, I],
    );
    return (0, r.jsxs)("div", {
        ref: T,
        className: a()(_.item, _.switchItem, _.hideInteraction, c.jV[t], A, { [_.disabled]: h }),
        "aria-checked": E,
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
                children: (0, r.jsx)(d.d, { id: S, checked: E, onChange: y, disabled: h }),
            }),
        ],
    });
}
