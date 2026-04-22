e.d(n, { default: () => s });
var i = e(627968),
    a = e(64700),
    l = e(189213),
    o = e(292666),
    r = e(422258),
    u = e(985018);
function s(t) {
    let { onClose: n, transitionState: e } = t,
        [s, f] = a.useState("");
    return (0, i.jsx)("form", {
        onSubmit: function (t) {
            t.preventDefault(), (0, r.od)(s, "modal"), n();
        },
        children: (0, i.jsx)(l.Modal, {
            title: u.intl.string(u.t["ISN+NM"]),
            actions: [
                { text: u.intl.string(u.t["ETE/oC"]), onClick: n, variant: "secondary" },
                {
                    text: u.intl.string(u.t["ISN+NM"]),
                    variant: "primary",
                    type: "submit",
                    autoFocus: !1,
                    disabled: "" === s,
                },
            ],
            transitionState: e,
            onClose: n,
            children: (0, i.jsx)(o.k, {
                label: u.intl.string(u.t.OCAkGP),
                value: s,
                onChange: f,
                maxLength: 100,
                placeholder: u.intl.string(u.t.eTVbtx),
                autoFocus: !0,
            }),
        }),
    });
}
