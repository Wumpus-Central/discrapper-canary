n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    a = n(990078),
    r = n(614820),
    o = n(862482),
    u = n(781696),
    d = n(573435),
    c = n(270082);
function m(e) {
    let {
            children: t,
            onContextMenu: n,
            onClick: s,
            onMouseDown: a,
            disabled: r,
            icon: u,
            iconForeground: m,
            innerClassName: h,
            className: p,
            redGlow: f,
            onMouseEnter: g,
            onMouseLeave: A,
            "aria-label": x,
            "aria-checked": C,
            role: v,
            plated: E,
            ref: T,
        } = e,
        j =
            "function" == typeof u
                ? (0, l.jsx)(u, { width: 20, height: 20, size: "custom", colorClass: m ?? "", color: "currentColor" })
                : u;
    return (0, l.jsxs)(o.$n, {
        "data-migration-pending": !0,
        "aria-label": x,
        buttonRef: T,
        look: o.$n.Looks.BLANK,
        size: o.$n.Sizes.NONE,
        disabled: r,
        innerClassName: h,
        wrapperClassName: i()(c.x6, p),
        className: i()(c.x6, p, { [c.Xr]: f, [c.r9]: r, [c.Sn]: !r, [c.ZQ]: E, [c.OH]: f && E }),
        onClick: (e) => {
            null != s && s(e);
        },
        onMouseDown: a,
        onMouseEnter: g,
        onMouseLeave: A,
        onContextMenu: n,
        role: v,
        "aria-checked": C,
        focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
        children: [
            null != t ? (0, l.jsx)(d.Ay, { width: 20, height: 20, mask: d.Ay.Masks.PANEL_BUTTON, children: j }) : j,
            t,
        ],
    });
}
let h = function (e) {
    if (null == e.tooltipType) {
        let {
                tooltipText: t,
                tooltipForceOpen: n,
                tooltipShouldShow: s,
                tooltipPositionKey: i,
                "aria-label": o,
                ...u
            } = e,
            d = (0, r.O)(t),
            c = o ?? d;
        return (0, l.jsx)(a.m, {
            text: t,
            forceOpen: n,
            shouldShow: s,
            positionKey: i,
            ariaHidden: c === d,
            children: (0, l.jsx)(m, { ...u, "aria-label": c }),
        });
    }
    {
        let {
            tooltipText: t,
            tooltipForceOpen: n,
            tooltipShouldShow: s,
            tooltipPositionKey: i,
            onClick: a,
            onMouseEnter: r,
            onMouseLeave: o,
            onContextMenu: d,
            onFocus: h,
            onBlur: p,
            "aria-label": f,
            ...g
        } = e;
        return (0, l.jsx)(u.ST, {
            "data-migration-pending": !0,
            tooltipClassName: c.RF,
            tooltipContentClassName: c.In,
            "aria-label": f,
            forceOpen: n,
            shouldShow: s,
            color: u.oM.GREEN,
            positionKeyStemOverride: i,
            text: t,
            children: (e) => {
                let {
                    onClick: t,
                    onMouseEnter: n,
                    onMouseLeave: s,
                    onContextMenu: i,
                    onFocus: u,
                    onBlur: c,
                    "aria-label": f,
                } = e;
                return (0, l.jsx)(m, {
                    onClick: (e) => {
                        t?.(), a?.(e);
                    },
                    onMouseEnter: () => {
                        n?.(), r?.();
                    },
                    onMouseLeave: () => {
                        s?.(), o?.();
                    },
                    onContextMenu: (e) => {
                        i?.(), d?.(e);
                    },
                    onFocus: () => {
                        u?.(), h?.();
                    },
                    onBlur: () => {
                        c?.(), p?.();
                    },
                    "aria-label": f,
                    ...g,
                });
            },
        });
    }
};
