n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(305866),
    a = n(265872),
    r = n(163328),
    o = n(323073),
    d = n(58736),
    c = n(707539),
    u = n(617011),
    h = n(985018),
    A = n(614879);
function _(e) {
    let { channel: t } = e,
        [n, _] = l.useState(!1),
        m = l.useRef(null),
        g = (0, o.ni)(t),
        p = l.useCallback(() => {
            _(!1);
        }, []),
        f = l.useCallback(() => {
            n || (0, c.D3)("Popout"), _(!n);
        }, [n]);
    return (0, i.jsx)(a.Y, {
        targetElementRef: m,
        animation: a.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: p,
        renderPopout: function () {
            return (0, i.jsx)(s.l, {
                children: (0, i.jsx)(u.A, { className: A.T, channel: t, onClose: p, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(d.In, {
                ...e,
                ref: m,
                className: A.Kk,
                onClick: f,
                icon: r.y,
                "aria-label": h.intl.string(h.t.B2panI),
                tooltip: n ? null : h.intl.string(h.t.B2panI),
                disabled: g,
                selected: n,
            });
        },
    });
}
