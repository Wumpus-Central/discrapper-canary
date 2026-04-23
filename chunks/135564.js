"use strict";
n.d(t, { F: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(964892),
    l = n(6e5),
    u = n(795127),
    c = n(638671);
let d = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
        n = t / 2 - 12;
    return Math.max(-n, Math.min(n, e));
};
function _(e) {
    let { className: t } = e,
        n = i.useContext(o.e);
    if (null == n) throw Error("PopoverCaret must be used within a BasePopover");
    let { position: s, caretConfig: _ } = n,
        f = (0, u.g)(s),
        { align: p, customOffset: h } = _,
        E =
            "custom" === p && void 0 !== h
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(f) ? `${d(h)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(f) ? `${d(h)}px` : "0px",
                  }
                : void 0,
        m = a()(c.caret, c[`caret--${f}`], c[`caret--${p}`], t);
    return (0, r.jsx)("div", { className: m, style: E, children: (0, r.jsx)(l.S, {}) });
}
