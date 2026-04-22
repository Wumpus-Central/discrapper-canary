a.d(l, { x: () => n });
var t = a(627968);
a(64700);
var s = a(996682),
    i = a(27989);
let n = (e) => {
    let { size: l = "md", width: a, height: n, color: c = "#CEA146", colorClass: h = "", ...r } = e,
        o = (0, i.J)(l),
        d = o?.width ?? a,
        v = o?.height ?? n;
    return (0, t.jsx)("svg", {
        ...(0, s.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M10.78 1.5v18.08h10.5l-2.34 2.92H4.71l1.75-2.92V3.6L4.94 1.5h5.84Zm1.28 3.97a7.5 7.5 0 0 1 5.13 12.83h2.22a10.07 10.07 0 0 0 1.75-5.25 9.16 9.16 0 0 0-9.1-9.33v1.75ZM5.18 16.08a6.95 6.95 0 0 1-.7-3.15c0-1.16.23-2.21.7-3.15V6.75a9.81 9.81 0 0 0-2.45 6.07c0 2.45.81 4.66 2.45 6.3v-3.04Z",
            className: h,
        }),
    });
};
