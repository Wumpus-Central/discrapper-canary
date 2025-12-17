n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(921944),
    a = n(388032),
    o = n(570662);
function s(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)("div", {
        className: o.container,
        children: [
            (0, r.jsx)("div", { className: o.pointer }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                className: o.content,
                children: a.intl.string(a.t.rdzeVP),
            }),
            (0, r.jsx)(i.Button, {
                variant: "overlay-primary",
                text: a.intl.string(a.t["NX+WJN"]),
                fullWidth: !0,
                onClick: () => {
                    t(l.L.AUTO);
                },
            }),
        ],
    });
}
