n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(176603);
let a = (e) => {
    let { label: t, onClick: n, submitting: a } = e;
    return (0, i.jsx)(s.DUT, {
        onClick: a ? void 0 : n,
        className: l.x6,
        children: (0, i.jsxs)("div", {
            className: l.hQ,
            children: [
                a
                    ? (0, i.jsx)(s.y$y, { type: s.y$y.Type.PULSING_ELLIPSIS, className: l.__invalid_spinner })
                    : (0, i.jsx)(s.Text, { variant: "text-md/medium", className: l.Pf, children: t }),
                (0, i.jsx)(s.abt, { size: "md", color: "currentColor", className: l.UE }),
            ],
        }),
    });
};
