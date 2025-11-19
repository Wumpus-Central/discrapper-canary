n.d(t, { _: () => _ });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(903365),
    s = n(725027),
    l = n(192998);
let c = 8,
    u = 200,
    d = 272,
    f = (e, t) => {
        let n = (t ? d : u) / 2 - c;
        return Math.max(-n, Math.min(n, e));
    };
function _(e) {
    let { caretConfig: t } = e,
        { position: n, align: i, customOffset: c } = t,
        { isRichTooltip: u } = (0, s.nr)();
    if (null == n) return null;
    let d =
            "custom" === i && null != c
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(n) ? "".concat(f(c, u), "px") : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(n) ? "".concat(f(c, u), "px") : "0px",
                  }
                : void 0,
        _ = a()(l.caret, l["caret--".concat(n)], l["caret--".concat(i)]);
    return (0, r.jsx)("div", {
        className: _,
        style: d,
        children: (0, r.jsx)(o.V, {}),
    });
}
