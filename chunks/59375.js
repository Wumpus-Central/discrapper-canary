s.d(t, { A: () => o });
var a = s(627968);
s(64700);
var i = s(529689),
    l = s(696986),
    n = s(834730),
    r = s(305924);
function o(e) {
    let { attachment: t } = e,
        s = Math.round(((t.size ?? 0) / 1024 / 1024) * 100) / 100;
    return (0, a.jsxs)("div", {
        className: r.kL,
        children: [
            (0, a.jsx)(i.D, { size: "xs", color: "currentColor", className: r.Yg }),
            (0, a.jsx)(l.h, { size: 8, horizontal: !0 }),
            (0, a.jsx)(n.E, {
                variant: "text-sm/normal",
                color: "text-default",
                className: r.Md,
                children: t.filename,
            }),
            (0, a.jsx)(l.h, { size: 8, horizontal: !0 }),
            (0, a.jsx)("div", { className: r.Om }),
            (0, a.jsx)(l.h, { size: 8, horizontal: !0 }),
            (0, a.jsxs)(n.E, { variant: "text-sm/normal", color: "text-muted", children: [s, "MB"] }),
        ],
    });
}
