i.d(n, { default: () => c }), i(388685);
var e = i(54381),
    s = i(473749),
    a = i(793030),
    l = i(481060),
    r = i(273504),
    o = i(388032);
function c(t) {
    let { initialCustomMessage: n, onSubmit: i, onClose: c, transitionState: u } = t,
        [d, h] = s.useState(n);
    return (0, e.jsx)(a.Modal, {
        onClose: c,
        transitionState: u,
        title: o.intl.string(o.t.Df4aUN),
        subtitle: o.intl.string(o.t.eOWEmL),
        actions: [
            {
                text: o.intl.string(o.t["ETE/oC"]),
                onClick: () => {
                    c();
                },
                variant: "secondary",
            },
            {
                text: o.intl.string(o.t.bt75uw),
                onClick: () => {
                    i(d);
                },
            },
        ],
        children: (0, e.jsx)(l.Kx8, {
            placeholder: o.intl.string(o.t.gDZw7A),
            value: d,
            onChange: h,
            maxLength: r._6,
        }),
    });
}
