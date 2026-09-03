n.d(t, { $n: () => c, Ay: () => d, wv: () => u });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(939249),
    o = n(738745);
function u(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: r()(t, o.me) });
}
let c = i.forwardRef(function (e, t) {
        let {
            onClick: n,
            onContextMenu: i,
            className: s,
            selected: u = !1,
            children: c,
            disabled: d = !1,
            dangerous: h,
            ...m
        } = e;
        return (0, l.jsx)(a.D, {
            innerRef: t,
            onClick: d ? void 0 : n,
            onContextMenu: d ? void 0 : i,
            "aria-disabled": !!d || void 0,
            className: r()(s, { [o.x6]: !0, [o.wH]: u, [o.r9]: d, [o.lv]: h }),
            ...m,
            children: c,
        });
    }),
    d = function (e) {
        let { className: t, children: n, ...i } = e;
        return (0, l.jsx)("div", { className: r()(t, o.iE), ...i, children: n });
    };
