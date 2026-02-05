"use strict";
n.d(t, { z: () => f });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(56370),
    o = n(112317),
    l = n(630521);
let u = 8,
    c = 200,
    d = 272,
    _ = (e, t) => {
        let n = (t ? d : c) / 2 - u;
        return Math.max(-n, Math.min(n, e));
    };
function f(e) {
    let { caretConfig: t } = e,
        { position: n, align: i, customOffset: u } = t,
        { isRichTooltip: c } = (0, o.w6)();
    if (null == n) return null;
    let d =
            "custom" === i && null != u
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(n) ? `${_(u, c)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(n) ? `${_(u, c)}px` : "0px",
                  }
                : void 0,
        f = a()(l.caret, l[`caret--${n}`], l[`caret--${i}`]);
    return (0, r.jsx)("div", { className: f, style: d, children: (0, r.jsx)(s.a, {}) });
}
