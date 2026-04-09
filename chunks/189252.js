n.d(t, { A: () => A });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(319354),
    o = n(435371),
    d = n(397927),
    c = n(573435),
    u = n(173457);
let A = a.forwardRef(function (e, t) {
    let {
            icon: n,
            onClick: a,
            selected: r = !1,
            showBadge: A = !1,
            disabled: _ = !1,
            color: h,
            colorClass: m,
            tooltip: g,
            "aria-label": p,
            "aria-expanded": E,
            "aria-haspopup": I,
            "data-jump-section": f,
        } = e,
        C = (0, i.jsx)(n, { size: "sm", color: h ?? "currentColor", colorClass: m });
    return (0, i.jsx)(o.m_, {
        position: "bottom",
        text: g,
        ariaHidden: !0,
        children: (0, i.jsx)(d.DUT, {
            innerRef: t,
            tag: "div",
            onClick: _ ? void 0 : a,
            className: l()(u.vk, { [u.wH]: r, [u.r9]: _ }),
            role: "button",
            "aria-label": null != p ? p : g,
            "aria-haspopup": I,
            "aria-expanded": E,
            "data-jump-section": f,
            "aria-disabled": _,
            children: A
                ? (0, i.jsxs)("div", {
                      className: u.fC,
                      children: [
                          (0, i.jsx)(c.Ay, {
                              mask: c.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                              height: s.E.sm,
                              width: s.E.sm,
                              children: C,
                          }),
                          (0, i.jsx)("span", { className: u.qS }),
                      ],
                  })
                : C,
        }),
    });
});
