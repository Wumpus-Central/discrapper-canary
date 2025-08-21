t.d(n, { default: () => f }), t(388685);
var i = t(951288),
    a = t(647438),
    o = t(481060),
    r = t(313201),
    l = t(117984),
    s = t(388032),
    d = t(662971);
function f(e) {
    let { onClose: n, transitionState: t } = e,
        f = (0, r.Dt)(),
        [c, u] = a.useState("");
    return (0, i.jsx)("form", {
        onSubmit: function (e) {
            e.preventDefault(), (0, l.CM)(c), n();
        },
        children: (0, i.jsxs)(o.Y0X, {
            transitionState: t,
            "aria-labelledby": f,
            parentComponent: "AddFavoriteCategoryModal",
            children: [
                (0, i.jsxs)(o.hzk, {
                    children: [
                        (0, i.jsx)(o.X6q, {
                            id: f,
                            className: d.header,
                            variant: "heading-xl/semibold",
                            children: s.intl.string(s.t["ISN+ND"]),
                        }),
                        (0, i.jsx)(o.olH, {
                            onClick: n,
                            className: d.closeButton,
                        }),
                        (0, i.jsx)(o.xJW, {
                            title: s.intl.string(s.t.OCAkGB),
                            className: d.name,
                            children: (0, i.jsx)(o.oil, {
                                value: c,
                                onChange: u,
                                maxLength: 100,
                                placeholder: s.intl.string(s.t.eTVbt7),
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(o.mzw, {
                    children: (0, i.jsxs)(o.hE2, {
                        direction: "horizontal-reverse",
                        children: [
                            (0, i.jsx)(o.zxk, {
                                variant: "primary",
                                text: s.intl.string(s.t["ISN+ND"]),
                                type: "submit",
                                disabled: "" === c,
                            }),
                            (0, i.jsx)(o.zxk, {
                                variant: "secondary",
                                text: s.intl.string(s.t["ETE/oK"]),
                                onClick: n,
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
