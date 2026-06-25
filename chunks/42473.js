"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(614820),
    l = n(862482),
    u = n(781696),
    c = n(573435),
    d = n(406594);
function _(e) {
    let {
            children: t,
            onContextMenu: n,
            onClick: r,
            onMouseDown: a,
            disabled: o,
            icon: u,
            iconForeground: _,
            innerClassName: h,
            className: f,
            redGlow: p,
            onMouseEnter: E,
            onMouseLeave: m,
            "aria-label": g,
            "aria-checked": A,
            role: I,
            plated: T,
            ref: S,
        } = e,
        y =
            "function" == typeof u
                ? (0, i.jsx)(u, { width: 20, height: 20, size: "custom", colorClass: _ ?? "", color: "currentColor" })
                : u;
    return (0, i.jsxs)(l.$n, {
        "data-migration-pending": !0,
        "aria-label": g,
        buttonRef: S,
        look: l.$n.Looks.BLANK,
        size: l.$n.Sizes.NONE,
        disabled: o,
        innerClassName: h,
        wrapperClassName: s()(d.x6, f),
        className: s()(d.x6, f, { [d.Xr]: p, [d.r9]: o, [d.Sn]: !o, [d.ZQ]: T, [d.OH]: p && T }),
        onClick: (e) => {
            null != r && r(e);
        },
        onMouseDown: a,
        onMouseEnter: E,
        onMouseLeave: m,
        onContextMenu: n,
        role: I,
        "aria-checked": A,
        focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
        children: [
            null != t ? (0, i.jsx)(c.Ay, { width: 20, height: 20, mask: c.Ay.Masks.PANEL_BUTTON, children: y }) : y,
            t,
        ],
    });
}
let h = function (e) {
    if (null == e.tooltipType) {
        let {
                tooltipText: t,
                tooltipForceOpen: n,
                tooltipShouldShow: r,
                tooltipPositionKey: s,
                "aria-label": l,
                ...u
            } = e,
            c = (0, o.O)(t),
            d = l ?? c;
        return (0, i.jsx)(a.m, {
            text: t,
            forceOpen: n,
            shouldShow: r,
            positionKey: s,
            ariaHidden: d === c,
            children: (0, i.jsx)(_, { ...u, "aria-label": d }),
        });
    }
    {
        let {
            tooltipText: t,
            tooltipForceOpen: n,
            tooltipShouldShow: r,
            tooltipPositionKey: s,
            onClick: a,
            onMouseEnter: o,
            onMouseLeave: l,
            onContextMenu: c,
            onFocus: h,
            onBlur: f,
            "aria-label": p,
            ...E
        } = e;
        return (0, i.jsx)(u.ST, {
            "data-migration-pending": !0,
            tooltipClassName: d.RF,
            tooltipContentClassName: d.In,
            "aria-label": p,
            forceOpen: n,
            shouldShow: r,
            color: u.oM.GREEN,
            positionKeyStemOverride: s,
            text: t,
            children: (e) => {
                let {
                    onClick: t,
                    onMouseEnter: n,
                    onMouseLeave: r,
                    onContextMenu: s,
                    onFocus: u,
                    onBlur: d,
                    "aria-label": p,
                } = e;
                return (0, i.jsx)(_, {
                    onClick: (e) => {
                        t?.(), a?.(e);
                    },
                    onMouseEnter: () => {
                        n?.(), o?.();
                    },
                    onMouseLeave: () => {
                        r?.(), l?.();
                    },
                    onContextMenu: (e) => {
                        s?.(), c?.(e);
                    },
                    onFocus: () => {
                        u?.(), h?.();
                    },
                    onBlur: () => {
                        d?.(), f?.();
                    },
                    "aria-label": p,
                    ...E,
                });
            },
        });
    }
};
