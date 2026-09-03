n.d(t, { A: () => m });
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
function h(e) {
    let {
            children: t,
            onContextMenu: n,
            onClick: l,
            onMouseDown: s,
            disabled: o,
            icon: d,
            iconForeground: h,
            innerClassName: m,
            className: p,
            redGlow: g,
            onMouseEnter: f,
            onMouseLeave: A,
            "aria-label": x,
            "aria-checked": v,
            role: C,
            plated: E,
            ref: T,
        } = e,
        _ =
            "function" == typeof d
                ? (0, i.jsx)(d, { width: 20, height: 20, size: "custom", colorClass: h ?? "", color: "currentColor" })
                : d;
    return (0, i.jsxs)(r.$n, {
        "data-migration-pending": !0,
        "aria-label": x,
        buttonRef: T,
        look: r.$n.Looks.BLANK,
        size: r.$n.Sizes.NONE,
        disabled: o,
        innerClassName: m,
        wrapperClassName: a()(u.x6, p),
        className: a()(u.x6, p, { [u.Xr]: g, [u.r9]: o, [u.Sn]: !o, [u.ZQ]: E, [u.OH]: g && E }),
        onClick: (e) => {
            null != l && l(e);
        },
        onMouseDown: s,
        onMouseEnter: f,
        onMouseLeave: A,
        onContextMenu: n,
        role: C,
        "aria-checked": v,
        focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
        children: [
            null != t ? (0, i.jsx)(c.Ay, { width: 20, height: 20, mask: c.Ay.Masks.PANEL_BUTTON, children: _ }) : _,
            t,
        ],
    });
}
let m = function (e) {
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
            children: (0, i.jsx)(h, { ...d, "aria-label": u }),
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
            onFocus: m,
            onBlur: p,
            "aria-label": g,
            ...f
        } = e;
        return (0, i.jsx)(d.ST, {
            "data-migration-pending": !0,
            tooltipClassName: u.RF,
            tooltipContentClassName: u.In,
            "aria-label": g,
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
                    "aria-label": g,
                } = e;
                return (0, i.jsx)(h, {
                    onClick: (e) => {
                        t?.(), s?.(e);
                    },
                    onMouseEnter: () => {
                        n?.(), r?.();
                    },
                    onMouseLeave: () => {
                        l?.(), o?.();
                    },
                    onContextMenu: (e) => {
                        a?.(), c?.(e);
                    },
                    onFocus: () => {
                        d?.(), m?.();
                    },
                    onBlur: () => {
                        u?.(), p?.();
                    },
                    "aria-label": g,
                    ...f,
                });
            },
        });
    }
};
