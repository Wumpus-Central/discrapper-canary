n.d(t, { X: () => o });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(343908);
function o(e) {
    let { tooltipText: t, textColor: n } = e;
    return (0, r.jsxs)("span", {
        className: a.tooltipTextContainer,
        children: [
            (0, r.jsx)(i.SrA, {
                size: "md",
                color: "currentColor",
                className: a.nitroWheel,
            }),
            (0, r.jsx)(i.Text, {
                className: a.tooltipText,
                variant: "text-sm/medium",
                color: null != n ? n : "text-default",
                children: t,
            }),
        ],
    });
}
