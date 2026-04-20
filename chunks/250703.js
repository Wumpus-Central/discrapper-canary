"use strict";
n.d(t, { A: () => S }), n(667532), n(134528), n(947204);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(607399),
    o = n(732955),
    u = n(397927),
    c = n(97469),
    d = n(963935),
    h = n(894858),
    p = n(272053),
    _ = n(641324),
    m = n(82186),
    f = n(985018),
    g = n(441562);
function y(e) {
    let { icon: t, label: n, onClick: i } = e;
    return (0, r.jsx)(o.K0, { onClick: i, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function v(e) {
    let { setting: t, onClose: n } = e,
        i = (0, c.NC)(),
        a =
            null != t
                ? (function (e) {
                      let t = [e];
                      for (let n = e.parent; null != n && n.type !== d.Z6.SIDEBAR_ITEM; n = n.parent)
                          n.type === d.Z6.PANEL && t.unshift(n);
                      return t;
                  })(t)
                : [],
        _ = a.at(-2);
    return (0, r.jsx)(u.NPJ, {
        theme: i,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: s()(g.$Q, e),
                children: [
                    (0, r.jsxs)(u.BJc, {
                        direction: "horizontal",
                        align: "center",
                        className: g.y9,
                        children: [
                            l.Fr &&
                                a.length <= 1 &&
                                (0, r.jsx)(y, {
                                    icon: u.fEi,
                                    onClick: () => h.A.setState({ showNavigationMobile: !0 }),
                                    label: f.intl.string(f.t["13/7kX"]),
                                }),
                            a.length > 1 &&
                                null != _ &&
                                (0, r.jsx)(y, {
                                    icon: o.rJJ,
                                    onClick: () => p.A.navigate(_.key),
                                    label: f.intl.string(f.t["13/7kX"]),
                                }),
                            null != t && (0, r.jsx)(m.E, { path: a }),
                        ],
                    }),
                    (0, r.jsx)(y, { icon: u.d$L, onClick: n, label: f.intl.string(f.t.cpT0Cq) }),
                ],
            }),
    });
}
let S = i.memo(function (e) {
    let { onClose: t, setting: n } = e,
        i = h.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: s()(g.Qs, { [g.Hw]: l.Fr, [g.n7]: i }),
        children: [
            (0, r.jsx)(v, { setting: n, onClose: t }),
            (0, r.jsx)("div", { className: g.yp, children: null != n && (0, r.jsx)(_.A, { node: n }) }),
        ],
    });
});
