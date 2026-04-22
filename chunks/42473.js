n.d(t, { A: () => f });
var l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    i = n(990078),
    o = n(614820),
    u = n(862482),
    d = n(781696),
    c = n(573435),
    p = n(270082);
let m = s.forwardRef(function (e, t) {
        let {
                children: n,
                onContextMenu: s,
                onClick: a,
                onMouseDown: i,
                disabled: o,
                icon: d,
                iconForeground: m,
                innerClassName: f,
                className: A,
                redGlow: v,
                onMouseEnter: h,
                onMouseLeave: E,
                "aria-label": g,
                "aria-checked": x,
                role: S,
                plated: T,
            } = e,
            _ =
                "function" == typeof d
                    ? (0, l.jsx)(d, {
                          width: 20,
                          height: 20,
                          size: "custom",
                          colorClass: m ?? "",
                          color: "currentColor",
                      })
                    : d;
        return (0, l.jsxs)(u.$n, {
            "data-migration-pending": !0,
            "aria-label": g,
            buttonRef: t,
            look: u.$n.Looks.BLANK,
            size: u.$n.Sizes.NONE,
            disabled: o,
            innerClassName: f,
            wrapperClassName: r()(p.x6, A),
            className: r()(p.x6, A, { [p.Xr]: v, [p.r9]: o, [p.Sn]: !o, [p.ZQ]: T, [p.OH]: v && T }),
            onClick: (e) => {
                null != a && a(e);
            },
            onMouseDown: i,
            onMouseEnter: h,
            onMouseLeave: E,
            onContextMenu: s,
            role: S,
            "aria-checked": x,
            focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
            children: [
                null != n ? (0, l.jsx)(c.Ay, { width: 20, height: 20, mask: c.Ay.Masks.PANEL_BUTTON, children: _ }) : _,
                n,
            ],
        });
    }),
    f = s.forwardRef(function (e, t) {
        if (null == e.tooltipType) {
            let {
                    tooltipText: n,
                    tooltipForceOpen: s,
                    tooltipShouldShow: a,
                    tooltipPositionKey: r,
                    "aria-label": u,
                    ...d
                } = e,
                c = (0, o.O)(n),
                p = u ?? c;
            return (0, l.jsx)(i.m, {
                text: n,
                forceOpen: s,
                shouldShow: a,
                positionKey: r,
                ariaHidden: p === c,
                children: (0, l.jsx)(m, { ...d, "aria-label": p, ref: t }),
            });
        }
        {
            let {
                tooltipText: n,
                tooltipForceOpen: s,
                tooltipShouldShow: a,
                tooltipPositionKey: r,
                onClick: i,
                onMouseEnter: o,
                onMouseLeave: u,
                onContextMenu: c,
                onFocus: f,
                onBlur: A,
                "aria-label": v,
                ...h
            } = e;
            return (0, l.jsx)(d.ST, {
                "data-migration-pending": !0,
                tooltipClassName: p.RF,
                tooltipContentClassName: p.In,
                "aria-label": v,
                forceOpen: s,
                shouldShow: a,
                color: d.oM.GREEN,
                positionKeyStemOverride: r,
                text: n,
                children: (e) => {
                    let {
                        onClick: n,
                        onMouseEnter: s,
                        onMouseLeave: a,
                        onContextMenu: r,
                        onFocus: d,
                        onBlur: p,
                        "aria-label": v,
                    } = e;
                    return (0, l.jsx)(m, {
                        onClick: (e) => {
                            n?.(), i?.(e);
                        },
                        onMouseEnter: () => {
                            s?.(), o?.();
                        },
                        onMouseLeave: () => {
                            a?.(), u?.();
                        },
                        onContextMenu: (e) => {
                            r?.(), c?.(e);
                        },
                        onFocus: () => {
                            d?.(), f?.();
                        },
                        onBlur: () => {
                            p?.(), A?.();
                        },
                        "aria-label": v,
                        ...h,
                        ref: t,
                    });
                },
            });
        }
    });
