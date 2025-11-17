n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(921944),
    a = n(388032),
    s = n(46456);
function o(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            (0, r.jsx)("div", { className: s.pointer }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                className: s.content,
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
