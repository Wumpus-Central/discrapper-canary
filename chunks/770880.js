t.d(l, { I: () => n });
var s = t(627968);
t(64700);
var a = t(661531),
    i = t(996682),
    r = t(27989);
let n = (e) => {
    let {
            size: l = "md",
            width: t,
            height: n,
            color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...d
        } = e,
        v = (0, r.J)(l),
        o = v?.width ?? t,
        f = v?.height ?? n;
    return (0, s.jsxs)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, s.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                fillRule: "evenodd",
                d: "M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z",
                clipRule: "evenodd",
                className: h,
            }),
            (0, s.jsx)("path", {
                fill: "string" == typeof c ? c : c.css,
                d: "M12.5 8c.28 0 .5.22.5.5V9c0 .1 0 .2.02.31.03.34-.21.69-.56.69H9.85l-.67 4h4.97l.28-1.68c.06-.34.44-.52.77-.43a3 3 0 0 0 .8.11c.27 0 .47.24.43.5l-.25 1.5H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86l-.86 5.16A1 1 0 0 1 6 20.84L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 1 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8h2.31Z",
                className: h,
            }),
        ],
    });
};
