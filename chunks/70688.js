n.d(t, { o: () => a });
var i = n(627968);
n(64700);
var s = n(661531),
    r = n(996682),
    l = n(27989);
let a = (e) => {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: c = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...u
        } = e,
        d = (0, l.J)(t),
        m = d?.width ?? n,
        h = d?.height ?? a;
    return (0, i.jsxs)("svg", {
        ...(0, r.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M9 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z",
                className: o,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M2.75 3.02A3 3 0 0 1 5 2h10a3 3 0 0 1 3 3v7.64c0 .44-.55.7-.95.55a3 3 0 0 0-3.17 4.93l.02.03a.5.5 0 0 1-.35.85h-.05a.5.5 0 0 0-.5.5 2.5 2.5 0 0 1-3.68 2.2l-5.8-3.09A3 3 0 0 1 2 16V5a3 3 0 0 1 .76-1.98Zm1.3 1.95A.04.04 0 0 0 4 5v11c0 .36.2.68.49.86l5.77 3.08a.5.5 0 0 0 .74-.44V8.02a.5.5 0 0 0-.32-.46l-6.63-2.6Z",
                clipRule: "evenodd",
                className: o,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M15.3 16.7a1 1 0 0 1 1.4-1.4l4.3 4.29V16a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.59l-4.3-4.3Z",
                className: o,
            }),
        ],
    });
};
