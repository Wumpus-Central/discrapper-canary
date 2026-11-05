s.r(i);
var t = s(477900);
s(582128);
var a = s(646514),
    c = s(996682),
    d = s(27989);
s.d(
    i,
    {},
    {
        EmojiDisappointedFaceIcon: function (e) {
            let {
                    size: i = "md",
                    width: s,
                    height: h,
                    color: l = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = e,
                p = (0, d.J)(i),
                r = p?.width ?? s,
                w = p?.height ?? h;
            return (0, t.jsx)("svg", {
                ...(0, c.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm2.5-5c.55 0 1.01-.46.86-.99a3.5 3.5 0 0 0-6.72 0c-.15.53.3.99.86.99h5Zm-4.93-7.82a1 1 0 0 0-1.4.25c-.23.34-.63.57-1.1.57-.23 0-.44-.05-.62-.14a1 1 0 0 0-.9 1.78 3.38 3.38 0 0 0 4.27-1.07 1 1 0 0 0-.25-1.4Zm6.25.25a1 1 0 1 0-1.64 1.14 3.34 3.34 0 0 0 4.27 1.07 1 1 0 1 0-.9-1.78 1.38 1.38 0 0 1-1.73-.43Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
