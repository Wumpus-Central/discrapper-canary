n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(391526);
let s = (e) => {
    let { label: t, onClick: n, submitting: s } = e;
    return (0, r.jsx)(i.DUT, {
        onClick: s ? void 0 : n,
        className: a.x6,
        children: (0, r.jsxs)("div", {
            className: a.hQ,
            children: [
                s
                    ? (0, r.jsx)(i.y$y, {
                          type: i.y$y.Type.PULSING_ELLIPSIS,
                          className: a.__invalid_spinner,
                      })
                    : (0, r.jsx)(i.Text, {
                          variant: "text-md/medium",
                          className: a.Pf,
                          children: t,
                      }),
                (0, r.jsx)(i.abt, {
                    size: "md",
                    color: "currentColor",
                    className: a.UE,
                }),
            ],
        }),
    });
};
