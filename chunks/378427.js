n.d(t, { A: () => o });
var i,
    l = n(627968);
n(64700);
var s = n(708988),
    r = n(789645),
    a = n(975642);
function o(e) {
    let { type: t } = e;
    return (0, l.jsx)("div", {
        className: a.fF,
        children: (0, l.jsx)("div", {
            className: a.Cf,
            children: (function (e) {
                switch (e) {
                    case "arrow_down":
                        return (0, l.jsx)(s.M, { size: "md", color: "currentColor", className: a.Gr });
                    case "cross":
                        return (0, l.jsx)(r.P, { size: "md", color: "currentColor", className: a.Gr });
                    default:
                        return null;
                }
            })(t),
        }),
    });
}
o.Type = (((i = {}).ARROW_DOWN = "arrow_down"), (i.CROSS = "cross"), i);
