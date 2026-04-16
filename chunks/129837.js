"use strict";
n.d(t, { z: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(56370),
    o = n(112317),
    l = n(736736);
let u = 8,
    c = 200,
    d = 272,
    _ = 372,
    f = (e, t, n) => {
        let r = (t ? (n ? _ : d) : c) / 2 - u;
        return Math.max(-r, Math.min(r, e));
    };
function p(e) {
    let { caretConfig: t } = e,
        { position: n, align: i, customOffset: u } = t,
        { isRichTooltip: c, richTooltipPadding: d } = (0, o.w6)(),
        _ = "lg" === d;
    if (null == n) return null;
    let p =
            "custom" === i && null != u
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(n) ? `${f(u, c, _)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(n) ? `${f(u, c, _)}px` : "0px",
                  }
                : void 0,
        h = s()(l.caret, l[`caret--${n}`], l[`caret--${i}`]);
    return (0, r.jsx)("div", { className: h, style: p, children: (0, r.jsx)(a.a, {}) });
}
