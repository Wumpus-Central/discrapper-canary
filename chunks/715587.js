s.d(t, { A: () => d });
var i = s(627968),
    r = s(64700),
    n = s(505312),
    l = s(265872),
    a = s(408278),
    o = s(744086),
    c = s(985018);
function d(e) {
    let { align: t = "left" } = e,
        s = r.useRef(null),
        d = (0, n.w)();
    return (0, i.jsx)(l.Y, {
        targetElementRef: s,
        position: "top",
        align: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(o.Ay, { onClose: t, onSelect: void 0 });
        },
        children: (e) =>
            (0, i.jsx)(a.K, {
                buttonRef: s,
                size: "md",
                variant: "secondary",
                icon: d.Component,
                "aria-label": c.intl.string(c.t["+1H47t"]),
                ...e,
                ...d.events,
            }),
    });
}
