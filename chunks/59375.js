n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var a = n(397927),
    l = n(407943);

function s(e) {
    var t;
    let { attachment: n } = e,
        s = Math.round(((null != (t = n.size) ? t : 0) / 1024 / 1024) * 100) / 100;
    return (0, r.jsxs)("div", {
        className: l.kL,
        children: [
            (0, r.jsx)(a.DF1, {
                size: "xs",
                color: "currentColor",
                className: l.Yg,
            }),
            (0, r.jsx)(a.hKd, {
                size: 8,
                horizontal: !0,
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: l.Md,
                children: n.filename,
            }),
            (0, r.jsx)(a.hKd, {
                size: 8,
                horizontal: !0,
            }),
            (0, r.jsx)("div", {
                className: l.Om,
            }),
            (0, r.jsx)(a.hKd, {
                size: 8,
                horizontal: !0,
            }),
            (0, r.jsxs)(a.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: [s, "MB"],
            }),
        ],
    });
}
