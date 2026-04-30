"use strict";
n.d(t, { m: () => o });
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
    return (0, i.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M2.1 8.83C2.03 9.21 2 9.6 2 10v2c0 1.85.72 3.54 1.9 4.79l1.82 3.66a1 1 0 0 0 .9.55h1.76a1 1 0 0 0 .9-.55L10 19h4l.72 1.45a1 1 0 0 0 .9.55h1.76a1 1 0 0 0 .9-.55L20.5 16h.5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.29c-.27-.9-.7-1.72-1.29-2.42l1.09-1.09A.87.87 0 0 0 19.89 3h-1.48c-.63 0-1.25.18-1.79.5-.8-.32-1.7-.5-2.62-.5H9a7 7 0 0 0-6.3 3.93 2 2 0 0 1-.87-.52L1.7 6.3A1 1 0 0 0 .29 7.71l.12.12a4 4 0 0 0 1.69 1ZM9 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
            clipRule: "evenodd",
            className: u,
        }),
    });
};
