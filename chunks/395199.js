e.d(n, { default: () => u }), e(896048);
var i = e(627968),
    a = e(64700),
    o = e(158954),
    r = e(397927),
    l = e(422258),
    s = e(985018);
function u(t) {
    let { onClose: n, transitionState: e } = t,
        [u, c] = a.useState("");
    return (0, i.jsx)("form", {
        onSubmit: function (t) {
            t.preventDefault(), (0, l.od)(u), n();
        },
        children: (0, i.jsx)(o.Modal, {
            title: s.intl.string(s.t["ISN+NM"]),
            actions: [
                {
                    text: s.intl.string(s.t["ETE/oC"]),
                    onClick: n,
                    variant: "secondary",
                },
                {
                    text: s.intl.string(s.t["ISN+NM"]),
                    variant: "primary",
                    type: "submit",
                    autoFocus: !1,
                    disabled: "" === u,
                },
            ],
            transitionState: e,
            onClose: n,
            children: (0, i.jsx)(r.ksK, {
                label: s.intl.string(s.t.OCAkGP),
                value: u,
                onChange: c,
                maxLength: 100,
                placeholder: s.intl.string(s.t.eTVbtx),
                autoFocus: !0,
            }),
        }),
    });
}
