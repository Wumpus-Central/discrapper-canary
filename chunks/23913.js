e.r(l);
var a = e(477900);
e(582128);
var c = e(646514),
    i = e(996682),
    t = e(27989);
e.d(
    l,
    {},
    {
        EmojiFaceWithTongueIcon: function (s) {
            let {
                    size: l = "md",
                    width: e,
                    height: h,
                    color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, t.J)(l),
                r = p?.width ?? e,
                u = p?.height ?? h;
            return (0, a.jsxs)("svg", {
                ...(0, i.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, a.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "m9.97 18.67-.04-.01a2.27 2.27 0 0 0 4.14 0l-.04.01c.09-.2.15-.43.17-.66l.22-2.16a.77.77 0 0 0-.77-.85h-.2a.96.96 0 0 0-.92.66l-.2.6a.35.35 0 0 1-.66 0l-.2-.6a.96.96 0 0 0-.91-.66h-.21c-.46 0-.81.4-.77.85L9.8 18c.02.23.08.46.17.66Z",
                        className: n,
                    }),
                    (0, a.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.43-10c.97 0 1.8.78 1.52 1.7-.3.98-.86 1.86-1.6 2.57l-.12 1a4.27 4.27 0 0 1-8.46 0l-.13-1a5.96 5.96 0 0 1-1.59-2.58C5.78 13.8 6.6 13 7.57 13h8.86Zm1.07-1c.83 0 1.5-.9 1.5-2s-.67-2-1.5-2-1.5.9-1.5 2 .67 2 1.5 2ZM8 10c0 1.1-.67 2-1.5 2S5 11.1 5 10s.67-2 1.5-2S8 8.9 8 10Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
