t.d(e, { c: () => r });
var s = t(477900);
t(582128);
var a = t(661531),
    i = t(996682),
    n = t(27989);
function r(l) {
    let {
            size: e = "md",
            width: t,
            height: r,
            color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...o
        } = l,
        d = (0, n.J)(e),
        v = d?.width ?? t,
        f = d?.height ?? r;
    return (0, s.jsxs)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, s.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.03c0 .43-.53.68-.92.48a4.48 4.48 0 0 0-4.59.25c-.24.17-.57.13-.74-.1l-.4-.53a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19h6.44c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
                clipRule: "evenodd",
                className: h,
            }),
            (0, s.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z",
                clipRule: "evenodd",
                className: h,
            }),
        ],
    });
}
