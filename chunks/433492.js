n.r(l);
var a = n(477900);
n(582128);
var t = n(646514),
    i = n(996682),
    o = n(27989);
n.d(
    l,
    {},
    {
        AchievementsIcon: function (e) {
            let {
                    size: l = "md",
                    width: n,
                    height: r,
                    color: d = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...s
                } = e,
                u = (0, o.J)(l),
                h = u?.width ?? n,
                m = u?.height ?? r;
            return (0, a.jsx)("svg", {
                ...(0, i.A)(s),
                xmlns: "http://www.w3.org/2000/svg",
                width: h,
                height: m,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    d: "M13.76 4.97a1 1 0 0 1-.73-1.21l.5-2a1 1 0 1 1 1.94.48l-.5 2a1 1 0 0 1-1.21.73ZM19.2 3.8a1 1 0 0 1 0 1.4l-1.5 1.5a1 1 0 1 1-1.4-1.4l1.5-1.5a1 1 0 0 1 1.4 0ZM7.46 11.05 9.6 8.2a3 3 0 0 1 4.8 0l2.14 2.85-.83.83a1 1 0 0 1-1.42 0l-.17-.17a3 3 0 0 0-4.24 0l-.17.17a1 1 0 0 1-1.42 0l-.83-.83ZM6.25 12.67 2.4 17.8A2 2 0 0 0 4 21h16a2 2 0 0 0 1.6-3.2l-3.85-5.13-.63.62a3 3 0 0 1-4.24 0l-.17-.17a1 1 0 0 0-1.42 0l-.17.17a3 3 0 0 1-4.24 0l-.63-.62ZM4.8 5.2a1 1 0 0 1 1.4-1.4l1.5 1.5a1 1 0 0 1-1.4 1.4L4.8 5.2ZM21.97 8.26a1 1 0 0 1-.73 1.21l-2 .5a1 1 0 1 1-.48-1.94l2-.5a1 1 0 0 1 1.21.73ZM2.76 9.47a1 1 0 1 1 .48-1.94l2 .5a1 1 0 1 1-.48 1.94l-2-.5ZM10.97 3.76a1 1 0 0 1-1.94.48l-.5-2a1 1 0 1 1 1.94-.48l.5 2Z",
                    className: c,
                }),
            });
        },
    },
);
