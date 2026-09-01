t.d(e, { t: () => n });
var a = t(477900);
t(582128);
var s = t(661531),
    i = t(996682),
    r = t(27989);
function n(l) {
    let {
            size: e = "md",
            width: t,
            height: n,
            color: c = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...o
        } = l,
        d = (0, r.J)(e),
        v = d?.width ?? t,
        f = d?.height ?? n;
    return (0, a.jsxs)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, a.jsx)("path", {
                fillRule: "evenodd",
                d: "M19 15a2.5 2.5 0 0 1 2.5 2.5v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5v-.5A2.5 2.5 0 0 1 19 15Zm0 1.5a1 1 0 0 0-1 1v.5h2v-.5a1 1 0 0 0-1-1Z",
                clipRule: "evenodd",
                fill: "string" == typeof c ? c : c.css,
                className: h,
            }),
            (0, a.jsx)("path", {
                d: "M1.73 11.67a1 1 0 0 1 1.3-.13l9.55 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36a1 1 0 0 1 0 1.4l-.35.36a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7ZM5.51 10.03a1 1 0 0 1 1.39-.27l7.82 5.21c.22.15.29.44.18.68l-.1.24a1.45 1.45 0 0 1-.57.7.56.56 0 0 1-.64.03l-7.8-5.2a1 1 0 0 1-.28-1.39ZM8.34 7.2a1 1 0 0 1 1.39-.27l8.48 5.66c.24.15.08.46-.2.52-.46.1-.9.28-1.29.51-.17.1-.4.1-.57 0L8.62 8.58a1 1 0 0 1-.28-1.38ZM12.36 1.04a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8a1 1 0 0 1 0-1.41l.36-.36Z",
                fill: "string" == typeof c ? c : c.css,
                className: h,
            }),
        ],
    });
}
