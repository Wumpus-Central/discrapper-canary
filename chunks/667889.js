"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(289873),
    a = n(268218),
    o = n(750506),
    l = n(60809),
    u = n(985018),
    c = n(131552);
let d = { width: 500, height: l.$V },
    _ = (0, a.Fe)({
        createPromise: () =>
            Promise.all([n.e("93103"), n.e("97278"), n.e("35313"), n.e("43994"), n.e("35621")]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, r.jsx)("div", { className: c.R4, style: d, children: (0, r.jsx)(s.y, {}) }),
    }),
    f = { height: l.$V },
    p = i.memo(function (e) {
        let { positionTargetRef: t, align: n, ...i } = e;
        return (0, r.jsx)("span", {
            style: l.sK,
            children: (0, r.jsx)(o.nE, {
                className: c.T8,
                targetRef: t,
                position: "top",
                align: n ?? "right",
                spacing: 24,
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, r.jsx)("section", {
                        className: c.V6,
                        role: "dialog",
                        style: f,
                        "aria-label": u.intl.string(u.t["3CNGLK"]),
                        children: t && (0, r.jsx)(_, { ...i }),
                    });
                },
            }),
        });
    });
