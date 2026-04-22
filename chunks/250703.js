"use strict";
n.d(t, { A: () => x }), n(667532), n(134528), n(947204);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(607399),
    o = n(408278),
    c = n(477155),
    u = n(43990),
    d = n(331322),
    _ = n(668953),
    h = n(972213),
    p = n(97469),
    f = n(963935),
    m = n(894858),
    g = n(272053),
    E = n(641324),
    v = n(82186),
    y = n(985018),
    A = n(441562);
function S(e) {
    let { icon: t, label: n, onClick: i } = e;
    return (0, r.jsx)(o.K, { onClick: i, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function b(e) {
    let { setting: t, onClose: n } = e,
        i = (0, p.NC)(),
        a =
            null != t
                ? (function (e) {
                      let t = [e];
                      for (let n = e.parent; null != n && n.type !== f.Z6.SIDEBAR_ITEM; n = n.parent)
                          n.type === f.Z6.PANEL && t.unshift(n);
                      return t;
                  })(t)
                : [],
        o = a.at(-2),
        E = s.Fr && a.length <= 1,
        b = a.length > 1 && null != o;
    return (0, r.jsx)(u.N, {
        theme: i,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: l()(A.$Q, e, { [A.HW]: E || b }),
                children: [
                    (0, r.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        className: A.y9,
                        children: [
                            E &&
                                (0, r.jsx)(S, {
                                    icon: _.f,
                                    onClick: () => m.A.setState({ showNavigationMobile: !0 }),
                                    label: y.intl.string(y.t["13/7kX"]),
                                }),
                            b &&
                                (0, r.jsx)(S, {
                                    icon: c.r,
                                    onClick: () => g.A.navigate(o.key),
                                    label: y.intl.string(y.t["13/7kX"]),
                                }),
                            null != t && (0, r.jsx)(v.E, { path: a }),
                        ],
                    }),
                    (0, r.jsx)(S, { icon: h.d, onClick: n, label: y.intl.string(y.t.cpT0Cq) }),
                ],
            }),
    });
}
let x = i.memo(function (e) {
    let { onClose: t, setting: n } = e,
        i = m.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: l()(A.Qs, { [A.Hw]: s.Fr, [A.n7]: i }),
        children: [
            (0, r.jsx)(b, { setting: n, onClose: t }),
            (0, r.jsx)("div", { className: A.yp, children: null != n && (0, r.jsx)(E.A, { node: n }) }),
        ],
    });
});
