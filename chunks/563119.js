"use strict";
n.d(t, { $: () => o });
var i = n(627968);
n(64700);
var r = n(661531),
    s = n(996682),
    a = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: l = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, a.J)(t),
        _ = d?.width ?? n,
        f = d?.height ?? o;
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M21.3 15.3a1 1 0 1 1 1.4 1.4L20.42 19l2.3 2.3a1 1 0 1 1-1.42 1.4L19 20.42l-2.3 2.3a1 1 0 1 1-1.4-1.42L17.58 19l-2.3-2.3a1 1 0 1 1 1.42-1.4L19 17.58l2.3-2.3ZM13.88 19.88A2.99 2.99 0 0 0 13 22H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h9.76l-.88.88Z",
                className: u,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M12 2a4 4 0 0 1 3.1 6.52c-.76.95-1.6 1.99-1.6 3.21V13H19c.55 0 1.06.15 1.5.4a3 3 0 0 0-.51.37l-.11.1-.88.89-.88-.88A3 3 0 0 0 13.76 18H3a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h5.5v-1.27c0-1.22-.84-2.26-1.6-3.21A4 4 0 0 1 12 2Z",
                className: u,
            }),
        ],
    });
};
