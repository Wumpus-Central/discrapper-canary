l.d(t, { A: () => o });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(27989);
function o(e) {
    let t = a.useId(),
        l = "custom" === e.size ? { width: e.width, height: e.height } : (0, s.J)(e.size ?? "md");
    return (0, n.jsxs)("svg", {
        width: l?.width ?? 24,
        height: l?.height ?? 24,
        viewBox: "0 0 24 24",
        fill: "none",
        className: i()(e.colorClass, e.className),
        style: e.style,
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("clipPath", { id: t, children: (0, n.jsx)("rect", { width: "24", height: "24", rx: "8" }) }),
            (0, n.jsx)("g", {
                clipPath: `url(#${t})`,
                children: (0, n.jsx)("path", {
                    d: "M20.6996 10.7515L15.1195 12.6108C15.1195 12.6108 13.9587 12.9065 13.4323 13.4325C12.9055 13.959 12.6105 15.1198 12.6105 15.1198L10.7513 20.6999C10.3493 21.9063 8.6428 21.906 8.24046 20.6995L2.84448 4.51832C2.49948 3.48376 3.48352 2.49972 4.51808 2.84472L20.6992 8.2407C21.9057 8.64305 21.906 10.3495 20.6996 10.7515Z",
                    fill: "string" == typeof e.color ? e.color : "currentColor",
                }),
            }),
        ],
    });
}
