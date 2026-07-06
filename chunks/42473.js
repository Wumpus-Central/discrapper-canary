n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(990078),
    r = n(614820),
    o = n(862482),
    d = n(781696),
    c = n(573435),
    u = n(270082);
function h(e) {
    let {
            children: t,
            onContextMenu: n,
            onClick: l,
            onMouseDown: a,
            disabled: r,
            icon: d,
            iconForeground: h,
            innerClassName: p,
            className: m,
            redGlow: f,
            onMouseEnter: g,
            onMouseLeave: A,
            "aria-label": x,
            "aria-checked": v,
            role: E,
            plated: T,
            ref: C,
        } = e,
        _ =
            "function" == typeof d
                ? (0, i.jsx)(d, { width: 20, height: 20, size: "custom", colorClass: h ?? "", color: "currentColor" })
                : d;
    return (0, i.jsxs)(o.$n, {
        "data-migration-pending": !0,
        "aria-label": x,
        buttonRef: C,
        look: o.$n.Looks.BLANK,
        size: o.$n.Sizes.NONE,
        disabled: r,
        innerClassName: p,
        wrapperClassName: s()(u.x6, m),
        className: s()(u.x6, m, { [u.Xr]: f, [u.r9]: r, [u.Sn]: !r, [u.ZQ]: T, [u.OH]: f && T }),
        onClick: (e) => {
            null != l && l(e);
        },
        onMouseDown: a,
        onMouseEnter: g,
        onMouseLeave: A,
        onContextMenu: n,
        role: E,
        "aria-checked": v,
        focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
        children: [
            null != t ? (0, i.jsx)(c.Ay, { width: 20, height: 20, mask: c.Ay.Masks.PANEL_BUTTON, children: _ }) : _,
            t,
        ],
    });
}
let p = function (e) {
    if (null == e.tooltipType) {
        let {
                tooltipText: t,
                tooltipForceOpen: n,
                tooltipShouldShow: l,
                tooltipPositionKey: s,
                "aria-label": o,
                ...d
            } = e,
            c = (0, r.O)(t),
            u = o ?? c;
        return (0, i.jsx)(a.m, {
            text: t,
            forceOpen: n,
            shouldShow: l,
            positionKey: s,
            ariaHidden: u === c,
            children: (0, i.jsx)(h, { ...d, "aria-label": u }),
        });
    }
    {
        let {
            tooltipText: t,
            tooltipForceOpen: n,
            tooltipShouldShow: l,
            tooltipPositionKey: s,
            onClick: a,
            onMouseEnter: r,
            onMouseLeave: o,
            onContextMenu: c,
            onFocus: p,
            onBlur: m,
            "aria-label": f,
            ...g
        } = e;
        return (0, i.jsx)(d.ST, {
            "data-migration-pending": !0,
            tooltipClassName: u.RF,
            tooltipContentClassName: u.In,
            "aria-label": f,
            forceOpen: n,
            shouldShow: l,
            color: d.oM.GREEN,
            positionKeyStemOverride: s,
            text: t,
            children: (e) => {
                let {
                    onClick: t,
                    onMouseEnter: n,
                    onMouseLeave: l,
                    onContextMenu: s,
                    onFocus: d,
                    onBlur: u,
                    "aria-label": f,
                } = e;
                return (0, i.jsx)(h, {
                    onClick: (e) => {
                        t?.(), a?.(e);
                    },
                    onMouseEnter: () => {
                        n?.(), r?.();
                    },
                    onMouseLeave: () => {
                        l?.(), o?.();
                    },
                    onContextMenu: (e) => {
                        s?.(), c?.(e);
                    },
                    onFocus: () => {
                        d?.(), p?.();
                    },
                    onBlur: () => {
                        u?.(), m?.();
                    },
                    "aria-label": f,
                    ...g,
                });
            },
        });
    }
};
