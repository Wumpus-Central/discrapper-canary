n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(939249),
    l = n(289873),
    a = n(834730),
    r = n(847374),
    o = n(369176);
let d = (e) => {
    let { label: t, onClick: n, submitting: d } = e;
    return (0, i.jsx)(s.D, {
        onClick: d ? void 0 : n,
        className: o.x6,
        children: (0, i.jsxs)("div", {
            className: o.hQ,
            children: [
                d
                    ? (0, i.jsx)(l.y, { type: l.y.Type.PULSING_ELLIPSIS, className: o.__invalid_spinner })
                    : (0, i.jsx)(a.E, { variant: "text-md/medium", className: o.Pf, children: t }),
                (0, i.jsx)(r.a, { size: "md", color: "currentColor", className: o.UE }),
            ],
        }),
    });
};
