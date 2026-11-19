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
        EmojiUpsideDownFaceIcon: function (e) {
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
                    fillRule: "evenodd",
                    d: "M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm5.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.8-1.17a1 1 0 0 1-1.39-.27 3.5 3.5 0 0 0-5.82 0 1 1 0 1 1-1.66-1.12 5.5 5.5 0 0 1 9.14 0 1 1 0 0 1-.27 1.4Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
