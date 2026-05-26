l.d(t, { Q: () => E });
var a = l(627968);
l(64700);
var s = l(661531),
    c = l(996682),
    i = l(27989);
let E = (e) => {
    let {
            size: t = "md",
            width: l,
            height: E,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...r
        } = e,
        d = (0, i.J)(t),
        o = d?.width ?? l,
        _ = d?.height ?? E;
    return (0, a.jsx)("svg", {
        ...(0, c.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M10.95 1.43a1.5 1.5 0 0 1 2.1 0l5.49 5.33c.3.29.46.68.46 1.1v8.44c-.04.35-.2.69-.46.94l-5.49 5.33-.11.1a1.5 1.5 0 0 1-2-.1l-5.48-5.33c-.3-.29-.46-.68-.46-1.1V7.86c0-.42.17-.81.46-1.1l5.49-5.33ZM7.33 7.77c-.2.2-.31.46-.31.74v6.98c0 .28.11.54.3.73l3.98 3.86a1 1 0 0 0 1.4 0l3.97-3.85c.2-.2.3-.46.3-.74V8.51c0-.28-.1-.54-.3-.74L12.7 3.92a1 1 0 0 0-1.4 0L7.33 7.77Z",
            clipRule: "evenodd",
            className: h,
        }),
    });
};
