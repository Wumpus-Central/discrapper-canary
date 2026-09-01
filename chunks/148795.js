n.d(e, { d: () => o });
var i = n(477900);
n(582128);
var l = n(661531),
    r = n(996682),
    a = n(27989);
function o(t) {
    let {
            size: e = "md",
            width: n,
            height: o,
            color: _ = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = t,
        E = (0, a.J)(e),
        d = E?.width ?? n,
        s = E?.height ?? o;
    return (0, i.jsx)("svg", {
        ...(0, r.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: s,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof _ ? _ : _.css,
            d: "M9 19a3 3 0 0 0 3 3 1 1 0 0 0 1-1v-2a3 3 0 0 1 .19-1.05l4.26-2.88a7.9 7.9 0 0 0 3.26-8.4c-.43-1.77-1.44-3.42-3.14-4.07a8.3 8.3 0 0 0-2.95-.6H6.59a2.09 2.09 0 0 0-1.93 2.88l.4.97a.2.2 0 0 1-.08.24l-.54.33a1.99 1.99 0 0 0-.8 2.44l.43 1.02c.03.07.02.16-.03.23l-.6.9A1.92 1.92 0 0 0 5.04 14h5.39A8 8 0 0 0 9 18.56V19Z",
            className: u,
        }),
    });
}
