"use strict";
r.d(t, { A: () => i });
var n = r(64700),
    o = r(205662),
    a = r(708005);
let i = (0, o.handleHover)(function (e) {
    var t = e.hover,
        r = e.color,
        i = e.onClick,
        l = e.onSwatchHover,
        s = { position: "relative", zIndex: "2", outline: "2px solid #fff", boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)" },
        u = (0, o.default)(
            { default: { swatch: { width: "25px", height: "25px", fontSize: "0" } }, hover: { swatch: s } },
            { hover: t },
        );
    return n.createElement(
        "div",
        { style: u.swatch },
        n.createElement(a.rp, { color: r, onClick: i, onHover: l, focusStyle: s }),
    );
});
