t.d(l, { L: () => c });
var a = t(627968);
t(64700);
var s = t(661531),
    i = t(996682),
    h = t(27989);
let c = (e) => {
    let {
            size: l = "md",
            width: t,
            height: c,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...r
        } = e,
        d = (0, h.J)(l),
        v = d?.width ?? t,
        g = d?.height ?? c;
    return (0, a.jsx)("svg", {
        ...(0, i.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M12 1C5.94 1 1 5.94 1 12s4.94 11 11 11 11-4.94 11-11S18.06 1 12 1Zm4.8 15.79a.68.68 0 0 1-.95.23c-2.57-1.58-5.8-1.93-9.62-1.06a.68.68 0 0 1-.3-1.33c4.17-.95 7.75-.54 10.64 1.22.32.2.42.62.22.94Zm1.33-2.98a.85.85 0 0 1-1.17.28c-2.94-1.81-7.43-2.34-10.91-1.28a.86.86 0 0 1-.5-1.63c3.98-1.2 8.92-.62 12.3 1.45.4.25.53.78.28 1.18Zm1.52-3.47c-.29.49-.92.65-1.4.36C14.72 8.6 8.9 8.41 5.53 9.44a1.02 1.02 0 1 1-.6-1.96C8.8 6.3 15.23 6.53 19.3 8.94c.5.29.65.92.36 1.4Z",
            clipRule: "evenodd",
            className: o,
        }),
    });
};
