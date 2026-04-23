n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(319354),
    o = n(990078),
    d = n(939249),
    u = n(573435),
    c = n(99553);
let A = r.forwardRef(function (e, t) {
    let {
            icon: n,
            onClick: r,
            selected: a = !1,
            showBadge: A = !1,
            disabled: h = !1,
            color: _,
            colorClass: E,
            tooltip: p,
            "aria-label": m,
            "aria-expanded": g,
            "aria-haspopup": I,
            "data-jump-section": C,
        } = e,
        f = (0, i.jsx)(n, { size: "sm", color: _ ?? "currentColor", colorClass: E });
    return (0, i.jsx)(o.m, {
        position: "bottom",
        text: p,
        ariaHidden: !0,
        children: (0, i.jsx)(d.D, {
            innerRef: t,
            tag: "div",
            onClick: h ? void 0 : r,
            className: l()(c.vk, { [c.wH]: a, [c.r9]: h }),
            role: "button",
            "aria-label": null != m ? m : p,
            "aria-haspopup": I,
            "aria-expanded": g,
            "data-jump-section": C,
            "aria-disabled": h,
            children: A
                ? (0, i.jsxs)("div", {
                      className: c.fC,
                      children: [
                          (0, i.jsx)(u.Ay, {
                              mask: u.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                              height: s.E.sm,
                              width: s.E.sm,
                              children: f,
                          }),
                          (0, i.jsx)("span", { className: c.qS }),
                      ],
                  })
                : f,
        }),
    });
});
