n.d(t, { A: () => p });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(990078),
    o = n(614820),
    u = n(862482),
    c = n(781696),
    d = n(573435),
    m = n(270082);
let h = s.forwardRef(function (e, t) {
        let {
                children: n,
                onContextMenu: s,
                onClick: i,
                onMouseDown: r,
                disabled: o,
                icon: c,
                iconForeground: h,
                innerClassName: p,
                className: f,
                redGlow: g,
                onMouseEnter: x,
                onMouseLeave: A,
                "aria-label": C,
                "aria-checked": v,
                role: E,
                plated: T,
            } = e,
            j =
                "function" == typeof c
                    ? (0, l.jsx)(c, {
                          width: 20,
                          height: 20,
                          size: "custom",
                          colorClass: h ?? "",
                          color: "currentColor",
                      })
                    : c;
        return (0, l.jsxs)(u.$n, {
            "data-migration-pending": !0,
            "aria-label": C,
            buttonRef: t,
            look: u.$n.Looks.BLANK,
            size: u.$n.Sizes.NONE,
            disabled: o,
            innerClassName: p,
            wrapperClassName: a()(m.x6, f),
            className: a()(m.x6, f, { [m.Xr]: g, [m.r9]: o, [m.Sn]: !o, [m.ZQ]: T, [m.OH]: g && T }),
            onClick: (e) => {
                null != i && i(e);
            },
            onMouseDown: r,
            onMouseEnter: x,
            onMouseLeave: A,
            onContextMenu: s,
            role: E,
            "aria-checked": v,
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
                    "aria-label": u,
                    ...c
                } = e,
                d = (0, o.O)(n),
                m = u ?? d;
            return (0, l.jsx)(r.m, {
                text: n,
                forceOpen: s,
                shouldShow: i,
                positionKey: a,
                ariaHidden: m === d,
                children: (0, l.jsx)(h, { ...c, "aria-label": m, ref: t }),
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
                onMouseLeave: u,
                onContextMenu: d,
                onFocus: p,
                onBlur: f,
                "aria-label": g,
                ...x
            } = e;
            return (0, l.jsx)(c.ST, {
                "data-migration-pending": !0,
                tooltipClassName: m.RF,
                tooltipContentClassName: m.In,
                "aria-label": g,
                forceOpen: s,
                shouldShow: i,
                color: c.oM.GREEN,
                positionKeyStemOverride: a,
                text: n,
                children: (e) => {
                    let {
                        onClick: n,
                        onMouseEnter: s,
                        onMouseLeave: i,
                        onContextMenu: a,
                        onFocus: c,
                        onBlur: m,
                        "aria-label": g,
                    } = e;
                    return (0, l.jsx)(h, {
                        onClick: (e) => {
                            n?.(), r?.(e);
                        },
                        onMouseEnter: () => {
                            s?.(), o?.();
                        },
                        onMouseLeave: () => {
                            i?.(), u?.();
                        },
                        onContextMenu: (e) => {
                            a?.(), d?.(e);
                        },
                        onFocus: () => {
                            c?.(), p?.();
                        },
                        onBlur: () => {
                            m?.(), f?.();
                        },
                        "aria-label": g,
                        ...x,
                        ref: t,
                    });
                },
            });
        }
    });
