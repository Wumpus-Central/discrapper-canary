"use strict";
n.d(t, { z: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(56370),
    o = n(112317),
    l = n(736736);
let u = (e, t, n) => {
    let r = (t ? (n ? 372 : 272) : 200) / 2 - 8;
    return Math.max(-r, Math.min(r, e));
};
function d(e) {
    let { caretConfig: t } = e,
        { position: n, align: i, customOffset: d } = t,
        { isRichTooltip: c, richTooltipPadding: _ } = (0, o.w6)(),
        f = "lg" === _;
    if (null == n) return null;
    let E =
            "custom" === i && null != d
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(n) ? `${u(d, c, f)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(n) ? `${u(d, c, f)}px` : "0px",
                  }
                : void 0,
        h = s()(l.caret, l[`caret--${n}`], l[`caret--${i}`]);
    return (0, r.jsx)("div", { className: h, style: E, children: (0, r.jsx)(a.a, {}) });
}
