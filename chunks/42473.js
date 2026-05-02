n.d(t, { A: () => p });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(990078),
    o = n(614820),
    c = n(862482),
    u = n(781696),
    d = n(573435),
    h = n(270082);
let m = s.forwardRef(function (e, t) {
        let {
                children: n,
                onContextMenu: s,
                onClick: i,
                onMouseDown: r,
                disabled: o,
                icon: u,
                iconForeground: m,
                innerClassName: p,
                className: f,
                redGlow: g,
                onMouseEnter: A,
                onMouseLeave: x,
                "aria-label": C,
                "aria-checked": E,
                role: v,
                plated: T,
            } = e,
            j =
                "function" == typeof u
                    ? (0, l.jsx)(u, {
                          width: 20,
                          height: 20,
                          size: "custom",
                          colorClass: m ?? "",
                          color: "currentColor",
                      })
                    : u;
        return (0, l.jsxs)(c.$n, {
            "data-migration-pending": !0,
            "aria-label": C,
            buttonRef: t,
            look: c.$n.Looks.BLANK,
            size: c.$n.Sizes.NONE,
            disabled: o,
            innerClassName: p,
            wrapperClassName: a()(h.x6, f),
            className: a()(h.x6, f, { [h.Xr]: g, [h.r9]: o, [h.Sn]: !o, [h.ZQ]: T, [h.OH]: g && T }),
            onClick: (e) => {
                null != i && i(e);
            },
            onMouseDown: r,
            onMouseEnter: A,
            onMouseLeave: x,
            onContextMenu: s,
            role: v,
            "aria-checked": E,
            focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
            children: [
                null != n ? (0, l.jsx)(d.Ay, { width: 20, height: 20, mask: d.Ay.Masks.PANEL_BUTTON, children: j }) : j,
                n,
            ],
        });
    }),
    p = s.forwardRef(function (e, t) {
        if (null == e.tooltipType) {
            let {
                    tooltipText: n,
                    tooltipForceOpen: s,
                    tooltipShouldShow: i,
                    tooltipPositionKey: a,
                    "aria-label": c,
                    ...u
                } = e,
                d = (0, o.O)(n),
                h = c ?? d;
            return (0, l.jsx)(r.m, {
                text: n,
                forceOpen: s,
                shouldShow: i,
                positionKey: a,
                ariaHidden: h === d,
                children: (0, l.jsx)(m, { ...u, "aria-label": h, ref: t }),
            });
        }
        {
            let {
                tooltipText: n,
                tooltipForceOpen: s,
                tooltipShouldShow: i,
                tooltipPositionKey: a,
                onClick: r,
                onMouseEnter: o,
                onMouseLeave: c,
                onContextMenu: d,
                onFocus: p,
                onBlur: f,
                "aria-label": g,
                ...A
            } = e;
            return (0, l.jsx)(u.ST, {
                "data-migration-pending": !0,
                tooltipClassName: h.RF,
                tooltipContentClassName: h.In,
                "aria-label": g,
                forceOpen: s,
                shouldShow: i,
                color: u.oM.GREEN,
                positionKeyStemOverride: a,
                text: n,
                children: (e) => {
                    let {
                        onClick: n,
                        onMouseEnter: s,
                        onMouseLeave: i,
                        onContextMenu: a,
                        onFocus: u,
                        onBlur: h,
                        "aria-label": g,
                    } = e;
                    return (0, l.jsx)(m, {
                        onClick: (e) => {
                            n?.(), r?.(e);
                        },
                        onMouseEnter: () => {
                            s?.(), o?.();
                        },
                        onMouseLeave: () => {
                            i?.(), c?.();
                        },
                        onContextMenu: (e) => {
                            a?.(), d?.(e);
                        },
                        onFocus: () => {
                            u?.(), p?.();
                        },
                        onBlur: () => {
                            h?.(), f?.();
                        },
                        "aria-label": g,
                        ...A,
                        ref: t,
                    });
                },
            });
        }
    });
