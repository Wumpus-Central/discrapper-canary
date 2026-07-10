"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(319354),
    o = n(990078),
    d = n(939249),
    c = n(573435),
    u = n(99553);
let _ = r.forwardRef(function (e, t) {
    let {
            icon: n,
            onClick: r,
            selected: a = !1,
            showBadge: _ = !1,
            disabled: E = !1,
            color: A,
            colorClass: h,
            tooltip: I,
            "aria-label": f,
            "aria-expanded": p,
            "aria-haspopup": T,
            "data-jump-section": m,
        } = e,
        g = (0, i.jsx)(n, { size: "sm", color: A ?? "currentColor", colorClass: h });
    return (0, i.jsx)(o.m, {
        position: "bottom",
        text: I,
        ariaHidden: !0,
        children: (0, i.jsx)(d.D, {
            innerRef: t,
            tag: "div",
            onClick: E ? void 0 : r,
            className: s()(u.vk, { [u.wH]: a, [u.r9]: E }),
            role: "button",
            "aria-label": null != f ? f : I,
            "aria-haspopup": T,
            "aria-expanded": p,
            "data-jump-section": m,
            "aria-disabled": E,
            children: _
                ? (0, i.jsxs)("div", {
                      className: u.fC,
                      children: [
                          (0, i.jsx)(c.Ay, {
                              mask: c.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                              height: l.E.sm,
                              width: l.E.sm,
                              children: g,
                          }),
                          (0, i.jsx)("span", { className: u.qS }),
                      ],
                  })
                : g,
        }),
    });
});
