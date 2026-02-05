n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(49999),
    l = n(985018),
    s = n(850517);
function o(e) {
    let { markAsDismissed: t } = e;
    return (0, i.jsxs)("div", {
        className: s.kL,
        children: [
            (0, i.jsx)("div", { className: s.Wn }),
            (0, i.jsx)(r.Text, { variant: "text-sm/normal", className: s.Qs, children: l.intl.string(l.t.rdzeVP) }),
            (0, i.jsx)(r.Button, {
                variant: "overlay-primary",
                text: l.intl.string(l.t["NX+WJN"]),
                fullWidth: !0,
                onClick: () => {
                    t(a.i.AUTO);
                },
            }),
        ],
    });
}
