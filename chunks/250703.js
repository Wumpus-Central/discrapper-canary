"use strict";
n.d(t, { A: () => S }), n(667532), n(134528), n(947204);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(607399),
    o = n(408278),
    c = n(477155),
    u = n(43990),
    d = n(331322),
    _ = n(668953),
    f = n(972213),
    h = n(97469),
    p = n(963935),
    m = n(894858),
    g = n(272053),
    b = n(641324),
    v = n(82186),
    E = n(985018),
    y = n(441562);
function A(e) {
    let { icon: t, label: n, onClick: i } = e;
    return (0, r.jsx)(o.K, { onClick: i, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function x(e) {
    let { setting: t, onClose: n } = e,
        i = (0, h.NC)(),
        a =
            null != t
                ? (function (e) {
                      let t = [e];
                      for (let n = e.parent; null != n && n.type !== p.Z6.SIDEBAR_ITEM; n = n.parent)
                          n.type === p.Z6.PANEL && t.unshift(n);
                      return t;
                  })(t)
                : [],
        o = a.at(-2),
        b = l.Fr && a.length <= 1,
        x = a.length > 1 && null != o;
    return (0, r.jsx)(u.N, {
        theme: i,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: s()(y.$Q, e, { [y.HW]: b || x }),
                children: [
                    (0, r.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        className: y.y9,
                        children: [
                            b &&
                                (0, r.jsx)(A, {
                                    icon: _.f,
                                    onClick: () => m.A.setState({ showNavigationMobile: !0 }),
                                    label: E.intl.string(E.t["13/7kX"]),
                                }),
                            x &&
                                (0, r.jsx)(A, {
                                    icon: c.r,
                                    onClick: () => g.A.navigate(o.key),
                                    label: E.intl.string(E.t["13/7kX"]),
                                }),
                            null != t && (0, r.jsx)(v.E, { path: a }),
                        ],
                    }),
                    (0, r.jsx)(A, { icon: f.d, onClick: n, label: E.intl.string(E.t.cpT0Cq) }),
                ],
            }),
    });
}
let S = i.memo(function (e) {
    let { onClose: t, setting: n } = e,
        i = m.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: s()(y.Qs, { [y.Hw]: l.Fr, [y.n7]: i }),
        children: [
            (0, r.jsx)(x, { setting: n, onClose: t }),
            (0, r.jsx)("div", { className: y.yp, children: null != n && (0, r.jsx)(b.A, { node: n }) }),
        ],
    });
});
