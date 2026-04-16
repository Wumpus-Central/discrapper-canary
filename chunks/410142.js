"use strict";
n.d(t, { f: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(900283),
    l = n(563014),
    u = n(397927),
    c = n(885621),
    d = n(32271);
function _(e) {
    let {
            color: t = "default",
            label: n,
            subtext: s,
            subtextLineClamp: _,
            checked: f,
            disabled: p = !1,
            isFocused: h,
            menuItemProps: m,
            action: E,
            className: g,
        } = e,
        { onInteraction: A } = i.useContext(o.x),
        I = i.useRef(null),
        T = i.useId();
    i.useEffect(() => {
        h && (0, l.Y)(I);
    }, [h]);
    let S = i.useCallback(
        (e) => {
            E(e), A?.({ type: o.Q.SWITCH });
        },
        [E, A],
    );
    return (0, r.jsxs)("div", {
        ref: I,
        className: a()(d.item, d.switchItem, d.hideInteraction, c.jV[t], g, { [d.disabled]: p }),
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
                              null != s &&
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-xs/normal",
                                      className: a()(d.subtext, { [d.subtextLineClamp]: null != _ }),
                                      lineClamp: _,
                                      children: s,
                                  }),
                          ],
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: d.switchContainer,
                children: (0, r.jsx)(u.dOG, { id: T, checked: f, onChange: S, disabled: p }),
            }),
        ],
    });
}
