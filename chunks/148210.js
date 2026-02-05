i.d(n, { default: () => c });
var e = i(627968),
    s = i(64700),
    a = i(158954),
    l = i(397927),
    r = i(411335),
    o = i(985018);
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
        children: (0, e.jsx)(l.fs1, { placeholder: o.intl.string(o.t.gDZw7A), value: d, onChange: h, maxLength: r.TZ }),
    });
}
