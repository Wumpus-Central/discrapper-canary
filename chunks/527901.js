n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(49999),
    a = n(985018),
    s = n(850517);

function o(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)("div", {
        className: s.kL,
        children: [
            (0, r.jsx)("div", {
                className: s.Wn,
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                className: s.Qs,
                children: a.intl.string(a.t.rdzeVP),
            }),
            (0, r.jsx)(i.Button, {
                variant: "overlay-primary",
                text: a.intl.string(a.t["NX+WJN"]),
                fullWidth: !0,
                onClick: () => {
                    t(l.i.AUTO);
                },
            }),
        ],
    });
}
