"use strict";
r.d(t, { A: () => l });
var n = r(64700),
    o = r(205662),
    a = r(981735),
    i = r(38579);
let l = function (e) {
    var t = e.onClick,
        r = e.onSwatchHover,
        l = e.group,
        s = e.active,
        u = (0, o.default)({
            default: { group: { paddingBottom: "10px", width: "40px", float: "left", marginRight: "10px" } },
        });
    return n.createElement(
        "div",
        { style: u.group },
        (0, a.A)(l, function (e, o) {
            return n.createElement(i.A, {
                key: e,
                color: e,
                active: e.toLowerCase() === s,
                first: 0 === o,
                last: o === l.length - 1,
                onClick: t,
                onSwatchHover: r,
            });
        }),
    );
};
