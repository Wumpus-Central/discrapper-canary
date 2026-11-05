var l = t(477900),
    i = t(582128),
    a = t(305866),
    s = t(265872),
    r = t(163328),
    o = t(323073),
    c = t(58736),
    u = t(707539),
    d = t(628707),
    h = t(792996),
    g = t(272736);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channel: n } = e,
                [t, m] = i.useState(!1),
                A = i.useRef(null),
                p = (0, o.ni)(n),
                j = i.useCallback(() => {
                    m(!1);
                }, []),
                f = i.useCallback(() => {
                    (t || (0, u.D3)("Popout"), m(!t));
                }, [t]);
            return (0, l.jsx)(s.Y, {
                targetElementRef: A,
                animation: s.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                autoInvert: !1,
                shouldShow: t,
                onRequestClose: j,
                renderPopout: function () {
                    return (0, l.jsx)(a.l, {
                        children: (0, l.jsx)(d.A, { className: g.T, channel: n, onClose: j, context: "popout" }),
                    });
                },
                clickTrap: !0,
                children: (e, n) => {
                    let { isShown: t } = n;
                    return (0, l.jsx)(c.In, {
                        ...e,
                        ref: A,
                        className: g.Kk,
                        onClick: f,
                        icon: r.ThreadIcon,
                        "aria-label": h.intl.string(h.t.B2panI),
                        tooltip: t ? null : h.intl.string(h.t.B2panI),
                        disabled: p,
                        selected: t,
                    });
                },
            });
        },
    },
);
