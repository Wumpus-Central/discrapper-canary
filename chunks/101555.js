"use strict";
n.d(t, { $n: () => u, Ay: () => d, wv: () => c });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(939249),
    o = n(874280);
function c(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: a()(t, o.me) });
}
let u = i.forwardRef(function (e, t) {
        let {
            onClick: n,
            onContextMenu: i,
            className: s,
            selected: c = !1,
            children: u,
            disabled: d = !1,
            dangerous: h,
            ...m
        } = e;
        return (0, l.jsx)(r.D, {
            innerRef: t,
            onClick: d ? void 0 : n,
            onContextMenu: d ? void 0 : i,
            className: a()(s, { [o.x6]: !0, [o.wH]: c, [o.r9]: d, [o.lv]: h }),
            ...m,
            children: u,
        });
    }),
    d = function (e) {
        let { className: t, children: n, ...i } = e;
        return (0, l.jsx)("div", { className: a()(t, o.iE), ...i, children: n });
    };
