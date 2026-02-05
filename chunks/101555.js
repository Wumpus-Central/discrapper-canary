"use strict";
n.d(t, { $n: () => c, Ay: () => d, wv: () => u });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(331215);
function u(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: s()(t, l.me) });
}
let c = i.forwardRef(function (e, t) {
        let {
            onClick: n,
            onContextMenu: i,
            className: a,
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
            className: s()(a, { [l.x6]: !0, [l.wH]: u, [l.r9]: d, [l.lv]: _ }),
            ...f,
            children: c,
        });
    }),
    d = function (e) {
        let { className: t, children: n, ...i } = e;
        return (0, r.jsx)("div", { className: s()(t, l.iE), ...i, children: n });
    };
