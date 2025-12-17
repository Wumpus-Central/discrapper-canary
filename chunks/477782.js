i.d(n, { default: () => u }), i(388685);
var e = i(54381),
    a = i(473749),
    s = i(793030),
    o = i(481060),
    r = i(117984),
    l = i(388032);
function u(t) {
    let { onClose: n, transitionState: i } = t,
        [u, c] = a.useState("");
    return (0, e.jsx)("form", {
        onSubmit: function (t) {
            t.preventDefault(), (0, r.CM)(u), n();
        },
        children: (0, e.jsx)(s.Modal, {
            title: l.intl.string(l.t["ISN+NM"]),
            actions: [
                {
                    text: l.intl.string(l.t["ETE/oC"]),
                    onClick: n,
                    variant: "secondary",
                },
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
            children: (0, e.jsx)(o.oil, {
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
