n.d(t, { J: () => u });
var l = n(627968);
n(64700);
var a = n(311907),
    r = n(265872);
n(964486), n(786953);
var s = n(505274),
    i = n(448362);
function u(e) {
    let { pillRef: t, ...n } = e,
        { balancePillOverlay: u } = (0, a.cf)([s.A], () => ({ balancePillOverlay: s.A.balancePillOverlay })),
        c = (0, l.jsx)(i.Gy, { ref: t, ...n }),
        o = (0, l.jsx)(i.Gy, { ...n, isInModalOverlay: !0, disabled: !0 }),
        d = null != t.current ? t.current.offsetHeight : 36;
    return (0, l.jsx)(r.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => o,
        position: "bottom",
        align: "right",
        shouldShow: u,
        spacing: -d,
        animation: r.Y.Animation.NONE,
        targetElementRef: t,
        positionKey: `${n.balance}-${u}`,
        children: () => c,
    });
}
