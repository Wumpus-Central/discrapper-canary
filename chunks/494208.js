n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(323073),
    r = n(58736),
    o = n(707539),
    c = n(617011),
    d = n(985018),
    u = n(94287);
function h(e) {
    let { channel: t } = e,
        [n, h] = l.useState(!1),
        A = l.useRef(null),
        _ = (0, a.vL)(t),
        m = l.useCallback(() => {
            h(!1);
        }, []),
        g = l.useCallback(() => {
            n || (0, o.D3)("Popout"), h(!n);
        }, [n]);
    return (0, i.jsx)(s.YNO, {
        targetElementRef: A,
        animation: s.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: m,
        renderPopout: function () {
            return (0, i.jsx)(s.lGe, {
                children: (0, i.jsx)(c.A, { className: u.T, channel: t, onClose: m, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(r.In, {
                ...e,
                ref: A,
                className: u.Kk,
                onClick: g,
                icon: s.ysw,
                "aria-label": d.intl.string(d.t.B2panI),
                tooltip: n ? null : d.intl.string(d.t.B2panI),
                disabled: _,
                selected: n,
            });
        },
    });
}
