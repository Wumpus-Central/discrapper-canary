n.d(t, { A: () => h });
var i = n(477900);
n(582128);
var l = n(503698),
    a = n.n(l),
    r = n(84571),
    s = n(862482),
    o = n(866665),
    d = n(900002),
    u = n(573435),
    c = n(484555);
function m(e) {
    let {
            children: t,
            onContextMenu: n,
            onClick: l,
            onMouseDown: r,
            disabled: o,
            icon: d,
            iconForeground: m,
            innerClassName: h,
            className: f,
            redGlow: p,
            onMouseEnter: g,
            onMouseLeave: A,
            "aria-label": v,
            "aria-checked": x,
            role: E,
            plated: C,
            ref: _,
        } = e,
        T =
            "function" == typeof d
                ? (0, i.jsx)(d, { width: 20, height: 20, size: "custom", colorClass: m ?? "", color: "currentColor" })
                : d;
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
        role: E,
        "aria-checked": x,
        focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
        children: [
            null != t ? (0, i.jsx)(u.Ay, { width: 20, height: 20, mask: u.Ay.Masks.PANEL_BUTTON, children: T }) : T,
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
                ...d
            } = e,
            u = (0, r.O)(t),
            c = s ?? u;
        return (0, i.jsx)(o.m, {
            text: t,
            forceOpen: n,
            shouldShow: l,
            positionKey: a,
            ariaHidden: c === u,
            children: (0, i.jsx)(m, { ...d, "aria-label": c }),
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
            onContextMenu: u,
            onFocus: h,
            onBlur: f,
            "aria-label": p,
            ...g
        } = e;
        return (0, i.jsx)(d.ST, {
            "data-migration-pending": !0,
            tooltipClassName: c.RF,
            tooltipContentClassName: c.In,
            "aria-label": p,
            forceOpen: n,
            shouldShow: l,
            color: d.oM.GREEN,
            positionKeyStemOverride: a,
            text: t,
            children: (e) => {
                let {
                    onClick: t,
                    onMouseEnter: n,
                    onMouseLeave: l,
                    onContextMenu: a,
                    onFocus: d,
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
                        (a?.(), u?.(e));
                    },
                    onFocus: () => {
                        (d?.(), h?.());
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
