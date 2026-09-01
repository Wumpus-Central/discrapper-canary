t.d(e, { P: () => n });
var a = t(477900);
t(582128);
var s = t(661531),
    i = t(996682),
    r = t(27989);
function n(l) {
    let {
            size: e = "md",
            width: t,
            height: n,
            color: c = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...o
        } = l,
        d = (0, r.J)(e),
        v = d?.width ?? t,
        f = d?.height ?? n;
    return (0, a.jsxs)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: v,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, a.jsx)("path", {
                d: "M11 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-.06a1 1 0 0 1-.74-.32L5.92 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.92l4.28-4.68a1 1 0 0 1 .74-.32H11ZM21.26 11.14c.35-.07.7.15.73.5L22 12a9 9 0 0 1-6.9 8.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05A7 7 0 0 0 20 12a.7.7 0 0 1 .55-.7l.71-.16ZM15.98 11.66a.5.5 0 0 1 .59-.56l.8.15c.34.06.6.31.63.65v.1a5 5 0 0 1-2.84 4.51c-.57.27-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 1.35-2.86Z",
                fill: "string" == typeof c ? c : c.css,
                className: h,
            }),
            (0, a.jsx)("path", {
                fillRule: "evenodd",
                d: "M19 1.4c3.04 0 4.51 2.73 4.93 3.67.1.2.1.43 0 .64-.42.95-1.89 3.68-4.93 3.68s-4.51-2.73-4.93-3.68a.78.78 0 0 1 0-.64c.42-.94 1.89-3.68 4.93-3.68Zm.01 2.35c0-.34-.28-.61-.6-.52a2.25 2.25 0 1 0 2.88 2.16v-.04c-.01-.34-.36-.52-.68-.42l-.82.25A.6.6 0 0 1 19 4.6v-.85Z",
                clipRule: "evenodd",
                fill: "string" == typeof c ? c : c.css,
                className: h,
            }),
        ],
    });
}
