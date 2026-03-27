"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(323073),
    a = n(58736),
    o = n(707539),
    c = n(617011),
    d = n(985018),
    u = n(857476);
function h(e) {
    let { channel: t } = e,
        [n, h] = s.useState(!1),
        A = s.useRef(null),
        m = (0, r.vL)(t),
        _ = s.useCallback(() => {
            h(!1);
        }, []),
        p = s.useCallback(() => {
            n || (0, o.D3)("Popout"), h(!n);
        }, [n]);
    return (0, i.jsx)(l.YNO, {
        targetElementRef: A,
        animation: l.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: _,
        renderPopout: function () {
            return (0, i.jsx)(l.lGe, {
                children: (0, i.jsx)(c.A, { className: u.T, channel: t, onClose: _, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(a.In, {
                ...e,
                ref: A,
                className: u.Kk,
                onClick: p,
                icon: l.ysw,
                "aria-label": d.intl.string(d.t.B2panI),
                tooltip: n ? null : d.intl.string(d.t.B2panI),
                disabled: m,
                selected: n,
            });
        },
    });
}
