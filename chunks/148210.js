r.d(t, { default: () => d });
var a = r(627968),
    n = r(64700),
    l = r(189213),
    o = r(260598),
    i = r(411335),
    s = r(985018);
function d(e) {
    let { initialCustomMessage: t, onSubmit: r, onClose: d, transitionState: u } = e,
        [c, g] = n.useState(t);
    return (0, a.jsx)(l.Modal, {
        onClose: d,
        transitionState: u,
        title: s.intl.string(s.t.Df4aUN),
        subtitle: s.intl.string(s.t.eOWEmL),
        actions: [
            {
                text: s.intl.string(s.t["ETE/oC"]),
                onClick: () => {
                    d();
                },
                variant: "secondary",
            },
            {
                text: s.intl.string(s.t.bt75uw),
                onClick: () => {
                    r(c);
                },
            },
        ],
        children: (0, a.jsx)(o.f, { placeholder: s.intl.string(s.t.gDZw7A), value: c, onChange: g, maxLength: i.TZ }),
    });
}
