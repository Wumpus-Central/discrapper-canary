"use strict";
n.d(t, { $n: () => c, Ay: () => d, wv: () => u });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(264952);
function u(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: a()(t, l.me) });
}
let c = i.forwardRef(function (e, t) {
        let {
            onClick: n,
            onContextMenu: i,
            className: s,
            selected: u = !1,
            children: c,
            disabled: d = !1,
            dangerous: _,
            ...f
        } = e;
        return (0, r.jsx)(o.DUT, {
            innerRef: t,
            onClick: d ? void 0 : n,
            onContextMenu: d ? void 0 : i,
            className: a()(s, { [l.x6]: !0, [l.wH]: u, [l.r9]: d, [l.lv]: _ }),
            ...f,
            children: c,
        });
    }),
    d = function (e) {
        let { className: t, children: n, ...i } = e;
        return (0, r.jsx)("div", { className: a()(t, l.iE), ...i, children: n });
    };
