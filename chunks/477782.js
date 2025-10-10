e.d(n, { default: () => f }), e(388685);
var i = e(951288),
    a = e(647438),
    o = e(793030),
    r = e(481060),
    l = e(117984),
    s = e(388032);
function f(t) {
    let { onClose: n, transitionState: e } = t,
        [f, u] = a.useState("");
    return (0, i.jsx)("form", {
        onSubmit: function (t) {
            t.preventDefault(), (0, l.CM)(f), n();
        },
        children: (0, i.jsx)(o.Modal, {
            title: s.intl.string(s.t["ISN+ND"]),
            actions: [
                {
                    text: s.intl.string(s.t["ETE/oK"]),
                    onClick: n,
                    variant: "secondary",
                },
                {
                    text: s.intl.string(s.t["ISN+ND"]),
                    variant: "primary",
                    type: "submit",
                    autoFocus: !1,
                    disabled: "" === f,
                },
            ],
            transitionState: e,
            onClose: n,
            children: (0, i.jsx)(r.oil, {
                label: s.intl.string(s.t.OCAkGB),
                value: f,
                onChange: u,
                maxLength: 100,
                placeholder: s.intl.string(s.t.eTVbt7),
                autoFocus: !0,
            }),
        }),
    });
}
