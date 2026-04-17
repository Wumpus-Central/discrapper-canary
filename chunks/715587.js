s.d(t, { A: () => o });
var r = s(627968),
    i = s(64700),
    n = s(397927),
    l = s(744086),
    a = s(985018);
function o(e) {
    let { align: t = "left" } = e,
        s = i.useRef(null);
    return (0, r.jsx)(n.YNO, {
        targetElementRef: s,
        position: "top",
        align: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.Ay, { onClose: t, onSelect: void 0 });
        },
        children: (e) =>
            (0, r.jsx)(n.K0, {
                buttonRef: s,
                size: "md",
                variant: "secondary",
                icon: {
                    type: "rive",
                    asset: n.MX_,
                    riveProps: { autoPause: !0, dataBinding: { fill: "currentColor" } },
                },
                "aria-label": a.intl.string(a.t["+1H47t"]),
                ...e,
            }),
    });
}
