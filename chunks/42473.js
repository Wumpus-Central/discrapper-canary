n.d(t, { A: () => h });
var i = n(477900);
n(582128);
var l = n(503698),
    a = n.n(l),
    s = n(84571),
    r = n(862482),
    o = n(866665),
    d = n(900002),
    c = n(573435),
    u = n(484555);
function m(e) {
    let {
            children: t,
            onContextMenu: n,
            onClick: l,
            onMouseDown: s,
            disabled: o,
            icon: d,
            iconForeground: m,
            innerClassName: h,
            className: f,
            redGlow: p,
            onMouseEnter: g,
            onMouseLeave: A,
            "aria-label": x,
            "aria-checked": v,
            role: E,
            plated: C,
            ref: _,
        } = e,
        I =
            "function" == typeof d
                ? (0, i.jsx)(d, { width: 20, height: 20, size: "custom", colorClass: m ?? "", color: "currentColor" })
                : d;
    return (0, i.jsxs)(r.$n, {
        "data-migration-pending": !0,
        "aria-label": x,
        buttonRef: _,
        look: r.$n.Looks.BLANK,
        size: r.$n.Sizes.NONE,
        disabled: o,
        innerClassName: h,
        wrapperClassName: a()(u.x6, f),
        className: a()(u.x6, f, { [u.Xr]: p, [u.r9]: o, [u.Sn]: !o, [u.ZQ]: C, [u.OH]: p && C }),
        onClick: (e) => {
            null != l && l(e);
        },
        onMouseDown: s,
        onMouseEnter: g,
        onMouseLeave: A,
        onContextMenu: n,
        role: E,
        "aria-checked": v,
        focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
        children: [
            null != t ? (0, i.jsx)(c.Ay, { width: 20, height: 20, mask: c.Ay.Masks.PANEL_BUTTON, children: I }) : I,
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
                "aria-label": r,
                ...d
            } = e,
            c = (0, s.O)(t),
            u = r ?? c;
        return (0, i.jsx)(o.m, {
            text: t,
            forceOpen: n,
            shouldShow: l,
            positionKey: a,
            ariaHidden: u === c,
            children: (0, i.jsx)(m, { ...d, "aria-label": u }),
        });
    }
    {
        let {
            tooltipText: t,
            tooltipForceOpen: n,
            tooltipShouldShow: l,
            tooltipPositionKey: a,
            onClick: s,
            onMouseEnter: r,
            onMouseLeave: o,
            onContextMenu: c,
            onFocus: h,
            onBlur: f,
            "aria-label": p,
            ...g
        } = e;
        return (0, i.jsx)(d.ST, {
            "data-migration-pending": !0,
            tooltipClassName: u.RF,
            tooltipContentClassName: u.In,
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
                    onBlur: u,
                    "aria-label": p,
                } = e;
                return (0, i.jsx)(m, {
                    onClick: (e) => {
                        (t?.(), s?.(e));
                    },
                    onMouseEnter: () => {
                        (n?.(), r?.());
                    },
                    onMouseLeave: () => {
                        (l?.(), o?.());
                    },
                    onContextMenu: (e) => {
                        (a?.(), c?.(e));
                    },
                    onFocus: () => {
                        (d?.(), h?.());
                    },
                    onBlur: () => {
                        (u?.(), f?.());
                    },
                    "aria-label": p,
                    ...g,
                });
            },
        });
    }
};
