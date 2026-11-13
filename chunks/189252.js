var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(319354),
    l = n(866665),
    o = n(939249),
    d = n(573435),
    c = n(428588);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    icon: t,
                    onClick: n,
                    selected: r = !1,
                    showBadge: u = !1,
                    disabled: _ = !1,
                    color: E,
                    colorClass: A,
                    tooltip: f,
                    tooltipKeyboardShortcut: h,
                    overlay: I,
                    "aria-label": p,
                    "aria-expanded": m,
                    "aria-haspopup": g,
                    "data-jump-section": T,
                    ref: S,
                } = e,
                N = (0, i.jsx)(t, { size: "sm", color: E ?? "currentColor", colorClass: A });
            return (0, i.jsx)(l.m, {
                position: "bottom",
                text: f,
                keyboardShortcut: h,
                ariaHidden: !0,
                children: (0, i.jsxs)(o.D, {
                    innerRef: S,
                    tag: "div",
                    onClick: _ ? void 0 : n,
                    className: a()(c.vk, { [c.wH]: r, [c.r9]: _ }),
                    role: "button",
                    "aria-label": null != p ? p : f,
                    "aria-haspopup": g,
                    "aria-expanded": m,
                    "data-jump-section": T,
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
                                          children: N,
                                      }),
                                      (0, i.jsx)("span", { className: c.qS }),
                                  ],
                              })
                            : N,
                        I,
                    ],
                }),
            });
        },
    },
);
