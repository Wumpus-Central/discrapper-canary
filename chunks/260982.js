n.d(t, { A: () => s });
var i = n(627968),
    a = n(158954),
    l = n(750506),
    r = n(49999);
function s(e) {
    let { markAsDismissed: t } = e;
    return (0, i.jsx)(l.Ay, {
        children: (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", { children: "gaming" }),
                (0, i.jsx)(a.DUT, {
                    onClick: () => {
                        t(r.i.PRIMARY);
                    },
                    "aria-label": "",
                }),
                (0, i.jsx)(a.DUT, {
                    onClick: () => {
                        t(r.i.DISMISS);
                    },
                    "aria-label": "",
                }),
            ],
        }),
    });
}
