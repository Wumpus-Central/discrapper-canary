n.d(t, { j: () => c });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(28664),
    s = n(481060),
    o = n(554571);
function c(e) {
    let { pills: t, pillClassName: n } = e;
    return (0, r.jsx)("div", {
        className: o.container,
        children: t.map((e) =>
            (0, r.jsx)(
                a.u,
                {
                    __unsupportedReactNodeAsText: e.tooltipText,
                    shouldShow: null != e.tooltipText,
                    children: (0, r.jsx)(s.P3F, {
                        className: l()(o.pill, { [o.disabled]: e.disabled }, n),
                        onClick: e.disabled ? void 0 : e.onClick,
                        children: (0, r.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "interactive-normal",
                            children: e.text,
                        }),
                    }),
                },
                e.text,
            ),
        ),
    });
}
