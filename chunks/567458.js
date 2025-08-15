n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(921944),
    a = n(388032),
    o = n(46456);
function s(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)("div", {
        className: o.container,
        children: [
            (0, r.jsx)("div", { className: o.pointer }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                className: o.content,
                children: a.intl.string(a.t.rdzeVF),
            }),
            (0, r.jsx)(i.zxk, {
                variant: "overlay-primary",
                text: a.intl.string(a.t["NX+WJC"]),
                fullWidth: !0,
                onClick: () => {
                    t(l.L.AUTO);
                },
            }),
        ],
    });
}
