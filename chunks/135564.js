a.d(t, { F: () => h });
var n = a(627968),
    r = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(964892),
    o = a(6e5),
    c = a(795127),
    d = a(638671);
let u = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
        a = t / 2 - 12;
    return Math.max(-a, Math.min(a, e));
};
function h(e) {
    let { className: t } = e,
        a = r.useContext(s.e);
    if (null == a) throw Error("PopoverCaret must be used within a BasePopover");
    let { position: l, caretConfig: h } = a,
        m = (0, c.g)(l),
        { align: p, customOffset: g } = h,
        _ =
            "custom" === p && void 0 !== g
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(m) ? `${u(g)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(m) ? `${u(g)}px` : "0px",
                  }
                : void 0,
        f = i()(d.caret, d[`caret--${m}`], d[`caret--${p}`], t);
    return (0, n.jsx)("div", { className: f, style: _, children: (0, n.jsx)(o.S, {}) });
}
