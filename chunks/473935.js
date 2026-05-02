n.d(e, { L: () => a });
var i = n(627968);
n(64700);
var r = n(661531),
    l = n(996682),
    o = n(27989);
let a = (t) => {
    let {
            size: e = "md",
            width: n,
            height: a,
            color: u = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...s
        } = t,
        d = (0, o.J)(e),
        A = d?.width ?? n,
        p = d?.height ?? a;
    return (0, i.jsxs)("svg", {
        ...(0, l.A)(s),
        xmlns: "http://www.w3.org/2000/svg",
        width: A,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
                className: c,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                fillRule: "evenodd",
                d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
                clipRule: "evenodd",
                className: c,
            }),
        ],
    });
};
