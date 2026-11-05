e.r(a);
var s = e(477900);
e(582128);
var i = e(646514),
    t = e(996682),
    d = e(27989);
e.d(
    a,
    {},
    {
        EmojiFaceWithCrossedOutEyesIcon: function (l) {
            let {
                    size: a = "md",
                    width: e,
                    height: h,
                    color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...n
                } = l,
                r = (0, d.J)(a),
                p = r?.width ?? e,
                u = r?.height ?? h;
            return (0, s.jsx)("svg", {
                ...(0, t.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM5.7 9.3a1 1 0 0 0-1.4 1.4l.79.8-.8.8a1 1 0 1 0 1.42 1.4l.79-.79.8.8a1 1 0 0 0 1.4-1.42l-.79-.79.8-.8a1 1 0 0 0-1.42-1.4l-.79.79-.8-.8Zm9.6 0a1 1 0 0 1 1.4 0l.8.79.8-.8a1 1 0 1 1 1.4 1.42l-.79.79.8.8a1 1 0 0 1-1.42 1.4l-.79-.79-.8.8a1 1 0 0 1-1.4-1.42l.79-.79-.8-.8a1 1 0 0 1 0-1.4ZM12 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
