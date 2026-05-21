"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(614820),
    u = n(862482),
    c = n(781696),
    d = n(573435),
    _ = n(270082);
let f = r.forwardRef(function (e, t) {
        let {
                children: n,
                onContextMenu: r,
                onClick: s,
                onMouseDown: o,
                disabled: l,
                icon: c,
                iconForeground: f,
                innerClassName: h,
                className: p,
                redGlow: E,
                onMouseEnter: m,
                onMouseLeave: g,
                "aria-label": A,
                "aria-checked": I,
                role: T,
                plated: S,
            } = e,
            N =
                "function" == typeof c
                    ? (0, i.jsx)(c, {
                          width: 20,
                          height: 20,
                          size: "custom",
                          colorClass: f ?? "",
                          color: "currentColor",
                      })
                    : c;
        return (0, i.jsxs)(u.$n, {
            "data-migration-pending": !0,
            "aria-label": A,
            buttonRef: t,
            look: u.$n.Looks.BLANK,
            size: u.$n.Sizes.NONE,
            disabled: l,
            innerClassName: h,
            wrapperClassName: a()(_.x6, p),
            className: a()(_.x6, p, { [_.Xr]: E, [_.r9]: l, [_.Sn]: !l, [_.ZQ]: S, [_.OH]: E && S }),
            onClick: (e) => {
                null != s && s(e);
            },
            onMouseDown: o,
            onMouseEnter: m,
            onMouseLeave: g,
            onContextMenu: r,
            role: T,
            "aria-checked": I,
            focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
            children: [
                null != n ? (0, i.jsx)(d.Ay, { width: 20, height: 20, mask: d.Ay.Masks.PANEL_BUTTON, children: N }) : N,
                n,
            ],
        });
    }),
    h = r.forwardRef(function (e, t) {
        if (null == e.tooltipType) {
            let {
                    tooltipText: n,
                    tooltipForceOpen: r,
                    tooltipShouldShow: s,
                    tooltipPositionKey: a,
                    "aria-label": u,
                    ...c
                } = e,
                d = (0, l.O)(n),
                _ = u ?? d;
            return (0, i.jsx)(o.m, {
                text: n,
                forceOpen: r,
                shouldShow: s,
                positionKey: a,
                ariaHidden: _ === d,
                children: (0, i.jsx)(f, { ...c, "aria-label": _, ref: t }),
            });
        }
        {
            let {
                tooltipText: n,
                tooltipForceOpen: r,
                tooltipShouldShow: s,
                tooltipPositionKey: a,
                onClick: o,
                onMouseEnter: l,
                onMouseLeave: u,
                onContextMenu: d,
                onFocus: h,
                onBlur: p,
                "aria-label": E,
                ...m
            } = e;
            return (0, i.jsx)(c.ST, {
                "data-migration-pending": !0,
                tooltipClassName: _.RF,
                tooltipContentClassName: _.In,
                "aria-label": E,
                forceOpen: r,
                shouldShow: s,
                color: c.oM.GREEN,
                positionKeyStemOverride: a,
                text: n,
                children: (e) => {
                    let {
                        onClick: n,
                        onMouseEnter: r,
                        onMouseLeave: s,
                        onContextMenu: a,
                        onFocus: c,
                        onBlur: _,
                        "aria-label": E,
                    } = e;
                    return (0, i.jsx)(f, {
                        onClick: (e) => {
                            n?.(), o?.(e);
                        },
                        onMouseEnter: () => {
                            r?.(), l?.();
                        },
                        onMouseLeave: () => {
                            s?.(), u?.();
                        },
                        onContextMenu: (e) => {
                            a?.(), d?.(e);
                        },
                        onFocus: () => {
                            c?.(), h?.();
                        },
                        onBlur: () => {
                            _?.(), p?.();
                        },
                        "aria-label": E,
                        ...m,
                        ref: t,
                    });
                },
            });
        }
    });
