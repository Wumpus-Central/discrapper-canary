"use strict";
n.d(t, { J: () => l });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927);
n(964486), n(786953);
var s = n(505274),
    o = n(448362);
function l(e) {
    let { pillRef: t, ...n } = e,
        { balancePillOverlay: l } = (0, i.cf)([s.A], () => ({ balancePillOverlay: s.A.balancePillOverlay })),
        u = (0, r.jsx)(o.Gy, { ref: t, ...n }),
        c = (0, r.jsx)(o.Gy, { ...n, isInModalOverlay: !0, disabled: !0 }),
        d = null != t.current ? t.current.offsetHeight : 36;
    return (0, r.jsx)(a.YNO, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => c,
        position: "bottom",
        align: "right",
        shouldShow: l,
        spacing: -d,
        animation: a.YNO.Animation.NONE,
        targetElementRef: t,
        positionKey: `${n.balance}-${l}`,
        children: () => u,
    });
}
