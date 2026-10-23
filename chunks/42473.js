n.d(t, { A: () => h });
var i = n(477900);
n(582128);
var l = n(503698),
    a = n.n(l),
    r = n(84571),
    s = n(862482),
    o = n(866665),
    u = n(900002),
    d = n(573435),
    c = n(484555);
function m(e) {
    let {
            children: t,
            onContextMenu: n,
            onClick: l,
            onMouseDown: r,
            disabled: o,
            icon: u,
            iconForeground: m,
            innerClassName: h,
            className: f,
            redGlow: p,
            onMouseEnter: g,
            onMouseLeave: A,
            "aria-label": v,
            "aria-checked": E,
            role: x,
            plated: C,
            ref: _,
        } = e,
        T =
            "function" == typeof u
                ? (0, i.jsx)(u, { width: 20, height: 20, size: "custom", colorClass: m ?? "", color: "currentColor" })
                : u;
    return (0, i.jsxs)(s.$n, {
        "data-migration-pending": !0,
        "aria-label": v,
        buttonRef: _,
        look: s.$n.Looks.BLANK,
        size: s.$n.Sizes.NONE,
        disabled: o,
        innerClassName: h,
        wrapperClassName: a()(c.x6, f),
        className: a()(c.x6, f, { [c.Xr]: p, [c.r9]: o, [c.Sn]: !o, [c.ZQ]: C, [c.OH]: p && C }),
        onClick: (e) => {
            null != l && l(e);
        },
        onMouseDown: r,
        onMouseEnter: g,
        onMouseLeave: A,
        onContextMenu: n,
        role: x,
        "aria-checked": E,
        focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
        children: [
            null != t ? (0, i.jsx)(d.Ay, { width: 20, height: 20, mask: d.Ay.Masks.PANEL_BUTTON, children: T }) : T,
            t,
        ],
    });
}
let h = function (e) {
    if (null == e.tooltipType) {
        let {
                tooltipText: t,
                tooltipForceOpen: n,
                tooltipShouldShow: l,
                tooltipPositionKey: a,
                "aria-label": s,
                ...u
            } = e,
            d = (0, r.O)(t),
            c = s ?? d;
        return (0, i.jsx)(o.m, {
            text: t,
            forceOpen: n,
            shouldShow: l,
            positionKey: a,
            ariaHidden: c === d,
            children: (0, i.jsx)(m, { ...u, "aria-label": c }),
        });
    }
    {
        let {
            tooltipText: t,
            tooltipForceOpen: n,
            tooltipShouldShow: l,
            tooltipPositionKey: a,
            onClick: r,
            onMouseEnter: s,
            onMouseLeave: o,
            onContextMenu: d,
            onFocus: h,
            onBlur: f,
            "aria-label": p,
            ...g
        } = e;
        return (0, i.jsx)(u.ST, {
            "data-migration-pending": !0,
            tooltipClassName: c.RF,
            tooltipContentClassName: c.In,
            "aria-label": p,
            forceOpen: n,
            shouldShow: l,
            color: u.oM.GREEN,
            positionKeyStemOverride: a,
            text: t,
            children: (e) => {
                let {
                    onClick: t,
                    onMouseEnter: n,
                    onMouseLeave: l,
                    onContextMenu: a,
                    onFocus: u,
                    onBlur: c,
                    "aria-label": p,
                } = e;
                return (0, i.jsx)(m, {
                    onClick: (e) => {
                        (t?.(), r?.(e));
                    },
                    onMouseEnter: () => {
                        (n?.(), s?.());
                    },
                    onMouseLeave: () => {
                        (l?.(), o?.());
                    },
                    onContextMenu: (e) => {
                        (a?.(), d?.(e));
                    },
                    onFocus: () => {
                        (u?.(), h?.());
                    },
                    onBlur: () => {
                        (c?.(), f?.());
                    },
                    "aria-label": p,
                    ...g,
                });
            },
        });
    }
};
