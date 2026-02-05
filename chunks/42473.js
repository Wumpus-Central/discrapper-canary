n.d(t, { A: () => p });
var l = n(627968),
    s = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(435371),
    o = n(614820),
    u = n(421380),
    c = n(397927),
    d = n(573435),
    _ = n(310945);
let m = s.forwardRef(function (e, t) {
        let {
                children: n,
                onContextMenu: s,
                onClick: a,
                onMouseDown: r,
                disabled: o,
                icon: c,
                iconForeground: m,
                innerClassName: p,
                className: b,
                redGlow: A,
                onMouseEnter: f,
                onMouseLeave: x,
                "aria-label": E,
                "aria-checked": S,
                role: T,
                plated: g,
            } = e,
            C =
                "function" == typeof c
                    ? (0, l.jsx)(c, {
                          width: 20,
                          height: 20,
                          size: "custom",
                          colorClass: m ?? "",
                          color: "currentColor",
                      })
                    : c;
        return (0, l.jsxs)(u.$n, {
            "data-migration-pending": !0,
            "aria-label": E,
            buttonRef: t,
            look: u.$n.Looks.BLANK,
            size: u.$n.Sizes.NONE,
            disabled: o,
            innerClassName: p,
            wrapperClassName: i()(_.x6, b),
            className: i()(_.x6, b, { [_.Xr]: A, [_.r9]: o, [_.Sn]: !o, [_.ZQ]: g, [_.OH]: A && g }),
            onClick: (e) => {
                null != a && a(e);
            },
            onMouseDown: r,
            onMouseEnter: f,
            onMouseLeave: x,
            onContextMenu: s,
            role: T,
            "aria-checked": S,
            focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
            children: [
                null != n ? (0, l.jsx)(d.Ay, { width: 20, height: 20, mask: d.Ay.Masks.PANEL_BUTTON, children: C }) : C,
                n,
            ],
        });
    }),
    p = s.forwardRef(function (e, t) {
        if (null == e.tooltipType) {
            let {
                    tooltipText: n,
                    tooltipForceOpen: s,
                    tooltipShouldShow: a,
                    tooltipPositionKey: i,
                    "aria-label": u,
                    ...c
                } = e,
                d = (0, o.O)(n),
                _ = u ?? d;
            return (0, l.jsx)(r.m_, {
                text: n,
                forceOpen: s,
                shouldShow: a,
                positionKey: i,
                ariaHidden: _ === d,
                children: (0, l.jsx)(m, { ...c, "aria-label": _, ref: t }),
            });
        }
        {
            let {
                tooltipText: n,
                tooltipForceOpen: s,
                tooltipShouldShow: a,
                tooltipPositionKey: i,
                onClick: r,
                onMouseEnter: o,
                onMouseLeave: u,
                onContextMenu: d,
                onFocus: p,
                onBlur: b,
                "aria-label": A,
                ...f
            } = e;
            return (0, l.jsx)(c.STz, {
                "data-migration-pending": !0,
                tooltipClassName: _.RF,
                tooltipContentClassName: _.In,
                "aria-label": A,
                forceOpen: s,
                shouldShow: a,
                color: c.oMw.GREEN,
                positionKeyStemOverride: i,
                text: n,
                children: (e) => {
                    let {
                        onClick: n,
                        onMouseEnter: s,
                        onMouseLeave: a,
                        onContextMenu: i,
                        onFocus: c,
                        onBlur: _,
                        "aria-label": A,
                    } = e;
                    return (0, l.jsx)(m, {
                        onClick: (e) => {
                            n?.(), r?.(e);
                        },
                        onMouseEnter: () => {
                            s?.(), o?.();
                        },
                        onMouseLeave: () => {
                            a?.(), u?.();
                        },
                        onContextMenu: (e) => {
                            i?.(), d?.(e);
                        },
                        onFocus: () => {
                            c?.(), p?.();
                        },
                        onBlur: () => {
                            _?.(), b?.();
                        },
                        "aria-label": A,
                        ...f,
                        ref: t,
                    });
                },
            });
        }
    });
