i.d(s, { r: () => a });
var l = i(627968);
i(64700);
var t = i(661531),
    d = i(996682),
    h = i(27989);
function a(e) {
    let {
            size: s = "md",
            width: i,
            height: a,
            color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...r
        } = e,
        o = (0, h.J)(s),
        p = o?.width ?? i,
        w = o?.height ?? a;
    return (0, l.jsx)("svg", {
        ...(0, d.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            fillRule: "evenodd",
            d: "M18.46 20.9a12.65 12.65 0 0 1-1.46.9 10.95 10.95 0 0 1-10 0 11 11 0 1 1 11.46-.9Zm-1.65-1.3a8.96 8.96 0 0 1-9.62 0l.23-2.26c.02-.25-.27-.36-.41-.15-.29.45-.6 1.01-.88 1.63A9.04 9.04 0 0 1 4.2 16.5a9 9 0 0 1 15.6 0 9.04 9.04 0 0 1-1.93 2.32c-.27-.62-.59-1.18-.88-1.63-.14-.21-.43-.1-.4.15l.22 2.27ZM12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
            clipRule: "evenodd",
            className: n,
        }),
    });
}
