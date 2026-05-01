n.d(t, { A: () => E });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(319354),
    o = n(990078),
    d = n(939249),
    c = n(573435),
    _ = n(99553);
let E = a.forwardRef(function (e, t) {
    let {
            icon: n,
            onClick: a,
            selected: r = !1,
            showBadge: E = !1,
            disabled: u = !1,
            color: A,
            colorClass: I,
            tooltip: T,
            "aria-label": h,
            "aria-expanded": S,
            "aria-haspopup": N,
            "data-jump-section": f,
        } = e,
        p = (0, i.jsx)(n, { size: "sm", color: A ?? "currentColor", colorClass: I });
    return (0, i.jsx)(o.m, {
        position: "bottom",
        text: T,
        ariaHidden: !0,
        children: (0, i.jsx)(d.D, {
            innerRef: t,
            tag: "div",
            onClick: u ? void 0 : a,
            className: s()(_.vk, { [_.wH]: r, [_.r9]: u }),
            role: "button",
            "aria-label": null != h ? h : T,
            "aria-haspopup": N,
            "aria-expanded": S,
            "data-jump-section": f,
            "aria-disabled": u,
            children: E
                ? (0, i.jsxs)("div", {
                      className: _.fC,
                      children: [
                          (0, i.jsx)(c.Ay, {
                              mask: c.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                              height: l.E.sm,
                              width: l.E.sm,
                              children: p,
                          }),
                          (0, i.jsx)("span", { className: _.qS }),
                      ],
                  })
                : p,
        }),
    });
});
