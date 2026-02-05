"use strict";
r.d(t, { A: () => l });
var n = r(64700),
    o = r(205662),
    a = r(717519),
    i = r(708005);
let l = function (e) {
    var t = e.color,
        r = e.onClick,
        l = e.onSwatchHover,
        s = e.active,
        u = (0, o.default)(
            {
                default: {
                    color: {
                        background: t,
                        width: "15px",
                        height: "15px",
                        float: "left",
                        marginRight: "5px",
                        marginBottom: "5px",
                        position: "relative",
                        cursor: "pointer",
                    },
                    dot: { absolute: "5px 5px 5px 5px", background: a.OB(t), borderRadius: "50%", opacity: "0" },
                },
                active: { dot: { opacity: "1" } },
                "color-#FFFFFF": { color: { boxShadow: "inset 0 0 0 1px #ddd" }, dot: { background: "#000" } },
                transparent: { dot: { background: "#000" } },
            },
            { active: s, "color-#FFFFFF": "#FFFFFF" === t, transparent: "transparent" === t },
        );
    return n.createElement(
        i.rp,
        {
            style: u.color,
            color: t,
            onClick: void 0 === r ? function () {} : r,
            onHover: l,
            focusStyle: { boxShadow: "0 0 4px " + t },
        },
        n.createElement("div", { style: u.dot }),
    );
};
