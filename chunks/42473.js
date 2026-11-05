var i = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    a = n(84571),
    s = n(862482),
    o = n(866665),
    u = n(664343),
    c = n(573435),
    d = n(484555);
function m(e) {
    let {
            children: t,
            onContextMenu: n,
            onClick: l,
            onMouseDown: a,
            disabled: o,
            icon: u,
            iconForeground: m,
            innerClassName: f,
            className: p,
            redGlow: h,
            onMouseEnter: g,
            onMouseLeave: A,
            "aria-label": C,
            "aria-checked": E,
            role: x,
            plated: v,
            ref: _,
        } = e,
        y =
            "function" == typeof u
                ? (0, i.jsx)(u, { width: 20, height: 20, size: "custom", colorClass: m ?? "", color: "currentColor" })
                : u;
    return (0, i.jsxs)(s.$n, {
        "data-migration-pending": !0,
        "aria-label": C,
        buttonRef: _,
        look: s.$n.Looks.BLANK,
        size: s.$n.Sizes.NONE,
        disabled: o,
        innerClassName: f,
        wrapperClassName: r()(d.x6, p),
        className: r()(d.x6, p, { [d.Xr]: h, [d.r9]: o, [d.Sn]: !o, [d.ZQ]: v, [d.OH]: h && v }),
        onClick: (e) => {
            null != l && l(e);
        },
        onMouseDown: a,
        onMouseEnter: g,
        onMouseLeave: A,
        onContextMenu: n,
        role: x,
        "aria-checked": E,
        focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
        children: [
            null != t ? (0, i.jsx)(c.Ay, { width: 20, height: 20, mask: c.Ay.Masks.PANEL_BUTTON, children: y }) : y,
            t,
        ],
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            if (null == e.tooltipType) {
                let {
                        tooltipText: t,
                        tooltipForceOpen: n,
                        tooltipShouldShow: l,
                        tooltipPositionKey: r,
                        "aria-label": s,
                        ...u
                    } = e,
                    c = (0, a.O)(t),
                    d = s ?? c;
                return (0, i.jsx)(o.m, {
                    text: t,
                    forceOpen: n,
                    shouldShow: l,
                    positionKey: r,
                    ariaHidden: d === c,
                    children: (0, i.jsx)(m, { ...u, "aria-label": d }),
                });
            }
            {
                let {
                    tooltipText: t,
                    tooltipForceOpen: n,
                    tooltipShouldShow: l,
                    tooltipPositionKey: r,
                    onClick: a,
                    onMouseEnter: s,
                    onMouseLeave: o,
                    onContextMenu: c,
                    onFocus: f,
                    onBlur: p,
                    "aria-label": h,
                    ...g
                } = e;
                return (0, i.jsx)(u.ST, {
                    "data-migration-pending": !0,
                    tooltipClassName: d.RF,
                    tooltipContentClassName: d.In,
                    "aria-label": h,
                    forceOpen: n,
                    shouldShow: l,
                    color: u.oM.GREEN,
                    positionKeyStemOverride: r,
                    text: t,
                    children: (e) => {
                        let {
                            onClick: t,
                            onMouseEnter: n,
                            onMouseLeave: l,
                            onContextMenu: r,
                            onFocus: u,
                            onBlur: d,
                            "aria-label": h,
                        } = e;
                        return (0, i.jsx)(m, {
                            onClick: (e) => {
                                (t?.(), a?.(e));
                            },
                            onMouseEnter: () => {
                                (n?.(), s?.());
                            },
                            onMouseLeave: () => {
                                (l?.(), o?.());
                            },
                            onContextMenu: (e) => {
                                (r?.(), c?.(e));
                            },
                            onFocus: () => {
                                (u?.(), f?.());
                            },
                            onBlur: () => {
                                (d?.(), p?.());
                            },
                            "aria-label": h,
                            ...g,
                        });
                    },
                });
            }
        },
    },
);
