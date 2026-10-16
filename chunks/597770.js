_.d(t, { GiftIcon: () => T });
var A = _(477900);
_(582128);
var n = _(661531),
    l = _(996682),
    E = _(27989);
function T(e) {
    let {
            size: t = "md",
            width: _,
            height: T,
            color: N = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...I
        } = e,
        R = (0, E.J)(t),
        i = R?.width ?? _,
        O = R?.height ?? T;
    return (0, A.jsxs)("svg", {
        ...(0, l.A)(I),
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: O,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, A.jsx)("path", {
                fill: "string" == typeof N ? N : N.css,
                fillRule: "evenodd",
                d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                clipRule: "evenodd",
                className: r,
            }),
            (0, A.jsx)("path", {
                fill: "string" == typeof N ? N : N.css,
                d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                className: r,
            }),
        ],
    });
}
