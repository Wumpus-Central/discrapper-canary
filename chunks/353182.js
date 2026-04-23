l.d(e, { _: () => s });
var n = l(627968);
l(64700);
var i = l(661531),
    r = l(996682),
    a = l(27989);
let s = (t) => {
    let {
            size: e = "md",
            width: l,
            height: s,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: A = "",
            ...u
        } = t,
        d = (0, a.J)(e),
        o = d?.width ?? l,
        h = d?.height ?? s;
    return (0, n.jsxs)("svg", {
        ...(0, r.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, n.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M15.3 15.3a1 1 0 0 1 1.4 0l2.3 2.29 2.3-2.3a1 1 0 0 1 1.4 1.42L20.43 19l2.29 2.3a1 1 0 0 1-1.42 1.4L19 20.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L17.58 19l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                className: A,
            }),
            (0, n.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "m18.65 14.4-.53-.52a3 3 0 0 0-4.24 4.24l.53.53c.2.2.2.5 0 .7l-.53.53a2.99 2.99 0 0 0-.84 1.63c-.04.25-.23.46-.48.47L12 22H2.2a1 1 0 0 1-.75-1.66l2.07-2.37a.52.52 0 0 0 .04-.61 10 10 0 1 1 18.43-4.8c-.02.25-.23.44-.48.48-.6.1-1.17.38-1.63.84l-.52.52a.5.5 0 0 1-.71 0Z",
                className: A,
            }),
        ],
    });
};
