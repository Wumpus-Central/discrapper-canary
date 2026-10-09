n.d(i, { $n: () => d, Ay: () => o, wv: () => l });
var s = n(477900);
n(582128);
var t = n(503698),
    a = n.n(t),
    c = n(939249),
    r = n(738745);
function l(e) {
    let { className: i } = e;
    return (0, s.jsx)("div", { className: a()(i, r.me) });
}
function d(e) {
    let {
        onClick: i,
        onContextMenu: n,
        className: t,
        selected: l = !1,
        children: d,
        disabled: o = !1,
        dangerous: h,
        ref: v,
        ...u
    } = e;
    return (0, s.jsx)(c.D, {
        innerRef: v,
        onClick: o ? void 0 : i,
        onContextMenu: o ? void 0 : n,
        "aria-disabled": !!o || void 0,
        className: a()(t, { [r.x6]: !0, [r.wH]: l, [r.r9]: o, [r.lv]: h }),
        ...u,
        children: d,
    });
}
let o = function (e) {
    let { className: i, children: n, ...t } = e;
    return (0, s.jsx)("div", { className: a()(i, r.iE), ...t, children: n });
};
