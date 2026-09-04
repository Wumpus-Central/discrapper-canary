n.d(t, { E: () => l });
var i = n(477900);
n(582128);
var r = n(661531),
    a = n(996682),
    s = n(27989);
function l(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, s.J)(t),
        _ = u?.width ?? n,
        E = u?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M12 8.63c0-.63.5-1.13 1.1-1.13h4.4c.6 0 1.1.5 1.1 1.13v6.74c0 .63-.5 1.13-1.1 1.13h-4.4c-.6 0-1.1-.5-1.1-1.13V8.63Z",
                className: d,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M19.7 21H4.13A3.34 3.34 0 0 1 1 17.62V6.38A3.34 3.34 0 0 1 4.3 3h15.4C21.52 3 23 4.51 23 6.38v11.25c0 1.8-1.39 3.28-3.13 3.37h-.17Zm0-2.25H4.3c-.6 0-1.1-.5-1.1-1.13V6.38c0-.62.5-1.12 1.1-1.12h15.4c.6 0 1.1.5 1.1 1.13v11.25c0 .62-.5 1.12-1.1 1.12Z",
                clipRule: "evenodd",
                className: d,
            }),
        ],
    });
}
