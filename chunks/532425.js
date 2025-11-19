n.d(t, { B: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(481060),
    l = n(388032),
    c = n(619624);
let u = (e) => {
    let { hasContent: t, onClear: n, className: i, isLoading: u, size: d = "sm" } = e;
    return (0, r.jsx)(o.P3F, {
        className: a()(i, c.iconLayout, { [c.pointer]: t }),
        "data-size": d,
        onClick: (e) => {
            e.stopPropagation(), null != n && n(e);
        },
        tabIndex: t ? 0 : -1,
        "aria-hidden": !t,
        onMouseDown: (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        children: (0, r.jsx)("div", {
            className: c.iconContainer,
            children: u
                ? (0, r.jsx)(o.$jN, {
                      type: o.$jN.Type.SPINNING_CIRCLE,
                      className: a()(c.icon, c.visible),
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s._Ve, {
                              color: "currentColor",
                              className: a()(c.icon, { [c.visible]: !t }),
                              "aria-label": l.intl.string(l.t["5h0QOP"]),
                          }),
                          (0, r.jsx)(s.Dio, {
                              color: "currentColor",
                              className: a()(c.clear, { [c.visible]: t }),
                              "aria-label": l.intl.string(l.t.VkKicb),
                          }),
                      ],
                  }),
        }),
    });
};
