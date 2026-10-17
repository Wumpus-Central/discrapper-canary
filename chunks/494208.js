t.d(n, { A: () => A });
var l = t(477900),
    i = t(582128),
    a = t(305866),
    s = t(265872),
    r = t(163328),
    c = t(323073),
    o = t(58736),
    u = t(707539),
    d = t(751479),
    h = t(105292),
    g = t(272736);
function A(e) {
    let { channel: n } = e,
        [t, A] = i.useState(!1),
        m = i.useRef(null),
        p = (0, c.ni)(n),
        j = i.useCallback(() => {
            A(!1);
        }, []),
        f = i.useCallback(() => {
            (t || (0, u.D3)("Popout"), A(!t));
        }, [t]);
    return (0, l.jsx)(s.Y, {
        targetElementRef: m,
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
            return (0, l.jsx)(o.In, {
                ...e,
                ref: m,
                className: g.Kk,
                onClick: f,
                icon: r.y,
                "aria-label": h.intl.string(h.t.B2panI),
                tooltip: t ? null : h.intl.string(h.t.B2panI),
                disabled: p,
                selected: t,
            });
        },
    });
}
