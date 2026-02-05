n.d(e, { A: () => r });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(407943);
function r(t) {
    let { attachment: e } = t,
        n = Math.round(((e.size ?? 0) / 1024 / 1024) * 100) / 100;
    return (0, i.jsxs)("div", {
        className: l.kL,
        children: [
            (0, i.jsx)(s.DF1, { size: "xs", color: "currentColor", className: l.Yg }),
            (0, i.jsx)(s.hKd, { size: 8, horizontal: !0 }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: l.Md,
                children: e.filename,
            }),
            (0, i.jsx)(s.hKd, { size: 8, horizontal: !0 }),
            (0, i.jsx)("div", { className: l.Om }),
            (0, i.jsx)(s.hKd, { size: 8, horizontal: !0 }),
            (0, i.jsxs)(s.Text, { variant: "text-sm/normal", color: "text-muted", children: [n, "MB"] }),
        ],
    });
}
