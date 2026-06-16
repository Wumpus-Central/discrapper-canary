i.d(n, { default: () => u });
var e = i(627968),
    a = i(64700),
    s = i(189213),
    o = i(292666),
    r = i(422258),
    l = i(375708);
function u(t) {
    let { onClose: n, transitionState: i } = t,
        [u, c] = a.useState("");
    return (0, e.jsx)("form", {
        onSubmit: function (t) {
            t.preventDefault(), (0, r.od)(u, "modal"), n();
        },
        children: (0, e.jsx)(s.Modal, {
            title: l.intl.string(l.t["ISN+NM"]),
            actions: [
                { text: l.intl.string(l.t["ETE/oC"]), onClick: n, variant: "secondary" },
                {
                    text: l.intl.string(l.t["ISN+NM"]),
                    variant: "primary",
                    type: "submit",
                    autoFocus: !1,
                    disabled: "" === u,
                },
            ],
            transitionState: i,
            onClose: n,
            children: (0, e.jsx)(o.k, {
                label: l.intl.string(l.t.OCAkGP),
                value: u,
                onChange: c,
                maxLength: 100,
                placeholder: l.intl.string(l.t.eTVbtx),
                autoFocus: !0,
            }),
        }),
    });
}
