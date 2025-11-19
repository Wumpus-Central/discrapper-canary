n.d(e, { Z: () => c });
var r = n(54381);
n(473749);
var o = n(481060),
    a = n(294763);
function c(t) {
    var e;
    let { attachment: n } = t,
        c = Math.round(((null != (e = n.size) ? e : 0) / 1024 / 1024) * 100) / 100;
    return (0, r.jsxs)("div", {
        className: a.container,
        children: [
            (0, r.jsx)(o.ZKT, {
                size: "xs",
                color: "currentColor",
                className: a.fileIcon,
            }),
            (0, r.jsx)(o.LZC, {
                size: 8,
                horizontal: !0,
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: a.fileName,
                children: n.filename,
            }),
            (0, r.jsx)(o.LZC, {
                size: 8,
                horizontal: !0,
            }),
            (0, r.jsx)("div", { className: a.dot }),
            (0, r.jsx)(o.LZC, {
                size: 8,
                horizontal: !0,
            }),
            (0, r.jsxs)(o.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: [c, "MB"],
            }),
        ],
    });
}
