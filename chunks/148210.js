i.d(n, { default: () => c });
var e = i(627968),
    s = i(64700),
    a = i(189213),
    l = i(260598),
    o = i(243277),
    r = i(375708);
function c(t) {
    let { initialCustomMessage: n, onSubmit: i, onClose: c, transitionState: u } = t,
        [d, h] = s.useState(n);
    return (0, e.jsx)(a.Modal, {
        onClose: c,
        transitionState: u,
        title: r.intl.string(r.t.Df4aUN),
        subtitle: r.intl.string(r.t.eOWEmL),
        actions: [
            {
                text: r.intl.string(r.t["ETE/oC"]),
                onClick: function () {
                    c();
                },
                variant: "secondary",
            },
            {
                text: r.intl.string(r.t.bt75uw),
                onClick: function () {
                    i(d);
                },
            },
        ],
        children: (0, e.jsx)(l.f, { placeholder: r.intl.string(r.t.gDZw7A), value: d, onChange: h, maxLength: o.TZ }),
    });
}
