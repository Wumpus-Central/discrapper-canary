n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(391526);
let a = (e) => {
    let { label: t, onClick: n, submitting: a } = e;
    return (0, i.jsx)(s.DUT, {
        onClick: a ? void 0 : n,
        className: r.x6,
        children: (0, i.jsxs)("div", {
            className: r.hQ,
            children: [
                a
                    ? (0, i.jsx)(s.y$y, { type: s.y$y.Type.PULSING_ELLIPSIS, className: r.__invalid_spinner })
                    : (0, i.jsx)(s.Text, { variant: "text-md/medium", className: r.Pf, children: t }),
                (0, i.jsx)(s.abt, { size: "md", color: "currentColor", className: r.UE }),
            ],
        }),
    });
};
