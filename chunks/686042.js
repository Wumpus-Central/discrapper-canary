n.d(t, { PuzzlePieceIcon: () => l });
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
    return (0, i.jsx)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M16 4a3 3 0 1 1-5.98-.31c.03-.35-.21-.69-.56-.69H7a3 3 0 0 0-3 3v2.5c0 .28-.23.5-.5.54a3 3 0 0 0 0 5.92c.27.04.5.26.5.54V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.46c-.35 0-.6.34-.56.69L16 4Z",
            className: d,
        }),
    });
}
