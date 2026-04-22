a.d(l, { $: () => n });
var t = a(627968);
a(64700);
var s = a(996682),
    i = a(27989);
let n = (e) => {
    let { size: l = "md", width: a, height: n, color: c = "#000", colorClass: h = "", ...r } = e,
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
            d: "M6.23 2 2 17.77 17.77 22 22 6.23 6.23 2Zm7.38 12.8-4.4-1.19 1.18-4.4 4.4 1.18-1.18 4.4Z",
            className: h,
        }),
    });
};
