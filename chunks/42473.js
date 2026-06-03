n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(990078),
    r = n(614820),
    o = n(862482),
    u = n(781696),
    c = n(573435),
    d = n(270082);
function h(e) {
    let {
            children: t,
            onContextMenu: n,
            onClick: i,
            onMouseDown: a,
            disabled: r,
            icon: u,
            iconForeground: h,
            innerClassName: m,
            className: p,
            redGlow: f,
            onMouseEnter: g,
            onMouseLeave: A,
            "aria-label": x,
            "aria-checked": C,
            role: E,
            plated: v,
            ref: T,
        } = e,
        _ =
            "function" == typeof u
                ? (0, l.jsx)(u, { width: 20, height: 20, size: "custom", colorClass: h ?? "", color: "currentColor" })
                : u;
    return (0, l.jsxs)(o.$n, {
        "data-migration-pending": !0,
        "aria-label": x,
        buttonRef: T,
        look: o.$n.Looks.BLANK,
        size: o.$n.Sizes.NONE,
        disabled: r,
        innerClassName: m,
        wrapperClassName: s()(d.x6, p),
        className: s()(d.x6, p, { [d.Xr]: f, [d.r9]: r, [d.Sn]: !r, [d.ZQ]: v, [d.OH]: f && v }),
        onClick: (e) => {
            null != i && i(e);
        },
        onMouseDown: a,
        onMouseEnter: g,
        onMouseLeave: A,
        onContextMenu: n,
        role: E,
        "aria-checked": C,
        focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
        children: [
            null != t ? (0, l.jsx)(c.Ay, { width: 20, height: 20, mask: c.Ay.Masks.PANEL_BUTTON, children: _ }) : _,
            t,
        ],
    });
}
let m = function (e) {
    if (null == e.tooltipType) {
        let {
                tooltipText: t,
                tooltipForceOpen: n,
                tooltipShouldShow: i,
                tooltipPositionKey: s,
                "aria-label": o,
                ...u
            } = e,
            c = (0, r.O)(t),
            d = o ?? c;
        return (0, l.jsx)(a.m, {
            text: t,
            forceOpen: n,
            shouldShow: i,
            positionKey: s,
            ariaHidden: d === c,
            children: (0, l.jsx)(h, { ...u, "aria-label": d }),
        });
    }
    {
        let {
            tooltipText: t,
            tooltipForceOpen: n,
            tooltipShouldShow: i,
            tooltipPositionKey: s,
            onClick: a,
            onMouseEnter: r,
            onMouseLeave: o,
            onContextMenu: c,
            onFocus: m,
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
            positionKeyStemOverride: s,
            text: t,
            children: (e) => {
                let {
                    onClick: t,
                    onMouseEnter: n,
                    onMouseLeave: i,
                    onContextMenu: s,
                    onFocus: u,
                    onBlur: d,
                    "aria-label": f,
                } = e;
                return (0, l.jsx)(h, {
                    onClick: (e) => {
                        t?.(), a?.(e);
                    },
                    onMouseEnter: () => {
                        n?.(), r?.();
                    },
                    onMouseLeave: () => {
                        i?.(), o?.();
                    },
                    onContextMenu: (e) => {
                        s?.(), c?.(e);
                    },
                    onFocus: () => {
                        u?.(), m?.();
                    },
                    onBlur: () => {
                        d?.(), p?.();
                    },
                    "aria-label": f,
                    ...g,
                });
            },
        });
    }
};
