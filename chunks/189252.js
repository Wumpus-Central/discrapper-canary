n.d(t, { A: () => u });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(319354),
    l = n(866665),
    o = n(939249),
    d = n(573435),
    c = n(428588);
let u = function (e) {
    let {
            icon: t,
            onClick: n,
            selected: r = !1,
            showBadge: u = !1,
            disabled: _ = !1,
            color: E,
            colorClass: A,
            tooltip: h,
            overlay: f,
            "aria-label": I,
            "aria-expanded": p,
            "aria-haspopup": T,
            "data-jump-section": m,
            ref: g,
        } = e,
        S = (0, i.jsx)(t, { size: "sm", color: E ?? "currentColor", colorClass: A });
    return (0, i.jsx)(l.m, {
        position: "bottom",
        text: h,
        ariaHidden: !0,
        children: (0, i.jsxs)(o.D, {
            innerRef: g,
            tag: "div",
            onClick: _ ? void 0 : n,
            className: a()(c.vk, { [c.wH]: r, [c.r9]: _ }),
            role: "button",
            "aria-label": null != I ? I : h,
            "aria-haspopup": T,
            "aria-expanded": p,
            "data-jump-section": m,
            "aria-disabled": _,
            children: [
                u
                    ? (0, i.jsxs)("div", {
                          className: c.fC,
                          children: [
                              (0, i.jsx)(d.Ay, {
                                  mask: d.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                  height: s.E.sm,
                                  width: s.E.sm,
                                  children: S,
                              }),
                              (0, i.jsx)("span", { className: c.qS }),
                          ],
                      })
                    : S,
                f,
            ],
        }),
    });
};
