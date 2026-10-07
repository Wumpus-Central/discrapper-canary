e.d(i, { $n: () => d, Ay: () => o, wv: () => c });
var n = e(477900);
e(582128);
var l = e(503698),
    s = e.n(l),
    a = e(939249),
    r = e(738745);
function c(t) {
    let { className: i } = t;
    return (0, n.jsx)("div", { className: s()(i, r.me) });
}
function d(t) {
    let {
        onClick: i,
        onContextMenu: e,
        className: l,
        selected: c = !1,
        children: d,
        disabled: o = !1,
        dangerous: u,
        ref: h,
        ...v
    } = t;
    return (0, n.jsx)(a.D, {
        innerRef: h,
        onClick: o ? void 0 : i,
        onContextMenu: o ? void 0 : e,
        "aria-disabled": !!o || void 0,
        className: s()(l, { [r.x6]: !0, [r.wH]: c, [r.r9]: o, [r.lv]: u }),
        ...v,
        children: d,
    });
}
let o = function (t) {
    let { className: i, children: e, ...l } = t;
    return (0, n.jsx)("div", { className: s()(i, r.iE), ...l, children: e });
};
