s.d(t, { A: () => c });
var r = s(627968),
    i = s(64700),
    n = s(505312),
    l = s(397927),
    a = s(744086),
    o = s(985018);
function c(e) {
    let { align: t = "left" } = e,
        s = i.useRef(null),
        c = (0, n.w)();
    return (0, r.jsx)(l.YNO, {
        targetElementRef: s,
        position: "top",
        align: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(a.Ay, { onClose: t, onSelect: void 0 });
        },
        children: (e) =>
            (0, r.jsx)(l.K0, {
                buttonRef: s,
                size: "md",
                variant: "secondary",
                icon: c.Component,
                "aria-label": o.intl.string(o.t["+1H47t"]),
                ...e,
                ...c.events,
            }),
    });
}
