s.d(t, { A: () => o });
var i = s(477900);
s(582128);
var l = s(821609),
    n = s(297264),
    a = s(834730),
    r = s(691885),
    c = s(926296);
function o(e) {
    let { heading: t, subtitle: s, methodSelect: o, ctaButton: d, children: u } = e;
    return (0, i.jsxs)("div", {
        className: c.kL,
        children: [
            (0, i.jsx)(n.D, { variant: "heading-xl/semibold", color: "text-strong", className: c.DD, children: t }),
            (0, i.jsx)(a.E, { variant: "text-sm/medium", color: "text-subtle", className: c.VA, children: s }),
            null != o &&
                o.length > 0 &&
                o.map(
                    (e) =>
                        !1 !== e.visible &&
                        (0, i.jsx)(
                            "div",
                            {
                                className: c.oL,
                                children: (0, i.jsx)(r.l, {
                                    label: e.label,
                                    hideLabel: !0,
                                    placeholder: e.placeholder,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                    value: e.value ?? void 0,
                                    onSelectionChange: (t) => {
                                        e.onSelectionChange(t);
                                    },
                                    options: e.options,
                                    disabled: e.disabled,
                                }),
                            },
                            e.label,
                        ),
                ),
            u,
            null != d &&
                (0, i.jsx)("div", {
                    className: c.WJ,
                    children: (0, i.jsx)(l.$, {
                        fullWidth: !0,
                        variant: "primary",
                        size: "md",
                        text: d.text,
                        loading: d.loading,
                        icon: d.icon,
                        onClick: () => {
                            d.onClick();
                        },
                    }),
                }),
        ],
    });
}
