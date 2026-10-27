n.d(t, { A: () => h });
var l = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    r = n(84571),
    s = n(862482),
    o = n(866665),
    u = n(900002),
    c = n(573435),
    d = n(484555);
function m(e) {
    let {
            children: t,
            onContextMenu: n,
            onClick: i,
            onMouseDown: r,
            disabled: o,
            icon: u,
            iconForeground: m,
            innerClassName: h,
            className: p,
            redGlow: f,
            onMouseEnter: g,
            onMouseLeave: A,
            "aria-label": v,
            "aria-checked": x,
            role: E,
            plated: C,
            ref: _,
        } = e,
        T =
            "function" == typeof u
                ? (0, l.jsx)(u, { width: 20, height: 20, size: "custom", colorClass: m ?? "", color: "currentColor" })
                : u;
    return (0, l.jsxs)(s.$n, {
        "data-migration-pending": !0,
        "aria-label": v,
        buttonRef: _,
        look: s.$n.Looks.BLANK,
        size: s.$n.Sizes.NONE,
        disabled: o,
        innerClassName: h,
        wrapperClassName: a()(d.x6, p),
        className: a()(d.x6, p, { [d.Xr]: f, [d.r9]: o, [d.Sn]: !o, [d.ZQ]: C, [d.OH]: f && C }),
        onClick: (e) => {
            null != i && i(e);
        },
        onMouseDown: r,
        onMouseEnter: g,
        onMouseLeave: A,
        onContextMenu: n,
        role: E,
        "aria-checked": x,
        focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
        children: [
            null != t ? (0, l.jsx)(c.Ay, { width: 20, height: 20, mask: c.Ay.Masks.PANEL_BUTTON, children: T }) : T,
            t,
        ],
    });
}
let h = function (e) {
    if (null == e.tooltipType) {
        let {
                tooltipText: t,
                tooltipForceOpen: n,
                tooltipShouldShow: i,
                tooltipPositionKey: a,
                "aria-label": s,
                ...u
            } = e,
            c = (0, r.O)(t),
            d = s ?? c;
        return (0, l.jsx)(o.m, {
            text: t,
            forceOpen: n,
            shouldShow: i,
            positionKey: a,
            ariaHidden: d === c,
            children: (0, l.jsx)(m, { ...u, "aria-label": d }),
        });
    }
    {
        let {
            tooltipText: t,
            tooltipForceOpen: n,
            tooltipShouldShow: i,
            tooltipPositionKey: a,
            onClick: r,
            onMouseEnter: s,
            onMouseLeave: o,
            onContextMenu: c,
            onFocus: h,
            onBlur: p,
            "aria-label": f,
            ...g
        } = e;
        return (0, l.jsx)(u.ST, {
            "data-migration-pending": !0,
            tooltipClassName: d.RF,
            tooltipContentClassName: d.In,
            "aria-label": f,
            forceOpen: n,
            shouldShow: i,
            color: u.oM.GREEN,
            positionKeyStemOverride: a,
            text: t,
            children: (e) => {
                let {
                    onClick: t,
                    onMouseEnter: n,
                    onMouseLeave: i,
                    onContextMenu: a,
                    onFocus: u,
                    onBlur: d,
                    "aria-label": f,
                } = e;
                return (0, l.jsx)(m, {
                    onClick: (e) => {
                        (t?.(), r?.(e));
                    },
                    onMouseEnter: () => {
                        (n?.(), s?.());
                    },
                    onMouseLeave: () => {
                        (i?.(), o?.());
                    },
                    onContextMenu: (e) => {
                        (a?.(), c?.(e));
                    },
                    onFocus: () => {
                        (u?.(), h?.());
                    },
                    onBlur: () => {
                        (d?.(), p?.());
                    },
                    "aria-label": f,
                    ...g,
                });
            },
        });
    }
};
