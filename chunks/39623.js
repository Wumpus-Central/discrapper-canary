"use strict";
n.d(t, { EyeIcon: () => a });
var l = n(477900);
n(582128);
var i = n(661531),
    s = n(996682),
    r = n(27989);
function a(e) {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, r.J)(t),
        h = d?.width ?? n,
        m = d?.height ?? a;
    return (0, l.jsxs)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M15.56 11.77c.2-.1.44.02.44.23a4 4 0 1 1-4-4c.21 0 .33.25.23.44a2.5 2.5 0 0 0 3.32 3.32Z",
                className: u,
            }),
            (0, l.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M22.89 11.7c.07.2.07.4 0 .6C22.27 13.9 19.1 21 12 21c-7.11 0-10.27-7.11-10.89-8.7a.83.83 0 0 1 0-.6C1.73 10.1 4.9 3 12 3c7.11 0 10.27 7.11 10.89 8.7Zm-4.5-3.62A15.11 15.11 0 0 1 20.85 12c-.38.88-1.18 2.47-2.46 3.92C16.87 17.62 14.8 19 12 19c-2.8 0-4.87-1.38-6.39-3.08A15.11 15.11 0 0 1 3.15 12c.38-.88 1.18-2.47 2.46-3.92C7.13 6.38 9.2 5 12 5c2.8 0 4.87 1.38 6.39 3.08Z",
                clipRule: "evenodd",
                className: u,
            }),
        ],
    });
}
