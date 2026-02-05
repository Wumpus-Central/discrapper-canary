"use strict";
n.d(t, { F: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(964892),
    l = n(6e5),
    u = n(795127),
    c = n(887266);
let d = 12,
    _ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
            n = t / 2 - d;
        return Math.max(-n, Math.min(n, e));
    };
function f(e) {
    let { className: t } = e,
        n = i.useContext(o.e);
    if (null == n) throw Error("PopoverCaret must be used within a BasePopover");
    let { position: a, caretConfig: d } = n,
        f = (0, u.g)(a),
        { align: p, customOffset: h } = d,
        m =
            "custom" === p && void 0 !== h
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(f) ? `${_(h)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(f) ? `${_(h)}px` : "0px",
                  }
                : void 0,
        g = s()(c.caret, c[`caret--${f}`], c[`caret--${p}`], t);
    return (0, r.jsx)("div", { className: g, style: m, children: (0, r.jsx)(l.S, {}) });
}
