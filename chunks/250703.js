"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(607399),
    o = n(732955),
    c = n(397927),
    u = n(97469),
    d = n(894858),
    _ = n(641324),
    g = n(82186),
    m = n(985018),
    b = n(379763);
function f(e) {
    let { icon: t, label: n, onClick: i } = e;
    return (0, r.jsx)(o.K0, { onClick: i, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function p(e) {
    let { setting: t, onClose: n } = e,
        i = (0, u.NC)();
    return (0, r.jsx)(c.NPJ, {
        theme: i,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: s()(b.$Q, e),
                children: [
                    (0, r.jsxs)(c.BJc, {
                        direction: "horizontal",
                        align: "center",
                        className: b.y9,
                        children: [
                            l.Fr &&
                                (0, r.jsx)(f, {
                                    icon: c.fEi,
                                    onClick: () => d.A.setState({ showNavigationMobile: !0 }),
                                    label: m.intl.string(m.t["13/7kX"]),
                                }),
                            null != t && (0, r.jsx)(g.E, { node: t }),
                        ],
                    }),
                    (0, r.jsx)(f, { icon: c.d$L, onClick: n, label: m.intl.string(m.t.cpT0Cq) }),
                ],
            }),
    });
}
let h = i.memo(function (e) {
    let { onClose: t, setting: n } = e,
        i = d.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: s()(b.Qs, { [b.Hw]: l.Fr, [b.n7]: i }),
        children: [
            (0, r.jsx)(p, { setting: n, onClose: t }),
            (0, r.jsx)("div", { className: b.yp, children: null != n && (0, r.jsx)(_.A, { node: n }) }),
        ],
    });
});
