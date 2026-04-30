"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(319354),
    l = n(990078),
    u = n(939249),
    c = n(573435),
    d = n(99553);
let _ = r.forwardRef(function (e, t) {
    let {
            icon: n,
            onClick: r,
            selected: s = !1,
            showBadge: _ = !1,
            disabled: f = !1,
            color: h,
            colorClass: p,
            tooltip: E,
            "aria-label": m,
            "aria-expanded": g,
            "aria-haspopup": A,
            "data-jump-section": I,
        } = e,
        T = (0, i.jsx)(n, { size: "sm", color: h ?? "currentColor", colorClass: p });
    return (0, i.jsx)(l.m, {
        position: "bottom",
        text: E,
        ariaHidden: !0,
        children: (0, i.jsx)(u.D, {
            innerRef: t,
            tag: "div",
            onClick: f ? void 0 : r,
            className: a()(d.vk, { [d.wH]: s, [d.r9]: f }),
            role: "button",
            "aria-label": null != m ? m : E,
            "aria-haspopup": A,
            "aria-expanded": g,
            "data-jump-section": I,
            "aria-disabled": f,
            children: _
                ? (0, i.jsxs)("div", {
                      className: d.fC,
                      children: [
                          (0, i.jsx)(c.Ay, {
                              mask: c.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                              height: o.E.sm,
                              width: o.E.sm,
                              children: T,
                          }),
                          (0, i.jsx)("span", { className: d.qS }),
                      ],
                  })
                : T,
        }),
    });
});
