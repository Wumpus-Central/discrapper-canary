n.d(t, { Z: () => a });
var r,
    i = n(951288);
n(647438);
var l = n(481060),
    s = n(211870);
function a(e) {
    let { type: t } = e;
    return (0, i.jsx)("div", {
        className: s.dividerContainer,
        children: (0, i.jsx)("div", {
            className: s.dividerIconContainer,
            children: (function (e) {
                switch (e) {
                    case "arrow_down":
                        return (0, i.jsx)(l.cQm, {
                            size: "md",
                            color: "currentColor",
                            className: s.dividierIcon,
                        });
                    case "cross":
                        return (0, i.jsx)(l.Dio, {
                            size: "md",
                            color: "currentColor",
                            className: s.dividierIcon,
                        });
                    default:
                        return null;
                }
            })(t),
        }),
    });
}
a.Type = (((r = {}).ARROW_DOWN = "arrow_down"), (r.CROSS = "cross"), r);
