n.d(t, { Z: () => s });
var r,
    i = n(54381);
n(473749);
var l = n(481060),
    a = n(211870);
function s(e) {
    let { type: t } = e;
    return (0, i.jsx)("div", {
        className: a.dividerContainer,
        children: (0, i.jsx)("div", {
            className: a.dividerIconContainer,
            children: (function (e) {
                switch (e) {
                    case "arrow_down":
                        return (0, i.jsx)(l.cQm, {
                            size: "md",
                            color: "currentColor",
                            className: a.dividierIcon,
                        });
                    case "cross":
                        return (0, i.jsx)(l.Dio, {
                            size: "md",
                            color: "currentColor",
                            className: a.dividierIcon,
                        });
                    default:
                        return null;
                }
            })(t),
        }),
    });
}
s.Type = (((r = {}).ARROW_DOWN = "arrow_down"), (r.CROSS = "cross"), r);
