"use strict";
n.d(t, { $n: () => u, Ay: () => d, wv: () => c });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(939249),
    o = n(874280);
function c(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", { className: r()(t, o.me) });
}
let u = l.forwardRef(function (e, t) {
        let {
            onClick: n,
            onContextMenu: l,
            className: s,
            selected: c = !1,
            children: u,
            disabled: d = !1,
            dangerous: h,
            ...m
        } = e;
        return (0, i.jsx)(a.D, {
            innerRef: t,
            onClick: d ? void 0 : n,
            onContextMenu: d ? void 0 : l,
            className: r()(s, { [o.x6]: !0, [o.wH]: c, [o.r9]: d, [o.lv]: h }),
            ...m,
            children: u,
        });
    }),
    d = function (e) {
        let { className: t, children: n, ...l } = e;
        return (0, i.jsx)("div", { className: r()(t, o.iE), ...l, children: n });
    };
