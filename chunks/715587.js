r.d(t, { A: () => o });
var s = r(627968),
    i = r(64700),
    n = r(397927),
    l = r(744086),
    a = r(985018);
function o(e) {
    let { align: t = "left" } = e,
        r = i.useRef(null);
    return (0, s.jsx)(n.YNO, {
        targetElementRef: r,
        position: "top",
        align: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(l.Ay, { onClose: t, onSelect: void 0 });
        },
        children: (e) =>
            (0, s.jsx)(n.K0, {
                buttonRef: r,
                size: "md",
                variant: "secondary",
                icon: { type: "rive", asset: n.MX_, riveProps: { dataBinding: { fill: "currentColor" } } },
                "aria-label": a.intl.string(a.t["+1H47t"]),
                ...e,
            }),
    });
}
