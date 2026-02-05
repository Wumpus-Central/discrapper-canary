"use strict";
n.d(t, { f: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(900283),
    l = n(563014),
    u = n(397927),
    c = n(885621),
    d = n(658122);
function _(e) {
    let {
            color: t = "default",
            label: n,
            subtext: a,
            subtextLineClamp: _,
            checked: f,
            disabled: p = !1,
            isFocused: h,
            menuItemProps: m,
            action: g,
            className: E,
        } = e,
        { onInteraction: A } = i.useContext(o.x),
        I = i.useRef(null),
        T = i.useId();
    i.useEffect(() => {
        h && (0, l.Y)(I);
    }, [h]);
    let y = i.useCallback(
        (e) => {
            g(e), A?.({ type: o.Q.SWITCH });
        },
        [g, A],
    );
    return (0, r.jsxs)("div", {
        ref: I,
        className: s()(d.item, d.switchItem, d.hideInteraction, c.jV[t], E, { [d.disabled]: p }),
        "aria-checked": f,
        "aria-disabled": p,
        ...m,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: d.labelContainer,
                      children: (0, r.jsxs)("div", {
                          className: d.label,
                          children: [
                              (0, r.jsx)("label", { htmlFor: T, children: n }),
                              null != a &&
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-xs/normal",
                                      className: s()(d.subtext, { [d.subtextLineClamp]: null != _ }),
                                      lineClamp: _,
                                      children: a,
                                  }),
                          ],
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: d.switchContainer,
                children: (0, r.jsx)(u.dOG, { id: T, checked: f, onChange: y, disabled: p }),
            }),
        ],
    });
}
