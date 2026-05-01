e.d(n, { L: () => u });
var i = e(627968);
e(64700);
var l = e(661531),
    r = e(996682),
    a = e(27989);
let u = (t) => {
    let {
            size: n = "md",
            width: e,
            height: u,
            color: c = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...s
        } = t,
        o = (0, a.J)(n),
        p = o?.width ?? e,
        A = o?.height ?? u;
    return (0, i.jsxs)("svg", {
        ...(0, r.A)(s),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
                className: d,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
                clipRule: "evenodd",
                className: d,
            }),
        ],
    });
};
