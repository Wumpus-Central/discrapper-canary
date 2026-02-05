n.d(e, { default: () => c });
var i = n(627968),
    a = n(64700),
    o = n(158954),
    r = n(397927),
    s = n(422258),
    l = n(985018);
function c(t) {
    let { onClose: e, transitionState: n } = t,
        [c, f] = a.useState("");
    return (0, i.jsx)("form", {
        onSubmit: function (t) {
            t.preventDefault(), (0, s.od)(c), e();
        },
        children: (0, i.jsx)(o.Modal, {
            title: l.intl.string(l.t["ISN+NM"]),
            actions: [
                { text: l.intl.string(l.t["ETE/oC"]), onClick: e, variant: "secondary" },
                {
                    text: l.intl.string(l.t["ISN+NM"]),
                    variant: "primary",
                    type: "submit",
                    autoFocus: !1,
                    disabled: "" === c,
                },
            ],
            transitionState: n,
            onClose: e,
            children: (0, i.jsx)(r.ksK, {
                label: l.intl.string(l.t.OCAkGP),
                value: c,
                onChange: f,
                maxLength: 100,
                placeholder: l.intl.string(l.t.eTVbtx),
                autoFocus: !0,
            }),
        }),
    });
}
