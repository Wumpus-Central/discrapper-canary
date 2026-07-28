"use strict";
n.d(t, { $n: () => c, Ay: () => u, wv: () => d });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(939249),
    o = n(997248);
function d(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", { className: s()(t, o.me) });
}
let c = r.forwardRef(function (e, t) {
        let {
            onClick: n,
            onContextMenu: r,
            className: a,
            selected: d = !1,
            children: c,
            disabled: u = !1,
            dangerous: _,
            ...E
        } = e;
        return (0, i.jsx)(l.D, {
            innerRef: t,
            onClick: u ? void 0 : n,
            onContextMenu: u ? void 0 : r,
            className: s()(a, { [o.x6]: !0, [o.wH]: d, [o.r9]: u, [o.lv]: _ }),
            ...E,
            children: c,
        });
    }),
    u = function (e) {
        let { className: t, children: n, ...r } = e;
        return (0, i.jsx)("div", { className: s()(t, o.iE), ...r, children: n });
    };
