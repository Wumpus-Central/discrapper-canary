a.d(t, { u: () => i });
var l = a(477900);
a(582128);
var s = a(661531),
    n = a(996682),
    r = a(27989);
function i(e) {
    let {
            size: t = "md",
            width: a,
            height: i,
            color: d = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...u
        } = e,
        c = (0, r.J)(t),
        _ = c?.width ?? a,
        p = c?.height ?? i;
    return (0, l.jsx)("svg", {
        ...(0, n.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: p,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14Zm-8.9 3.05a2 2 0 0 0-2.65 1.89v5.85c-.15-.03-.3-.04-.45-.04-1.36 0-2.46.94-2.46 2.1 0 1.17 1.1 2.11 2.46 2.11 1.29 0 2.35-.86 2.44-1.95V8.28l6.7 2.32v4.28c-.14-.02-.3-.03-.45-.03-1.35 0-2.45.94-2.45 2.1 0 1.17 1.1 2.1 2.45 2.11 1.35 0 2.45-.94 2.45-2.1V9.07c0-.75-.47-1.4-1.17-1.65L10.1 5.05Z",
            clipRule: "evenodd",
            className: o,
        }),
    });
}
