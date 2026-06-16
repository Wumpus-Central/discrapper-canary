s.d(t, { A: () => o });
var i = s(627968);
s(64700);
var l = s(821609),
    a = s(534514),
    n = s(834730),
    r = s(691885),
    c = s(256096);
function o(e) {
    let { heading: t, subtitle: s, methodSelect: o, ctaButton: d, children: m } = e;
    return (0, i.jsxs)("div", {
        className: c.kL,
        children: [
            (0, i.jsx)(a.D, { variant: "heading-xl/semibold", color: "text-strong", className: c.DD, children: t }),
            (0, i.jsx)(n.E, { variant: "text-sm/medium", color: "text-subtle", className: c.VA, children: s }),
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
            m,
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
