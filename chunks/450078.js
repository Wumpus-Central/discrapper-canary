i.r(e);
var c = i(477900);
i(582128);
var l = i(646514),
    t = i(996682),
    h = i(27989);
i.d(
    e,
    {},
    {
        MusicAlbumIcon: function (s) {
            let {
                    size: e = "md",
                    width: i,
                    height: a,
                    color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                r = (0, h.J)(e),
                p = r?.width ?? i,
                u = r?.height ?? a;
            return (0, c.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, c.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14Zm-8.9 3.05a2 2 0 0 0-2.65 1.89v5.85c-.15-.03-.3-.04-.45-.04-1.36 0-2.46.94-2.46 2.1 0 1.17 1.1 2.11 2.46 2.11 1.29 0 2.35-.86 2.44-1.95V8.28l6.7 2.32v4.28c-.14-.02-.3-.03-.45-.03-1.35 0-2.45.94-2.45 2.1 0 1.17 1.1 2.1 2.45 2.11 1.35 0 2.45-.94 2.45-2.1V9.07c0-.75-.47-1.4-1.17-1.65L10.1 5.05Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
