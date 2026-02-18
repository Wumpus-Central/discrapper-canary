l.d(t, { J: () => o });
var a = l(627968);
l(64700);
var n = l(311907),
    r = l(397927);
l(964486), l(786953);
var i = l(505274),
    s = l(448362);
function o(e) {
    let { pillRef: t, ...l } = e,
        { balancePillOverlay: o } = (0, n.cf)([i.A], () => ({ balancePillOverlay: i.A.balancePillOverlay })),
        u = (0, a.jsx)(s.Gy, { ref: t, ...l }),
        c = (0, a.jsx)(s.Gy, { ...l, isInModalOverlay: !0, disabled: !0 }),
        d = null != t.current ? t.current.offsetHeight : 36;
    return (0, a.jsx)(r.YNO, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => c,
        position: "bottom",
        align: "right",
        shouldShow: o,
        spacing: -d,
        animation: r.YNO.Animation.NONE,
        targetElementRef: t,
        positionKey: `${l.balance}-${o}`,
        children: () => u,
    });
}
