"use strict";
n.d(t, { $: () => o });
var r = n(627968);
n(64700);
var i = n(827734),
    a = n(996682),
    s = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, s.J)(t),
        _ = d?.width ?? n,
        f = d?.height ?? o;
    return (0, r.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M21.5 10c.28 0 .5.22.5.5V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8.5c0-.28.22-.5.5-.5h19Zm-10.69 2.65a.5.5 0 0 0-.81.39v5.92c0 .42.49.65.81.4l3.7-2.97a.5.5 0 0 0 0-.78l-3.7-2.96Z",
                clipRule: "evenodd",
                className: u,
            }),
            (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M6.72 3.05a.5.5 0 0 1 .54.71L5.14 8.2a.5.5 0 0 1-.37.27l-2.2.4A.5.5 0 0 1 2 8.45l-.26-1.48A3 3 0 0 1 4.17 3.5l2.55-.45ZM14.6 1.67a.5.5 0 0 1 .54.7l-2.12 4.44a.5.5 0 0 1-.37.28l-4.25.74a.5.5 0 0 1-.53-.7l2.11-4.44a.5.5 0 0 1 .37-.28l4.25-.74ZM18.23 1.04a3 3 0 0 1 3.2 2.47l.27 1.47a.5.5 0 0 1-.41.58l-5 .89a.5.5 0 0 1-.55-.71l2.12-4.44c.07-.14.2-.25.37-.26Z",
                className: u,
            }),
        ],
    });
};
