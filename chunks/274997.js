t.r(s);
var i = t(477900);
t(582128);
var l = t(996682),
    e = t(27989);
t.d(
    s,
    {},
    {
        XNeutralIcon: function (h) {
            let { size: s = "md", width: t, height: r, color: n = "#4E5058", colorClass: a = "", ...c } = h,
                d = (0, e.J)(s),
                p = d?.width ?? t,
                w = d?.height ?? r;
            return (0, i.jsx)("svg", {
                ...(0, l.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M13.86 10.47 21.15 2h-1.73l-6.33 7.35L8.04 2H2.22l7.64 11.12L2.22 22h1.72l6.68-7.77L15.96 22h5.82l-7.92-11.53Zm-2.36 2.75-.78-1.11L4.57 3.3h2.65l4.97 7.11.77 1.1 6.46 9.25h-2.65l-5.27-7.54Z",
                    className: a,
                }),
            });
        },
    },
);
